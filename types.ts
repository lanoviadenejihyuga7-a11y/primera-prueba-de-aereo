
export interface RouteInfo {
  path: string;
  travelTime: string;
  airlines: string[];
}

export interface TradeAgreement {
  name: string;
  url: string;
  validity?: string;
  approvalDoc?: string;
  passengerRights?: string;
  cargoProducts?: string;
}

export interface Country {
  id: string;
  continent: string;
  name: string;
  capital: string;
  languages: string[];
  flagEmoji: string;
  countryCode: string;
  airports: { name: string; iata: string }[];
  routes: RouteInfo[];
  currency: string;
  timezone: string;
  coords: { lat: number; lon: number };
  negotiation: NegotiationDetails;
  usefulLinks?: { title: string; url: string }[];
  // New Data Fields
  population?: string;
  government?: string;
  gdp?: string;
  tradeBalance?: { exports: string; imports: string };
  tradePartners?: string[];
  mainSectors?: string[];
  // Trade & Resources
  countryProfileUrl?: string;
  tradeAgreement?: TradeAgreement;
}

export interface NegotiationDetails {
  style: string;
  culturalNorms: string[];
  paymentMethods: string[];
  tips: string[];
  opportunities: string[];
  mistakesToAvoid: string[];
}

export interface DocumentField {
  id: string;
  label: string;
  type: 'text' | 'textarea' | 'date' | 'number';
  placeholder: string;
  required: boolean;
}

export interface DocumentTemplate {
  id: string;
  name: string;
  description: string;
  definition: string;
  issuer: string;
  fields: DocumentField[];
}