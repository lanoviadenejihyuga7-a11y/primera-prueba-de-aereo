
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PlaneIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-lg">
    <svg viewBox="0 0 800 600" className="w-full h-auto" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <defs>
        <radialGradient id="skyGradientHero" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stop-color="#315381" />
          <stop offset="100%" stop-color="#050B1E" />
        </radialGradient>
        <linearGradient id="planeBodyGradient" x1="0.5" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stop-color="#CEE0F4" />
            <stop offset="50%" stop-color="#859FC0" />
            <stop offset="100%" stop-color="#315381" />
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
      <g opacity="0.25">
        <rect x="0" y="400" width="800" height="200" fill="#193060" filter="url(#cloud-filter)" />
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
        <g transform="translate(415, 290) rotate(25) scale(0.9, 0.7)" opacity="0.1" filter="url(#shadow-blur)">
           <path d="M-250-30 L180-30 L200,0 L180,30 L-250,30 L-210,0 Z" />
           <path d="M-50-20 L-150-130 L-120-135 L0-15 Z" />
           <path d="M130-25 L180-90 L200-80 L140-20 Z" />
        </g>
        
        {/* Plane Body */}
        <g transform="translate(400, 250) rotate(25)">
          {/* Main Fuselage */}
          <path d="M-250-30 L180-30 L200,0 L180,30 L-250,30 L-210,0 Z" fill="url(#planeBodyGradient)" stroke="#193060" strokeWidth="1"/>
          
          {/* Left Wing */}
          <path d="M-50-20 L-150-130 L-120-135 L0-15 Z" fill="#859FC0" stroke="#193060" strokeWidth="1"/>
          
          {/* Tail */}
          <path d="M-240-25 L-280-70 L-260-72 L-230-20 Z" fill="#859FC0" stroke="#193060" strokeWidth="1" />
          <path d="M-275-68 L-290-75 L-250-30 L-240-28 Z" fill="#315381" />
          
          {/* Right Wing visible part */}
          <path d="M-50,20 L-150,130 L-120,135 L0,15 Z" fill="#859FC0" stroke="#193060" strokeWidth="1"/>

          {/* Cockpit Window */}
          <path d="M160-25 C180-25 195,0 170,25 L150,20 C170,-5 150,-25 160-25" fill="#050B1E"/>
        </g>
      </g>
    </svg>
  </div>
);


const Home: React.FC = () => {
    const steps = [
        { icon: '📦', title: 'Clasificar la Mercancía', description: 'Identifica el HS Code correcto para tus productos.' },
        { icon: '🛡️', title: 'Preparar Embalaje Aéreo', description: 'Asegura tu carga según las normativas IATA.' },
        { icon: '📝', title: 'Documentación Obligatoria', description: 'Prepara facturas, packing list y AWB.' },
        { icon: '✈️', title: 'Selección de Ruta y Aerolínea', description: 'Elige la opción más eficiente y rentable.' },
        { icon: '🛂', title: 'Despacho Aduanero', description: 'Cumple con los trámites en origen y destino.' },
        { icon: '📄', title: 'Seguro de Transporte', description: 'Protege tu inversión contra todo riesgo.' },
        { icon: '🏁', title: 'Entrega en Destino', description: 'Coordina la última milla para una entrega exitosa.' },
        { icon: '💡', title: 'Consejos Adicionales', description: 'Optimiza costos y tiempos en futuros envíos.' },
    ];

    const faqs = [
        { q: '¿Qué es el Air Waybill (AWB)?', a: 'Es el contrato de transporte entre el exportador y la aerolínea. Funciona como un conocimiento de embarque aéreo y no es negociable.' },
        { q: '¿Cómo se calcula el peso tasable en carga aérea?', a: 'Se compara el peso bruto (real) con el peso volumétrico (espacio que ocupa). La aerolínea cobra por el que sea mayor. La fórmula del peso volumétrico es: (Largo x Ancho x Alto en cm) / 6000.' },
        { q: '¿Necesito un agente de aduanas?', a: 'Sí, para exportaciones con un valor FOB superior a $5,000 USD, es obligatorio contratar un agente de aduanas en Perú. Es altamente recomendable en todos los casos por la complejidad del proceso.' },
        { q: '¿Qué tipo de mercancías están restringidas?', a: 'Materiales peligrosos (HAZMAT), perecederos, animales vivos y artículos de alto valor tienen regulaciones especiales y requieren permisos adicionales. Consulta la normativa IATA.' },
    ];

    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="space-y-16 md:space-y-24">
            {/* Hero Section */}
            <section className="bg-catalina-blue">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center py-16 md:py-24">
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-poppins tracking-tight">
                            Exporta por vía aérea <span className="text-polo-blue">desde Perú</span> hacia el mundo
                        </h1>
                        <p className="mt-6 text-lg text-pattens-blue max-w-2xl mx-auto md:mx-0">
                            Tu guía completa para conectar tus productos con mercados internacionales de forma rápida, segura y eficiente.
                        </p>
                        <div className="mt-8">
                            <Link
                                to="/gallery"
                                className="inline-block bg-st-tropaz text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-polo-blue transition-colors duration-300 shadow-lg"
                            >
                                Aprende Cómo
                            </Link>
                        </div>
                    </div>
                    <div className="h-64 md:h-auto">
                        <PlaneIllustration />
                    </div>
                </div>
            </section>

            {/* Steps Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white font-poppins">Pasos Esenciales para Exportar</h2>
                    <p className="mt-4 text-polo-blue">Un proceso claro para un envío exitoso.</p>
                </div>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-catalina-blue p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center text-center">
                            <div className="text-4xl mb-4">{step.icon}</div>
                            <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                            <p className="mt-2 text-sm text-polo-blue">{step.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white font-poppins">Preguntas Frecuentes</h2>
                    <p className="mt-4 text-polo-blue">Respuestas a tus dudas más comunes.</p>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-catalina-blue rounded-lg shadow-md overflow-hidden">
                            <button
                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                className="w-full p-5 text-left flex justify-between items-center text-white font-semibold focus:outline-none"
                            >
                                <span>{faq.q}</span>
                                <span className={`transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </span>
                            </button>
                            <div className={`transition-max-height duration-500 ease-in-out overflow-hidden ${openFaq === index ? 'max-h-96' : 'max-h-0'}`}>
                                <div className="p-5 pt-0 text-polo-blue">
                                    {faq.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
