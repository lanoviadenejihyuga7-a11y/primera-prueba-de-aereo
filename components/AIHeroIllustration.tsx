
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const FallbackPlaneIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl border-4 border-tea-green shadow-xl bg-ivory">
    <svg viewBox="0 0 800 600" className="w-full h-auto" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <defs>
        <radialGradient id="skyGradientHero" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#fbfcee" />
          <stop offset="100%" stopColor="#c8d69b" />
        </radialGradient>
        <linearGradient id="planeBodyGradient" x1="0.5" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stopColor="#fbfcee" />
            <stop offset="50%" stopColor="#f6e6a5" />
            <stop offset="100%" stopColor="#c8d69b" />
        </linearGradient>
        <filter id="cloud-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.01 0.005" numOctaves="3" seed="0" result="turbulence"/>
          <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="50" xChannelSelector="R" yChannelSelector="G" result="displacement"/>
          <feGaussianBlur in="displacement" stdDeviation="15" />
        </filter>
        <filter id="shadow-blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
        </filter>
      </defs>

      <rect width="800" height="600" fill="url(#skyGradientHero)" />

      {/* Clouds Layer */}
      <g opacity="0.6">
        <rect x="0" y="400" width="800" height="200" fill="#ffffff" filter="url(#cloud-filter)" />
      </g>
      
      {/* Plane group for animation */}
      <g>
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0; 0 -10; 0 0"
          dur="5s"
          repeatCount="indefinite"
          />
        
        {/* Plane Shadow */}
        <g transform="translate(415, 290) rotate(25) scale(0.9, 0.7)" opacity="0.2" filter="url(#shadow-blur)">
           <path d="M-250-30 L180-30 L200,0 L180,30 L-250,30 L-210,0 Z" fill="#343b1b" />
           <path d="M-50-20 L-150-130 L-120-135 L0-15 Z" fill="#343b1b" />
           <path d="M130-25 L180-90 L200-80 L140-20 Z" fill="#343b1b" />
        </g>
        
        {/* Plane Body */}
        <g transform="translate(400, 250) rotate(25)">
          {/* Main Fuselage */}
          <path d="M-250-30 L180-30 L200,0 L180,30 L-250,30 L-210,0 Z" fill="url(#planeBodyGradient)" stroke="#3971b8" strokeWidth="2"/>
          
          {/* Left Wing */}
          <path d="M-50-20 L-150-130 L-120-135 L0-15 Z" fill="#3971b8" stroke="#343b1b" strokeWidth="1"/>
          
          {/* Tail */}
          <path d="M-240-25 L-280-70 L-260-72 L-230-20 Z" fill="#3971b8" stroke="#343b1b" strokeWidth="1" />
          <path d="M-275-68 L-290-75 L-250-30 L-240-28 Z" fill="#f6e6a5" />
          
          {/* Right Wing visible part */}
          <path d="M-50,20 L-150,130 L-120,135 L0,15 Z" fill="#3971b8" stroke="#343b1b" strokeWidth="1"/>

          {/* Cockpit Window */}
          <path d="M160-25 C180-25 195,0 170,25 L150,20 C170,-5 150,-25 160-25" fill="#343b1b"/>
        </g>
      </g>
    </svg>
  </div>
);

const AIHeroIllustration: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const generateImage = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image',
            contents: {
              parts: [
                {
                  text: `Generate a friendly, vibrant 3D illustration of a commercial cargo airplane flying in a clear, sunny sky.
                  
                  Visual Style:
                  - Soft, rounded, and modern aesthetic (similar to 'Comfortaa' font vibes).
                  - Color Palette (So Matcha): Use mainly Celtic Blue (#3971b8) for the plane body. Use Vanilla (#f6e6a5) and Tea Green (#c8d69b) for accents, stripes, or engine details.
                  - Background: A soft, clean Ivory (#fbfcee) sky fading into light blue, with fluffy white clouds.
                  - The plane should look professional, safe, and technologically advanced, but approachable.
                  - Composition: Dynamic angle, 16:9 aspect ratio preferred.
                  - High quality render, clean lines, vector art or 3D illustration style.`
                }
              ]
            },
            config: {
              imageConfig: {
                aspectRatio: '4:3'
              }
            }
        });

        if (!isMounted) return;

        let found = false;
        if (response.candidates?.[0]?.content?.parts) {
             for (const part of response.candidates[0].content.parts) {
                if (part.inlineData) {
                    setImageUrl(`data:image/png;base64,${part.inlineData.data}`);
                    found = true;
                    break;
                }
             }
        }
        if (!found) setError(true);
      } catch (e) {
        console.error("Error generating hero image:", e);
        if (isMounted) setError(true);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    generateImage();
    return () => { isMounted = false; };
  }, []);

   if (loading) {
    return (
      <div className="relative w-full h-full min-h-[300px]">
         <div className="absolute inset-0 opacity-50 blur-sm scale-95">
            <FallbackPlaneIllustration />
         </div>
         <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="bg-white/90 p-4 rounded-xl shadow-lg border-2 border-celtic-blue flex flex-col items-center backdrop-blur-sm">
                 <div className="w-8 h-8 border-4 border-celtic-blue border-t-vanilla rounded-full animate-spin mb-2"></div>
                 <p className="text-celtic-blue font-bold text-xs font-display">Generando avión con Nano Banana...</p>
            </div>
         </div>
      </div>
    );
  }
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl border-4 border-tea-green shadow-xl bg-ivory group">
        <img src={imageUrl} alt="AI Generated Plane" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
         <div className="absolute bottom-3 right-3 bg-celtic-blue/80 text-ivory text-[10px] px-2 py-1 rounded backdrop-blur-md font-bold opacity-0 group-hover:opacity-100 transition-opacity">
            Generado con Gemini 2.5 Flash Image
        </div>
    </div>
  );
}

export default AIHeroIllustration;
