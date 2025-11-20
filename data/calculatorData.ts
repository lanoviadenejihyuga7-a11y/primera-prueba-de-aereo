
export interface RouteCosts {
  env_empaq_enval: number;
  exw: number;
  paletizacion: number;
  manipulacion_carga: number;
  documentacion: number;
  despacho_aduanero_exp: number;
  fca: number;
  cpt: number;
  cip: number;
  descarga: number;
  despacho_aduanero_imp: number;
  transporte: number;
  dap_dpu: number;
  ddp: number;
}

export interface CalculatorRoute {
  id: string;
  name: string;
  destinationCountry: string;
  destinationCountryCode: string;
  destinationCurrency: string;
  freightRate: number;
  costs: RouteCosts;
}

export const calculatorRoutes: CalculatorRoute[] = [
  {
    id: "scl",
    name: "Santiago de Chile",
    destinationCountry: "Chile",
    destinationCountryCode: "cl",
    destinationCurrency: "CLP",
    freightRate: 2.5,
    costs: {
      env_empaq_enval: 150,
      exw: 50,
      paletizacion: 80,
      manipulacion_carga: 120,
      documentacion: 75,
      despacho_aduanero_exp: 200,
      fca: 100,
      cpt: 50,
      cip: 30,
      descarga: 150,
      despacho_aduanero_imp: 250,
      transporte: 180,
      dap_dpu: 40,
      ddp: 60,
    },
  },
  {
    id: "mia",
    name: "Miami",
    destinationCountry: "Estados Unidos",
    destinationCountryCode: "us",
    destinationCurrency: "USD",
    freightRate: 3.8,
    costs: {
      env_empaq_enval: 200,
      exw: 70,
      paletizacion: 100,
      manipulacion_carga: 150,
      documentacion: 90,
      despacho_aduanero_exp: 280,
      fca: 120,
      cpt: 60,
      cip: 40,
      descarga: 200,
      despacho_aduanero_imp: 350,
      transporte: 250,
      dap_dpu: 50,
      ddp: 80,
    },
  },
  {
    id: "mad",
    name: "Madrid",
    destinationCountry: "España",
    destinationCountryCode: "es",
    destinationCurrency: "EUR",
    freightRate: 4.5,
    costs: {
      env_empaq_enval: 250,
      exw: 85,
      paletizacion: 120,
      manipulacion_carga: 180,
      documentacion: 110,
      despacho_aduanero_exp: 320,
      fca: 150,
      cpt: 75,
      cip: 50,
      descarga: 220,
      despacho_aduanero_imp: 400,
      transporte: 300,
      dap_dpu: 60,
      ddp: 100,
    },
  },
];
