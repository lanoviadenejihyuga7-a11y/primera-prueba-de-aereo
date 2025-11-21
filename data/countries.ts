
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
      style: "🧉 Relacional, expresivo y duro. Ambiente distendido pero detallista.",
      culturalNorms: [
        "⏰ Puntualidad: Importante para extranjeros, aunque locales pueden retrasarse.",
        "🗣️ Reuniones: Comienzan con charla informal previa; ambiente sin presión.",
        "🤝 Saludo: Apretón de manos; beso en la mejilla entre conocidos.",
        "👔 Jerarquía: Empresas jerarquizadas; trato formal al inicio."
      ],
      paymentMethods: ["Transferencia bancaria", "Carta de crédito"],
      tips: [
        "😂 Aprecian el humor espontáneo y comentarios ingeniosos.",
        "🧐 Prepárese para negociadores duros y detallistas.",
        "🌍 Valoran mucho la experiencia internacional."
      ],
      opportunities: ["Agroindustria", "Software y servicios IT", "Energías renovables"],
      mistakesToAvoid: [
        "🚫 Hablar de política interna o la dictadura.",
        "🇧🇷 Comparar el país con Brasil.",
        "🛑 Usar sarcasmo político o histórico."
      ]
    },
    usefulLinks: [
      { title: "Administración Nacional de Aviación Civil (ANAC)", url: "https://www.anac.gob.ar/" },
      { title: "Cancillería - Comercio Exterior", url: "https://www.cancilleria.gob.ar/es/comercio-internacional" }
    ],
    population: "~45 millones",
    government: "República federal",
    gdp: "633 mil M USD",
    tradeBalance: { exports: "88,446 M USD", imports: "81,523 M USD" },
    tradePartners: ["Brasil", "Estados Unidos", "China", "Chile"],
    mainSectors: ["Productos farmacéuticos", "Reactores/maquinaria", "Frutos (arándanos)"],
    countryProfileUrl: "https://exportemos.pe/descubre-oportunidades-de-exportacion/publicaciones-de-inteligencia",
    tradeAgreement: {
      name: "ACE 58 (Mercosur)",
      url: "https://www.acuerdoscomerciales.gob.pe/en_vigencia/mercosur/inicio.html",
      validity: "Vigente desde 2006",
      approvalDoc: "Acuerdo de Complementación Económica Nº 58",
      passengerRights: "Cielos abiertos (Acuerdo subregional)",
      cargoProducts: "Manufacturas, alimentos procesados, químicos."
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
    },
    usefulLinks: [
      { title: "Dirección General de Aeronáutica Civil (DGAC)", url: "https://www.dgac.gob.bo/" },
      { title: "Aduana Nacional de Bolivia", url: "https://www.aduana.gob.bo/" }
    ],
    population: "~12,5 millones (2025 est.)",
    government: "República presidencial unitaria",
    gdp: "49,7 mil M USD",
    tradeBalance: { exports: "13,653 M USD", imports: "13,049 M USD" },
    tradePartners: ["Brasil", "India", "China", "Argentina"],
    mainSectors: ["Gas natural", "Zinc", "Oro", "Soja"],
    countryProfileUrl: "https://exportemos.pe/descubre-oportunidades-de-exportacion/publicaciones-de-inteligencia",
    tradeAgreement: {
      name: "Comunidad Andina (CAN)",
      url: "https://www.acuerdoscomerciales.gob.pe/en_vigencia/comunidad_andina/inicio.html",
      validity: "Vigente desde 1969",
      approvalDoc: "Acuerdo de Cartagena",
      cargoProducts: "Derivados de soja, minerales, manufacturas."
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
      style: "🌴 Relacional, cálido y jerárquico. Negociaciones lentas basadas en confianza.",
      culturalNorms: [
        "⏰ Puntualidad: No se menciona explícitamente, pero se toleran ciertos retrasos informales.",
        "🤝 Saludo: Apretón de manos; besos en la mejilla entre mujeres.",
        "☕ Ofrecen “cafezinho” (aceptarlo es cortesía).",
        "😂 Humor: Muy apreciado; conversaciones cálidas y bromas ligeras."
      ],
      paymentMethods: ["Transferencia bancaria", "Cartas de crédito"],
      tips: [
        "🐢 Reuniones lentas; se da poca información al inicio. Se evita la presión.",
        "📝 Contratos en portugués y en reales. Negociaciones globales (no punto por punto).",
        "👩‍💼 Alta presencia femenina en PYMEs."
      ],
      opportunities: ["Agronegocios", "Cosméticos", "Tecnología financiera (Fintech)"],
      mistakesToAvoid: [
        "🛑 Presionar o buscar confrontación directa.",
        "🗣️ Hablar de política, religión o deforestación.",
        "🤐 Rechazar el 'cafezinho' o la hospitalidad."
      ]
    },
    usefulLinks: [
      { title: "Agência Nacional de Aviação Civil (ANAC)", url: "https://www.gov.br/anac/pt-br" },
      { title: "Ministerio de Economía / Comex", url: "https://www.gov.br/economia/pt-br" }
    ],
    population: "~213 millones",
    government: "República federal",
    gdp: "2,18 B USD",
    tradeBalance: { exports: "334,463 M USD", imports: "292,344 M USD" },
    tradePartners: ["China", "Estados Unidos", "Argentina", "Paraguay"],
    mainSectors: ["Frutas de alto valor (mango, uva)", "Pescado/mariscos", "Cargas especiales"],
    countryProfileUrl: "https://boletines.exportemos.pe/recursos/boletin/Ficha%20Brasil.pdf",
    tradeAgreement: {
      name: "ACE 58 (Mercosur)",
      url: "https://www.acuerdoscomerciales.gob.pe/en_vigencia/mercosur/inicio.html",
      validity: "Vigente",
      cargoProducts: "Manufacturas, químicos, alimentos."
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
      style: "🍁 Directo, pragmático y eficiente. Varía según región (Este formal, Oeste relajado).",
      culturalNorms: [
        "⏰ Puntualidad: Se valora especialmente en zonas urbanas.",
        "🗣️ Reuniones: Formales en Toronto/Québec, relajadas en el oeste. Sin interrupciones.",
        "🤝 Saludo: Apretón de manos; Mr./Mrs. + apellido.",
        "😂 Humor: Sí se aprecia, junto a la cortesía."
      ],
      paymentMethods: ["Transferencia bancaria", "Órdenes de compra"],
      tips: [
        "📊 Negociaciones basadas en datos y hechos.",
        "👮 Decisiones descentralizadas (mandos intermedios pueden decidir).",
        "📄 Documentos en inglés y francés."
      ],
      opportunities: ["Productos del mar", "Frutas y verduras frescas", "Textiles de alta calidad"],
      mistakesToAvoid: [
        "🇺🇸 Comparar con EE.UU.",
        "🗣️ Hablar de la soberanía de Québec.",
        "🛑 Hacer promesas exageradas sin sustento."
      ]
    },
    usefulLinks: [
      { title: "Transport Canada - Civil Aviation", url: "https://tc.canada.ca/en/aviation" },
      { title: "Global Affairs Canada (Trade & Investment)", url: "https://www.international.gc.ca/" }
    ],
    population: "~38 millones",
    government: "Monarquía parlamentaria federal",
    gdp: "2,24 B USD",
    tradeBalance: { exports: "596,761 M USD", imports: "571,579 M USD" },
    tradePartners: ["Estados Unidos", "China", "México", "Alemania"],
    mainSectors: ["Productos energéticos", "Automotriz", "Minerales"],
    countryProfileUrl: "https://boletines.exportemos.pe/recursos/boletin/772837735rad302D3.pdf",
    tradeAgreement: {
      name: "TLC Perú - Canadá",
      url: "https://www.acuerdoscomerciales.gob.pe/en_vigencia/canada/inicio.html",
      validity: "Vigente desde 2009",
      cargoProducts: "Agroexportación, textiles, minería."
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
      style: "🏔️ Formal, serio y lento. Se prefiere negociar punto por punto.",
      culturalNorms: [
        "⏰ Puntualidad: Valorada, aunque se toleran 10–15 min de retraso.",
        "🗣️ Reuniones: Primera reunión es general, sin entrar en detalles.",
        "🤝 Saludo: Apretón de manos; uso de “Señor/Señora” o “Don/Doña”.",
        "😐 Humor: Reservado en negocios; solo aparece cuando hay confianza."
      ],
      paymentMethods: ["Transferencia bancaria", "Carta de crédito"],
      tips: [
        "👩‍💼 Secretarias tienen gran influencia.",
        "⚖️ Valoran la ética, honestidad e integridad.",
        "🔥 Argumentos subjetivos y entusiastas son más efectivos que datos fríos.",
        "⚽ Temas seguros: fútbol, literatura, viajes."
      ],
      opportunities: ["Tecnología", "Industria alimentaria", "Servicios para la minería"],
      mistakesToAvoid: [
        "🚫 Hablar de Pinochet o política sensible.",
        "🛑 Ser demasiado informal al inicio."
      ]
    },
    usefulLinks: [
      { title: "Junta Aeronáutica Civil (JAC)", url: "https://www.jac.gob.cl/" },
      { title: "Subsecretaría de Relaciones Económicas (SUBREI)", url: "https://www.subrei.gob.cl/" }
    ],
    population: "~19 millones",
    government: "República presidencialista",
    gdp: "330 mil M USD",
    tradeBalance: { exports: "98,557 M USD", imports: "104,606 M USD" },
    tradePartners: ["China", "Estados Unidos", "Países Bajos"],
    mainSectors: ["Cerezas", "Uvas", "Arándanos", "Otras frutas frescas de alto valor"]
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
        style: "☕ Relacional, cordial y formal. Se prioriza la cortesía y la confianza.",
        culturalNorms: [
          "⏰ Puntualidad: Se valora la cortesía y no mostrar prisa.",
          "🗣️ Reuniones: Cordiales; primero se construye confianza. Evitar brusquedad.",
          "🤝 Saludo: Apretón de manos suave; beso en mejilla a mujeres conocidas.",
          "👔 Títulos: 'Usted' en Bogotá, 'Tú' en costa. 'Doctor' se usa por prestigio."
        ],
        paymentMethods: ["Transferencia bancaria", "Pago contra entrega"],
        tips: [
          "😄 Humor suave y cordial; facilita confianza.",
          "☕ Siempre aceptar café y elogiar su calidad.",
          "🤵 Negociar con altos cargos o propietarios directamente.",
          "🍽️ Comidas de negocios a las 13:00."
        ],
        opportunities: ["Moda y confecciones", "Software y TI", "Materiales de construcción"],
        mistakesToAvoid: [
          "🏃 Ir directo al grano sin crear relación.",
          "🛑 Ser brusco o ejercer demasiada presión.",
          "😒 Rechazar el café o criticar al país."
        ]
    },
    usefulLinks: [
      { title: "Aeronáutica Civil (Aerocivil)", url: "https://www.aerocivil.gov.co/" },
      { title: "Ministerio de Comercio (MinCIT)", url: "https://www.mincit.gov.co/" }
    ],
    population: "~50 millones",
    government: "República (estructura federal)",
    gdp: "419 mil M USD",
    tradeBalance: { exports: "56,910 M USD", imports: "77,410 M USD" },
    tradePartners: ["Estados Unidos", "Países Bajos", "Mercados Regionales"],
    mainSectors: ["Flores cortadas", "Frutas frescas", "Farmacéuticos", "Carga express"]
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
      style: "🌿 Amistoso, educado y moderado. 'Pura Vida' se refleja en negocios relajados.",
      culturalNorms: [
        "⏰ Puntualidad: Moderada.",
        "🗣️ Reuniones: Relajadas, con conversación abierta.",
        "🤝 Saludo: Cordial; trato amable y respetuoso.",
        "😄 Humor: Amistoso y optimista."
      ],
      paymentMethods: ["Transferencia bancaria", "Pago por adelantado"],
      tips: [
        "🌍 Muestre interés en la ecología y sostenibilidad.",
        "🤝 Sea paciente, amigable y optimista.",
        "🗣️ El 'tuteo' es común pero espere a que lo inicien."
      ],
      opportunities: ["Dispositivos médicos", "Productos agrícolas frescos (piña, café)", "Ecoturismo"],
      mistakesToAvoid: [
        "😤 Ser arrogante o impaciente.",
        "🏛️ Criticar la burocracia local.",
        "🌳 Ignorar las políticas ambientales."
      ]
    },
    usefulLinks: [
      { title: "Dirección General de Aviación Civil", url: "https://www.dgac.go.cr/" },
      { title: "Ministerio de Comercio Exterior (COMEX)", url: "https://www.comex.go.cr/" }
    ],
    population: "~5,27 millones",
    government: "República unitaria presidencialista",
    gdp: "95,4 mil M USD",
    tradeBalance: { exports: "15,320 M USD", imports: "21,140 M USD" },
    tradePartners: ["Estados Unidos", "Países Bajos", "México"],
    mainSectors: ["Dispositivos médicos", "Piña", "Frutas de alto valor", "Productos de alta tecnología"]
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
    },
    usefulLinks: [
      { title: "Instituto de Aeronáutica Civil de Cuba (IACC)", url: "https://www.iacc.gov.cu/" },
      { title: "Cámara de Comercio de Cuba", url: "https://www.camaracuba.cu/" }
    ],
    population: "~11 millones",
    government: "República socialista",
    gdp: "107 mil M USD",
    tradeBalance: { exports: "2,170 M USD", imports: "9,833 M USD" },
    tradePartners: ["Venezuela", "España", "Canadá"],
    mainSectors: ["Tabaco", "Níquel", "Productos farmacéuticos", "Azúcar"]
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
    },
    usefulLinks: [
      { title: "Curacao Civil Aviation Authority", url: "http://www.ccaa.cw/" },
      { title: "Curaçao Chamber of Commerce", url: "https://curacao-chamber.cw/" }
    ],
    population: "~155,000",
    government: "País constituyente (Reino de los Países Bajos)",
    gdp: "3.1 mil M USD",
    tradeBalance: { exports: "451 M USD", imports: "1,200 M USD" },
    tradePartners: ["Países Bajos", "Estados Unidos"],
    mainSectors: ["Refinación de petróleo", "Turismo"]
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
      style: "🐢 Relacional, jerárquico y con 'hora flexible'. La confianza personal es clave.",
      culturalNorms: [
        "⏰ Puntualidad: Flexible ('hora ecuatoriana'); 15-20 min de retraso es normal.",
        "🗣️ Reuniones: Se empieza con temas informales; negociaciones lentas.",
        "🤝 Saludo: Dos apellidos. Mujeres casadas usan apellido del marido."
      ],
      paymentMethods: ["Transferencia bancaria", "Pago anticipado"],
      tips: [
        "🤝 Relación personal clave; no cambiar equipo negociador.",
        "😂 Humor amable y ligero para romper el hielo.",
        "🍽️ Comidas de negocios a las 13:00 h.",
        "🏔️ Precaución con la altitud en Quito (2.760 msnm)."
      ],
      opportunities: ["Flores", "Camarón y pescado", "Frutas (banano, cacao)"],
      mistakesToAvoid: [
        "🏃 Ser demasiado directo o impaciente.",
        "🙅 Ignorar la jerarquía o el protocolo de apellidos.",
        "🗣️ Hablar del conflicto con Perú o situación indígena."
      ]
    },
    usefulLinks: [
      { title: "Dirección General de Aviación Civil", url: "https://www.aviacioncivil.gob.ec/" },
      { title: "Ministerio de Producción y Comercio Exterior", url: "https://www.produccion.gob.ec/" }
    ],
    population: "~17,6 millones",
    government: "República unitaria presidencial",
    gdp: "125 mil M USD",
    tradeBalance: { exports: "35,380 M USD", imports: "33,049 M USD" },
    tradePartners: ["Estados Unidos", "Países Bajos/Europa", "Destinos Regionales"],
    mainSectors: ["Flores (rosas y otras)", "Pitahaya", "Frutas de nicho"]
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
    negotiation: { style: "Relacional y algo informal. Se valora la confianza y la cortesía.", culturalNorms: ["La puntualidad es flexible.", "Las reuniones suelen comenzar con charla personal.", "El regateo es parte del proceso."], paymentMethods: ["Transferencia bancaria", "Pago contra entrega"], tips: ["Construya una buena relación.", "Sea paciente y flexible.", "Confirme todo por escrito."], opportunities: ["Textiles y confección", "Café", "Servicios de call center"], mistakesToAvoid: ["Ser impaciente o agresivo.", "Ignorar la importancia de los contactos personales.", "Discutir sobre seguridad o política."] },
    usefulLinks: [
      { title: "Autoridad de Aviación Civil (AAC)", url: "https://www.aac.gob.sv/" },
      { title: "Ministerio de Economía", url: "https://www.economia.gob.sv/" }
    ],
    population: "~6 millones",
    government: "República presidencialista",
    gdp: "35,4 mil M USD",
    tradeBalance: { exports: "7,115 M USD", imports: "17,108 M USD" },
    tradePartners: ["Estados Unidos", "Guatemala", "Honduras"],
    mainSectors: ["Envíos urgentes/alto valor (por vía aérea)", "Textiles"]
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
        style: "🦅 Directo, rápido y enfocado en resultados. 'El tiempo es dinero'.",
        culturalNorms: [
          "⏰ Puntualidad: Muy valorada; se espera puntualidad estricta.",
          "🗣️ Reuniones: Directas, breves. Pueden cerrar acuerdos en la primera reunión.",
          "🤝 Saludo: Apretón firme; formalidad inicial (Mr./Mrs.) pasa rápido al nombre.",
          "📇 Networking clave; intercambiar tarjetas es habitual."
        ],
        paymentMethods: ["Transferencia bancaria (ACH)", "Cheque", "Tarjeta de crédito"],
        tips: [
          "📊 Se valora claridad, profesionalismo y materiales bien preparados.",
          "😂 Humor usado en contextos informales, pero evitar temas delicados.",
          "📝 Contratos detallados y legales; alto riesgo de litigios.",
          "🏎️ Decisiones rápidas; no regatean mucho."
        ],
        opportunities: ["Superalimentos (quinua, maca)", "Textiles de alpaca", "Productos agrícolas frescos"],
        mistakesToAvoid: [
          "🗣️ Hablar de temas sensibles (política, religión, aborto).",
          "🛑 Ser vago o no tener un 'bottom line' claro.",
          "🐢 Perder el tiempo con demasiados rodeos."
        ]
    },
    usefulLinks: [
      { title: "Federal Aviation Administration (FAA)", url: "https://www.faa.gov/" },
      { title: "U.S. Customs and Border Protection", url: "https://www.cbp.gov/" },
      { title: "International Trade Administration", url: "https://www.trade.gov/" }
    ],
    population: "~344 millones",
    government: "República federal presidencialista",
    gdp: "29,2 B USD",
    tradeBalance: { exports: "2,062,090 M USD", imports: "3,372,902 M USD" },
    tradePartners: ["China", "México", "Alemania", "Japón", "Canadá"],
    mainSectors: ["Electrónica", "Autopartes", "Productos perecibles (importación)"],
    tradeAgreement: {
      name: "Acuerdo de Transporte Aéreo Perú - EE.UU.",
      url: "https://www.acuerdoscomerciales.gob.pe/En_Vigencia/EEUU/inicio.html",
      validity: "2009",
      approvalDoc: "Ratificado por Decreto Supremo Nº 038-98-RE del 01 de diciembre de 1998.",
      passengerRights: "Frecuencias y capacidad según consideraciones comerciales. Rutas múltiples.",
      cargoProducts: "Prendas de vestir, frutas frescas, productos pesqueros."
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
    negotiation: { style: "Formal, jerárquico y conservador. Las relaciones personales son fundamentales.", culturalNorms: ["Use títulos formales.", "La primera reunión es para establecer confianza.", "Las decisiones las toma el que tiene la máxima autoridad."], paymentMethods: ["Transferencia bancaria", "Carta de crédito"], tips: ["Vístase de forma conservadora.", "Sea respetuoso y cortés.", "Invierta tiempo en construir una relación."], opportunities: ["Café", "Azúcar", "Cardamomo", "Textiles"], mistakesToAvoid: ["Ser demasiado informal.", "Presionar para una decisión rápida.", "Ignorar la cultura y tradiciones mayas."] },
    usefulLinks: [
      { title: "Dirección General de Aeronáutica Civil", url: "https://www.dgac.gob.gt/" },
      { title: "Ministerio de Economía (MINECO)", url: "https://www.mineco.gob.gt/" }
    ],
    population: "~15 millones",
    government: "República federal",
    gdp: "113 mil M USD",
    tradeBalance: { exports: "15,806 M USD", imports: "32,099 M USD" },
    tradePartners: ["Estados Unidos", "México", "Honduras"],
    mainSectors: ["Textiles", "Café", "Azúcar"]
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
    negotiation: {
      style: "🌮 Relacional, emocional y jerárquico. La confianza personal es esencial.",
      culturalNorms: [
        "⏰ Puntualidad: Alta en el D.F. (chilangos); menor en otras zonas.",
        "🗣️ Reuniones: Charla informal (personal/profesional); sin agenda estricta; ritmo lento.",
        "🤝 Saludo: Apretón de manos; abrazo o beso en mejilla entre conocidos.",
        "👔 Títulos: Uso frecuente de títulos profesionales (Licenciado, Ingeniero)."
      ],
      paymentMethods: ["Transferencia SPEI", "Carta de crédito"],
      tips: [
        "😂 Humor muy usado; bromas ligeras fortalecen relaciones.",
        "❤️ Argumentos emocionales suelen ser más efectivos que los lógicos.",
        "🦅 Nacionalismo fuerte; mostrar respeto por la cultura mexicana.",
        "👑 Decisiones jerárquicas (ejecutivos jóvenes, 30–40 años)."
      ],
      opportunities: ["Automotriz", "Electrónica", "Aguacates y berries"],
      mistakesToAvoid: [
        "🗣️ Hablar de conquista, emigración ilegal o comparar con EE.UU.",
        "🛑 Ser arrogante o demasiado directo.",
        "🚫 Usar temas políticos o de violencia en bromas."
      ]
    },
    usefulLinks: [
      { title: "Agencia Federal de Aviación Civil (AFAC)", url: "https://www.gob.mx/afac" },
      { title: "Secretaría de Economía", url: "https://www.gob.mx/se" }
    ],
    population: "~128 millones",
    government: "República federal presidencialista",
    gdp: "1,85 B USD",
    tradeBalance: { exports: "577,731 M USD", imports: "604,615 M USD" },
    tradePartners: ["Estados Unidos", "Canadá", "Europa"],
    mainSectors: ["Electrónica de alto valor", "Autopartes críticas", "Paquetería express", "Agroproductos premium"]
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
    negotiation: {
      style: "🚢 Lento pero profesional, fuerte influencia de EE.UU. y regateo común.",
      culturalNorms: [
        "⏰ Puntualidad: Flexible; retrasos de hasta 30 min son normales.",
        "🗣️ Reuniones: Ritmo lento, cara a cara. 1ra reunión para explorar.",
        "🤝 Saludo: 'Buenos días/tardes'; trato formal ('usted').",
        "👴 Respeto: Saludar primero a mayores o superiores."
      ],
      paymentMethods: ["Transferencia bancaria", "USD es la moneda de facto"],
      tips: [
        "😂 Humor amable y casual; puede usarse para generar confianza.",
        "🛑 'Es posible' o 'lo estudiaremos' suelen ser rechazos educados.",
        "📦 Zona Libre de Colón clave. Incluir margen para regateo.",
        "🗓️ Evitar viajes en Carnavales o primera semana de noviembre."
      ],
      opportunities: ["Servicios financieros y logísticos", "Zona Libre de Colón", "Turismo"],
      mistakesToAvoid: [
        "😠 Mostrar molestia por los retrasos.",
        "🇺🇸 Resaltar demasiado la influencia estadounidense.",
        "📉 Subestimar la sofisticación de su sector de servicios."
      ]
    },
    usefulLinks: [
      { title: "Autoridad Aeronáutica Civil (AAC)", url: "https://www.aeronautica.gob.pa/" },
      { title: "Ministerio de Comercio e Industrias (MICI)", url: "https://mici.gob.pa/" }
    ],
    population: "~4,3-4,4 millones",
    government: "República multipartidaria presidencialista",
    gdp: "3,652 M USD",
    tradeBalance: { exports: "15,224 M USD", imports: "N/A" },
    tradePartners: ["Estados Unidos", "Colombia", "China"],
    mainSectors: ["Servicios logísticos", "Reexportación"]
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
    negotiation: { style: "Conservador, formal y basado en relaciones personales. La confianza es fundamental.", culturalNorms: ["La puntualidad es apreciada.", "Use títulos formales.", "Las negociaciones son lentas, la paciencia es una virtud."], paymentMethods: ["Transferencia bancaria", "Carta de crédito"], tips: ["Construya relaciones sólidas.", "Sea paciente y no presione.", "Aprender algunas frases en guaraní es un gesto muy apreciado."], opportunities: ["Carne bovina", "Soja", "Energía hidroelectrica"], mistakesToAvoid: ["Ser demasiado informal o directo.", "Ignorar la cultura bilingüe (español-guaraní).", "Apariencia descuidada."] },
    usefulLinks: [
      { title: "Dirección Nacional de Aeronáutica Civil (DINAC)", url: "https://www.dinac.gov.py/" },
      { title: "Ministerio de Industria y Comercio (MIC)", url: "https://www.mic.gov.py/" }
    ],
    population: "~6,25 millones",
    government: "República democrática multipartidista",
    gdp: "44,5 mil M USD",
    tradeBalance: { exports: "9,948 M USD", imports: "15,880 M USD" },
    tradePartners: ["Brasil", "Argentina", "Estados Unidos"],
    mainSectors: ["Soja", "Carne", "Electricidad"]
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
    negotiation: {
      style: "⚽ Relajado, formal y cordial. Ritmo relativamente ágil.",
      culturalNorms: [
        "⏰ Puntualidad: Formalidad moderada, se infiere cumplimiento.",
        "🗣️ Reuniones: Comienzan con charla informal. Valoran exposiciones verbales.",
        "🤝 Saludo: Apretón de manos; beso en mejilla entre conocidos.",
        "😂 Humor: Cordial y tranquilo; bien recibido si es discreto."
      ],
      paymentMethods: ["Transferencia bancaria", "Carta de crédito"],
      tips: [
        "🏢 Montevideo concentra casi toda la actividad económica.",
        "🥩 Comidas (asados) son oportunidades clave para negocios.",
        "⚽ Fútbol es un tema seguro y bienvenido."
      ],
      opportunities: ["Software y servicios TI", "Carne de alta calidad", "Celulosa"],
      mistakesToAvoid: [
        "🚫 Hablar de política, dictaduras o temas históricos sensibles.",
        "🛑 Ser jactancioso o arrogante.",
        "🇦🇷 Confundir Uruguay con Paraguay o Argentina."
      ]
    },
    usefulLinks: [
      { title: "Dirección Nacional de Aviación Civil (DINACIA)", url: "https://www.dinacia.gub.uy/" },
      { title: "Uruguay XXI - Promoción de Inversiones", url: "https://www.uruguayxxi.gub.uy/" }
    ],
    population: "~3,5 millones",
    government: "República democrática",
    gdp: "81 mil M USD",
    tradeBalance: { exports: "11,184 M USD", imports: "12,973 M USD" },
    tradePartners: ["Brasil", "Argentina", "Estados Unidos"],
    mainSectors: ["Carnes de alto valor", "Software"]
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
      style: "🧐 Serio, directo y muy formal. El humor es poco usado; prefieren comunicación directa.",
      culturalNorms: [
        "⏰ Puntualidad absoluta: llegar tarde o extenderse se considera poco profesional.",
        "📅 Programar reuniones con semanas de antelación.",
        "🤝 Saludo: apretón de manos firme + contacto visual.",
        "👔 Trato formal: 'Herr/Frau + título + apellido'."
      ],
      paymentMethods: ["Transferencia SEPA", "Factura a 30 días"],
      tips: [
        "📊 Valoran calidad, precisión técnica y sostenibilidad.",
        "📝 Exigen información detallada y relaciones duraderas.",
        "🤵 Reunirse con directivos de alto nivel."
      ],
      opportunities: ["Frutas exóticas", "Café de especialidad", "Productos orgánicos"],
      mistakesToAvoid: [
        "🚫 Llegar tarde (incluso unos minutos).",
        "🤐 Usar humor en contextos de negocios.",
        "🗣️ Hablar de temas personales o históricos sensibles."
      ]
    },
    usefulLinks: [
      { title: "Luftfahrt-Bundesamt (LBA)", url: "https://www.lba.de/" },
      { title: "Ministerio Federal de Economía (BMWK)", url: "https://www.bmwk.de/" }
    ],
    population: "84 millones",
    government: "República federal parlamentaria",
    gdp: "4.66b USD",
    tradeBalance: { exports: "1,686,142 M USD", imports: "1,588,853 M USD" },
    tradePartners: ["Países Bajos", "Francia", "Estados Unidos", "China"],
    mainSectors: ["Maquinaria", "Automóviles", "Productos químicos"],
    countryProfileUrl: "https://www.exteriores.gob.es/documents/fichaspais/alemania_ficha%20pais.pdf",
    tradeAgreement: {
      name: "TLC Perú - Unión Europea",
      url: "https://www.acuerdoscomerciales.gob.pe/En_Vigencia/Union_Europea/inicio.html",
      validity: "Vigente desde el 1 de marzo de 2013",
      approvalDoc: "Acuerdo Comercial Multipartes",
      passengerRights: "Según normativa UE.",
      cargoProducts: "Espárragos, aguacates, café, cacao."
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
    negotiation: {
      style: "🏛️ Pragmático, formal y estructurado. Estilo igualitario y basado en datos.",
      culturalNorms: [
        "⏰ Puntualidad: Muy valorada; llegar tarde = falta de respeto.",
        "📊 Reuniones: Presentaciones con datos y gráficos; directas y concretas.",
        "👔 Saludo formal (Mr./Mrs. o Monsieur/Madame según región)."
      ],
      paymentMethods: ["Transferencia SEPA"],
      tips: [
        "📄 Documentación debe estar en francés y flamenco (neerlandés).",
        "🍽️ Gastronomía muy valorada; almuerzo a las 12h es habitual.",
        "🤫 Humor sutil permitido, pero prefieren tono profesional."
      ],
      opportunities: ["Chocolate", "Cerveza", "Productos químicos y farmacéuticos"],
      mistakesToAvoid: [
        "🇫🇷 Tratar a Bélgica como extensión de Francia.",
        "🗣️ Hablar de divisiones lingüísticas o religión.",
        "🛑 Ser vago o carecer de datos concretos."
      ]
    },
    usefulLinks: [
      { title: "SPF Mobilité et Transports", url: "https://mobilit.belgium.be/" },
      { title: "SPF Economie", url: "https://economie.fgov.be/" }
    ],
    population: "11,6 millones",
    government: "Monarquía constitucional",
    gdp: "665B USD",
    tradeBalance: { exports: "463,782 M USD", imports: "464,277 M USD" },
    tradePartners: ["Alemania", "Países Bajos", "Francia", "Estados Unidos"],
    mainSectors: ["Productos químicos", "Diamantes", "Maquinaria"],
    tradeAgreement: {
      name: "TLC Perú - Unión Europea",
      url: "https://www.acuerdoscomerciales.gob.pe/En_Vigencia/Union_Europea/inicio.html",
      validity: "Vigente desde el 1 de marzo de 2013",
      cargoProducts: "Espárragos, aguacates, café, cacao."
    }
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
      style: "🍷 Relacional, formal pero cordial. Se mezcla lo personal con lo profesional.",
      culturalNorms: [
        "⏰ Puntualidad: Flexible; 10 minutos de retraso es normal.",
        "🗣️ Reuniones: Comienzan con charla informal (clima, viaje). Primer encuentro exploratorio.",
        "🤝 Saludo: Dos besos en la mejilla entre conocidos. Tarjetas al inicio.",
        "👔 Tuteo: Se pasa rápido de 'usted' a 'tú' con confianza."
      ],
      paymentMethods: ["Transferencia SEPA", "Confirming"],
      tips: [
        "😂 El humor es frecuente en las negociaciones.",
        "👕 La apariencia importa; en ciudades grandes: traje y corbata.",
        "🎁 Regalos empresariales no en la primera reunión.",
        "💬 Temas comunes: política, familia, fútbol, vacaciones."
      ],
      opportunities: ["Pescado y mariscos congelados", "Espárragos", "Prendas de algodón"],
      mistakesToAvoid: [
        "🛑 Ser ostentoso; se valora la modestia.",
        "🙅 Rechazar una invitación a comer.",
        "🏃 Apresurar las negociaciones sin charla previa."
      ]
    },
    usefulLinks: [
      { title: "Agencia Estatal de Seguridad Aérea (AESA)", url: "https://www.seguridadaerea.gob.es/" },
      { title: "Secretaría de Estado de Comercio", url: "https://comercio.gob.es/" }
    ],
    population: "48 millones",
    government: "Monarquía parlamentaria",
    gdp: "1.72T USD",
    tradeBalance: { exports: "424,286 M USD", imports: "499,055 M USD" },
    tradePartners: ["Estados Unidos", "Alemania", "Francia", "Reino Unido"],
    mainSectors: ["Aeronáutica", "Productos frescos", "Farmacéuticos"]
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
    negotiation: {
        style: "🥖 Formal, jerárquico y analítico. Valoran la lógica y el debate.",
        culturalNorms: [
          "⏰ Puntualidad: No explícita, pero se valora la formalidad y organización.",
          "🗣️ Reuniones: Lentas y formales. Presentaciones bien estructuradas y analíticas.",
          "🤝 Saludo: Apretón de manos suave; no besos en negocios. Trato muy formal ('vous')."
        ],
        paymentMethods: ["Transferencia SEPA", "Cheque"],
        tips: [
          "🧠 Valoran la brillantez verbal y los argumentos lógicos. No usan humor en negocios.",
          "👑 Decisiones centralizadas; consultar a superiores es crítico.",
          "💰 Negocian el precio al final.",
          "🗓️ Evitar viajes en julio y agosto."
        ],
        opportunities: ["Lujo y moda", "Vino y gastronomía", "Aeronáutica"],
        mistakesToAvoid: [
          "🇬🇧 Hablar inglés asumiendo que todos lo harán.",
          "😂 Usar bromas o ser demasiado informal.",
          "🗣️ Hablar de temas personales, dinero o política."
        ]
    },
    usefulLinks: [
      { title: "Direction Générale de l'Aviation Civile (DGAC)", url: "https://www.ecologie.gouv.fr/aviation-civile" },
      { title: "Ministère de l'Économie", url: "https://www.economie.gouv.fr/" }
    ],
    population: "65 millones",
    government: "República semipresidencialista",
    gdp: "3.16T USD",
    tradeBalance: { exports: "618,299 M USD", imports: "819,398 M USD" },
    tradePartners: ["Alemania", "Italia", "Bélgica", "España"],
    mainSectors: ["Equipos aeronáuticos", "Vinos", "Moda"]
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
    negotiation: {
      style: "🎩 Educado, reservado y pragmático. Valoran el 'understatement'.",
      culturalNorms: [
        "⏰ Puntualidad: Valorada, pero con flexibilidad implícita en contextos informales.",
        "🗣️ Reuniones: Comienzan y terminan con small talk (clima, viaje).",
        "🤝 Saludo: Apretón de manos ligero; mucha formalidad y cortesía.",
        "😂 Humor: Sí usan humor, basado en understatement e ironía."
      ],
      paymentMethods: ["Transferencia BACS", "Factura"],
      tips: [
        "📜 Contratos muy rigurosos; alto riesgo legal por incumplimiento.",
        "🧐 Propuestas realistas; no regatean mucho. Evitan tácticas agresivas.",
        "👔 Títulos usados con moderación (Sir/Madam solo en casos oficiales)."
      ],
      opportunities: ["Servicios financieros", "Tecnología", "Productos gourmet"],
      mistakesToAvoid: [
        "🇮🇪 Evitar temas como Irlanda del Norte o la familia real.",
        "🛑 Ser demasiado directo o ruidoso.",
        "🇬🇧 Confundir Inglaterra con Gran Bretaña o el Reino Unido."
      ]
    },
    usefulLinks: [
      { title: "Civil Aviation Authority (CAA)", url: "https://www.caa.co.uk/" },
      { title: "Department for International Trade", url: "https://www.gov.uk/government/organisations/department-for-international-trade" }
    ],
    population: "~67 millones",
    government: "Monarquía constitucional",
    gdp: "3.13T USD",
    tradeBalance: { exports: "870 mil M USD", imports: "1.1T USD" },
    tradePartners: ["Estados Unidos", "Alemania", "Países Bajos", "Francia"],
    mainSectors: ["Maquinaria", "Automóviles", "Farmacéutica", "Aeronáutica"]
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
    negotiation: {
      style: "⚔️ Directo, asertivo y rápido. Valoran argumentos fuertes y resultados a corto plazo.",
      culturalNorms: [
        "⏰ Puntualidad: Implícita; se valora la eficiencia.",
        "🗣️ Reuniones: Breves, directas y confrontativas. Interrupciones son normales.",
        "🤝 Saludo: Apretón firme; 'Shalom'. Ortodoxos no dan la mano a mujeres."
      ],
      paymentMethods: ["Transferencia bancaria"],
      tips: [
        "🗓️ Semana laboral: domingo a jueves. Evitar el Sabbath (viernes tarde - sábado).",
        "😂 Usan humor irónico, pero en negocios predomina el debate directo.",
        "🗣️ No se ofenda por la franqueza o las interrupciones."
      ],
      opportunities: ["Alta tecnología (startups)", "Diamantes", "Productos agrícolas tecnológicos"],
      mistakesToAvoid: [
        "🛑 Ser vago o indeciso.",
        "🤬 Tomar la franqueza o el debate como algo personal.",
        "🗣️ Criticar al gobierno o temas políticos sensibles."
      ]
    },
    usefulLinks: [
      { title: "Civil Aviation Authority of Israel (CAAI)", url: "https://www.gov.il/en/departments/civil_aviation_authority_of_israel" },
      { title: "Ministry of Economy and Industry", url: "https://www.gov.il/en/departments/ministry_of_economy" }
    ],
    population: "9,8 millones",
    government: "República parlamentaria",
    gdp: "540B USD",
    tradeBalance: { exports: "72,569 M USD", imports: "107,758 M USD" },
    tradePartners: ["Estados Unidos", "Unión Europea", "China"],
    mainSectors: ["Electrónica de alta tecnología", "Instrumentos médicos", "Diamantes"]
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
    negotiation: {
      style: "🎨 Relacional, cordial y expresivo. La 'bella figura' y la confianza son claves.",
      culturalNorms: [
        "⏰ Puntualidad: Obligatoria en el norte (Milán); más flexible en el sur.",
        "🗣️ Reuniones: Ambiente familiar, expresivos (gesticulan). Negociaciones largas.",
        "👔 Etiqueta: Vestimenta formal y elegante importa mucho. Charla informal inicial esencial."
      ],
      paymentMethods: ["Transferencia SEPA", "Ri.Ba. (Recibo Bancario)"],
      tips: [
        "🖌️ Estrategia basada solo en precio no funciona; se valora diseño y calidad.",
        "😂 Aprecian expresividad y comentarios ligeros (sin ofender).",
        "🐢 Decisiones consensuadas en estructura horizontal (cordata). Paciencia."
      ],
      opportunities: ["Moda y diseño", "Maquinaria industrial", "Alimentos y vino"],
      mistakesToAvoid: [
        "😡 Confundir gesticulación con enfado.",
        "🏃 Apresurar la construcción de la relación.",
        "👕 Vestir de manera informal."
      ]
    },
    usefulLinks: [
      { title: "Ente Nazionale per l'Aviazione Civile (ENAC)", url: "https://www.enac.gov.it/" },
      { title: "Ministerio dello Sviluppo Economico", url: "https://www.mise.gov.it/" }
    ],
    population: "59 millones",
    government: "República parlamentaria",
    gdp: "2.37T USD",
    tradeBalance: { exports: "659,387 M USD", imports: "695,236 M USD" },
    tradePartners: ["Alemania", "Francia", "Estados Unidos"],
    mainSectors: ["Moda", "Maquinaria", "Productos farmacéuticos"]
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
    negotiation: {
      style: "🌷 Directo, pragmático y eficiente. Orientado al consenso.",
      culturalNorms: [
        "⏰ Puntualidad: Esencial; llegar tarde sugiere incompetencia o desinterés.",
        "🗣️ Reuniones: Sin charla preliminar. Directas, breves y centradas en hechos.",
        "🤝 Saludo: Apretón firme y breve. Contacto visual apreciado."
      ],
      paymentMethods: ["Transferencia SEPA", "iDEAL"],
      tips: [
        "🤝 Decisiones por consenso (lentas), pero cumplimiento riguroso.",
        "🤵 Trato formal (Mr./Mrs. + apellido). Valoran naturalidad y humildad.",
        "🤫 Humor sutil o irónico, pero poco usado en negocios formales."
      ],
      opportunities: ["Flores", "Agroalimentario", "Logística (Puerto de Rotterdam)"],
      mistakesToAvoid: [
        "🛑 Ser ostentoso; valoran la privacidad y modestia.",
        "🌫️ Ser vago o indirecto.",
        "🤥 Prometer más de lo que puede cumplir."
      ]
    },
    usefulLinks: [
      { title: "Inspectie Leefomgeving en Transport (ILT)", url: "https://www.ilent.nl/" },
      { title: "Government of the Netherlands (Business)", url: "https://www.government.nl/topics/doing-business" }
    ],
    population: "18 millones",
    government: "Monarquía constitucional",
    gdp: "1.23T USD",
    tradeBalance: { exports: "768,259 M USD", imports: "710,772 M USD" },
    tradePartners: ["Alemania", "Bélgica", "Reino Unido"],
    mainSectors: ["Electrónica", "Flores", "Productos químicos"]
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
    negotiation: {
      style: "🏰 Relacional, formal y de ritmo lento. Priorizan calidad y servicio sobre precio.",
      culturalNorms: [
        "⏰ Puntualidad: Esencial, especialmente en Lisboa. Confirmar citas por escrito.",
        "🗣️ Reuniones: Ritmo lento; concesiones paulatinas.",
        "👔 Trato formal: Senhor/Senhora + apellido. Títulos como 'Doutor' muy usados."
      ],
      paymentMethods: ["Transferencia SEPA"],
      tips: [
        "🤝 Relaciones personales clave; contacto continuo esencial.",
        "😂 Humor ligero y cordial es bien recibido; evitar ironía.",
        "🧠 Evitar actitudes de superioridad; fuerte orgullo nacional."
      ],
      opportunities: ["Corcho", "Calzado", "Turismo y tecnología"],
      mistakesToAvoid: [
        "🇪🇸 Evitar comparaciones con España.",
        "🏃 Presionar para tomar decisiones rápidas.",
        "🤬 Usar humor ofensivo o sarcástico."
      ]
    },
    usefulLinks: [
      { title: "Autoridade Nacional da Aviação Civil (ANAC)", url: "https://www.anac.pt/" },
      { title: "AICEP Portugal Global", url: "https://www.portugalglobal.pt/" }
    ],
    population: "10,4 millones",
    government: "República semipresidencialista",
    gdp: "309B USD",
    tradeBalance: { exports: "82,56 M USD", imports: "115,291 M USD" },
    tradePartners: ["España", "Francia", "Alemania", "Estados Unidos"],
    mainSectors: ["Productos agrícolas", "Componentes electrónicos"]
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
    negotiation: {
      style: "⌚ Conservador, formal y extremadamente puntual. Calidad y precisión son primordiales.",
      culturalNorms: [
        "⏰ Puntualidad: Extremadamente puntual; llegar unos minutos antes.",
        "🗣️ Reuniones: Ambiente serio; directo en zonas alemanas, charla breve en otras.",
        "🤝 Saludo: Apretón de manos para todos. Mr./Mrs. + apellido.",
        "⛔ Humor: No bromear en reuniones; se valora la seriedad."
      ],
      paymentMethods: ["Transferencia bancaria"],
      tips: [
        "🏦 Altamente jerárquicos y reacios al riesgo. Relaciones a largo plazo.",
        "🐢 Decisiones lentas; paciencia es clave.",
        "🔒 Vida personal muy reservada. Evitar temas personales."
      ],
      opportunities: ["Relojería", "Farmacéutica", "Servicios financieros"],
      mistakesToAvoid: [
        "🛑 Llegar tarde.",
        "🗣️ Ser demasiado informal o hacer preguntas personales.",
        "🃏 Usar humor en contextos serios."
      ]
    },
    usefulLinks: [
      { title: "Federal Office of Civil Aviation (FOCA)", url: "https://www.bazl.admin.ch/" },
      { title: "State Secretariat for Economic Affairs (SECO)", url: "https://www.seco.admin.ch/" }
    ],
    population: "8,8 millones",
    government: "Confederación federal",
    gdp: "937B USD",
    tradeBalance: { exports: "400,057 M USD", imports: "356,235 M USD" },
    tradePartners: ["Alemania", "Italia", "Francia", "Estados Unidos"],
    mainSectors: ["Relojes", "Productos farmacéuticos", "Maquinaria"]
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
        style: "🧧 Indirecto, jerárquico y basado en el 'guanxi'. Silencios estratégicos y disciplina.",
        culturalNorms: [
          "⏰ Puntualidad: Se valora la disciplina y el respeto horario implícito.",
          "🤐 Reuniones: Grupales; el silencio es estrategia. Evitar mostrar emociones.",
          "🤝 Etiqueta: Saludo leve o apretón de manos. Tarjetas con ambas manos."
        ],
        paymentMethods: ["Carta de crédito", "Transferencia TT"],
        tips: [
          "🔗 Relación 'guanxi' (red de contactos) es esencial.",
          "📝 Todo por escrito (MOU). Decisión por consenso.",
          "📉 Táctica del 'agravio' (última concesión antes del cierre)."
        ],
        opportunities: ["Cobre y otros minerales", "Frutas (arándanos, uvas)", "Productos pesqueros"],
        mistakesToAvoid: [
          "🇹🇼 Hablar de Taiwán o política.",
          "🔞 Hacer chistes sexuales.",
          "🏃 Mostrar prisa o emociones intensas."
        ]
    },
    usefulLinks: [
      { title: "Civil Aviation Administration of China (CAAC)", url: "http://www.caac.gov.cn/" },
      { title: "Ministry of Commerce (MOFCOM)", url: "http://english.mofcom.gov.cn/" }
    ],
    population: "1.400 millones",
    government: "República socialista (PCCh)",
    gdp: "18.7T USD",
    tradeBalance: { exports: "3,593,601 M USD", imports: "2,715,998 M USD" },
    tradePartners: ["Estados Unidos", "Unión Europea", "Japón", "Corea del Sur", "ASEAN"],
    mainSectors: ["Productos electrónicos", "Maquinaria ligera", "Textiles"]
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
    negotiation: {
      style: "🇰🇷 Jerárquico, formal y rápido. 'Pali-pali' (rápido-rápido) con armonía grupal.",
      culturalNorms: [
        "⏰ Puntualidad: No explícita, pero se infiere alta formalidad.",
        "🗣️ Reuniones: Cortesía, no prisa. Charla sobre salud/viaje antes de negocios.",
        "🤝 Saludo: Apretón suave con inclinación. Apellidos con 'Mr.' o 'ssi'.",
        "📇 Tarjetas: Intercambio con respeto (leerlas y guardarlas)."
      ],
      paymentMethods: ["Transferencia bancaria", "Carta de crédito"],
      tips: [
        "❌ Evitar hablar de Corea del Norte o comparar con Japón.",
        "🤐 La risa puede indicar incomodidad, no alegría.",
        "🎁 Regalos comunes, pero no se abren frente al dador.",
        "4️⃣ Superstición con el número 4 (se omite en edificios)."
      ],
      opportunities: ["Electrónica", "Automóviles", "Cosméticos (K-Beauty)"],
      mistakesToAvoid: [
        "🐕 Considerar al perro como mascota pura (puede verse como impuro).",
        "🙅 Desafiar a un superior en público.",
        "🍶 Rechazar una invitación a beber después del trabajo."
      ]
    },
    usefulLinks: [
      { title: "Korea Office of Civil Aviation (KOCA)", url: "http://www.molit.go.kr/" },
      { title: "Ministry of Trade, Industry and Energy (MOTIE)", url: "http://english.motie.go.kr/" }
    ],
    population: "52 millones",
    government: "República presidencialista",
    gdp: "1.71T USD",
    tradeBalance: { exports: "683,551 M USD", imports: "731,361 M USD" },
    tradePartners: ["China", "Estados Unidos", "Vietnam"],
    mainSectors: ["Semiconductores", "Electrónica de alta gama", "Productos farmacéuticos"]
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
    negotiation: { style: "Relacional y jerárquico. La confianza y las conexiones personales ('wasta') son fundamentales.", culturalNorms: ["Las reuniones comienzan con una larga charla social.", "La hospitalidad es primordial.", "Las decisiones las toma el que tiene la máxima autoridad."], paymentMethods: ["Transferencia bancaria", "Cheques posfechados (común)"], tips: ["Invierta mucho tiempo en construir relaciones.", "Sea paciente, el tiempo se percibe de forma flexible.", "Acepte siempre el café o el té que le ofrezcan."], opportunities: ["Construcción y bienes raíces", "Turismo de lujo", "Centro financiero y logístico"], mistakesToAvoid: ["Apresurar el negocio.", "Mostrar la suela de los zapatos.", "Preguntar por las mujeres de la familia."] },
    usefulLinks: [
      { title: "General Civil Aviation Authority (GCAA)", url: "https://www.gcaa.gov.ae/" },
      { title: "Ministerio de Economía", url: "https://www.moec.gov.ae/" }
    ],
    population: "10 millones",
    government: "Monarquía federal",
    gdp: "537B USD",
    tradeBalance: { exports: "515,621 M USD", imports: "420,493 M USD" },
    tradePartners: ["China", "India", "Estados Unidos", "Japón", "Vietnam"],
    mainSectors: ["Oro", "Diamantes", "Joyería", "Productos electrónicos"]
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
    negotiation: {
      style: "🕉️ Jerárquico, relacional y lento. El regateo es una parte integral.",
      culturalNorms: [
        "⏰ Puntualidad: Se valora la planificación aunque no se mencione directamente.",
        "🗣️ Reuniones: Formales y lentas. 1er contacto para conocerse. Aceptar té.",
        "🤝 Saludo: 'Namaste' o apretón suave. Evitar tocar la cabeza.",
        "👔 Títulos: Estatus, edad y profesión son claves."
      ],
      paymentMethods: ["Transferencia bancaria", "Carta de crédito"],
      tips: [
        "😂 Humor amable y respetuoso; evitar ironía o sarcasmo.",
        "🛠️ Ofrecer asistencia técnica es valorado.",
        "🎁 Regalos al cerrar tratos (whisky, especias)."
      ],
      opportunities: ["Servicios de TI y software", "Farmacéutica", "Textiles"],
      mistakesToAvoid: [
        "🛑 Ser demasiado directo.",
        "🇵🇰 Mencionar Pakistán, pobreza o temas religiosos.",
        "✋ Usar la mano izquierda para dar o recibir cosas."
      ]
    },
    usefulLinks: [
      { title: "Directorate General of Civil Aviation (DGCA)", url: "http://www.dgca.gov.in/" },
      { title: "Ministry of Commerce and Industry", url: "https://commerce.gov.in/" }
    ],
    population: "1.420 millones",
    government: "República federal parlamentaria",
    gdp: "3.91T USD",
    tradeBalance: { exports: "452,684 M USD", imports: "732,566 M USD" },
    tradePartners: ["Estados Unidos", "China", "Emiratos Árabes Unidos", "Rusia"],
    mainSectors: ["Diamantes", "Joyería", "Productos farmacéuticos", "Textiles de moda"]
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
    negotiation: {
      style: "🌇 Profesional, rápido y directo. Mezcla de influencias asiáticas y occidentales.",
      culturalNorms: [
        "⏰ Puntualidad: Muy valorada; retrasos deben evitarse.",
        "🗣️ Reuniones: Negociaciones rápidas; estilo occidental. Presentaciones gráficas.",
        "🤝 Saludo: Título profesional + apellido. Apretón de manos con contacto visual.",
        "😶 Humor: Evitar el humor hasta tener confianza."
      ],
      paymentMethods: ["Transferencia bancaria"],
      tips: [
        "🌏 Población multicultural (chino, malayo, indio).",
        "✅ 'Sí' puede solo indicar continuidad, no acuerdo.",
        "📝 Contratos sólidos; cumplimiento riguroso. Alta ética profesional."
      ],
      opportunities: ["Centro financiero", "Biotecnología", "Logística de alta tecnología"],
      mistakesToAvoid: [
        "🛑 Llegar tarde.",
        "🗣️ Criticar al gobierno.",
        "🍬 Masticar chicle en público (está prohibido)."
      ]
    },
    usefulLinks: [
      { title: "Civil Aviation Authority of Singapore (CAAS)", url: "https://www.caas.gov.sg/" },
      { title: "Ministry of Trade and Industry (MTI)", url: "https://www.mti.gov.sg/" }
    ],
    population: "6 millones",
    government: "República parlamentaria",
    gdp: "547B USD",
    tradeBalance: { exports: "514,966 M USD", imports: "475,413 M USD" },
    tradePartners: ["China", "Estados Unidos", "Malasia", "Hong Kong"],
    mainSectors: ["Semiconductores", "Productos electrónicos", "Farmacéuticos"]
  },
  {
    id: "sudafrica",
    continent: "Africa",
    name: "Sudáfrica",
    capital: "Pretoria (Adm.), Ciudad del Cabo (Leg.), Bloemfontein (Jud.)",
    languages: ["11 idiomas oficiales", "Afrikáans", "Inglés", "Zulú", "Xhosa"],
    flagEmoji: "🇿🇦",
    countryCode: "za",
    airports: [{ name: "O. R. Tambo International", iata: "JNB" }],
    routes: [{ path: "Lima - Los angeles - Seúl - Johannesburgo", travelTime: "4 dias", airlines: ["Air Korean"] }],
    currency: "Rand (ZAR)",
    timezone: "UTC+2",
    coords: { lat: -25.7479, lon: 28.2293 },
    negotiation: {
      style: "🌍 Diverso, mezcla occidental (directo) y africano (relacional). Inglés principal.",
      culturalNorms: [
        "⏰ Puntualidad: Muy valorada; se debe avisar si hay retraso.",
        "🗣️ Reuniones: Formal pero amistoso; charla informal breve.",
        "🤝 Saludo: Apretón de manos firme; uso de Mr./Mrs. + apellido.",
        "🎵 Cultura: Rica en diversidad, safaris, kwaito, jazz y música tradicional zulú."
      ],
      paymentMethods: ["Transferencia bancaria (EFT)"],
      tips: [
        "🤝 Buscan acuerdos 'ganador-ganador'.",
        "🏦 Pagan con autorización del Banco Central.",
        "📜 Confían más en relaciones que en contratos legales.",
        "✈️ Enfoque en carga aérea: Productos de alto valor (joyería, electrónica) y perecibles."
      ],
      opportunities: ["Joyería y piedras preciosas", "Vehículos de lujo y partes", "Frutas frescas y nueces", "Maquinaria especializada", "Electrónica"],
      mistakesToAvoid: [
        "🛑 Ser insensible a la historia del apartheid.",
        "🌍 Generalizar sobre la cultura.",
        "🤐 Temas tabú: política, religión, racismo."
      ]
    },
    usefulLinks: [
      { title: "South African Civil Aviation Authority (SACAA)", url: "http://www.caa.co.za/" },
      { title: "Departamento de Comercio e Industria de Sudáfrica", url: "http://www.thedti.gov.za/" }
    ],
    population: "60 millones",
    government: "República presidencialista",
    gdp: "400,3 mil M USD",
    tradeBalance: { exports: "145 mil M USD", imports: "130,747 M USD" },
    tradePartners: ["China", "Estados Unidos", "Reino Unido", "Alemania", "Japón"],
    mainSectors: ["Metales y piedras preciosas", "Minerales (ores, slag, ash)", "Vehículos", "Combustibles minerales / petróleo", "Maquinaria", "Frutas/nueces", "Acero", "Productos químicos"]
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
    negotiation: {
      style: "☕ Relacional y jerárquico. Hospitalidad y confianza son clave; regateo intenso.",
      culturalNorms: [
        "⏰ Puntualidad: Con retrasos comunes; reconfirmar citas.",
        "🗣️ Reuniones: Charla general inicial. Estilo firme y emocional.",
        "🤝 Saludo: Apretón de manos; besos en mejillas entre conocidos.",
        "😂 Humor: Sí usan el humor; compartirlo es apreciado."
      ],
      paymentMethods: ["Transferencia bancaria", "Carta de crédito"],
      tips: [
        "📝 Contratos generales; detalles se ajustan.",
        "💵 Operaciones suelen hacerse en dólares.",
        "🏗️ Sectores clave: grandes holdings y empresas públicas."
      ],
      opportunities: ["Textiles y confección", "Automotriz", "Construcción"],
      mistakesToAvoid: [
        "☕ Rechazar la hospitalidad (té/café).",
        "🛑 Evitar cruzar brazos/piernas o mostrar suela del zapato.",
        "🗣️ Discutir temas políticos sensibles."
      ]
    },
    usefulLinks: [
      { title: "Directorate General of Civil Aviation", url: "http://web.shgm.gov.tr/" },
      { title: "Ministry of Trade", url: "https://ticaret.gov.tr/" }
    ],
    population: "~85 millones",
    government: "República presidencialista",
    gdp: "906 mil M USD",
    tradeBalance: { exports: "254 mil M USD", imports: "364 mil M USD" },
    tradePartners: ["Alemania", "Estados Unidos", "Irak", "Reino Unido"],
    mainSectors: ["Vehículos", "Maquinaria", "Textiles", "Acero"]
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
    negotiation: {
      style: "🤠 Relajado, directo y pragmático. Igualitario y eficiente.",
      culturalNorms: [
        "⏰ Puntualidad: Muy valorada; respetan horarios laborales estrictos (9-5).",
        "🗣️ Reuniones: En inglés, directas y prácticas. Evitan exceso de detalles.",
        "😂 Humor: Aprecian el humor, sobre todo si es breve."
      ],
      paymentMethods: ["Transferencia bancaria"],
      tips: [
        "⌛ Respetan mucho su tiempo libre (no trabajan después de las 5 p.m. ni fines de semana).",
        "🤝 No regatean mucho; valoran transparencia y entrega puntual.",
        "🌿 Valoran la naturaleza y el deporte."
      ],
      opportunities: ["Minería", "Educación", "Vino y productos agrícolas"],
      mistakesToAvoid: [
        "🇬🇧 Evitar comparar con Reino Unido o EE.UU.",
        "🤐 No hablar de aborígenes o temas políticos sensibles.",
        "🛑 Ser pretencioso; valoran la modestia."
      ]
    },
    usefulLinks: [
      { title: "Civil Aviation Safety Authority (CASA)", url: "https://www.casa.gov.au/" },
      { title: "Department of Foreign Affairs and Trade", url: "https://www.dfat.gov.au/" }
    ],
    population: "26 millones",
    government: "Monarquía constitucional federal",
    gdp: "1,752 mil M USD",
    tradeBalance: { exports: "463,1 mil M USD", imports: "387,53 mil M USD" },
    tradePartners: ["China", "Japón", "Corea del Sur", "Estados Unidos"],
    mainSectors: ["Productos agrícolas de alto valor", "Frutas frescas", "Carne", "Lácteos"],
    countryProfileUrl: "https://www.exteriores.gob.es/documents/fichaspais/australia_ficha%20pais.pdf",
    tradeAgreement: {
      name: "TLC Perú - Australia (PAFTA)",
      url: "https://www.acuerdoscomerciales.gob.pe/En_Vigencia/Australia/inicio.html",
      validity: "Vigente desde el 11 de febrero de 2020",
      approvalDoc: "Ratificado por Decreto Supremo",
      passengerRights: "Cielos abiertos parciales",
      cargoProducts: "Minerales, productos agrícolas, manufacturas."
    }
  },
  {
    id: "indonesia",
    continent: "Asia",
    name: "Indonesia",
    capital: "Yakarta",
    languages: ["Indonesio (bahasa)"],
    flagEmoji: "🇮🇩",
    countryCode: "id",
    airports: [{ name: "Soekarno–Hatta International", iata: "CGK" }],
    routes: [{ path: "Lima - Amsterdam - Yakarta", travelTime: "3 días", airlines: ["KLM"] }],
    currency: "Rupia (IDR)",
    timezone: "UTC+7",
    coords: { lat: -6.2088, lon: 106.8456 },
    negotiation: {
        style: "Relacional, indirecto y paciente. La armonía y el consenso son vitales.",
        culturalNorms: [
            "⏰ Puntualidad: Flexible ('jam karet' - hora de goma); retrasos comunes.",
            "🗣️ Reuniones: Primer encuentro para establecer relación personal; evitan decir 'no' directamente.",
            "🤝 Saludo: Apretón prolongado. Títulos como 'Bapak/Ibu' son importantes."
        ],
        paymentMethods: ["Carta de crédito", "Transferencia bancaria"],
        tips: [
            "🤫 Silencios son comunes y respetados.",
            "🤝 Regateo muy habitual.",
            "🙏 Decisiones influenciadas por armonía y espiritualidad."
        ],
        opportunities: ["Aceite de palma", "Carbón", "Textiles"],
        mistakesToAvoid: [
            "😡 Mostrar enfado o confrontación directa.",
            "🛑 Tocar la cabeza o mostrar la suela del zapato.",
            "🗣️ Hablar de temas sensibles como religión o etnia china."
        ]
    },
    usefulLinks: [
        { title: "Direktorat Jenderal Perhubungan Udara", url: "http://hubud.dephub.go.id/" },
        { title: "Ministerio de Trade", url: "https://www.kemendag.go.id/" }
    ],
    population: "275 millones",
    government: "República presidencialista",
    gdp: "1.4T USD",
    tradeBalance: { exports: "291,979 M USD", imports: "237,447 M USD" },
    tradePartners: ["China", "Estados Unidos", "Japón", "Singapur"],
    mainSectors: ["Productos agrícolas perecibles", "Café de especialidad", "Mariscos", "Textiles"]
  }
];
