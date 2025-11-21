

export interface WeightBrackets {
  min_0_50: number;
  k_51_99: number;
  k_100_299: number;
  k_300_999: number;
  k_1000_plus: number;
}

export interface CalculatorRouteV2 {
  id: string;
  name: string;
  country: string;
  countryCode: string;
  rates: WeightBrackets;
}

export const calculatorRoutes: CalculatorRouteV2[] = [
  {
    id: "bue-1",
    name: "Buenos Aires 1",
    country: "Argentina",
    countryCode: "ar",
    rates: { min_0_50: 300.00, k_51_99: 5.50, k_100_299: 4.60, k_300_999: 3.00, k_1000_plus: 2.60 }
  },
  {
    id: "bue-2",
    name: "Buenos Aires 2",
    country: "Argentina",
    countryCode: "ar",
    rates: { min_0_50: 301.00, k_51_99: 5.00, k_100_299: 2.90, k_300_999: 2.80, k_1000_plus: 2.60 }
  },
  {
    id: "lap-1",
    name: "La Paz 1",
    country: "Bolivia",
    countryCode: "bo",
    rates: { min_0_50: 300.00, k_51_99: 5.00, k_100_299: 4.00, k_300_999: 3.20, k_1000_plus: 2.60 }
  },
  {
    id: "lap-2",
    name: "La Paz 2",
    country: "Bolivia",
    countryCode: "bo",
    rates: { min_0_50: 300.00, k_51_99: 5.00, k_100_299: 4.30, k_300_999: 3.20, k_1000_plus: 2.60 }
  },
  {
    id: "rio-1",
    name: "Rio de Janeiro 1",
    country: "Brasil",
    countryCode: "br",
    rates: { min_0_50: 300.00, k_51_99: 5.00, k_100_299: 4.30, k_300_999: 3.20, k_1000_plus: 2.60 }
  },
  {
    id: "sao-1",
    name: "Sao Paulo 1",
    country: "Brasil",
    countryCode: "br",
    rates: { min_0_50: 300.00, k_51_99: 5.00, k_100_299: 4.30, k_300_999: 3.20, k_1000_plus: 2.60 }
  },
  {
    id: "sao-2",
    name: "Sao Paulo 2",
    country: "Brasil",
    countryCode: "br",
    rates: { min_0_50: 300.00, k_51_99: 5.00, k_100_299: 4.30, k_300_999: 3.20, k_1000_plus: 2.60 }
  },
  {
    id: "sao-3",
    name: "Sao Paulo 3",
    country: "Brasil",
    countryCode: "br",
    rates: { min_0_50: 300.00, k_51_99: 5.00, k_100_299: 4.30, k_300_999: 3.20, k_1000_plus: 2.60 }
  },
  {
    id: "yul-2",
    name: "Montreal 2",
    country: "Canadá",
    countryCode: "ca",
    rates: { min_0_50: 350.00, k_51_99: 4.30, k_100_299: 3.00, k_300_999: 2.90, k_1000_plus: 2.70 }
  },
  {
    id: "yqb-1",
    name: "Quebec 1",
    country: "Canadá",
    countryCode: "ca",
    rates: { min_0_50: 350.00, k_51_99: 4.30, k_100_299: 3.00, k_300_999: 2.90, k_1000_plus: 2.70 }
  },
  {
    id: "yyz-1",
    name: "Toronto 1",
    country: "Canadá",
    countryCode: "ca",
    rates: { min_0_50: 350.00, k_51_99: 4.30, k_100_299: 3.10, k_300_999: 2.90, k_1000_plus: 2.70 }
  },
  {
    id: "yyz-2",
    name: "Toronto 2",
    country: "Canadá",
    countryCode: "ca",
    rates: { min_0_50: 350.00, k_51_99: 4.30, k_100_299: 3.00, k_300_999: 2.90, k_1000_plus: 2.70 }
  },
  {
    id: "yyz-3",
    name: "Toronto 3",
    country: "Canadá",
    countryCode: "ca",
    rates: { min_0_50: 350.00, k_51_99: 4.30, k_100_299: 3.00, k_300_999: 2.90, k_1000_plus: 2.70 }
  },
  {
    id: "yvr-1",
    name: "Vancouver 1",
    country: "Canadá",
    countryCode: "ca",
    rates: { min_0_50: 350.00, k_51_99: 4.20, k_100_299: 3.50, k_300_999: 3.00, k_1000_plus: 2.90 }
  },
  {
    id: "scl-2",
    name: "Santiago de Chile 2",
    country: "Chile",
    countryCode: "cl",
    rates: { min_0_50: 300.00, k_51_99: 5.50, k_100_299: 4.30, k_300_999: 3.20, k_1000_plus: 2.60 }
  },
  {
    id: "baq-1",
    name: "Barranquilla 1",
    country: "Colombia",
    countryCode: "co",
    rates: { min_0_50: 310.00, k_51_99: 5.00, k_100_299: 4.30, k_300_999: 3.20, k_1000_plus: 2.60 }
  },
  {
    id: "mde-1",
    name: "Medellín 1",
    country: "Colombia",
    countryCode: "co",
    rates: { min_0_50: 302.00, k_51_99: 5.00, k_100_299: 4.30, k_300_999: 3.20, k_1000_plus: 2.60 }
  },
  {
    id: "sjo-1",
    name: "San José 1",
    country: "Costa Rica",
    countryCode: "cr",
    rates: { min_0_50: 280.00, k_51_99: 3.70, k_100_299: 3.30, k_300_999: 2.40, k_1000_plus: 1.90 }
  },
  {
    id: "sjo-2",
    name: "San José 2",
    country: "Costa Rica",
    countryCode: "cr",
    rates: { min_0_50: 280.00, k_51_99: 3.70, k_100_299: 3.20, k_300_999: 2.40, k_1000_plus: 1.90 }
  },
  {
    id: "hav-1",
    name: "La Habana 1",
    country: "Cuba",
    countryCode: "cu",
    rates: { min_0_50: 290.00, k_51_99: 3.70, k_100_299: 3.20, k_300_999: 2.40, k_1000_plus: 1.80 }
  },
  {
    id: "cur-1",
    name: "Curazao 1",
    country: "Curazao",
    countryCode: "cw",
    rates: { min_0_50: 309.00, k_51_99: 5.50, k_100_299: 4.30, k_300_999: 3.20, k_1000_plus: 2.60 }
  },
  {
    id: "gye-1",
    name: "Guayaquil 1",
    country: "Ecuador",
    countryCode: "ec",
    rates: { min_0_50: 303.00, k_51_99: 5.00, k_100_299: 4.30, k_300_999: 3.20, k_1000_plus: 2.60 }
  },
  {
    id: "uio-2",
    name: "Quito 2",
    country: "Ecuador",
    countryCode: "ec",
    rates: { min_0_50: 303.00, k_51_99: 5.50, k_100_299: 4.30, k_300_999: 3.20, k_1000_plus: 2.60 }
  },
  {
    id: "sal-1",
    name: "San Salvador 1",
    country: "El Salvador",
    countryCode: "sv",
    rates: { min_0_50: 280.00, k_51_99: 3.70, k_100_299: 3.20, k_300_999: 2.40, k_1000_plus: 1.80 }
  },
  {
    id: "sal-2",
    name: "San Salvador 2",
    country: "El Salvador",
    countryCode: "sv",
    rates: { min_0_50: 280.00, k_51_99: 3.70, k_100_299: 3.20, k_300_999: 2.40, k_1000_plus: 1.80 }
  },
  {
    id: "atl-1",
    name: "Atlanta 1",
    country: "Estados Unidos",
    countryCode: "us",
    rates: { min_0_50: 320.00, k_51_99: 3.70, k_100_299: 3.00, k_300_999: 2.70, k_1000_plus: 2.50 }
  },
  {
    id: "atl-2",
    name: "Atlanta 2",
    country: "Estados Unidos",
    countryCode: "us",
    rates: { min_0_50: 320.00, k_51_99: 3.70, k_100_299: 3.00, k_300_999: 2.70, k_1000_plus: 2.50 }
  },
  {
    id: "fll-2",
    name: "Fort Lauderdale 2",
    country: "Estados Unidos",
    countryCode: "us",
    rates: { min_0_50: 320.00, k_51_99: 3.70, k_100_299: 3.00, k_300_999: 2.70, k_1000_plus: 2.50 }
  },
  {
    id: "iah-1",
    name: "Houston 1",
    country: "Estados Unidos",
    countryCode: "us",
    rates: { min_0_50: 320.00, k_51_99: 3.70, k_100_299: 3.00, k_300_999: 2.70, k_1000_plus: 2.50 }
  },
  {
    id: "lax-1",
    name: "Los Angeles 1",
    country: "Estados Unidos",
    countryCode: "us",
    rates: { min_0_50: 300.00, k_51_99: 3.50, k_100_299: 2.80, k_300_999: 2.50, k_1000_plus: 2.30 }
  },
  {
    id: "lax-2",
    name: "Los Angeles 2",
    country: "Estados Unidos",
    countryCode: "us",
    rates: { min_0_50: 300.00, k_51_99: 3.50, k_100_299: 2.80, k_300_999: 2.50, k_1000_plus: 2.30 }
  },
  {
    id: "lax-3",
    name: "Los Angeles 3",
    country: "Estados Unidos",
    countryCode: "us",
    rates: { min_0_50: 300.00, k_51_99: 3.50, k_100_299: 2.80, k_300_999: 2.50, k_1000_plus: 2.30 }
  },
  {
    id: "lax-6",
    name: "Los Angeles 6",
    country: "Estados Unidos",
    countryCode: "us",
    rates: { min_0_50: 300.00, k_51_99: 3.50, k_100_299: 2.80, k_300_999: 2.50, k_1000_plus: 2.30 }
  },
  {
    id: "mia-1",
    name: "Miami 1",
    country: "Estados Unidos",
    countryCode: "us",
    rates: { min_0_50: 250.00, k_51_99: 3.00, k_100_299: 2.00, k_300_999: 1.80, k_1000_plus: 1.50 }
  },
  {
    id: "mia-2",
    name: "Miami 2",
    country: "Estados Unidos",
    countryCode: "us",
    rates: { min_0_50: 250.00, k_51_99: 3.00, k_100_299: 2.00, k_300_999: 1.80, k_1000_plus: 1.50 }
  },
  {
    id: "mia-3",
    name: "Miami 3",
    country: "Estados Unidos",
    countryCode: "us",
    rates: { min_0_50: 250.00, k_51_99: 3.00, k_100_299: 2.00, k_300_999: 1.80, k_1000_plus: 1.50 }
  },
  {
    id: "mia-4",
    name: "Miami 4",
    country: "Estados Unidos",
    countryCode: "us",
    rates: { min_0_50: 250.00, k_51_99: 3.00, k_100_299: 2.00, k_300_999: 1.80, k_1000_plus: 1.50 }
  },
  {
    id: "mia-5",
    name: "Miami 5",
    country: "Estados Unidos",
    countryCode: "us",
    rates: { min_0_50: 250.00, k_51_99: 3.00, k_100_299: 2.00, k_300_999: 1.80, k_1000_plus: 1.50 }
  },
  {
    id: "mia-6",
    name: "Miami 6",
    country: "Estados Unidos",
    countryCode: "us",
    rates: { min_0_50: 250.00, k_51_99: 3.00, k_100_299: 2.00, k_300_999: 1.80, k_1000_plus: 1.50 }
  },
  {
    id: "mia-7",
    name: "Miami 7",
    country: "Estados Unidos",
    countryCode: "us",
    rates: { min_0_50: 250.00, k_51_99: 3.00, k_100_299: 2.00, k_300_999: 1.80, k_1000_plus: 1.50 }
  },
  {
    id: "mia-8",
    name: "Miami 8",
    country: "Estados Unidos",
    countryCode: "us",
    rates: { min_0_50: 250.00, k_51_99: 3.00, k_100_299: 2.00, k_300_999: 1.80, k_1000_plus: 1.50 }
  },
  {
    id: "mia-9",
    name: "Miami 9",
    country: "Estados Unidos",
    countryCode: "us",
    rates: { min_0_50: 250.00, k_51_99: 3.00, k_100_299: 2.00, k_300_999: 1.80, k_1000_plus: 1.50 }
  },
  {
    id: "mia-10",
    name: "Miami 10",
    country: "Estados Unidos",
    countryCode: "us",
    rates: { min_0_50: 250.00, k_51_99: 3.00, k_100_299: 2.00, k_300_999: 1.80, k_1000_plus: 1.50 }
  },
  {
    id: "nyc-1",
    name: "Nueva York 1",
    country: "Estados Unidos",
    countryCode: "us",
    rates: { min_0_50: 300.00, k_51_99: 3.50, k_100_299: 2.80, k_300_999: 2.50, k_1000_plus: 2.30 }
  },
  {
    id: "nyc-4",
    name: "Nueva York 4",
    country: "Estados Unidos",
    countryCode: "us",
    rates: { min_0_50: 300.00, k_51_99: 3.50, k_100_299: 2.80, k_300_999: 2.50, k_1000_plus: 2.30 }
  },
  {
    id: "sfo-1",
    name: "San Francisco (-)",
    country: "Estados Unidos",
    countryCode: "us",
    rates: { min_0_50: 0, k_51_99: 0, k_100_299: 0, k_300_999: 0, k_1000_plus: 0 }
  },
  {
    id: "ttn-1",
    name: "Trenton (-)",
    country: "Estados Unidos",
    countryCode: "us",
    rates: { min_0_50: 0, k_51_99: 0, k_100_299: 0, k_300_999: 0, k_1000_plus: 0 }
  },
  {
    id: "iad-1",
    name: "Washington 1",
    country: "Estados Unidos",
    countryCode: "us",
    rates: { min_0_50: 320.00, k_51_99: 3.70, k_100_299: 3.00, k_300_999: 2.70, k_1000_plus: 2.50 }
  },
  {
    id: "gua-1",
    name: "Guatemala 1",
    country: "Guatemala",
    countryCode: "gt",
    rates: { min_0_50: 280.00, k_51_99: 3.70, k_100_299: 3.20, k_300_999: 2.40, k_1000_plus: 1.80 }
  },
  {
    id: "cun-1",
    name: "Cancún (-)",
    country: "México",
    countryCode: "mx",
    rates: { min_0_50: 0, k_51_99: 0, k_100_299: 0, k_300_999: 0, k_1000_plus: 0 }
  },
  {
    id: "mex-1",
    name: "Ciudad de México 1",
    country: "México",
    countryCode: "mx",
    rates: { min_0_50: 250.00, k_51_99: 3.00, k_100_299: 2.00, k_300_999: 1.80, k_1000_plus: 1.50 }
  },
  {
    id: "pty-1",
    name: "Panamá 1",
    country: "Panamá",
    countryCode: "pa",
    rates: { min_0_50: 300.00, k_51_99: 3.70, k_100_299: 3.20, k_300_999: 2.40, k_1000_plus: 1.85 }
  },
  {
    id: "asu-2",
    name: "Asunción 2",
    country: "Paraguay",
    countryCode: "py",
    rates: { min_0_50: 305.00, k_51_99: 5.00, k_100_299: 4.30, k_300_999: 3.20, k_1000_plus: 2.60 }
  },
  {
    id: "sdq-1",
    name: "Santo Domingo (-)",
    country: "Rep. Dominicana",
    countryCode: "do",
    rates: { min_0_50: 0, k_51_99: 0, k_100_299: 0, k_300_999: 0, k_1000_plus: 0 }
  },
  {
    id: "mvd-1",
    name: "Montevideo 1",
    country: "Uruguay",
    countryCode: "uy",
    rates: { min_0_50: 304.00, k_51_99: 5.00, k_100_299: 4.30, k_300_999: 3.20, k_1000_plus: 2.60 }
  },
  {
    id: "mvd-2",
    name: "Montevideo 2",
    country: "Uruguay",
    countryCode: "uy",
    rates: { min_0_50: 300.00, k_51_99: 5.00, k_100_299: 4.30, k_300_999: 3.50, k_1000_plus: 2.60 }
  },
  {
    id: "ccs-1",
    name: "Caracas (-)",
    country: "Venezuela",
    countryCode: "ve",
    rates: { min_0_50: 0, k_51_99: 0, k_100_299: 0, k_300_999: 0, k_1000_plus: 0 }
  },
  {
    id: "vln-1",
    name: "Valencia (-)",
    country: "Venezuela",
    countryCode: "ve",
    rates: { min_0_50: 0, k_51_99: 0, k_100_299: 0, k_300_999: 0, k_1000_plus: 0 }
  },
  {
    id: "ber-2",
    name: "Berlin 2",
    country: "Alemania",
    countryCode: "de",
    rates: { min_0_50: 320.00, k_51_99: 3.90, k_100_299: 4.30, k_300_999: 3.40, k_1000_plus: 2.00 }
  },
  {
    id: "fra-1",
    name: "Frankfurt 1",
    country: "Alemania",
    countryCode: "de",
    rates: { min_0_50: 340.00, k_51_99: 4.90, k_100_299: 4.30, k_300_999: 3.40, k_1000_plus: 1.90 }
  },
  {
    id: "aut-1",
    name: "Austria (-)",
    country: "Austria",
    countryCode: "at",
    rates: { min_0_50: 0, k_51_99: 0, k_100_299: 0, k_300_999: 0, k_1000_plus: 0 }
  },
  {
    id: "bel-1",
    name: "Amberes (-)",
    country: "Bélgica",
    countryCode: "be",
    rates: { min_0_50: 0, k_51_99: 0, k_100_299: 0, k_300_999: 0, k_1000_plus: 0 }
  },
  {
    id: "bru-1",
    name: "Bruselas 1",
    country: "Bélgica",
    countryCode: "be",
    rates: { min_0_50: 320.00, k_51_99: 6.50, k_100_299: 3.78, k_300_999: 3.52, k_1000_plus: 3.36 }
  },
  {
    id: "zag-1",
    name: "Zagreb (-)",
    country: "Croacia",
    countryCode: "hr",
    rates: { min_0_50: 0, k_51_99: 0, k_100_299: 0, k_300_999: 0, k_1000_plus: 0 }
  },
  {
    id: "bcn-1",
    name: "Barcelona (-)",
    country: "España",
    countryCode: "es",
    rates: { min_0_50: 0, k_51_99: 0, k_100_299: 0, k_300_999: 0, k_1000_plus: 0 }
  },
  {
    id: "mad-1",
    name: "Madrid 1",
    country: "España",
    countryCode: "es",
    rates: { min_0_50: 342.00, k_51_99: 4.80, k_100_299: 4.20, k_300_999: 3.40, k_1000_plus: 1.90 }
  },
  {
    id: "mad-2",
    name: "Madrid 2",
    country: "España",
    countryCode: "es",
    rates: { min_0_50: 342.00, k_51_99: 4.80, k_100_299: 4.20, k_300_999: 3.40, k_1000_plus: 1.90 }
  },
  {
    id: "mad-3",
    name: "Madrid 3",
    country: "España",
    countryCode: "es",
    rates: { min_0_50: 342.00, k_51_99: 4.80, k_100_299: 4.20, k_300_999: 3.40, k_1000_plus: 1.90 }
  },
  {
    id: "mad-5",
    name: "Madrid 5",
    country: "España",
    countryCode: "es",
    rates: { min_0_50: 342.00, k_51_99: 4.80, k_100_299: 4.20, k_300_999: 3.40, k_1000_plus: 1.90 }
  },
  {
    id: "tll-1",
    name: "Tallín (-)",
    country: "Estonia",
    countryCode: "ee",
    rates: { min_0_50: 0, k_51_99: 0, k_100_299: 0, k_300_999: 0, k_1000_plus: 0 }
  },
  {
    id: "hel-1",
    name: "Finlandia (-)",
    country: "Finlandia",
    countryCode: "fi",
    rates: { min_0_50: 0, k_51_99: 0, k_100_299: 0, k_300_999: 0, k_1000_plus: 0 }
  },
  {
    id: "lys-1",
    name: "Lyon (-)",
    country: "Francia",
    countryCode: "fr",
    rates: { min_0_50: 0, k_51_99: 0, k_100_299: 0, k_300_999: 0, k_1000_plus: 0 }
  },
  {
    id: "cdg-1",
    name: "Paris 1",
    country: "Francia",
    countryCode: "fr",
    rates: { min_0_50: 344.00, k_51_99: 4.80, k_100_299: 4.20, k_300_999: 3.40, k_1000_plus: 1.90 }
  },
  {
    id: "cdg-3",
    name: "Paris 3",
    country: "Francia",
    countryCode: "fr",
    rates: { min_0_50: 344.00, k_51_99: 4.80, k_100_299: 4.20, k_300_999: 3.40, k_1000_plus: 1.90 }
  },
  {
    id: "cwl-1",
    name: "Cardiff (-)",
    country: "Gales",
    countryCode: "gb",
    rates: { min_0_50: 0, k_51_99: 0, k_100_299: 0, k_300_999: 0, k_1000_plus: 0 }
  },
  {
    id: "lhr-3",
    name: "Londres 3",
    country: "Inglaterra",
    countryCode: "gb",
    rates: { min_0_50: 340.00, k_51_99: 4.85, k_100_299: 4.25, k_300_999: 3.45, k_1000_plus: 2.00 }
  },
  {
    id: "lhr-4",
    name: "Londres 4",
    country: "Inglaterra",
    countryCode: "gb",
    rates: { min_0_50: 344.00, k_51_99: 4.80, k_100_299: 4.20, k_300_999: 3.40, k_1000_plus: 1.90 }
  },
  {
    id: "man-1",
    name: "Manchester (-)",
    country: "Inglaterra",
    countryCode: "gb",
    rates: { min_0_50: 0, k_51_99: 0, k_100_299: 0, k_300_999: 0, k_1000_plus: 0 }
  },
  {
    id: "ork-1",
    name: "Cork (-)",
    country: "Irlanda",
    countryCode: "ie",
    rates: { min_0_50: 0, k_51_99: 0, k_100_299: 0, k_300_999: 0, k_1000_plus: 0 }
  },
  {
    id: "dub-1",
    name: "Dublin (-)",
    country: "Irlanda",
    countryCode: "ie",
    rates: { min_0_50: 0, k_51_99: 0, k_100_299: 0, k_300_999: 0, k_1000_plus: 0 }
  },
  {
    id: "kef-1",
    name: "Keflavik (-)",
    country: "Islandia",
    countryCode: "is",
    rates: { min_0_50: 0, k_51_99: 0, k_100_299: 0, k_300_999: 0, k_1000_plus: 0 }
  },
  {
    id: "tlv-1",
    name: "Tel Aviv 1",
    country: "Israel",
    countryCode: "il",
    rates: { min_0_50: 343.00, k_51_99: 4.80, k_100_299: 4.20, k_300_999: 3.40, k_1000_plus: 1.90 }
  },
  {
    id: "mil-1",
    name: "Milán 1",
    country: "Italia",
    countryCode: "it",
    rates: { min_0_50: 344.00, k_51_99: 4.80, k_100_299: 4.20, k_300_999: 3.40, k_1000_plus: 1.90 }
  },
  {
    id: "mil-2",
    name: "Milán 2",
    country: "Italia",
    countryCode: "it",
    rates: { min_0_50: 344.00, k_51_99: 4.80, k_100_299: 4.20, k_300_999: 3.40, k_1000_plus: 1.90 }
  },
  {
    id: "rom-1",
    name: "Roma 1",
    country: "Italia",
    countryCode: "it",
    rates: { min_0_50: 344.00, k_51_99: 4.80, k_100_299: 4.20, k_300_999: 3.40, k_1000_plus: 1.90 }
  },
  {
    id: "osl-1",
    name: "Oslo (-)",
    country: "Noruega",
    countryCode: "no",
    rates: { min_0_50: 0, k_51_99: 0, k_100_299: 0, k_300_999: 0, k_1000_plus: 0 }
  },
  {
    id: "ams-1",
    name: "Amsterdam 1",
    country: "Países Bajos",
    countryCode: "nl",
    rates: { min_0_50: 349.00, k_51_99: 4.80, k_100_299: 4.20, k_300_999: 3.40, k_1000_plus: 1.90 }
  },
  {
    id: "rtm-1",
    name: "Rotterdam (-)",
    country: "Países Bajos",
    countryCode: "nl",
    rates: { min_0_50: 0, k_51_99: 0, k_100_299: 0, k_300_999: 0, k_1000_plus: 0 }
  },
  {
    id: "pol-1",
    name: "Polonia (-)",
    country: "Polonia",
    countryCode: "pl",
    rates: { min_0_50: 0, k_51_99: 0, k_100_299: 0, k_300_999: 0, k_1000_plus: 0 }
  },
  {
    id: "lis-1",
    name: "Lisboa 1",
    country: "Portugal",
    countryCode: "pt",
    rates: { min_0_50: 346.00, k_51_99: 4.80, k_100_299: 4.20, k_300_999: 3.40, k_1000_plus: 1.90 }
  },
  {
    id: "opo-1",
    name: "Oporto (-)",
    country: "Portugal",
    countryCode: "pt",
    rates: { min_0_50: 0, k_51_99: 0, k_100_299: 0, k_300_999: 0, k_1000_plus: 0 }
  },
  {
    id: "otp-1",
    name: "Bucarest (-)",
    country: "Rumania",
    countryCode: "ro",
    rates: { min_0_50: 0, k_51_99: 0, k_100_299: 0, k_300_999: 0, k_1000_plus: 0 }
  },
  {
    id: "svo-1",
    name: "Moscú (-)",
    country: "Rusia",
    countryCode: "ru",
    rates: { min_0_50: 0, k_51_99: 0, k_100_299: 0, k_300_999: 0, k_1000_plus: 0 }
  },
  {
    id: "arn-1",
    name: "Estocolmo (-)",
    country: "Suecia",
    countryCode: "se",
    rates: { min_0_50: 0, k_51_99: 0, k_100_299: 0, k_300_999: 0, k_1000_plus: 0 }
  },
  {
    id: "zrh-1",
    name: "Zurich 1",
    country: "Suiza",
    countryCode: "ch",
    rates: { min_0_50: 350.00, k_51_99: 4.90, k_100_299: 4.20, k_300_999: 3.40, k_1000_plus: 1.90 }
  },
  {
    id: "kbp-1",
    name: "Kiev (-)",
    country: "Ucrania",
    countryCode: "ua",
    rates: { min_0_50: 0, k_51_99: 0, k_100_299: 0, k_300_999: 0, k_1000_plus: 0 }
  },
  {
    id: "gyd-1",
    name: "Bakú (-)",
    country: "Azerbaiyán",
    countryCode: "az",
    rates: { min_0_50: 0, k_51_99: 0, k_100_299: 0, k_300_999: 0, k_1000_plus: 0 }
  },
  {
    id: "pek-1",
    name: "Beijing 1",
    country: "China",
    countryCode: "cn",
    rates: { min_0_50: 500.00, k_51_99: 5.40, k_100_299: 5.00, k_300_999: 4.50, k_1000_plus: 4.00 }
  },
  {
    id: "pek-2",
    name: "Beijing 2",
    country: "China",
    countryCode: "cn",
    rates: { min_0_50: 500.00, k_51_99: 5.30, k_100_299: 5.00, k_300_999: 4.50, k_1000_plus: 4.00 }
  },
  {
    id: "hkg-1",
    name: "Hong Kong (-)",
    country: "China",
    countryCode: "cn",
    rates: { min_0_50: 0, k_51_99: 0, k_100_299: 0, k_300_999: 0, k_1000_plus: 0 }
  },
  {
    id: "pvg-1",
    name: "Shanghái 1",
    country: "China",
    countryCode: "cn",
    rates: { min_0_50: 500.00, k_51_99: 5.30, k_100_299: 5.00, k_300_999: 4.50, k_1000_plus: 4.00 }
  },
  {
    id: "szx-1",
    name: "Shenzhen 1",
    country: "China",
    countryCode: "cn",
    rates: { min_0_50: 500.00, k_51_99: 5.30, k_100_299: 5.00, k_300_999: 4.50, k_1000_plus: 4.00 }
  },
  {
    id: "szx-2",
    name: "Shenzhen 2",
    country: "China",
    countryCode: "cn",
    rates: { min_0_50: 500.00, k_51_99: 5.30, k_100_299: 5.00, k_300_999: 4.50, k_1000_plus: 4.00 }
  },
  {
    id: "icn-3",
    name: "Seúl 3",
    country: "Corea del Sur",
    countryCode: "kr",
    rates: { min_0_50: 400.00, k_51_99: 5.50, k_100_299: 4.50, k_300_999: 3.80, k_1000_plus: 3.50 }
  },
  {
    id: "auh-1",
    name: "Abu Dhabi 1",
    country: "EAU",
    countryCode: "ae",
    rates: { min_0_50: 500.00, k_51_99: 6.50, k_100_299: 5.00, k_300_999: 4.50, k_1000_plus: 4.00 }
  },
  {
    id: "auh-2",
    name: "Abu Dhabi 2",
    country: "EAU",
    countryCode: "ae",
    rates: { min_0_50: 0, k_51_99: 6.50, k_100_299: 5.00, k_300_999: 4.50, k_1000_plus: 4.00 }
  },
  {
    id: "dxb-1",
    name: "Dubái 1",
    country: "EAU",
    countryCode: "ae",
    rates: { min_0_50: 500.00, k_51_99: 6.50, k_100_299: 5.00, k_300_999: 4.50, k_1000_plus: 4.00 }
  },
  {
    id: "dxb-2",
    name: "Dubái 2",
    country: "EAU",
    countryCode: "ae",
    rates: { min_0_50: 500.00, k_51_99: 6.50, k_100_299: 5.00, k_300_999: 4.50, k_1000_plus: 4.00 }
  },
  {
    id: "dxb-3",
    name: "Dubái 3",
    country: "EAU",
    countryCode: "ae",
    rates: { min_0_50: 500.00, k_51_99: 6.50, k_100_299: 5.00, k_300_999: 4.50, k_1000_plus: 4.00 }
  },
  {
    id: "dxb-4",
    name: "Dubái 4",
    country: "EAU",
    countryCode: "ae",
    rates: { min_0_50: 500.00, k_51_99: 6.50, k_100_299: 5.00, k_300_999: 4.50, k_1000_plus: 4.00 }
  },
  // --- NEW ROUTES PART 5 ---
  {
    id: "mnl-1",
    name: "Manila (-)",
    country: "Filipinas",
    countryCode: "ph",
    rates: { min_0_50: 0, k_51_99: 0, k_100_299: 0, k_300_999: 0, k_1000_plus: 0 }
  },
  {
    id: "bom-2",
    name: "Bombay 2",
    country: "India",
    countryCode: "in",
    rates: { min_0_50: 480.00, k_51_99: 6.00, k_100_299: 5.50, k_300_999: 4.50, k_1000_plus: 4.00 }
  },
  {
    id: "ccu-1",
    name: "Calcuta (-)",
    country: "India",
    countryCode: "in",
    rates: { min_0_50: 0, k_51_99: 0, k_100_299: 0, k_300_999: 0, k_1000_plus: 0 }
  },
  {
    id: "del-3",
    name: "Nueva Delhi 3",
    country: "India",
    countryCode: "in",
    rates: { min_0_50: 480.00, k_51_99: 6.00, k_100_299: 5.50, k_300_999: 4.50, k_1000_plus: 4.00 }
  },
  {
    id: "kix-1",
    name: "Osaka (-)",
    country: "Japón",
    countryCode: "jp",
    rates: { min_0_50: 0, k_51_99: 0, k_100_299: 0, k_300_999: 0, k_1000_plus: 0 }
  },
  {
    id: "nrt-1",
    name: "Tokio (-)",
    country: "Japón",
    countryCode: "jp",
    rates: { min_0_50: 0, k_51_99: 0, k_100_299: 0, k_300_999: 0, k_1000_plus: 0 }
  },
  {
    id: "doh-1",
    name: "Doha (-)",
    country: "Qatar",
    countryCode: "qa",
    rates: { min_0_50: 0, k_51_99: 0, k_100_299: 0, k_300_999: 0, k_1000_plus: 0 }
  },
  {
    id: "sin-1",
    name: "Singapur 1",
    country: "Singapur",
    countryCode: "sg",
    rates: { min_0_50: 480.00, k_51_99: 5.50, k_100_299: 5.00, k_300_999: 4.50, k_1000_plus: 4.00 }
  },
  {
    id: "bkk-1",
    name: "Bangkog (-)",
    country: "Tailandia",
    countryCode: "th",
    rates: { min_0_50: 0, k_51_99: 0, k_100_299: 0, k_300_999: 0, k_1000_plus: 0 }
  },
  {
    id: "tpe-1",
    name: "Taipei (-)",
    country: "Taiwan",
    countryCode: "tw",
    rates: { min_0_50: 0, k_51_99: 0, k_100_299: 0, k_300_999: 0, k_1000_plus: 0 }
  },
  {
    id: "alg-1",
    name: "Argelia (-)",
    country: "Argelia",
    countryCode: "dz",
    rates: { min_0_50: 0, k_51_99: 0, k_100_299: 0, k_300_999: 0, k_1000_plus: 0 }
  },
  {
    id: "dla-1",
    name: "Douala (-)",
    country: "Camerún",
    countryCode: "cm",
    rates: { min_0_50: 0, k_51_99: 0, k_100_299: 0, k_300_999: 0, k_1000_plus: 0 }
  },
  {
    id: "abj-1",
    name: "Abidjan (-)",
    country: "Costa de Marfil",
    countryCode: "ci",
    rates: { min_0_50: 0, k_51_99: 0, k_100_299: 0, k_300_999: 0, k_1000_plus: 0 }
  },
  {
    id: "cai-1",
    name: "El Cairo (-)",
    country: "Egipto",
    countryCode: "eg",
    rates: { min_0_50: 0, k_51_99: 0, k_100_299: 0, k_300_999: 0, k_1000_plus: 0 }
  },
  {
    id: "jnb-1",
    name: "Johannesburgo 1",
    country: "Sudáfrica",
    countryCode: "za",
    rates: { min_0_50: 480.00, k_51_99: 6.00, k_100_299: 5.50, k_300_999: 4.50, k_1000_plus: 4.00 }
  },
  {
    id: "ayt-1",
    name: "Antalya (-)",
    country: "Turquía",
    countryCode: "tr",
    rates: { min_0_50: 0, k_51_99: 0, k_100_299: 0, k_300_999: 0, k_1000_plus: 0 }
  },
  {
    id: "ist-1",
    name: "Estambul 1",
    country: "Turquía",
    countryCode: "tr",
    rates: { min_0_50: 350.00, k_51_99: 4.80, k_100_299: 4.20, k_300_999: 3.40, k_1000_plus: 1.90 }
  },
  {
    id: "bne-1",
    name: "Brisbane (-)",
    country: "Australia",
    countryCode: "au",
    rates: { min_0_50: 0, k_51_99: 0, k_100_299: 0, k_300_999: 0, k_1000_plus: 0 }
  },
  {
    id: "syd-1",
    name: "Sydney 1",
    country: "Australia",
    countryCode: "au",
    rates: { min_0_50: 500.00, k_51_99: 6.00, k_100_299: 5.50, k_300_999: 4.30, k_1000_plus: 3.30 }
  },
  {
    id: "syd-2",
    name: "Sydney 2",
    country: "Australia",
    countryCode: "au",
    rates: { min_0_50: 500.00, k_51_99: 6.50, k_100_299: 4.50, k_300_999: 3.50, k_1000_plus: 3.00 }
  },
  {
    id: "syd-4",
    name: "Sydney 4",
    country: "Australia",
    countryCode: "au",
    rates: { min_0_50: 500.00, k_51_99: 6.00, k_100_299: 4.80, k_300_999: 4.10, k_1000_plus: 3.60 }
  },
  {
    id: "akl-1",
    name: "Auckland (-)",
    country: "Nueva Zelanda",
    countryCode: "nz",
    rates: { min_0_50: 0, k_51_99: 0, k_100_299: 0, k_300_999: 0, k_1000_plus: 0 }
  }
];
