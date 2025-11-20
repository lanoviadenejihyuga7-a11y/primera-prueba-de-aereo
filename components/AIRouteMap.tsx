
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
                text: `A stylized, professional digital map illustration focusing on the flight connection between Lima, Peru and ${capitalName}, ${countryName}. 
                Visual style: Dark theme, navy blue ocean, abstract tech-style landmasses. 
                Key element: A glowing, bright cyan or neon blue curved line representing the flight path connecting the two points. 
                Aesthetic: Modern logistics, clean, high quality 2D vector art style.`
              }
            ]
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
      <div className="w-full h-full flex flex-col items-center justify-center bg-smoky-black relative overflow-hidden">
        {/* Fallback visible with overlay during load for better UX */}
        <div className="absolute inset-0 opacity-30 blur-sm pointer-events-none grayscale">
             {fallback}
        </div>
        <div className="z-10 flex flex-col items-center bg-catalina-blue/80 p-4 rounded-xl backdrop-blur-sm border border-st-tropaz">
            <div className="w-8 h-8 border-4 border-st-tropaz border-t-pattens-blue rounded-full animate-spin mb-3"></div>
            <p className="text-pattens-blue text-sm font-medium text-center">Generando ruta con IA<br/>(Nano Banana)...</p>
        </div>
      </div>
    );
  }

  if (error || !imageUrl) {
    return <>{fallback}</>;
  }

  return (
    <div className="w-full h-full bg-smoky-black relative group">
        <img
        src={imageUrl}
        alt={`Ruta aérea a ${countryName} generada por IA`}
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] px-2 py-1 rounded backdrop-blur-md">
            Generado con Gemini
        </div>
    </div>
  );
};

export default AIRouteMap;
