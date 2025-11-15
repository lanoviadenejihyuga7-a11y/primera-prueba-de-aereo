
import { Country } from '../types';

export const countries: Country[] = [
  {
    id: "argentina",
    continent: "America",
    name: "Argentina",
    capital: "Buenos Aires",
    languages: ["Español rioplatense"],
    flagEmoji: "🇦🇷",
    countryCode: "ar",
    airports: [{ name: "Ministro Pistarini", iata: "EZE" }],
    routes: [{ path: "Lima - Buenos Aires", travelTime: "1 día", airlines: ["LATAM", "Sky Airline"] }],
    currency: "Peso Argentino (ARS)",
    timezone: "UTC-3",
    coords: { lat: -34.6037, lon: -58.3816 },
    negotiation: {
      style: "Relacional y formal. Se valora la confianza personal y las reuniones cara a cara.",
      culturalNorms: ["La puntualidad es flexible.", "Las conversaciones personales antes de los negocios son comunes.", "Se visten de forma conservadora para los negocios."],
      paymentMethods: ["Transferencia bancaria", "Carta de crédito"],
      tips: ["Construya una relación personal.", "Sea paciente, las decisiones pueden tomar tiempo.", "Utilice un enfoque de venta consultivo."],
      opportunities: ["Agroindustria", "Software y servicios IT", "Energías renovables"],
      mistakesToAvoid: ["Ser demasiado directo o agresivo.", "Ignorar la jerarquía.", "No mostrar interés por la cultura local."]
    }
  },
  {
    id: "bolivia",
    continent: "America",
    name: "Bolivia",
    capital: "Sucre (constitucional), La Paz (sede de gobierno)",
    languages: ["Español", "Aimara", "Quechua"],
    flagEmoji: "🇧🇴",
    countryCode: "bo",
    airports: [{ name: "El Alto International", iata: "LPB" }],
    routes: [{ path: "Lima - La Paz", travelTime: "1 día", airlines: ["LATAM"] }],
    currency: "Boliviano (BOB)",
    timezone: "UTC-4",
    coords: { lat: -16.4897, lon: -68.1193 },
    negotiation: {
      style: "Formal, jerárquico y basado en la confianza. La paciencia es clave.",
      culturalNorms: ["El regateo es común.", "Use títulos formales (Señor/Señora).", "Las relaciones personales son vitales."],
      paymentMethods: ["Transferencia bancaria", "Pago por adelantado"],
      tips: ["Sea respetuoso con la cultura indígena.", "Prepárese para negociaciones largas.", "Confirme los acuerdos por escrito."],
      opportunities: ["Minería (Litio)", "Textiles", "Alimentos orgánicos (quinua)"],
      mistakesToAvoid: ["Presionar para tomar decisiones rápidas.", "Criticar la situación política o social.", "Ser informal demasiado pronto."]
    }
  },
  {
    id: "brasil",
    continent: "America",
    name: "Brasil",
    capital: "Brasilia",
    languages: ["Portugués brasileño"],
    flagEmoji: "🇧🇷",
    countryCode: "br",
    airports: [
      { name: "Guarulhos International", iata: "GRU" },
      { name: "Galeão International", iata: "GIG" }
    ],
    routes: [
      { path: "Lima - Rio de Janeiro", travelTime: "1 día", airlines: ["LATAM"] },
      { path: "Lima - Sao Paulo", travelTime: "1 día", airlines: ["LATAM", "ATLAS Air"] }
    ],
    currency: "Real Brasileño (BRL)",
    timezone: "UTC-3 (Brasilia)",
    coords: { lat: -15.7942, lon: -47.8825 },
    negotiation: {
      style: "Relacional y flexible. El 'jeitinho brasileiro' (creatividad para resolver problemas) es parte de la cultura.",
      culturalNorms: ["La comunicación es indirecta y entusiasta.", "La apariencia personal es importante.", "Las reuniones suelen empezar con retraso."],
      paymentMethods: ["Transferencia bancaria", "Cartas de crédito"],
      tips: ["Invierta tiempo en socializar.", "Sea expresivo y amigable.", "Tenga un contacto local si es posible."],
      opportunities: ["Agronegocios", "Cosméticos", "Tecnología financiera (Fintech)"],
      mistakesToAvoid: ["Ser impaciente o rígido.", "Hablar de Argentina o política.", "Usar español en lugar de portugués."]
    }
  },
  {
    id: "canada",
    continent: "America",
    name: "Canadá",
    capital: "Ottawa",
    languages: ["Inglés", "Francés"],
    flagEmoji: "🇨🇦",
    countryCode: "ca",
    airports: [
      { name: "Toronto Pearson", iata: "YYZ" },
      { name: "Montréal-Trudeau", iata: "YUL" },
      { name: "Vancouver International", iata: "YVR" }
    ],
    routes: [
      { path: "Lima - Montreal", travelTime: "1 día", airlines: ["Air Canada"] },
      { path: "Lima - Toronto", travelTime: "1 día", airlines: ["Air Canada", "Northern Air Cargo"] },
      { path: "Lima - Vancouver", travelTime: "1 día", airlines: ["Copa Cargo"] }
    ],
    currency: "Dólar Canadiense (CAD)",
    timezone: "UTC-5 (Este)",
    coords: { lat: 45.4215, lon: -75.6972 },
    negotiation: {
      style: "Directo, profesional y basado en datos. La eficiencia es muy valorada.",
      culturalNorms: ["La puntualidad es fundamental.", "Se mantiene una clara separación entre la vida profesional y personal.", "La comunicación es educada y políticamente correcta."],
      paymentMethods: ["Transferencia bancaria", "Órdenes de compra"],
      tips: ["Prepare presentaciones claras y concisas.", "Sea puntual y respete la agenda.", "Enfoque en beneficios mutuos."],
      opportunities: ["Productos del mar", "Frutas y verduras frescas", "Textiles de alta calidad"],
      mistakesToAvoid: ["Ser demasiado informal o emocional.", "Hacer promesas exageradas.", "No cumplir con los plazos acordados."]
    }
  },
  {
    id: "chile",
    continent: "America",
    name: "Chile",
    capital: "Santiago",
    languages: ["Español chileno"],
    flagEmoji: "🇨🇱",
    countryCode: "cl",
    airports: [{ name: "Arturo Merino Benítez", iata: "SCL" }],
    routes: [{ path: "Lima - Santiago de Chile", travelTime: "1 día", airlines: ["LATAM", "JetSMART"] }],
    currency: "Peso Chileno (CLP)",
    timezone: "UTC-4",
    coords: { lat: -33.4489, lon: -70.6693 },
    negotiation: {
      style: "Formal, conservador y directo. Similar al estilo europeo.",
      culturalNorms: ["La puntualidad es importante.", "La jerarquía se respeta.", "Se valora la preparación y el conocimiento del tema."],
      paymentMethods: ["Transferencia bancaria", "Carta de crédito"],
      tips: ["Vístase formalmente.", "Presente datos y hechos para respaldar sus argumentos.", "Sea paciente, el proceso de decisión puede ser lento."],
      opportunities: ["Tecnología", "Industria alimentaria", "Servicios para la minería"],
      mistakesToAvoid: ["Ser demasiado informal.", "No estar bien preparado.", "Presionar para obtener una respuesta rápida."]
    }
  },
  {
    id: "colombia",
    continent: "America",
    name: "Colombia",
    capital: "Bogotá",
    languages: ["Español colombiano"],
    flagEmoji: "🇨🇴",
    countryCode: "co",
    airports: [
        { name: "El Dorado International", iata: "BOG" },
        { name: "José María Córdova", iata: "MDE" }
    ],
    routes: [
        { path: "Lima - Bogotá", travelTime: "1 día", airlines: ["Avianca Cargo", "LATAM"] },
        { path: "Lima - Medellín", travelTime: "1 día", airlines: ["Avianca"] }
    ],
    currency: "Peso Colombiano (COP)",
    timezone: "UTC-5",
    coords: { lat: 4.7110, lon: -74.0721 },
    negotiation: {
        style: "Relacional, formal y cortés. Se valora la 'palabra' y la confianza.",
        culturalNorms: ["Establecer una buena relación personal es crucial.", "Use títulos formales (Doctor/Doctora es común).", "La apariencia profesional es importante."],
        paymentMethods: ["Transferencia bancaria", "Pago contra entrega"],
        tips: ["Invierta tiempo en conversaciones informales.", "Sea paciente y persistente.", "Siempre confirme los acuerdos por escrito."],
        opportunities: ["Moda y confecciones", "Software y TI", "Materiales de construcción"],
        mistakesToAvoid: ["Ir directo al grano sin crear una relación.", "Ser impuntual.", "Criticar al país."]
    }
  },
  {
    id: "estados-unidos",
    continent: "America",
    name: "Estados Unidos",
    capital: "Washington, D.C.",
    languages: ["Inglés"],
    flagEmoji: "🇺🇸",
    countryCode: "us",
    airports: [
        { name: "Hartsfield-Jackson Atlanta", iata: "ATL" },
        { name: "Los Angeles International", iata: "LAX" },
        { name: "Miami International", iata: "MIA" },
        { name: "John F. Kennedy International", iata: "JFK" },
        { name: "Dulles International", iata: "IAD" },
        { name: "George Bush Intercontinental", iata: "IAH" }
    ],
    routes: [
        { path: "Lima - Atlanta", travelTime: "1 día", airlines: ["LATAM"] },
        { path: "Lima - Los Angeles", travelTime: "1 día", airlines: ["LATAM", "Centurion Air Cargo"] },
        { path: "Lima - Miami", travelTime: "1 día", airlines: ["LATAM", "American Airlines", "UPS", "FedEx"] },
        { path: "Lima - Nueva York", travelTime: "1 día", airlines: ["LATAM", "Delta"] },
        { path: "Lima - Washington D.C.", travelTime: "1 día", airlines: ["LATAM"] },
        { path: "Lima - Houston", travelTime: "1 día", airlines: ["Copa Cargo"] }
    ],
    currency: "Dólar Estadounidense (USD)",
    timezone: "Múltiples (e.g., UTC-5 a UTC-8)",
    coords: { lat: 38.9072, lon: -77.0369 },
    negotiation: {
        style: "Directo, rápido y enfocado en resultados. El tiempo es dinero.",
        culturalNorms: ["La puntualidad es extremadamente importante.", "La comunicación es explícita y directa.", "Se espera una agenda clara y se sigue rigurosamente."],
        paymentMethods: ["Transferencia bancaria (ACH)", "Cheque", "Tarjeta de crédito"],
        tips: ["Vaya directo al punto.", "Use datos y estadísticas para argumentar.", "Esté preparado para tomar decisiones rápidamente."],
        opportunities: ["Superalimentos (quinua, maca)", "Textiles de alpaca", "Productos agrícolas frescos"],
        mistakesToAvoid: ["Ser vago o indirecto.", "Llegar tarde a una reunión.", "No tener un 'bottom line' claro (precio final)."]
    }
  },
    {
    id: "alemania",
    continent: "Europa",
    name: "Alemania",
    capital: "Berlín",
    languages: ["Alemán"],
    flagEmoji: "🇩🇪",
    countryCode: "de",
    airports: [
      { name: "Frankfurt Airport", iata: "FRA" },
      { name: "Berlin Brandenburg Airport", iata: "BER" },
    ],
    routes: [
        { path: "Lima - Frankfurt", travelTime: "2 días", airlines: ["LATAM", "Lufthansa"] },
        { path: "Lima - Amsterdam - Berlin", travelTime: "3 días", airlines: ["KLM", "LATAM"] }
    ],
    currency: "Euro (EUR)",
    timezone: "UTC+2",
    coords: { lat: 52.5200, lon: 13.4050 },
    negotiation: {
      style: "Directo, formal, basado en hechos y lógica. La preparación es clave.",
      culturalNorms: ["La puntualidad es sagrada.", "Se respeta la jerarquía y los títulos.", "Las decisiones se basan en datos, no en emociones."],
      paymentMethods: ["Transferencia SEPA", "Factura a 30 días"],
      tips: ["Esté extremadamente bien preparado con datos y detalles.", "Siga la agenda al pie de la letra.", "Evite la charla personal en reuniones de negocios."],
      opportunities: ["Frutas exóticas", "Café de especialidad", "Productos orgánicos"],
      mistakesToAvoid: ["Llegar tarde.", "Ser demasiado emocional o personal.", "No cumplir con lo prometido."]
    }
  },
   {
    id: "espana",
    continent: "Europa",
    name: "España",
    capital: "Madrid",
    languages: ["Español"],
    flagEmoji: "🇪🇸",
    countryCode: "es",
    airports: [{ name: "Adolfo Suárez Madrid–Barajas", iata: "MAD" }],
    routes: [{ path: "Lima - Madrid", travelTime: "2 días", airlines: ["Air Europa", "LATAM", "Iberia", "Plus Ultra"] }],
    currency: "Euro (EUR)",
    timezone: "UTC+2",
    coords: { lat: 40.4168, lon: -3.7038 },
    negotiation: {
      style: "Relacional pero enfocado en el negocio. Menos formal que en Alemania, pero más que en Latinoamérica.",
      culturalNorms: ["Las reuniones pueden empezar un poco tarde.", "Construir una relación es importante.", "Las comidas de negocios son comunes y largas."],
      paymentMethods: ["Transferencia SEPA", "Confirming"],
      tips: ["Sea paciente, el proceso puede ser burocrático.", "No se ofenda por las interrupciones, es parte del estilo de conversación.", "Vístase bien."],
      opportunities: ["Pescado y mariscos congelados", "Espárragos", "Prendas de algodón"],
      mistakesToAvoid: ["Ser demasiado directo al estilo anglosajón.", "Rechazar una invitación a comer.", "No dar seguimiento a las conversaciones."]
    }
  },
  {
    id: "china",
    continent: "Asia",
    name: "China",
    capital: "Pekín",
    languages: ["Mandarín estándar"],
    flagEmoji: "🇨🇳",
    countryCode: "cn",
    airports: [
        { name: "Beijing Capital International", iata: "PEK" },
        { name: "Shanghai Pudong International", iata: "PVG" }
    ],
    routes: [
        { path: "Lima - Miami - Beijing", travelTime: "4 días", airlines: ["ATLAS Air"] },
        { path: "Lima - Los Angeles - Seúl - Shanghai", travelTime: "4 días", airlines: ["Korean Air"] }
    ],
    currency: "Yuan Renminbi (CNY)",
    timezone: "UTC+8",
    coords: { lat: 39.9042, lon: 116.4074 },
    negotiation: {
        style: "Indirecto, jerárquico y basado en el 'guanxi' (red de contactos). Salvar la 'cara' (reputación) es primordial.",
        culturalNorms: ["El intercambio de tarjetas de visita (con ambas manos) es un ritual.", "La jerarquía es estricta.", "El 'no' directo se evita; se usan respuestas ambiguas."],
        paymentMethods: ["Carta de crédito", "Transferencia TT (Telegraphic Transfer)"],
        tips: ["Tenga un intermediario o contacto local.", "Sea extremadamente paciente.", "Regalar es una práctica común, pero con reglas."],
        opportunities: ["Cobre y otros minerales", "Frutas (arándanos, uvas)", "Productos pesqueros"],
        mistakesToAvoid: ["Hacer perder la 'cara' a alguien.", "Ser impaciente.", "No entender la importancia del 'guanxi'."]
    }
  }
];