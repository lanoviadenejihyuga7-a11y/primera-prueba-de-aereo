import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { countries } from '../data/countries';

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

const UserAvatar = ({ gender }: { gender: 'male' | 'female' }) => (
    <div className="w-24 h-24 rounded-full bg-polo-blue/20 flex items-center justify-center mb-4 border-4 border-pattens-blue shadow-md overflow-hidden">
        <span className="text-6xl" role="img" aria-label={`Avatar de estudiante ${gender === 'male' ? 'masculino' : 'femenino'}`}>
            {gender === 'male' ? '👨‍🎓' : '👩‍🎓'}
        </span>
    </div>
);

// FIX: Define an interface for team members to ensure type safety for the 'gender' property.
interface TeamMember {
  name: string;
  gender: 'male' | 'female';
  info: {
    [key: string]: string[];
  };
}

const teamMembers: TeamMember[] = [
  {
    name: 'Allison Surco',
    gender: 'female',
    info: {
      'Perfil profesional': ['Estudiante de Administración y Negocios Internacionales (8.º semestre). Responsable, proactiva y con experiencia en atención al cliente. Destaca por su comunicación asertiva y trabajo en equipo.'],
      'Formación': ['Administración y Negocios Internacionales – Universidad Continental.', 'Cursos de Excel: básico, intermedio y avanzado (CERTUS).'],
      'Experiencia laboral': ['Valerianos Pastelería – Atención al cliente y caja.'],
      'Habilidades y competencias': ['Comunicación asertiva, empatía, disciplina, trabajo en equipo.', 'Servicio al cliente y gestión en tiempos de alta demanda.'],
      'Software / Idiomas': ['Microsoft Office, Excel, Canva.', 'Español (nativo), inglés básico.'],
    }
  },
  {
    name: 'Álvaro Flores',
    gender: 'male',
    info: {
      'Perfil profesional': ['Estudiante de Administración y Negocios Internacionales. Responsable, innovador y con orientación al trabajo en equipo.'],
      'Formación': ['Administración y Negocios Internacionales – Universidad Continental.', 'Estudios escolares completos.'],
      'Experiencia laboral': ['Mini Donas: administración de pedidos, precios y marketing.', 'Mozo y manejo de caja en restaurantes.'],
      'Habilidades y competencias': ['Liderazgo, comunicación efectiva, responsabilidad, empatía.'],
      'Software / Idiomas': ['Word, Excel, PowerPoint, Canva.', 'Español (nativo), inglés básico.'],
    }
  },
  {
    name: 'Anel Graeny Cabana Ramos',
    gender: 'female',
    info: {
      'Perfil profesional': ['Estudiante del 6.º ciclo de Administración y Negocios Internacionales. Proactiva, adaptable y orientada al aprendizaje práctico.'],
      'Formación': ['Administración y Negocios Internacionales – Universidad Continental.'],
      'Experiencia laboral': ['Hospedaje: limpieza, reservas y recepción.', 'Ferretería: ventas, inventario y apoyo administrativo.', 'Vivero: cuidado de plantas y atención a visitantes.'],
      'Habilidades y competencias': ['Responsabilidad, trabajo en equipo, atención al cliente, adaptabilidad.'],
      'Software / Idiomas': ['Office básico y herramientas digitales.', 'Español (nativo), inglés básico.'],
    }
  },
  {
    name: 'Estefani Kelly Ccasa Quispe',
    gender: 'female',
    info: {
      'Perfil profesional': ['Estudiante de Negocios Internacionales (inicio de 7.º ciclo). Proactiva y con interés en áreas administrativas, comerciales y logísticas.'],
      'Formación': ['Administración y Negocios Internacionales – Universidad Continental.'],
      'Experiencia laboral / Proyectos': ['Investigación de mercados (4.º ciclo).', 'Costos y cotizaciones internacionales (5.º ciclo).', 'Manual de franquicias (6.º ciclo).', 'Liderazgo juvenil en voluntariado.'],
      'Habilidades y competencias': ['Atención al cliente, liderazgo, comunicación efectiva, organización.'],
      'Software / Idiomas': ['Microsoft Office, Canva, Google Drive.', 'Español (nativo), inglés básico.'],
    }
  },
  {
    name: 'Wilder Fabricio Espinoza Checa',
    gender: 'male',
    info: {
      'Perfil profesional': ['Profesional con amplia experiencia en logística, administración y conducción. Responsable, organizado y con capacidad de solución de problemas.'],
      'Formación': ['Estudios de logística y SSOMA – IGE.', 'Administración de Negocios Internacionales – Universidad Continental.', 'Maquinaria pesada – Escotec.', 'Inglés intermedio – CCPNA.'],
      'Experiencia laboral': ['Auxiliar logístico y administrativo – Negociación Lanera Felicitas.', 'Jefe de almacén – Grupo Deltron.', 'Investigación y desarrollo – Laboratorios Portugal.', 'Conductor – Grupo Khujaq.', 'Asistente administrativo – Minera Korilazo SAC.'],
      'Habilidades y competencias': ['Liderazgo, creatividad, organización, trabajo en equipo.'],
      'Software / Idiomas': ['Sistemas logísticos, Office.', 'Español (nativo), inglés intermedio.'],
    }
  },
  {
    name: 'María Apaza',
    gender: 'female',
    info: {
      'Perfil profesional': ['Estudiante del 8.º semestre de Negocios Internacionales. Orientada al análisis de mercados, logística y e-commerce. Bilingüe con alto nivel de inglés.'],
      'Formación': ['Administración y Negocios Internacionales – Universidad Continental.', 'Semana Internacional UC 2024.'],
      'Experiencia laboral': ['Asistente administrativo en Tienda Toñito: documentos comerciales, caja y conciliación.'],
      'Habilidades y competencias': ['Comunicación asertiva, liderazgo, gestión de activos, resolución de problemas.'],
      'Software / Idiomas': ['Office, reportes digitales.', 'Español (nativo), inglés C2.'],
    }
  },
  {
    name: 'Sheyla Melissa Chino Mamani',
    gender: 'female',
    info: {
      'Perfil profesional': ['Estudiante del 8.º semestre de Negocios Internacionales. Creativa, resolutiva y con interés en marketing internacional.'],
      'Formación': ['Administración y Negocios Internacionales – Universidad Continental.', 'Excel avanzado – Certus.'],
      'Experiencia / Actividades': ['Participación en proyectos de gestión, marketing y atención al cliente.', 'Brigada animalista y talleres universitarios.'],
      'Habilidades y competencias': ['Pensamiento estratégico, gestión multicultural, adaptabilidad, trabajo en equipo.'],
      'Software / Idiomas': ['Excel avanzado, Microsoft Office, Canva.', 'Español (nativo), inglés B1.'],
    }
  },
  {
    name: 'Senaida Pauccara Choque',
    gender: 'female',
    info: {
      'Perfil profesional': ['Estudiante de Negocios Internacionales. Proactiva, comunicativa y enfocada en aprendizaje constante.'],
      'Formación': ['Administración y Negocios Internacionales – Universidad Continental.'],
      'Experiencia laboral': ['Librería VAGUSSI: atención al cliente, inventarios, caja.', 'Ventas en Moda Gamarra: asesoramiento y organización de stock.'],
      'Habilidades y competencias': ['Comunicación efectiva, ética profesional, manejo de inventarios, trabajo en equipo.'],
      'Software / Idiomas': ['Office básico, sistema POS.', 'Español (nativo), inglés intermedio en curso.'],
    }
  },
  // Add member 9 here if provided, there are only 8 in the prompt
];

