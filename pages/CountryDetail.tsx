
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
                
                <div className="grid md:grid-cols-2 gap-8">
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
            </div>
        </div>
    );
};

export default CountryDetail;
