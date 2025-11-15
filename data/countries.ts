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
    routes: [
      { path: "Lima - Buenos Aires", travelTime: "1 día", airlines: ["JetSMART", "LATAM"] },
      { path: "Lima - Bogotá - Buenos Aires", travelTime: "2 días", airlines: ["LATAM"] }
    ],
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
    capital: "Sucre",
    languages: ["Idioma aimara", "Lenguas de Bolivia", "Idioma guaraní", "Lenguas quechuas", "Español boliviano"],
    flagEmoji: "🇧🇴",
    countryCode: "bo",
    airports: [{ name: "El Alto International", iata: "LPB" }],
    routes: [
      { path: "Lima - La Paz", travelTime: "1 día", airlines: ["BOA - Boliviana de Aviación"] },
      { path: "Lima- Santiago de Chile - La Paz", travelTime: "1 día", airlines: ["LATAM"] }
    ],
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
    languages: ["Idioma portugués"],
    flagEmoji: "🇧🇷",
    countryCode: "br",
    airports: [
      { name: "Galeão International", iata: "GIG" },
      { name: "Guarulhos International", iata: "GRU" }
    ],
    routes: [
      { path: "Lima - Bogotá - Rio de Janeiro", travelTime: "2 días", airlines: ["LATAM"] },
      { path: "Lima - Sao Paulo", travelTime: "1 día", airlines: ["LATAM"] },
      { path: "Lima - Sao Paulo", travelTime: "1 día", airlines: ["ATLAS Air"] },
      { path: "Lima - Bogotá - Sao Paulo", travelTime: "2 días", airlines: ["LATAM"] }
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
    languages: ["Francés canadiense", "Inglés canadiense"],
    flagEmoji: "🇨🇦",
    countryCode: "ca",
    airports: [
      { name: "Montréal-Trudeau", iata: "YUL" },
      { name: "Québec City Jean Lesage", iata: "YQB" },
      { name: "Toronto Pearson", iata: "YYZ" },
      { name: "Vancouver International", iata: "YVR" }
    ],
    routes: [
      { path: "Lima - Montreal", travelTime: "1 día", airlines: ["Air Canada"] },
      { path: "Lima - Toronto - Quebec", travelTime: "2 días", airlines: ["Air Canada"] },
      { path: "Lima - Toronto", travelTime: "1 día", airlines: ["Air Canada", "Northern Air Cargo"] },
      { path: "Lima - Panamá - Toronto", travelTime: "3 días", airlines: ["Copa Cargo"] },
      { path: "Lima - Bogotá - Toronto", travelTime: "3 días", airlines: ["Avianca"] },
      { path: "Lima - Ciudad de México - Vancouver", travelTime: "3 días", airlines: ["Aeroméxico"] }
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
    languages: ["Idioma español"],
    flagEmoji: "🇨🇱",
    countryCode: "cl",
    airports: [{ name: "Arturo Merino Benítez", iata: "SCL" }],
    routes: [{ path: "Lima - Bogotá - Santiago de Chile", travelTime: "2 dias", airlines: ["Avianca", "Líneas Aéreas Sudamericanas"] }],
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
        { name: "Ernesto Cortissoz International", iata: "BAQ" },
        { name: "Olaya Herrera", iata: "EOH" }
    ],
    routes: [
        { path: "Lima - Bogotá - Barranquilla", travelTime: "2 dias", airlines: ["Avianca"] },
        { path: "Lima - Bogotá - Medellin", travelTime: "2 dias", airlines: ["Avianca", "Líneas Aéreas Sudamericanas"] }
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
    id: "costa-rica",
    continent: "America",
    name: "Costa Rica",
    capital: "San José",
    languages: ["Español costarricense"],
    flagEmoji: "🇨🇷",
    countryCode: "cr",
    airports: [{ name: "Juan Santamaría International", iata: "SJO" }],
    routes: [
      { path: "Lima - Miami - San Jose", travelTime: "3 dias", airlines: ["Air Carebean", "LATAM"] },
      { path: "Lima - Bogotá - San Jose", travelTime: "3 dias", airlines: ["Avianca"] }
    ],
    currency: "Colón Costarricense (CRC)",
    timezone: "UTC-6",
    coords: { lat: 9.9281, lon: -84.0907 },
    negotiation: {
      style: "Amistoso, educado y menos formal. 'Pura Vida' se refleja en los negocios. Valoran la sostenibilidad.",
      culturalNorms: ["La puntualidad es apreciada, pero puede haber cierta flexibilidad.", "Evitar la confrontación directa.", "Las relaciones personales son importantes."],
      paymentMethods: ["Transferencia bancaria", "Pago por adelantado"],
      tips: ["Muestre interés en la ecología y sostenibilidad.", "Sea paciente y amigable.", "El 'tuteo' es común pero espere a que lo inicien."],
      opportunities: ["Dispositivos médicos", "Productos agrícolas frescos (piña, café)", "Ecoturismo"],
      mistakesToAvoid: ["Ser arrogante o impaciente.", "Criticar la burocracia local.", "Ignorar las políticas ambientales."]
    }
  },
  {
    id: "cuba",
    continent: "America",
    name: "Cuba",
    capital: "La Habana",
    languages: ["Español cubano"],
    flagEmoji: "🇨🇺",
    countryCode: "cu",
    airports: [{ name: "José Martí International", iata: "HAV" }],
    routes: [{ path: "Lima - Panamá - La Habana", travelTime: "3 dias", airlines: ["Copa Cargo"] }],
    currency: "Peso Cubano (CUP)",
    timezone: "UTC-5",
    coords: { lat: 23.1136, lon: -82.3666 },
    negotiation: {
      style: "Lento, burocrático y centralizado a través de entidades estatales. La paciencia y la perseverancia son cruciales.",
      culturalNorms: ["Las decisiones son tomadas por comités, no individuos.", "Las relaciones con funcionarios del gobierno son clave.", "La hospitalidad es importante."],
      paymentMethods: ["Carta de crédito irrevocable y confirmada", "Pago por adelantado"],
      tips: ["Entienda que negocia con el Estado, no con una empresa privada.", "Sea extremadamente paciente.", "Traiga todos los documentos por duplicado."],
      opportunities: ["Alimentos", "Suministros médicos", "Turismo"],
      mistakesToAvoid: ["Discutir de política.", "Esperar decisiones rápidas.", "Subestimar la burocracia."]
    }
  },
  {
    id: "curazao",
    continent: "America",
    name: "Curazao",
    capital: "Willemstad",
    languages: ["Neerlandés", "Papiamento", "Inglés"],
    flagEmoji: "🇨🇼",
    countryCode: "cw",
    airports: [{ name: "Hato International Airport", iata: "CUR" }],
    routes: [{ path: "Lima - Miami - Curazao", travelTime: "3 dias", airlines: ["American Airlines", "Jetblue Airways"] }],
    currency: "Florín Antillano Neerlandés (ANG)",
    timezone: "UTC-4",
    coords: { lat: 12.1696, lon: -68.9900 },
    negotiation: {
      style: "Mezcla de estilos europeo (holandés) y caribeño. Profesional pero relajado. El inglés es común en los negocios.",
      culturalNorms: ["La puntualidad es importante.", "Las negociaciones son directas.", "Se aprecia un enfoque amigable y social."],
      paymentMethods: ["Transferencia bancaria", "Tarjeta de crédito"],
      tips: ["Use el inglés para los negocios.", "Combine profesionalismo con un trato cordial.", "Confirme acuerdos por escrito."],
      opportunities: ["Servicios financieros", "Turismo", "Logística y centro de distribución"],
      mistakesToAvoid: ["Ser demasiado informal o demasiado rígido.", "No apreciar la cultura local.", "Ignorar su rol como hub logístico."]
    }
  },
  {
    id: "ecuador",
    continent: "America",
    name: "Ecuador",
    capital: "Quito",
    languages: ["Idioma español"],
    flagEmoji: "🇪🇨",
    countryCode: "ec",
    airports: [{ name: "Mariscal Sucre International", iata: "UIO" }, { name: "José Joaquín de Olmedo", iata: "GYE" }],
    routes: [
      { path: "Lima - Guayaquil", travelTime: "2 dias", airlines: ["Copa Cargo"] },
      { path: "Lima - Quito", travelTime: "1 día", airlines: ["LATAM"] }
    ],
    currency: "Dólar Estadounidense (USD)",
    timezone: "UTC-5",
    coords: { lat: -0.1807, lon: -78.4678 },
    negotiation: {
      style: "Formal y respetuoso de la jerarquía. La relación personal es un paso previo importante.",
      culturalNorms: ["Use títulos formales.", "La primera reunión es para conocerse, no para cerrar tratos.", "La puntualidad es esperada, aunque ellos puedan ser flexibles."],
      paymentMethods: ["Transferencia bancaria", "Pago anticipado"],
      tips: ["Construya confianza antes de hablar de negocios.", "Sea respetuoso con las personas de mayor edad o rango.", "Negocie en persona si es posible."],
      opportunities: ["Flores", "Camarón y pescado", "Frutas (banano, cacao)"],
      mistakesToAvoid: ["Ser demasiado directo o impaciente.", "Ignorar la jerarquía.", "Confundir Ecuador con otros países andinos."]
    }
  },
  {
    id: "el-salvador",
    continent: "America",
    name: "El Salvador",
    capital: "San Salvador",
    languages: ["Español salvadoreño"],
    flagEmoji: "🇸🇻",
    countryCode: "sv",
    airports: [{ name: "Monseñor Óscar Arnulfo Romero International", iata: "SAL" }],
    routes: [
      { path: "Lima - Ciudad de México - San Salvador", travelTime: "3 dias", airlines: ["Aeroméxico"] },
      { path: "Lima - Panamá - San Salvador", travelTime: "3 dias", airlines: ["Copa Cargo"] }
    ],
    currency: "Dólar Estadounidense (USD)",
    timezone: "UTC-6",
    coords: { lat: 13.6929, lon: -89.2182 },
    negotiation: { style: "Relacional y algo informal. Se valora la confianza y la cortesía.", culturalNorms: ["La puntualidad es flexible.", "Las reuniones suelen comenzar con charla personal.", "El regateo es parte del proceso."], paymentMethods: ["Transferencia bancaria", "Pago contra entrega"], tips: ["Construya una buena relación.", "Sea paciente y flexible.", "Confirme todo por escrito."], opportunities: ["Textiles y confección", "Café", "Servicios de call center"], mistakesToAvoid: ["Ser impaciente o agresivo.", "Ignorar la importancia de los contactos personales.", "Discutir sobre seguridad o política."] }
  },
  {
    id: "estados-unidos",
    continent: "America",
    name: "Estados Unidos",
    capital: "Washington, D.C.",
    languages: ["Idioma inglés"],
    flagEmoji: "🇺🇸",
    countryCode: "us",
    airports: [
        { name: "Hartsfield-Jackson Atlanta", iata: "ATL" },
        { name: "Fort Lauderdale-Hollywood Int'l", iata: "FLL" },
        { name: "George Bush Intercontinental", iata: "IAH" },
        { name: "Los Angeles International", iata: "LAX" },
        { name: "Miami International", iata: "MIA" },
        { name: "John F. Kennedy International", iata: "NYC" },
        { name: "Dulles International", iata: "IAD" }
    ],
    routes: [
      { path: "Lima - Atlanta", travelTime: "1 día", airlines: ["Delta"] },
      { path: "Lima - Miami - Atlanta", travelTime: "3 días", airlines: ["American Airlines"] },
      { path: "Lima - Panamá - Fort Lauderdale", travelTime: "3 días", airlines: ["Copa Cargo"] },
      { path: "Lima - Houston", travelTime: "1 día", airlines: ["United Airlines"] },
      { path: "Lima - Los Angeles", travelTime: "1 día", airlines: ["Air Korean", "LATAM"] },
      { path: "Lima - Ciudad de México - Los Angeles", travelTime: "3 días", airlines: ["Aeroméxico"] },
      { path: "Lima - Miami - Los Angeles", travelTime: "3 días", airlines: ["American Airlines", "LATAM"] },
      { path: "Lima - Bogotá - Los Angeles", travelTime: "3 días", airlines: ["Avianca"] },
      { path: "Lima - Miami", travelTime: "1 día", airlines: ["Etihad Airways"] },
      { path: "Lima - Miami", travelTime: "1 día", airlines: ["AirMax Cargo", "Icaro Air"] },
      { path: "Lima - Miami", travelTime: "1 día", airlines: ["Amerijet International", "Kalitta Air"] },
      { path: "Lima - Miami", travelTime: "1 día", airlines: ["ATLAS Air", "Northern Air Cargo"] },
      { path: "Lima - Miami", travelTime: "1 día", airlines: ["LATAM"] },
      { path: "Lima - Miami", travelTime: "1 día", airlines: ["Air Carebean"] },
      { path: "Lima - Santiago de Chile - Miami", travelTime: "3 días", airlines: ["Sky Lease Cargo"] },
      { path: "Lima - Bogotá - Miami", travelTime: "3 días", airlines: ["Avianca"] },
      { path: "Lima - Bogotá - Miami", travelTime: "3 días", airlines: ["Sky Lease Cargo"] },
      { path: "Lima - Miami - Nueva York", travelTime: "3 días", airlines: ["Aeroméxico", "LATAM"] },
      { path: "Lima - Atlanta - Nueva York", travelTime: "3 días", airlines: ["Delta"] },
      { path: "Lima - Atlanta - Washington", travelTime: "3 días", airlines: ["Delta"] }
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
    id: "guatemala",
    continent: "America",
    name: "Guatemala",
    capital: "Ciudad de Guatemala",
    languages: ["Español guatemalteco"],
    flagEmoji: "🇬🇹",
    countryCode: "gt",
    airports: [{ name: "La Aurora International", iata: "GUA" }],
    routes: [{ path: "Lima - Bogotá - Guatemala", travelTime: "3 días", airlines: ["Avianca"] }],
    currency: "Quetzal (GTQ)",
    timezone: "UTC-6",
    coords: { lat: 14.6349, lon: -90.5069 },
    negotiation: { style: "Formal, jerárquico y conservador. Las relaciones personales son fundamentales.", culturalNorms: ["Use títulos formales.", "La primera reunión es para establecer confianza.", "Las decisiones las toma la alta gerencia."], paymentMethods: ["Transferencia bancaria", "Carta de crédito"], tips: ["Vístase de forma conservadora.", "Sea respetuoso y cortés.", "Invierta tiempo en construir una relación."], opportunities: ["Café", "Azúcar", "Cardamomo", "Textiles"], mistakesToAvoid: ["Ser demasiado informal.", "Presionar para una decisión rápida.", "Ignorar la cultura y tradiciones mayas."] }
  },
  {
    id: "mexico",
    continent: "America",
    name: "México",
    capital: "Ciudad de México",
    languages: ["Español mexicano"],
    flagEmoji: "🇲🇽",
    countryCode: "mx",
    airports: [{ name: "Benito Juárez International", iata: "MEX" }],
    routes: [{ path: "Lima - Ciudad de México", travelTime: "1 día", airlines: ["Copa Cargo"] }],
    currency: "Peso Mexicano (MXN)",
    timezone: "UTC-6 (Centro)",
    coords: { lat: 19.4326, lon: -99.1332 },
    negotiation: { style: "Relacional y jerárquico. Se valora la diplomacia y la simpatía personal.", culturalNorms: ["La puntualidad es importante para los extranjeros, aunque los locales pueden ser flexibles.", "Las comidas de negocios son clave para construir relaciones.", "El regateo es esperado."], paymentMethods: ["Transferencia SPEI", "Carta de crédito"], tips: ["Construya una relación personal antes de hablar de negocios.", "Sea paciente, las negociaciones pueden ser largas.", "Muestre respeto por la cultura mexicana."], opportunities: ["Automotriz", "Electrónica", "Aguacates y berries"], mistakesToAvoid: ["Ser arrogante o demasiado directo.", "Criticar a México.", "Confundir la cultura mexicana con la de otros países latinos."] }
  },
  {
    id: "panama",
    continent: "America",
    name: "Panamá",
    capital: "Ciudad de Panamá",
    languages: ["Español panameño"],
    flagEmoji: "🇵🇦",
    countryCode: "pa",
    airports: [{ name: "Tocumen International", iata: "PTY" }],
    routes: [{ path: "Lima - Panamá", travelTime: "2 días", airlines: ["Copa Cargo"] }],
    currency: "Balboa (PAB), Dólar Estadounidense (USD)",
    timezone: "UTC-5",
    coords: { lat: 8.9824, lon: -79.5199 },
    negotiation: { style: "Directo, profesional y rápido, influenciado por la cultura estadounidense. El inglés es muy común.", culturalNorms: ["La puntualidad es importante.", "Las reuniones son eficientes y van al grano.", "La red de contactos es valiosa."], paymentMethods: ["Transferencia bancaria", "USD es la moneda de facto"], tips: ["Esté preparado y sea conciso.", "El inglés es una ventaja.", "Aproveche su estatus de hub logístico."], opportunities: ["Servicios financieros y logísticos", "Zona Libre de Colón", "Turismo"], mistakesToAvoid: ["Ser impuntual.", "No estar preparado.", "Subestimar la sofisticación de su sector de servicios."] }
  },
  {
    id: "paraguay",
    continent: "America",
    name: "Paraguay",
    capital: "Asunción",
    languages: ["Español paraguayo", "Idioma guaraní"],
    flagEmoji: "🇵🇾",
    countryCode: "py",
    airports: [{ name: "Silvio Pettirossi International", iata: "ASU" }],
    routes: [{ path: "Lima - Asunción", travelTime: "1 día", airlines: ["LATAM"] }],
    currency: "Guaraní (PYG)",
    timezone: "UTC-4",
    coords: { lat: -25.2637, lon: -57.5759 },
    negotiation: { style: "Conservador, formal y basado en relaciones personales. La confianza es fundamental.", culturalNorms: ["La puntualidad es apreciada.", "Use títulos formales.", "Las negociaciones son lentas, la paciencia es una virtud."], paymentMethods: ["Transferencia bancaria", "Carta de crédito"], tips: ["Construya relaciones sólidas.", "Sea paciente y no presione.", "Aprender algunas frases en guaraní es un gesto muy apreciado."], opportunities: ["Carne bovina", "Soja", "Energía hidroelectrica"], mistakesToAvoid: ["Ser demasiado informal o directo.", "Ignorar la cultura bilingüe (español-guaraní).", "Apariencia descuidada."] }
  },
  {
    id: "uruguay",
    continent: "America",
    name: "Uruguay",
    capital: "Montevideo",
    languages: ["Español rioplatense", "Lengua de señas uruguaya"],
    flagEmoji: "🇺🇾",
    countryCode: "uy",
    airports: [{ name: "Carrasco International", iata: "MVD" }],
    routes: [
        { path: "Lima - Buenos Aires - Montevideo", travelTime: "2 días", airlines: ["Aerolíneas Argentinas"] },
        { path: "Lima - Bogotá - Montevideo", travelTime: "2 días", airlines: ["Avianca"] }
    ],
    currency: "Peso Uruguayo (UYU)",
    timezone: "UTC-3",
    coords: { lat: -34.9011, lon: -56.1645 },
    negotiation: { style: "Formal, conservador y algo reservado. Se valora la sustancia sobre el estilo.", culturalNorms: ["La puntualidad es esperada.", "La vestimenta es formal.", "Las negociaciones son directas pero educadas."], paymentMethods: ["Transferencia bancaria", "Carta de crédito"], tips: ["Sea modesto y evite la ostentación.", "Presente propuestas bien fundamentadas y lógicas.", "Sea paciente, las decisiones son meditadas."], opportunities: ["Software y servicios TI", "Carne de alta calidad", "Celulosa"], mistakesToAvoid: ["Ser jactancioso o arrogante.", "Hacer promesas que no puede cumplir.", "Confundir Uruguay con Paraguay o Argentina."] }
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
    id: "belgica",
    continent: "Europa",
    name: "Bélgica",
    capital: "Bruselas",
    languages: ["Idioma neerlandés", "Idioma alemán", "Idioma francés"],
    flagEmoji: "🇧🇪",
    countryCode: "be",
    airports: [{ name: "Brussels Airport", iata: "BRU" }],
    routes: [{ path: "Lima - Amsterdam - Bruselas", travelTime: "3 dias", airlines: ["Iberia", "KLM"] }],
    currency: "Euro (EUR)",
    timezone: "UTC+2",
    coords: { lat: 50.8503, lon: 4.3517 },
    negotiation: { style: "Pragmático, formal y multilingüe. El estilo puede variar entre la región flamenca (más directa) y la valona (más relacional).", culturalNorms: ["La puntualidad es esencial.", "La modestia es una virtud.", "Las negociaciones están bien estructuradas."], paymentMethods: ["Transferencia SEPA"], tips: ["Sepa con quién está tratando (flamenco o valón).", "Sea profesional y esté bien preparado.", "El inglés es ampliamente aceptado."], opportunities: ["Chocolate", "Cerveza", "Productos químicos y farmacéuticos"], mistakesToAvoid: ["Llegar tarde.", "Ser demasiado personal demasiado rápido.", "Confundir las diferentes regiones y culturas del país."] }
  },
   {
    id: "espana",
    continent: "Europa",
    name: "España",
    capital: "Madrid",
    languages: ["Idioma español"],
    flagEmoji: "🇪🇸",
    countryCode: "es",
    airports: [{ name: "Adolfo Suárez Madrid–Barajas", iata: "MAD" }],
    routes: [
      { path: "Lima - Madrid", travelTime: "2 dias", airlines: ["Air Europa", "LATAM", "Plus Ultra Líneas Aéreas"] },
      { path: "Lima - Madrid", travelTime: "2 dias", airlines: ["Iberia"] },
      { path: "Lima - Bogotá - Madrid", travelTime: "3 dias", airlines: ["Avianca", "Líneas Aéreas Sudamericanas"] },
      { path: "Lima - Amsterdam - Madrid", travelTime: "3 dias", airlines: ["KLM"] },
    ],
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
    id: "francia",
    continent: "Europa",
    name: "Francia",
    capital: "París",
    languages: ["Idioma francés"],
    flagEmoji: "🇫🇷",
    countryCode: "fr",
    airports: [{ name: "Charles de Gaulle", iata: "CDG" }],
    routes: [
        { path: "Lima - Paris", travelTime: "2 dias", airlines: ["Air France"] },
        { path: "Lima - Amsterdam - Paris", travelTime: "3 dias", airlines: ["KLM"] }
    ],
    currency: "Euro (EUR)",
    timezone: "UTC+2",
    coords: { lat: 48.8566, lon: 2.3522 },
    negotiation: { style: "Formal, jerárquico y analítico. Se valora el debate lógico y la elocuencia.", culturalNorms: ["La puntualidad es importante.", "El idioma francés es muy apreciado.", "Las decisiones son tomadas por la alta dirección."], paymentMethods: ["Transferencia SEPA", "Cheque"], tips: ["Intente hablar francés, aunque sea un poco.", "Prepárese para un análisis detallado de su propuesta.", "Las comidas de negocios son importantes para la relación."], opportunities: ["Lujo y moda", "Vino y gastronomía", "Aeronáutica"], mistakesToAvoid: ["Hablar inglés asumiendo que todos lo harán.", "Ser demasiado informal.", "Apresurar las negociaciones."] }
  },
  {
    id: "reino-unido",
    continent: "Europa",
    name: "Inglaterra",
    capital: "Londres",
    languages: ["Idioma inglés"],
    flagEmoji: "🇬🇧",
    countryCode: "gb",
    airports: [{ name: "Heathrow Airport", iata: "LHR" }],
    routes: [
      { path: "Lima - Bogotá - Londres", travelTime: "3 dias", airlines: ["Líneas Aéreas Sudamericanas"] },
      { path: "Lima - Paris - Londres", travelTime: "3 dias", airlines: ["Air France"] }
    ],
    currency: "Libra Esterlina (GBP)",
    timezone: "UTC+1",
    coords: { lat: 51.5074, lon: -0.1278 },
    negotiation: { style: "Educado, reservado y pragmático. La comunicación puede ser indirecta y se valora el 'understatement' (la subestimación).", culturalNorms: ["La puntualidad es crucial.", "Se mantiene una clara separación entre negocios y vida personal.", "El humor, a menudo irónico, es común."], paymentMethods: ["Transferencia BACS", "Factura"], tips: ["Sea siempre puntual.", "Sea educado y evite ser demasiado emocional.", "Lea entre líneas; 'interesante' puede no ser un cumplido."], opportunities: ["Servicios financieros", "Tecnología", "Productos gourmet"], mistakesToAvoid: ["Ser impuntual.", "Ser demasiado directo o ruidoso.", "Confundir Inglaterra con Gran Bretaña o el Reino Unido."] }
  },
  {
    id: "israel",
    continent: "Europa",
    name: "Israel",
    capital: "Jerusalén",
    languages: ["Modern Hebrew"],
    flagEmoji: "🇮🇱",
    countryCode: "il",
    airports: [{ name: "Ben Gurion Airport", iata: "TLV" }],
    routes: [{ path: "Lima - Amsterdam - Tel Aviv", travelTime: "3 dias", airlines: ["KLM"] }],
    currency: "Nuevo Shéquel Israelí (ILS)",
    timezone: "UTC+3",
    coords: { lat: 31.7683, lon: 35.2137 },
    negotiation: { style: "Directo, asertivo y rápido. Se valora la eficiencia y la innovación.", culturalNorms: ["El estilo de comunicación es muy directo, casi brusco.", "La jerarquía es menos importante que la competencia.", "Las negociaciones son duras pero justas."], paymentMethods: ["Transferencia bancaria"], tips: ["Vaya directo al grano.", "No se ofenda por la franqueza.", "Esté preparado para un ritmo rápido."], opportunities: ["Alta tecnología (startups)", "Diamantes", "Productos agrícolas tecnológicos"], mistakesToAvoid: ["Ser vago o indeciso.", "Tomar la franqueza como algo personal.", "No estar preparado para negociar duro."] }
  },
  {
    id: "italia",
    continent: "Europa",
    name: "Italia",
    capital: "Roma",
    languages: ["Idioma italiano"],
    flagEmoji: "🇮🇹",
    countryCode: "it",
    airports: [
      { name: "Milan Malpensa", iata: "MXP" },
      { name: "Leonardo da Vinci–Fiumicino", iata: "FCO" }
    ],
    routes: [
      { path: "Lima - Madrid - Milan", travelTime: "3 dias", airlines: ["Air Europa"] },
      { path: "Lima - Amsterdam - Milan", travelTime: "3 dias", airlines: ["KLM"] },
      { path: "Lima - Madrid - Roma", travelTime: "3 dias", airlines: ["Air Europa"] }
    ],
    currency: "Euro (EUR)",
    timezone: "UTC+2",
    coords: { lat: 41.9028, lon: 12.4964 },
    negotiation: { style: "Relacional, flexible y centrado en la persona. La 'bella figura' (causar una buena impresión) es importante.", culturalNorms: ["La apariencia y el estilo son importantes.", "Construir una relación personal es clave.", "Las decisiones pueden ser lentas y se basan en la confianza."], paymentMethods: ["Transferencia SEPA", "Ri.Ba. (Recibo Bancario)"], tips: ["Invierta tiempo en conocer a sus socios.", "Vístase bien.", "Sea paciente y flexible."], opportunities: ["Moda y diseño", "Maquinaria industrial", "Alimentos y vino"], mistakesToAvoid: ["Apresurar la construcción de la relación.", "Criticar la burocracia o la política local.", "Vestir de manera informal para una reunión."] }
  },
  {
    id: "paises-bajos",
    continent: "Europa",
    name: "Países Bajos",
    capital: "Amsterdam",
    languages: ["Idioma neerlandés"],
    flagEmoji: "🇳🇱",
    countryCode: "nl",
    airports: [{ name: "Amsterdam Airport Schiphol", iata: "AMS" }],
    routes: [{ path: "Lima - Amsterdam", travelTime: "2 dias", airlines: ["KLM", "LATAM"] }],
    currency: "Euro (EUR)",
    timezone: "UTC+2",
    coords: { lat: 52.3676, lon: 4.9041 },
    negotiation: { style: "Directo, pragmático y orientado al consenso. El inglés es universalmente hablado.", culturalNorms: ["La puntualidad es estricta.", "La comunicación es extremadamente directa.", "Las reuniones son eficientes y se busca el acuerdo de todos."], paymentMethods: ["Transferencia SEPA", "iDEAL"], tips: ["Sea directo y honesto.", "Esté preparado para preguntas directas.", "Enfoque en una situación 'win-win'."], opportunities: ["Flores", "Agroalimentario", "Logística (Puerto de Rotterdam)"], mistakesToAvoid: ["Llegar tarde.", "Ser vago o indirecto.", "Prometer más de lo que puede cumplir."] }
  },
  {
    id: "portugal",
    continent: "Europa",
    name: "Portugal",
    capital: "Lisboa",
    languages: ["Idioma portugués"],
    flagEmoji: "🇵🇹",
    countryCode: "pt",
    airports: [{ name: "Lisbon Airport", iata: "LIS" }],
    routes: [{ path: "Lima - Lisboa", travelTime: "2 dias", airlines: ["TAP Portugal"] }],
    currency: "Euro (EUR)",
    timezone: "UTC+1",
    coords: { lat: 38.7223, lon: -9.1393 },
    negotiation: { style: "Relacional, formal y algo conservador. La cortesía y el respeto son muy importantes.", culturalNorms: ["La puntualidad es apreciada.", "Se valora una relación personal.", "La jerarquía es respetada."], paymentMethods: ["Transferencia SEPA"], tips: ["Construya una relación basada en la confianza.", "Sea paciente, las decisiones no son inmediatas.", "Un enfoque modesto y educado funciona mejor."], opportunities: ["Corcho", "Calzado", "Turismo y tecnología"], mistakesToAvoid: ["Ser arrogante o demasiado ruidoso.", "Asumir que son como los españoles.", "Presionar para tomar decisiones rápidas."] }
  },
  {
    id: "suiza",
    continent: "Europa",
    name: "Suiza",
    capital: "Berna",
    languages: ["Alemán", "Francés", "Italiano"],
    flagEmoji: "🇨🇭",
    countryCode: "ch",
    airports: [{ name: "Zurich Airport", iata: "ZRH" }],
    routes: [{ path: "Lima - Madrid - Zúrich", travelTime: "2 días", airlines: ["LATAM", "Iberia"] }],
    currency: "Franco Suizo (CHF)",
    timezone: "UTC+2",
    coords: { lat: 46.9480, lon: 7.4474 },
    negotiation: { style: "Conservador, formal, y extremadamente puntual. La calidad y la precisión son primordiales.", culturalNorms: ["La puntualidad es una obsesión.", "Las reuniones son serias y están bien estructuradas.", "La privacidad es muy valorada."], paymentMethods: ["Transferencia bancaria"], tips: ["Sea puntual a toda costa.", "Esté muy bien preparado con una propuesta de alta calidad.", "Sea discreto y profesional."], opportunities: ["Relojería", "Farmacéutica", "Servicios financieros"], mistakesToAvoid: ["Llegar tarde.", "Ser demasiado informal o personal.", "Hacer preguntas sobre la vida privada."] }
  },
  {
    id: "china",
    continent: "Asia",
    name: "República Popular China",
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
  },
  {
    id: "corea-del-sur",
    continent: "Asia",
    name: "Corea del Sur",
    capital: "Seúl",
    languages: ["Coreano"],
    flagEmoji: "🇰🇷",
    countryCode: "kr",
    airports: [{ name: "Incheon International", iata: "ICN" }],
    routes: [{ path: "Lima - Los Angeles - Seúl", travelTime: "3 días", airlines: ["Korean Air"] }],
    currency: "Won Surcoreano (KRW)",
    timezone: "UTC+9",
    coords: { lat: 37.5665, lon: 126.9780 },
    negotiation: { style: "Jerárquico, formal y rápido. 'Pali-pali' (rápido-rápido) es una filosofía. Se valora la armonía del grupo.", culturalNorms: ["La edad y el estatus son muy importantes.", "El intercambio de tarjetas de visita es un ritual.", "El 'no' directo se evita para mantener la armonía."], paymentMethods: ["Transferencia bancaria", "Carta de crédito"], tips: ["Muestre respeto a los mayores.", "Sea eficiente y rápido en sus respuestas.", "Socializar (beber) después del trabajo es clave para la relación."], opportunities: ["Electrónica", "Automóviles", "Cosméticos (K-Beauty)"], mistakesToAvoid: ["Desafiar a un superior.", "Rechazar una invitación a beber.", "Ser impaciente con la construcción de la relación inicial."] }
  },
  {
    id: "emiratos-arabes-unidos",
    continent: "Asia",
    name: "Emiratos Árabes Unidos",
    capital: "Abu Dabi",
    languages: ["Árabe estándar moderno"],
    flagEmoji: "🇦🇪",
    countryCode: "ae",
    airports: [
        { name: "Abu Dhabi International", iata: "AUH" },
        { name: "Dubai International", iata: "DXB" }
    ],
    routes: [
        { path: "Lima - Amsterdam - Abu Dhabi", travelTime: "4 días", airlines: ["Air France", "KLM"] },
        { path: "Lima - Miami - Abu Dhabi", travelTime: "4 días", airlines: ["American Airlines"] },
        { path: "Lima - Houston - Dubai", travelTime: "4 días", airlines: ["United Airlines"] },
        { path: "Lima - Amsterdam - Dubai", travelTime: "4 días", airlines: ["KLM"] },
        { path: "Lima - Miami - Dubai", travelTime: "4 días", airlines: ["American Airlines"] },
        { path: "Lima - Madrid - Dubai", travelTime: "4 días", airlines: ["Iberia"] }
    ],
    currency: "Dirham de los EAU (AED)",
    timezone: "UTC+4",
    coords: { lat: 24.4539, lon: 54.3773 },
    negotiation: { style: "Relacional y jerárquico. La confianza y las conexiones personales ('wasta') son fundamentales.", culturalNorms: ["Las reuniones comienzan con una larga charla social.", "La hospitalidad es primordial.", "Las decisiones las toma el que tiene la máxima autoridad."], paymentMethods: ["Transferencia bancaria", "Cheques posfechados (común)"], tips: ["Invierta mucho tiempo en construir relaciones.", "Sea paciente, el tiempo se percibe de forma flexible.", "Acepte siempre el café o el té que le ofrezcan."], opportunities: ["Construcción y bienes raíces", "Turismo de lujo", "Centro financiero y logístico"], mistakesToAvoid: ["Apresurar el negocio.", "Mostrar la suela de los zapatos.", "Preguntar por las mujeres de la familia."] }
  },
  {
    id: "india",
    continent: "Asia",
    name: "India",
    capital: "Nueva Delhi",
    languages: ["Inglés indio", "Idioma hindi"],
    flagEmoji: "🇮🇳",
    countryCode: "in",
    airports: [
        { name: "Chhatrapati Shivaji Maharaj International", iata: "BOM" },
        { name: "Indira Gandhi International", iata: "DEL" }
    ],
    routes: [
        { path: "Lima - Miami - Bombay", travelTime: "4 días", airlines: ["Qatar Airways"] },
        { path: "Lima - Amsterdam - Nueva Delhi", travelTime: "4 días", airlines: ["KLM"] }
    ],
    currency: "Rupia India (INR)",
    timezone: "UTC+5:30",
    coords: { lat: 28.6139, lon: 77.2090 },
    negotiation: { style: "Jerárquico, relacional y a menudo indirecto. El regateo es una parte integral del proceso.", culturalNorms: ["La jerarquía es muy importante.", "Las relaciones personales son la base de los negocios.", "El 'sí' puede significar 'sí, lo he entendido', no necesariamente 'sí, estoy de acuerdo'."], paymentMethods: ["Transferencia bancaria", "Carta de crédito"], tips: ["Construya una red de contactos.", "Sea paciente y esté preparado para negociaciones largas.", "Confirme todo por escrito para evitar malentendidos."], opportunities: ["Servicios de TI y software", "Farmacéutica", "Textiles"], mistakesToAvoid: ["Ser demasiado directo.", "Tomar las decisiones verbales como finales.", "Usar la mano izquierda para dar o recibir cosas."] }
  },
  {
    id: "singapur",
    continent: "Asia",
    name: "Singapur",
    capital: "Singapur",
    languages: ["Malayo", "Singapore English", "Singaporean Mandarin", "Idioma tamil"],
    flagEmoji: "🇸🇬",
    countryCode: "sg",
    airports: [{ name: "Changi Airport", iata: "SIN" }],
    routes: [{ path: "Lima - Los angeles - Seúl - Singapur", travelTime: "4 días", airlines: ["Korean Air"] }],
    currency: "Dólar de Singapur (SGD)",
    timezone: "UTC+8",
    coords: { lat: 1.3521, lon: 103.8198 },
    negotiation: { style: "Profesional, eficiente y pragmático. Mezcla de influencias asiáticas y occidentales. El inglés es el idioma de los negocios.", culturalNorms: ["La puntualidad es esencial.", "La comunicación es educada y algo indirecta para salvar la 'cara'.", "Se valora la preparación y la eficiencia."], paymentMethods: ["Transferencia bancaria"], tips: ["Esté bien preparado y sea puntual.", "Sea respetuoso y formal.", "Evite las tácticas de alta presión."], opportunities: ["Centro financiero", "Biotecnología", "Logística de alta tecnología"], mistakesToAvoid: ["Llegar tarde.", "Criticar al gobierno.", "Masticar chicle en público (está prohibido)."] }
  },
  {
    id: "sudafrica",
    continent: "Africa",
    name: "Sudáfrica",
    capital: "Pretoria",
    languages: ["Inglés sudafricano", "Idioma suazi", "Idioma venda", "Idioma tsonga", "Afrikáans", "Setsuana", "Sesoto", "Lengua de señas sudafricana", "Idioma xhosa", "Idioma zulú", "Idioma ndebele meridional", "Idioma sotho septentrional"],
    flagEmoji: "🇿🇦",
    countryCode: "za",
    airports: [{ name: "O. R. Tambo International", iata: "JNB" }],
    routes: [{ path: "Lima - Los angeles - Seúl - Johannesburgo", travelTime: "4 dias", airlines: ["Air Korean"] }],
    currency: "Rand Sudafricano (ZAR)",
    timezone: "UTC+2",
    coords: { lat: -25.7479, lon: 28.2293 },
    negotiation: { style: "Diverso, puede ser de estilo occidental (directo) o africano (relacional). El inglés es común.", culturalNorms: ["La puntualidad es importante.", "Hay una gran diversidad cultural, sea sensible a ella.", "Construir relaciones puede ser importante dependiendo del grupo."], paymentMethods: ["Transferencia bancaria (EFT)"], tips: ["Sea consciente de la diversidad cultural.", "Un enfoque profesional y respetuoso es lo mejor.", "Confirme los acuerdos por escrito."], opportunities: ["Minería (oro, platino)", "Vino", "Turismo"], mistakesToAvoid: ["Ser insensible a la historia del apartheid.", "Generalizar sobre la cultura.", "Ser impaciente."] }
  },
  {
    id: "turquia",
    continent: "Asia",
    name: "Turquía",
    capital: "Ankara",
    languages: ["Idioma turco"],
    flagEmoji: "🇹🇷",
    countryCode: "tr",
    airports: [{ name: "Estambul", iata: "ISL" }],
    routes: [{ path: "Lima - Madrid - Estambul", travelTime: "4 dias", airlines: ["Air Europa"] }],
    currency: "Lira Turca (TRY)",
    timezone: "UTC+3",
    coords: { lat: 39.9334, lon: 32.8597 },
    negotiation: { style: "Relacional y jerárquico. La hospitalidad y la confianza son clave.", culturalNorms: ["Las relaciones personales preceden a los negocios.", "La edad y la posición son respetadas.", "Las negociaciones pueden ser largas y incluir regateo."], paymentMethods: ["Transferencia bancaria", "Carta de crédito"], tips: ["Acepte las ofertas de té o café.", "Invierta tiempo en construir una relación personal.", "Sea paciente."], opportunities: ["Textiles y confección", "Automotriz", "Construcción"], mistakesToAvoid: ["Rechazar la hospitalidad.", "Apresurar las negociaciones.", "Discutir temas políticos sensibles."] }
  },
  {
    id: "australia",
    continent: "Oceania",
    name: "Australia",
    capital: "Canberra",
    languages: ["Inglés australiano"],
    flagEmoji: "🇦🇺",
    countryCode: "au",
    airports: [{ name: "Sydney Kingsford Smith", iata: "SYD" }],
    routes: [
      { path: "Lima - Amsterdam - Sydney", travelTime: "4 dias", airlines: ["KLM"] },
      { path: "Lima - Toronto - Sydney", travelTime: "4 dias", airlines: ["Air Canada", "LATAM"] },
      { path: "Lima - Santiago de Chile - Sydney", travelTime: "4 dias", airlines: ["LATAM"] }
    ],
    currency: "Dólar Australiano (AUD)",
    timezone: "UTC+10 (Este)",
    coords: { lat: -35.2809, lon: 149.1300 },
    negotiation: { style: "Relajado, directo y pragmático. Igualitario, no les gusta la jerarquía ostentosa.", culturalNorms: ["La puntualidad es importante.", "La comunicación es directa y usan el humor.", "Se valora la modestia, no la presunción."], paymentMethods: ["Transferencia bancaria"], tips: ["Sea directo pero amigable.", "No presuma de sus logros.", "Use el humor para romper el hielo."], opportunities: ["Minería", "Educación", "Vino y productos agrícolas"], mistakesToAvoid: ["Ser arrogante o jactancioso.", "Tomarse a sí mismo demasiado en serio.", "Ser demasiado formal o rígido."] }
  }
];