const TeamCard = ({ member }: { member: typeof teamMembers[0] }) => {
    return (
        <div className="flex-shrink-0 w-11/12 sm:w-80 md:w-96 bg-pattens-blue rounded-2xl shadow-lg p-6 flex flex-col items-center text-smoky-black text-center min-h-[450px]">
            <UserAvatar gender={member.gender} />
            <h3 className="text-xl font-bold text-catalina-blue font-poppins">{member.name}</h3>
            <div className="mt-4 text-left text-xs space-y-2 w-full overflow-y-auto pr-2">
                {Object.entries(member.info).map(([key, value]) => (
                    <div key={key}>
                        <h4 className="font-semibold text-st-tropaz capitalize">{key}:</h4>
                        <ul className="list-disc list-inside pl-2 text-smoky-black/80">
                            {value.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};


const TeamSection = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [teamData, setTeamData] = React.useState([...teamMembers, ...teamMembers]); // Duplicate for infinite scroll illusion

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = scrollRef.current.clientWidth * 0.8;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };
    
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-white font-poppins">CONOCE A NUESTRO EQUIPO</h2>
                <p className="mt-4 text-polo-blue max-w-3xl mx-auto">9 estudiantes de Administración y Negocios Internacionales (U. Continental) impulsando el proyecto GLOBAIR para Inteligencia de Mercados.</p>
            </div>
            <div className="relative mt-12">
                <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-catalina-blue/50 text-white rounded-full p-2 hover:bg-catalina-blue transition-colors hidden md:block">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <div ref={scrollRef} className="flex items-stretch space-x-6 overflow-x-auto snap-x snap-mandatory py-4 scrollbar-hide">
                    {teamMembers.map((member, index) => (
                       <div key={index} className="snap-center">
                         <TeamCard member={member} />
                       </div>
                    ))}
                </div>
                <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-catalina-blue/50 text-white rounded-full p-2 hover:bg-catalina-blue transition-colors hidden md:block">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
        </section>
    );
};


const MiniCoursesSection = () => {
    const courses = [
        { title: "Documentación Aduanera", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> },
        { title: "Costos y Tarifas", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg> },
        { title: "Embalaje Seguro", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg> },
        { title: "Rutas y Conexiones", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> }
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-white font-poppins">MINI CURSOS DE EXPORTACIÓN</h2>
                <p className="mt-4 text-polo-blue max-w-3xl mx-auto">Aprende los conceptos clave y la documentación necesaria para iniciar tus exportaciones aéreas desde Perú de manera segura y exitosa.</p>
            </div>
            <div className="mt-12 rounded-2xl overflow-hidden bg-gradient-to-br from-catalina-blue to-st-tropaz shadow-2xl">
                <div className="grid md:grid-cols-2">
                    <div className="p-8 md:p-12 flex flex-col justify-center text-center md:text-left">
                        <h3 className="text-3xl font-bold text-white font-poppins">Impulsa tu Negocio Aéreo</h3>
                        <p className="mt-4 text-pattens-blue">Guías rápidas y visuales para dominar el proceso de exportación.</p>
                        <div className="mt-6">
                            <button className="bg-pattens-blue text-catalina-blue font-bold py-3 px-6 rounded-lg hover:bg-polo-blue hover:text-white transition-colors duration-300 shadow-lg">
                                Ver todas las guías
                            </button>
                        </div>
                    </div>
                    <div className="p-8 flex items-center overflow-x-auto scrollbar-hide">
                        <div className="flex space-x-6">
                            {courses.map(course => (
                                <div key={course.title} className="flex-shrink-0 w-32 text-center group cursor-pointer">
                                    <div className="bg-smoky-black/50 rounded-2xl h-32 w-32 mx-auto flex items-center justify-center text-pattens-blue group-hover:bg-polo-blue/50 group-hover:scale-105 transition-all duration-300">
                                        {course.icon}
                                    </div>
                                    <p className="mt-3 text-sm text-white font-semibold">{course.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


const Home: React.FC = () => {
    const [openStep, setOpenStep] = useState<number | null>(null);

    const handleStepToggle = (index: number) => {
        setOpenStep(openStep === index ? null : index);
    };

    const steps = [
        {
            icon: '📦',
            title: 'Clasificar la Mercancía',
            description: 'Identifica el HS Code correcto para tus productos.',
            details: 'La clasificación arancelaria (HS Code) es un código numérico que identifica tu producto a nivel mundial. Es crucial para determinar los aranceles, impuestos y regulaciones que se aplicarán en el país de destino. Un código incorrecto puede causar retrasos significativos y multas.',
            links: [
                { name: 'Consultar Partida (SUNAT)', url: 'https://www.sunat.gob.pe/ol-ad-ca-actpartida/actpartida' },
                { name: 'Guía de Clasificación (PromPerú)', url: 'https://www.siicex.gob.pe/siicex/resources/calb/6604-Clasificacion%20arancelaria%20de%20mercancias.pdf' }
            ]
        },
        {
            icon: '🛡️',
            title: 'Preparar Embalaje Aéreo',
            description: 'Asegura tu carga según las normativas IATA.',
            details: 'El embalaje para carga aérea debe ser ligero para minimizar costos, pero robusto para proteger la mercancía. Debe cumplir con las regulaciones de la IATA (Asociación Internacional de Transporte Aéreo), especialmente para mercancías peligrosas. Un buen etiquetado es fundamental.',
            links: [
                { name: 'Regulaciones IATA', url: 'https://www.iata.org/en/programs/cargo/' },
                { name: 'Consejos de Embalaje (DHL)', url: 'https://www.dhl.com/pe-es/home/nuestras-divisiones/transporte-de-carga/servicio-al-cliente/consejos-de-embalaje-para-el-transporte-de-carga.html' }
            ]
        },
        {
            icon: '📝',
            title: 'Documentación Obligatoria',
            description: 'Prepara facturas, packing list y AWB.',
            details: 'La documentación es la columna vertebral de la exportación. Los documentos indispensables son la Factura Comercial (detalla la venta), la Lista de Empaque (describe el contenido de los bultos) y la Guía Aérea o AWB (contrato de transporte). Otros como el Certificado de Origen pueden ser necesarios para beneficios arancelarios.',
            links: [
                { name: 'Documentos para Exportar (Exportemos.pe)', url: 'https://www.exportemos.pe/centro-de-conocimiento/como-exportar/conociendo-los-procesos-de-exportacion/paso-3-documentos-basicos-para-exportar' },
                { name: 'Nuestra Guía de Documentos', url: '#/documents' }
            ]
        },
        {
            icon: '✈️',
            title: 'Selección de Ruta y Aerolínea',
            description: 'Elige la opción más eficiente y rentable.',
            details: 'Investiga las aerolíneas y los agentes de carga (freight forwarders) que operan entre Perú y tu destino. Compara costos, tiempos de tránsito, frecuencia de vuelos y la capacidad para manejar tu tipo de mercancía (ej. carga refrigerada). Utiliza herramientas como la nuestra para explorar opciones.',
            links: [
                { name: 'Explorar Destinos', url: '#/gallery' },
                { name: 'Directorio Logístico (PromPerú)', url: 'https://www.promperu.gob.pe/comercio-exterior/directorio-logistico' }
            ]
        },
        {
            icon: '🛂',
            title: 'Despacho Aduanero',
            description: 'Cumple con los trámites en origen y destino.',
            details: 'En Perú, para exportaciones con valor FOB mayor a $5,000, es obligatorio contratar un Agente de Aduanas. Este profesional se encargará de presentar la Declaración Aduanera de Mercancías (DAM) ante la SUNAT y gestionar la inspección física si es requerida (canal rojo).',
            links: [
                { name: 'Procedimiento de Exportación (SUNAT)', url: 'https://www.sunat.gob.pe/orientacionaduanera/exportacion/procedimiento.html' },
                { name: 'Guía de Aduanas (Exportemos.pe)', url: 'https://www.exportemos.pe/centro-de-conocimiento/como-exportar/conociendo-los-procesos-de-exportacion/paso-4-procesos-aduaneros' }
            ]
        },
        {
            icon: '📄',
            title: 'Seguro de Transporte',
            description: 'Protege tu inversión contra todo riesgo.',
            details: 'Contratar un seguro de carga es vital para proteger tu inversión contra pérdidas o daños durante el tránsito aéreo. La cobertura dependerá del tipo de póliza y del Incoterm acordado con el comprador, ya que este define quién es responsable de contratar y pagar el seguro.',
            links: [
                { name: 'Importancia del Seguro (PromPerú)', url: 'https://www.siicex.gob.pe/siicex/documentos/5248-1.pdf' },
                { name: 'Guía de Incoterms', url: 'https://www.exportemos.pe/centro-de-conocimiento/incoterms' }
            ]
        },
        {
            icon: '🏁',
            title: 'Entrega en Destino',
            description: 'Coordina la última milla para una entrega exitosa.',
            details: 'Una vez que la carga llega al aeropuerto de destino, debe pasar por el proceso de aduanas de importación. Coordina con el comprador y el agente de aduanas en destino para asegurar una liberación y entrega final (última milla) sin contratiempos.',
            links: [
                { name: 'Logística Internacional (Referente)', url: 'https://procolombia.co/publicaciones/logistica-para-exportar' }
            ]
        },
        {
            icon: '💡',
            title: 'Consejos Adicionales',
            description: 'Optimiza costos y tiempos en futuros envíos.',
            details: 'Familiarízate con los Incoterms para definir claramente las responsabilidades y costos. Investiga los medios de pago internacionales más seguros, como la Carta de Crédito. Mantente actualizado sobre los acuerdos comerciales que Perú tiene con otros países para aprovechar beneficios arancelarios.',
            links: [
                { name: 'Acuerdos Comerciales del Perú', url: 'https://www.acuerdoscomerciales.gob.pe/' },
                { name: 'Medios de Pago (Exportemos.pe)', url: 'https://www.exportemos.pe/centro-de-conocimiento/como-exportar/conociendo-los-procesos-de-exportacion/paso-8-formas-de-pago-internacional' }
            ]
        },
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
                                to="/calculator"
                                className="inline-block bg-st-tropaz text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-polo-blue transition-colors duration-300 shadow-lg"
                            >
                                COTIZAR
                            </Link>
                        </div>
                    </div>
                    <div className="h-64 md:h-auto">
                        <PlaneIllustration />
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <TeamSection />

            {/* Steps Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white font-poppins">Pasos Esenciales para Exportar</h2>
                    <p className="mt-4 text-polo-blue">Un proceso claro para un envío exitoso.</p>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-catalina-blue rounded-xl shadow-lg transition-all duration-300 overflow-hidden">
                            <button
                                onClick={() => handleStepToggle(index)}
                                className="w-full p-6 text-left flex items-center gap-4 focus:outline-none"
                                aria-expanded={openStep === index}
                                aria-controls={`step-content-${index}`}
                            >
                                <div className="text-4xl flex-shrink-0">{step.icon}</div>
                                <div className="flex-grow">
                                    <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                                    <p className="text-sm text-polo-blue">{step.description}</p>
                                </div>
                                <span className={`transform transition-transform duration-300 ${openStep === index ? 'rotate-180' : ''}`}>
                                    <svg className="w-6 h-6 text-polo-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </span>
                            </button>
                            <div
                                id={`step-content-${index}`}
                                className={`transition-max-height duration-700 ease-in-out ${openStep === index ? 'max-h-[500px]' : 'max-h-0'}`}
                            >
                                <div className="px-6 pb-6">
                                    <p className="text-pattens-blue/90 mb-4 text-sm">{step.details}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {step.links.map(link => (
                                            <a
                                                key={link.name}
                                                href={link.url.startsWith('#') ? link.url : link.url}
                                                target={link.url.startsWith('#') ? '_self' : '_blank'}
                                                rel="noopener noreferrer"
                                                className="bg-st-tropaz text-xs text-white font-semibold py-1 px-3 rounded-full hover:bg-polo-blue transition-colors"
                                            >
                                                {link.name} &rarr;
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            
            {/* Mini Courses Section */}
            <MiniCoursesSection />

            {/* Sign In / Register Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 rounded-xl shadow-2xl overflow-hidden">
                    {/* Left Panel */}
                    <div className="p-8 md:p-12 bg-catalina-blue flex flex-col justify-center items-center md:items-start text-center md:text-left">
                        <div className="w-24 h-24 text-polo-blue">
                            <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
                                <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
                                <path d="M 50 2 V 98 M 2 50 H 98" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                                <path d="M20,60 a35,35 0 0,1 60,0" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                                <path d="M30,75 a20,20 0 0,1 40,0" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                                <path d="M-5,40 L10,50 L-5,60" fill="#CEE0F4" stroke="#CEE0F4" strokeWidth="1">
                                <animateMotion dur="8s" repeatCount="indefinite" path="M 50, 2 a 48,48 0 1,1 0,96 a 48,48 0 1,1 0,-96" rotate="auto" />
                                </path>
                            </svg>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white mt-4">Accede a Servicios GLOBAIR</h2>
                        <p className="mt-4 text-pattens-blue max-w-md">
                            Regístrate para obtener cotizaciones personalizadas, acceso a nuestra documentación exclusiva y soporte directo de nuestro equipo de expertos.
                        </p>
                    </div>

                    {/* Right Panel - Form */}
                    <div className="p-8 md:p-12 bg-pattens-blue">
                        <h3 className="text-2xl font-bold text-center text-catalina-blue font-poppins mb-6">Comienza a Exportar Hoy</h3>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-st-tropaz">Nombre Completo</label>
                                <input type="text" name="fullName" id="fullName" placeholder="John Doe" className="mt-1 block w-full rounded-md border-polo-blue shadow-sm focus:border-catalina-blue focus:ring focus:ring-catalina-blue focus:ring-opacity-50 bg-white text-smoky-black" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-st-tropaz">Correo Electrónico</label>
                                <input type="email" name="email" id="email" placeholder="you@example.com" className="mt-1 block w-full rounded-md border-polo-blue shadow-sm focus:border-catalina-blue focus:ring focus:ring-catalina-blue focus:ring-opacity-50 bg-white text-smoky-black" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-st-tropaz">Contraseña</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="mt-1 block w-full rounded-md border-polo-blue shadow-sm focus:border-catalina-blue focus:ring focus:ring-catalina-blue focus:ring-opacity-50 bg-white text-smoky-black" />
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="originCountry" className="block text-sm font-medium text-st-tropaz">País de Origen</label>
                                    <input type="text" id="originCountry" value="Perú" readOnly className="mt-1 block w-full rounded-md border-polo-blue shadow-sm bg-gray-200 text-st-tropaz cursor-not-allowed" />
                                </div>
                                <div>
                                    <label htmlFor="destinationCountry" className="block text-sm font-medium text-st-tropaz">País de Destino</label>
                                    <select id="destinationCountry" name="destinationCountry" className="mt-1 block w-full rounded-md border-polo-blue shadow-sm focus:border-catalina-blue focus:ring focus:ring-catalina-blue focus:ring-opacity-50 bg-white text-smoky-black h-[42px]">
                                        <option value="">Seleccionar...</option>
                                        {countries.sort((a, b) => a.name.localeCompare(b.name)).map(country => (
                                            <option key={country.id} value={country.id}>{country.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="pt-4">
                                <button type="submit" className="w-full bg-catalina-blue text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-st-tropaz transition-colors duration-300 shadow-lg">
                                    CREAR CUENTA
                                </button>
                            </div>
                        </form>
                        <p className="text-center text-sm text-st-tropaz mt-6">
                            ¿Ya tienes cuenta? <button className="font-semibold text-catalina-blue hover:underline">Iniciar Sesión</button>
                        </p>
                    </div>
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
