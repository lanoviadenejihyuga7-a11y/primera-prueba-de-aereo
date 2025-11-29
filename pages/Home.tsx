
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { countries } from '../data/countries';
import AIHeroIllustration from '../components/AIHeroIllustration';

// ----------------------------------------------------------------------
// CONFIGURACIÓN DE GOOGLE SHEETS
// Para que el registro funcione y guarde datos en tu Excel (Google Sheet),
// sigue las instrucciones para desplegar el Apps Script y pega aquí tu URL:
const GOOGLE_SCRIPT_URL = ""; 
// ----------------------------------------------------------------------

const UserAvatar = ({ gender }: { gender: 'male' | 'female' }) => (
    <div className="w-24 h-24 rounded-full bg-tea-green flex items-center justify-center mb-4 border-4 border-celtic-blue shadow-md overflow-hidden">
        <span className="text-6xl" role="img" aria-label={`Avatar de estudiante ${gender === 'male' ? 'masculino' : 'femenino'}`}>
            {gender === 'male' ? '👨‍🎓' : '👩‍🎓'}
        </span>
    </div>
);

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
  {
    name: 'Gino Frank Quispe Palaco',
    gender: 'male',
    info: {
      'Perfil profesional': ['Estudiante de Administración y Negocios Internacionales. Proactivo, bilingüe y orientado a la optimización de procesos. Interés en logística, mercados globales y e-commerce.'],
      'Formación': ['Administración y Negocios Internacionales – Universidad Continental (8.º semestre).', 'Semana Internacional UC – 2024.', 'Inglés C2.'],
      'Experiencia laboral': ['Asistente Administrativo de Soporte – Tienda Toñito: Gestión documental, emisión de comprobantes, conciliación y cierre de caja. Apoyo contable y control de operaciones comerciales diarias.'],
      'Habilidades y competencias': ['Liderazgo, comunicación asertiva, gestión de activos, resolución de problemas, elaboración de reportes, trabajo en equipo.'],
      'Software / Idiomas': ['Microsoft Office avanzado.', 'Español (nativo), inglés (C2).'],
    }
  },
];

