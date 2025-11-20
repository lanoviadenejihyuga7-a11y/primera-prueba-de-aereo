
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

interface AIRouteMapProps {
  countryName: string;
  capitalName: string;
  fallback: React.ReactNode;
}

const AIRouteMap: React.FC<AIRouteMapProps> = ({ countryName, capitalName, fallback }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const generateImage = async () => {
      setLoading(true);
      setError(false);
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [
              {
                text: `Generate a geographically accurate map illustration showing a direct flight route starting from Lima, Peru.
                
                Origin: Lima, Peru (South America).
                Destination: ${capitalName}, ${countryName}.
                
                Visual Requirements:
                1. Show a map view that includes South America and the region of ${countryName}.
                2. Draw a distinct, glowing route line connecting exactly Lima, Peru to ${capitalName}. Use a vibrant Celtic Blue (#3971b8) for the line.
                3. Mark Lima and ${capitalName} with recognizable pin markers.
                4. Style: Clean, modern vector art. Background should be Ivory (#fbfcee) or very light cream. Landmasses should be a soft Tea Green (#c8d69b) or similar pastel tone. Water should be a soft blue.
                5. High contrast, cheerful and professional. No dark mode.`
              }
            ]
          },
          config: {
            imageConfig: {
              aspectRatio: '16:9'
            }
          }
        });

        if (!isMounted) return;

        let foundImage = false;
        if (response.candidates?.[0]?.content?.parts) {
          for (const part of response.candidates[0].content.parts) {
            if (part.inlineData) {
              setImageUrl(`data:image/png;base64,${part.inlineData.data}`);
              foundImage = true;
              break;
            }
          }
        }
        if (!foundImage) setError(true);
      } catch (err) {
        console.error("Error generating AI map:", err);
        if (isMounted) setError(true);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    generateImage();

    return () => {
      isMounted = false;
    };
  }, [countryName, capitalName]);

  if (loading) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-ivory relative overflow-hidden">
        {/* Fallback visible with overlay during load for better UX */}
        <div className="absolute inset-0 opacity-30 blur-sm pointer-events-none grayscale">
             {fallback}
        </div>
        <div className="z-10 flex flex-col items-center bg-white/90 p-6 rounded-xl backdrop-blur-sm border-2 border-celtic-blue shadow-lg">
            <div className="w-10 h-10 border-4 border-celtic-blue border-t-vanilla rounded-full animate-spin mb-3"></div>
            <p className="text-celtic-blue text-sm font-bold text-center font-display">Diseñando ruta desde Lima<br/>(Nano Banana)...</p>
        </div>
      </div>
    );
  }

  if (error || !imageUrl) {
    return <>{fallback}</>;
  }

  return (
    <div className="w-full h-full bg-ivory relative group">
        <img
        src={imageUrl}
        alt={`Ruta aérea desde Lima a ${countryName} generada por IA`}
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute bottom-2 right-2 bg-celtic-blue/80 text-ivory text-[10px] px-2 py-1 rounded backdrop-blur-md font-bold">
            Generado con Gemini
        </div>
    </div>
  );
};

export default AIRouteMap;
