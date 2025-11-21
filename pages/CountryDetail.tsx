
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { countries } from '../data/countries';
import RouteMap from '../components/RouteMap';
import AIRouteMap from '../components/AIRouteMap';

const CountryDetail: React.FC = () => {
    const { countryId } = useParams<{ countryId: string }>();
    const country = countries.find(c => c.id === countryId);

    if (!country) {
        return (
            <div className="text-center py-20">
                <h1 className="text-2xl text-drab-dark-brown">País no encontrado</h1>
                <Link to="/gallery" className="mt-4 inline-block text-celtic-blue hover:underline font-bold">Volver a la galería</Link>
            </div>
        );
    }
    
    const limaCoords = { lat: -12.0464, lon: -77.0428 };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 border-4 border-tea-green">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b-2 border-vanilla pb-6">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-celtic-blue font-display flex items-center gap-4">
                            <img src={`https://flagcdn.com/w160/${country.countryCode}.png`} alt={`Bandera de ${country.name}`} className="w-16 md:w-20 h-auto object-contain rounded-lg shadow-md" />
                            {country.name}
                        </h1>
                        <p className="text-drab-dark-brown mt-2 text-lg font-semibold">Capital: {country.capital}</p>
                    </div>
                     <Link to="/gallery" className="mt-4 md:mt-0 text-celtic-blue hover:text-drab-dark-brown transition-colors font-bold">&larr; Volver a la galería</Link>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Left Column: Info */}
                    <div className="space-y-6">
                        {/* Basic Info */}
                        <div>
                            <h2 className="text-2xl font-bold text-celtic-blue font-display mb-4">Información Básica</h2>
                            <div className="grid grid-cols-2 gap-4 bg-tea-green/30 p-6 rounded-2xl border border-tea-green">
                                <div><strong className="block text-celtic-blue">Idioma(s):</strong> <span className="text-drab-dark-brown">{country.languages.join(', ')}</span></div>
                                <div><strong className="block text-celtic-blue">Moneda:</strong> <span className="text-drab-dark-brown">{country.currency}</span></div>
                                <div><strong className="block text-celtic-blue">Continente:</strong> <span className="text-drab-dark-brown">{country.continent}</span></div>
                                <div><strong className="block text-celtic-blue">Zona Horaria:</strong> <span className="text-drab-dark-brown">{country.timezone}</span></div>
                            </div>
                        </div>

                        {/* Airports */}
                        <div>
                           <h2 className="text-2xl font-bold text-celtic-blue font-display mb-4">Aeropuertos Principales</h2>
                            <ul className="space-y-2">
                                {country.airports.map(airport => (
                                    <li key={airport.iata} className="bg-vanilla/30 p-3 rounded-xl flex justify-between items-center border border-vanilla">
                                        <span className="text-drab-dark-brown font-medium">{airport.name}</span>
                                        <span className="font-mono bg-celtic-blue text-ivory px-2 py-1 rounded text-sm font-bold">{airport.iata}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                         {/* Commercial Recs */}
                         <div>
                            <h2 className="text-2xl font-bold text-celtic-blue font-display mb-4">Recomendaciones Comerciales</h2>
                            <div className="bg-tea-green/30 p-6 rounded-2xl border border-tea-green space-y-2 text-drab-dark-brown">
                                <p><strong className="text-celtic-blue">Estilo de comunicación:</strong> {country.negotiation.style}</p>
                                <p><strong className="text-celtic-blue">Puntos clave:</strong> {country.negotiation.tips.slice(0, 2).join('. ')}.</p>
                                <Link to={`/negotiation/${country.id}`} className="text-celtic-blue hover:text-drab-dark-brown underline font-bold block mt-2">Ver guía completa de negociación &rarr;</Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Map and Routes */}
                    <div className="space-y-6">
                         {/* Map */}
                        <div>
                            <h2 className="text-2xl font-bold text-celtic-blue font-display mb-4">Ruta Aérea Visual (IA)</h2>
                            <div className="bg-ivory rounded-2xl overflow-hidden border-4 border-celtic-blue aspect-video shadow-md">
                                <AIRouteMap 
                                    countryName={country.name} 
                                    capitalName={country.capital} 
                                    fallback={<RouteMap from={limaCoords} to={country.coords} />} 
                                />
                            </div>
                        </div>
                        {/* Routes from Peru */}
                        <div>
                            <h2 className="text-2xl font-bold text-celtic-blue font-display mb-4">Rutas desde Perú (LIMA)</h2>
                             <div className="space-y-3">
                                {country.routes.map((route, index) => (
                                    <div key={index} className="bg-vanilla/30 p-4 rounded-xl border border-vanilla hover:bg-vanilla/50 transition-colors">
                                        <p className="font-bold text-drab-dark-brown text-lg">{route.path}</p>
                                        <div className="text-sm flex justify-between mt-2">
                                            <span className="text-celtic-blue font-medium">Duración: {route.travelTime}</span>
                                            <span className="text-drab-dark-brown/80 font-semibold">{route.airlines.join(' / ')}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Market Profile & Economy Section */}
                {country.gdp && (
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-celtic-blue font-display mb-6 text-center bg-vanilla py-2 rounded-xl">Perfil de Mercado y Economía</h2>
                        <div className="bg-white rounded-2xl shadow-md border-2 border-tea-green p-6 md:p-8">
                            {/* Grid Layout */}
                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                {/* Politics & Demographics */}
                                <div className="bg-ivory p-6 rounded-2xl border border-tea-green h-full">
                                    <h3 className="text-xl font-bold text-celtic-blue mb-4 flex items-center gap-2">
                                        <span>🏛️</span> Entorno Político y Social
                                    </h3>
                                    <div className="space-y-3 text-drab-dark-brown">
                                        <p className="text-lg"><strong className="text-celtic-blue">Población:</strong> {country.population}</p>
                                        <p className="text-lg"><strong className="text-celtic-blue">Gobierno:</strong> {country.government}</p>
                                    </div>
                                </div>
                                {/* Economy */}
                                <div className="bg-ivory p-6 rounded-2xl border border-tea-green h-full">
                                    <h3 className="text-xl font-bold text-celtic-blue mb-4 flex items-center gap-2">
                                        <span>💰</span> Indicadores Económicos
                                    </h3>
                                    <p className="text-lg mb-4"><strong className="text-celtic-blue">PBI (GDP):</strong> {country.gdp}</p>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-green-50 p-3 rounded-xl border border-green-200 text-center">
                                            <span className="block text-xs font-bold text-green-800 uppercase">Exportaciones</span>
                                            <span className="font-bold text-green-700">{country.tradeBalance?.exports}</span>
                                        </div>
                                        <div className="bg-red-50 p-3 rounded-xl border border-red-200 text-center">
                                            <span className="block text-xs font-bold text-red-800 uppercase">Importaciones</span>
                                            <span className="font-bold text-red-700">{country.tradeBalance?.imports}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Partners & Sectors */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-lg font-bold text-celtic-blue mb-3 border-b-2 border-vanilla pb-2 flex items-center gap-2">
                                        <span>🤝</span> Principales Socios Comerciales
                                    </h3>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-drab-dark-brown">
                                        {country.tradePartners?.map((p, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <span className="w-2 h-2 bg-tea-green rounded-full"></span>
                                                {p}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-celtic-blue mb-3 border-b-2 border-vanilla pb-2 flex items-center gap-2">
                                        <span>✈️</span> Sectores Clave (Exportación Aérea)
                                    </h3>
                                    <ul className="grid grid-cols-1 gap-2 text-drab-dark-brown">
                                        {country.mainSectors?.map((s, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <span className="text-vanilla">★</span>
                                                <span className="font-medium">{s}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* New Trade Agreements Section */}
                {country.tradeAgreement && (
                    <div className="mt-12 bg-white rounded-2xl shadow-lg border-2 border-celtic-blue overflow-hidden">
                        <div className="bg-celtic-blue p-4 text-ivory flex justify-between items-center">
                            <h2 className="text-2xl font-bold font-display">Acuerdos y Regulaciones</h2>
                            <div className="flex gap-2">
                                {country.countryProfileUrl && (
                                    <a href={country.countryProfileUrl} target="_blank" rel="noopener noreferrer" className="bg-tea-green text-drab-dark-brown px-3 py-1 rounded-full text-xs font-bold hover:bg-white transition-colors">
                                    📄 Ficha País
                                    </a>
                                )}
                                <a href={country.tradeAgreement.url} target="_blank" rel="noopener noreferrer" className="bg-vanilla text-drab-dark-brown px-3 py-1 rounded-full text-xs font-bold hover:bg-white transition-colors">
                                    🔗 Ver Acuerdo (TLC)
                                </a>
                            </div>
                        </div>
                        <div className="p-6 grid md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-bold text-celtic-blue mb-2 text-lg">{country.tradeAgreement.name}</h3>
                                <ul className="space-y-2 text-sm text-drab-dark-brown">
                                    <li className="flex gap-2">
                                        <span className="text-xl">📅</span>
                                        <div>
                                            <strong>Vigencia:</strong>
                                            <p className="text-gray-600">{country.tradeAgreement.validity || 'Consultar fuente oficial'}</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-xl">📜</span>
                                        <div>
                                            <strong>Documento de Aprobación:</strong>
                                            <p className="text-gray-600">{country.tradeAgreement.approvalDoc || 'Consultar fuente oficial'}</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {country.tradeAgreement.passengerRights && (
                                <div className="md:col-span-2 md:col-start-2 border-t md:border-t-0 md:border-l border-tea-green pt-4 md:pt-0 md:pl-6">
                                    <div className="mb-4">
                                        <p className="font-bold text-celtic-blue text-sm mb-1 flex items-center gap-2">✈️ Derechos de Tráfico (Pasajeros/Carga):</p>
                                        <p className="text-sm text-gray-600 italic bg-ivory p-2 rounded border border-tea-green/50">{country.tradeAgreement.passengerRights}</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-celtic-blue text-sm mb-1 flex items-center gap-2">📦 Productos Principales (Aéreo):</p>
                                        <p className="text-sm text-gray-600 italic bg-ivory p-2 rounded border border-tea-green/50">{country.tradeAgreement.cargoProducts}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Official Links Section */}
                {country.usefulLinks && country.usefulLinks.length > 0 && (
                    <div className="mt-12 border-t-4 border-tea-green pt-8">
                        <h2 className="text-2xl font-bold text-celtic-blue font-display mb-6 text-center">Enlaces de Referencia Oficial</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {country.usefulLinks.map((link, index) => (
                                <a 
                                    key={index} 
                                    href={link.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center p-4 bg-white border-2 border-tea-green rounded-xl hover:shadow-md hover:bg-vanilla/30 transition-all group"
                                >
                                    <div className="bg-celtic-blue text-ivory p-2 rounded-full mr-3 group-hover:scale-110 transition-transform flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                        </svg>
                                    </div>
                                    <span className="font-bold text-drab-dark-brown text-sm group-hover:text-celtic-blue line-clamp-2">{link.title}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CountryDetail;