const TeamCard = ({ member }: { member: typeof teamMembers[0] }) => {
    return (
        <div className="flex-shrink-0 w-11/12 sm:w-80 md:w-96 bg-white rounded-2xl shadow-xl border-2 border-tea-green p-6 flex flex-col items-center text-drab-dark-brown text-center min-h-[450px] transform hover:scale-105 transition-transform duration-300">
            <UserAvatar gender={member.gender} />
            <h3 className="text-xl font-bold text-celtic-blue font-display">{member.name}</h3>
            <div className="mt-4 text-left text-xs space-y-2 w-full overflow-y-auto pr-2 custom-scrollbar">
                {Object.entries(member.info).map(([key, value]) => (
                    <div key={key}>
                        <h4 className="font-semibold text-celtic-blue capitalize border-b border-vanilla pb-1 mb-1">{key}:</h4>
                        <ul className="list-disc list-inside pl-2 text-drab-dark-brown/80">
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
    const [showVideo, setShowVideo] = useState(false);
    const videoUrl = "https://drive.google.com/file/d/1mZV7TDpwHovKyhFIvMuoWkFj44rljvuL/preview";
    
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
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-vanilla py-12 rounded-3xl my-12 shadow-inner relative">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-celtic-blue font-display">CONOCE A NUESTRO EQUIPO</h2>
                <p className="mt-4 text-drab-dark-brown max-w-3xl mx-auto font-medium">Estudiantes de Administración y Negocios Internacionales (U. Continental) impulsando el proyecto GLOBAIR.</p>
                
                <button 
                    onClick={() => setShowVideo(true)}
                    className="mt-6 bg-celtic-blue text-ivory font-bold py-2 px-6 rounded-full hover:bg-drab-dark-brown transition-colors shadow-lg flex items-center gap-2 mx-auto group"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Ver Video de Presentación
                </button>
            </div>

            {/* Video Modal */}
            {showVideo && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-drab-dark-brown/90 p-4 backdrop-blur-sm" onClick={() => setShowVideo(false)}>
                    <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border-4 border-celtic-blue group" onClick={e => e.stopPropagation()}>
                        <button 
                            onClick={() => setShowVideo(false)} 
                            className="absolute top-4 right-4 z-20 bg-white/20 text-white rounded-full p-2 hover:bg-red-600 hover:text-white transition-all backdrop-blur-md"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                        <iframe 
                            src={videoUrl} 
                            className="w-full h-full" 
                            allow="autoplay; encrypted-media; fullscreen; picture-in-picture" 
                            allowFullScreen
                            sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
                            title="Video del equipo"
                        ></iframe>

                        {/* Fallback Link */}
                         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full backdrop-blur-sm text-sm flex gap-2 items-center hover:bg-black/80 transition-colors z-20">
                            <span>¿Problemas de reproducción?</span>
                            <a 
                                href={videoUrl.replace('/preview', '/view')} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-vanilla font-bold hover:text-tea-green hover:underline flex items-center gap-1"
                            >
                                Abrir en Drive <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            )}

            <div className="relative mt-12">
                <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-celtic-blue text-ivory rounded-full p-3 hover:bg-drab-dark-brown transition-colors hidden md:block shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <div ref={scrollRef} className="flex items-stretch space-x-6 overflow-x-auto snap-x snap-mandatory py-4 px-4 scrollbar-hide">
                    {teamMembers.map((member, index) => (
                       <div key={index} className="snap-center">
                         <TeamCard member={member} />
                       </div>
                    ))}
                </div>
                <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-celtic-blue text-ivory rounded-full p-3 hover:bg-drab-dark-brown transition-colors hidden md:block shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
        </section>
    );
};


const MiniCoursesSection = () => {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    const courses = [
        { 
            title: "Documentación Aduanera", 
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>,
            videoUrl: "https://drive.google.com/file/d/1UicSQ3VA3ZkXo7U6gaudfDV_8JTHQbVh/preview" 
        },
        { 
            title: "Costos y Tarifas", 
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>,
            videoUrl: "https://drive.google.com/file/d/1IPo19kr6WChtv6Gpk5yXRXBjFKhb4FEd/preview"
        },
        { 
            title: "Embalaje Seguro", 
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>,
            videoUrl: "https://drive.google.com/file/d/1seJ5V_qBfJC6q0y27csWEuS_m2xczBve/preview" 
        },
        { 
            title: "Rutas y Conexiones", 
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z"></path></svg>,
            videoUrl: "https://drive.google.com/file/d/18w5YyoDfZfMCrgHAByuAl7FLJ5cu5-TV/preview"
        }
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-celtic-blue font-display">MINI CURSOS DE EXPORTACIÓN</h2>
                <p className="mt-4 text-drab-dark-brown max-w-3xl mx-auto">Aprende los conceptos clave y la documentación necesaria para iniciar tus exportaciones aéreas.</p>
            </div>

             {/* Video Modal */}
             {activeVideo && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-drab-dark-brown/90 p-4 backdrop-blur-sm" onClick={() => setActiveVideo(null)}>
                    <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border-4 border-tea-green group" onClick={e => e.stopPropagation()}>
                        <button 
                            onClick={() => setActiveVideo(null)} 
                            className="absolute top-4 right-4 z-20 bg-white/20 text-white rounded-full p-2 hover:bg-red-600 hover:text-white transition-all backdrop-blur-md"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                        <iframe 
                            src={activeVideo} 
                            className="w-full h-full" 
                            allow="autoplay; encrypted-media; fullscreen; picture-in-picture" 
                            allowFullScreen
                            sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
                            title="Video del curso"
                        ></iframe>

                        {/* Fallback Link */}
                         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full backdrop-blur-sm text-sm flex gap-2 items-center hover:bg-black/80 transition-colors z-20">
                            <span>¿No reproduce?</span>
                            <a 
                                href={activeVideo.replace('/preview', '/view')} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-vanilla font-bold hover:text-tea-green hover:underline flex items-center gap-1"
                            >
                                Ver directamente <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            )}

            <div className="mt-12 rounded-3xl overflow-hidden bg-gradient-to-br from-celtic-blue to-tea-green shadow-2xl">
                <div className="grid md:grid-cols-2">
                    <div className="p-8 md:p-12 flex flex-col justify-center text-center md:text-left">
                        <h3 className="text-3xl font-bold text-ivory font-display">Impulsa tu Negocio Aéreo</h3>
                        <p className="mt-4 text-ivory/90 font-medium">Guías rápidas y visuales para dominar el proceso de exportación.</p>
                        <div className="mt-6">
                            <button className="bg-vanilla text-drab-dark-brown font-bold py-3 px-6 rounded-full hover:bg-ivory transition-colors duration-300 shadow-lg border-2 border-celtic-blue">
                                Ver todas las guías
                            </button>
                        </div>
                    </div>
                    <div className="p-8 flex items-center overflow-x-auto scrollbar-hide">
                        <div className="flex space-x-6">
                            {courses.map(course => (
                                <div 
                                    key={course.title} 
                                    className={`flex-shrink-0 w-32 text-center group transition-all duration-300 ${course.videoUrl ? 'cursor-pointer hover:scale-110' : 'cursor-default hover:scale-105'}`}
                                    onClick={() => course.videoUrl ? setActiveVideo(course.videoUrl) : null}
                                >
                                    <div className={`bg-ivory/20 backdrop-blur-md rounded-full h-32 w-32 mx-auto flex items-center justify-center text-ivory group-hover:bg-vanilla group-hover:text-celtic-blue border-2 border-ivory/30 relative ${course.videoUrl ? 'ring-4 ring-transparent group-hover:ring-vanilla/50' : ''}`}>
                                        {course.icon}
                                        {course.videoUrl && (
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="bg-celtic-blue text-ivory rounded-full p-2 shadow-lg">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 pl-1" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <p className="mt-3 text-sm text-ivory font-bold shadow-black drop-shadow-md">
                                        {course.title}
                                        {course.videoUrl && <span className="block text-xs font-normal text-vanilla mt-1">(Ver Video)</span>}
                                    </p>
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
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    // Form State
    const [registerForm, setRegisterForm] = useState({
        fullName: '',
        email: '',
        password: '',
        destinationCountry: ''
    });
    const [registerStatus, setRegisterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleStepToggle = (index: number) => {
        setOpenStep(openStep === index ? null : index);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setRegisterStatus('loading');

        // Check if user has set the script URL
        if (!GOOGLE_SCRIPT_URL) {
            console.warn("URL de Google Script no configurada. Simulando envío...");
            
            // Simulación para demo
            setTimeout(() => {
                console.log("Datos que se enviarían:", registerForm);
                setRegisterStatus('success');
                setRegisterForm({ fullName: '', email: '', password: '', destinationCountry: '' });
                setTimeout(() => setRegisterStatus('idle'), 3000);
            }, 1500);
            return;
        }

        const formData = new FormData();
        formData.append('fullName', registerForm.fullName);
        formData.append('email', registerForm.email);
        formData.append('originCountry', 'Perú');
        // Find country name or send ID
        const destName = countries.find(c => c.id === registerForm.destinationCountry)?.name || registerForm.destinationCountry;
        formData.append('destinationCountry', destName);
        formData.append('password', registerForm.password); // Note: Sending PW to sheet is insecure in prod, but per request.
        formData.append('timestamp', new Date().toISOString());

        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                body: formData,
                mode: 'no-cors' // 'no-cors' is required for simple Google Apps Script triggers
            });
            
            setRegisterStatus('success');
            setRegisterForm({ fullName: '', email: '', password: '', destinationCountry: '' });
            
            setTimeout(() => setRegisterStatus('idle'), 3000);
        } catch (error) {
            console.error("Error submitting form:", error);
            setRegisterStatus('error');
        }
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

    return (
        <div className="space-y-16 md:space-y-24">
            {/* Hero Section */}
            <section className="bg-celtic-blue relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center py-16 md:py-24 relative z-10">
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-ivory font-display tracking-tight">
                            Exporta por vía aérea <span className="text-vanilla">desde Perú</span> hacia el mundo
                        </h1>
                        <p className="mt-6 text-lg text-ivory/90 max-w-2xl mx-auto md:mx-0">
                            Tu guía completa para conectar tus productos con mercados internacionales de forma rápida, segura y eficiente.
                        </p>
                        <div className="mt-8">
                            <Link
                                to="/calculator"
                                className="inline-block bg-vanilla text-drab-dark-brown font-bold py-3 px-8 rounded-full text-lg hover:bg-tea-green transition-colors duration-300 shadow-lg border-2 border-transparent hover:border-celtic-blue"
                            >
                                COTIZAR AHORA
                            </Link>
                        </div>
                    </div>
                    <div className="h-64 md:h-auto aspect-video">
                        <AIHeroIllustration />
                    </div>
                </div>
                {/* Decorative Wave */}
                <div className="absolute bottom-0 left-0 w-full h-16 bg-ivory" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)' }}></div>
            </section>

            {/* Team Section */}
            <TeamSection />

            {/* Steps Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-celtic-blue font-display">Pasos Esenciales para Exportar</h2>
                    <p className="mt-4 text-drab-dark-brown font-medium">Un proceso claro para un envío exitoso.</p>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-white border-2 border-tea-green rounded-3xl shadow-md transition-all duration-300 overflow-hidden hover:shadow-xl">
                            <button
                                onClick={() => handleStepToggle(index)}
                                className="w-full p-6 text-left flex items-center gap-4 focus:outline-none group"
                                aria-expanded={openStep === index}
                                aria-controls={`step-content-${index}`}
                            >
                                <div className="text-4xl flex-shrink-0 group-hover:scale-110 transition-transform">{step.icon}</div>
                                <div className="flex-grow">
                                    <h3 className="text-lg font-bold text-celtic-blue font-display">{step.title}</h3>
                                    <p className="text-sm text-drab-dark-brown/80">{step.description}</p>
                                </div>
                                <span className={`transform transition-transform duration-300 text-tea-green ${openStep === index ? 'rotate-180' : ''}`}>
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
                                </span>
                            </button>
                            <div
                                id={`step-content-${index}`}
                                className={`transition-max-height duration-700 ease-in-out ${openStep === index ? 'max-h-[500px]' : 'max-h-0'}`}
                            >
                                <div className="px-6 pb-6 bg-ivory/50">
                                    <p className="text-drab-dark-brown mb-4 text-sm leading-relaxed">{step.details}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {step.links.map(link => (
                                            <a
                                                key={link.name}
                                                href={link.url.startsWith('#') ? link.url : link.url}
                                                target={link.url.startsWith('#') ? '_self' : '_blank'}
                                                rel="noopener noreferrer"
                                                className="bg-celtic-blue text-xs text-ivory font-semibold py-2 px-4 rounded-full hover:bg-drab-dark-brown transition-colors"
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
                <div className="grid md:grid-cols-2 rounded-3xl shadow-2xl overflow-hidden border-4 border-vanilla">
                    {/* Left Panel */}
                    <div className="p-8 md:p-12 bg-celtic-blue flex flex-col justify-center items-center md:items-start text-center md:text-left">
                        <div className="w-24 h-24 text-vanilla">
                            <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
                                <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" />
                                <path d="M 50 2 V 98 M 2 50 H 98" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                                <path d="M-5,40 L10,50 L-5,60" fill="#f6e6a5" stroke="#f6e6a5" strokeWidth="1">
                                <animateMotion dur="8s" repeatCount="indefinite" path="M 50, 2 a 48,48 0 1,1 0,96 a 48,48 0 1,1 0,-96" rotate="auto" />
                                </path>
                            </svg>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold font-display text-ivory mt-4">Accede a Servicios GLOBAIR</h2>
                        <p className="mt-4 text-ivory/90 max-w-md">
                            Regístrate para obtener cotizaciones personalizadas, acceso a nuestra documentación exclusiva y soporte directo.
                        </p>
                    </div>

                    {/* Right Panel - Form */}
                    <div className="p-8 md:p-12 bg-ivory relative">
                        {registerStatus === 'success' ? (
                             <div className="absolute inset-0 flex flex-col items-center justify-center bg-ivory/90 z-20 animate-fade-in-up">
                                <div className="w-20 h-20 bg-tea-green rounded-full flex items-center justify-center mb-4 border-4 border-celtic-blue">
                                    <svg className="w-10 h-10 text-celtic-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <h3 className="text-2xl font-bold text-celtic-blue font-display">¡Registro Exitoso!</h3>
                                <p className="text-drab-dark-brown mt-2">Bienvenido a AeroExport Perú.</p>
                            </div>
                        ) : null}

                        <h3 className="text-2xl font-bold text-center text-celtic-blue font-display mb-6">Comienza a Exportar Hoy</h3>
                        
                        {!GOOGLE_SCRIPT_URL && (
                            <div className="mb-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 text-xs">
                                <p className="font-bold">⚠️ Modo Demo Activado</p>
                                <p>Para guardar datos reales, configura la URL del Google Script en el código (pages/Home.tsx).</p>
                            </div>
                        )}

                        <form className="space-y-4" onSubmit={handleRegister}>
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-bold text-drab-dark-brown">Nombre Completo</label>
                                <input 
                                    type="text" 
                                    name="fullName" 
                                    id="fullName" 
                                    required
                                    placeholder="John Doe" 
                                    value={registerForm.fullName}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full rounded-lg border-tea-green shadow-sm focus:border-celtic-blue focus:ring focus:ring-celtic-blue focus:ring-opacity-50 bg-white text-drab-dark-brown p-3" 
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-drab-dark-brown">Correo Electrónico</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    required
                                    placeholder="you@example.com" 
                                    value={registerForm.email}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full rounded-lg border-tea-green shadow-sm focus:border-celtic-blue focus:ring focus:ring-celtic-blue focus:ring-opacity-50 bg-white text-drab-dark-brown p-3" 
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-bold text-drab-dark-brown">Contraseña</label>
                                <input 
                                    type="password" 
                                    name="password" 
                                    id="password" 
                                    required
                                    placeholder="••••••••" 
                                    value={registerForm.password}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full rounded-lg border-tea-green shadow-sm focus:border-celtic-blue focus:ring focus:ring-celtic-blue focus:ring-opacity-50 bg-white text-drab-dark-brown p-3" 
                                />
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="originCountry" className="block text-sm font-bold text-drab-dark-brown">País de Origen</label>
                                    <input type="text" id="originCountry" value="Perú" readOnly className="mt-1 block w-full rounded-lg border-tea-green shadow-sm bg-gray-100 text-drab-dark-brown cursor-not-allowed p-3" />
                                </div>
                                <div>
                                    <label htmlFor="destinationCountry" className="block text-sm font-bold text-drab-dark-brown">País de Destino</label>
                                    <select 
                                        id="destinationCountry" 
                                        name="destinationCountry" 
                                        required
                                        value={registerForm.destinationCountry}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full rounded-lg border-tea-green shadow-sm focus:border-celtic-blue focus:ring focus:ring-celtic-blue focus:ring-opacity-50 bg-white text-drab-dark-brown h-[50px] p-3"
                                    >
                                        <option value="">Seleccionar...</option>
                                        {countries.sort((a, b) => a.name.localeCompare(b.name)).map(country => (
                                            <option key={country.id} value={country.id}>{country.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="pt-4">
                                <button 
                                    type="submit" 
                                    disabled={registerStatus === 'loading'}
                                    className="w-full bg-celtic-blue text-ivory font-bold py-3 px-8 rounded-full text-lg hover:bg-drab-dark-brown transition-colors duration-300 shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                                >
                                    {registerStatus === 'loading' ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="https://docs.google.com/spreadsheets/d/1zQkZAvXhgSeukJP2opHR9rEnCBZ-zQdlq7IHxWVy3E8/edit?usp=sharing" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            PROCESANDO...
                                        </>
                                    ) : 'CREAR CUENTA'}
                                </button>
                            </div>
                        </form>
                        <p className="text-center text-sm text-drab-dark-brown mt-6">
                            ¿Ya tienes cuenta? <button className="font-bold text-celtic-blue hover:underline">Iniciar Sesión</button>
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-celtic-blue font-display">Preguntas Frecuentes</h2>
                    <p className="mt-4 text-drab-dark-brown font-medium">Respuestas a tus dudas más comunes.</p>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-celtic-blue rounded-2xl shadow-md overflow-hidden">
                            <button
                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                className="w-full p-5 text-left flex justify-between items-center text-ivory font-bold font-display focus:outline-none hover:bg-celtic-blue/90"
                            >
                                <span>{faq.q}</span>
                                <span className={`transform transition-transform duration-300 text-vanilla ${openFaq === index ? 'rotate-180' : ''}`}>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </span>
                            </button>
                            <div className={`transition-max-height duration-500 ease-in-out overflow-hidden bg-ivory ${openFaq === index ? 'max-h-96' : 'max-h-0'}`}>
                                <div className="p-6 text-drab-dark-brown">
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
