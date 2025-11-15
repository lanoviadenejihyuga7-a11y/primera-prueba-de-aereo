
export interface RouteInfo {
  path: string;
  travelTime: string;
  airlines: string[];
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