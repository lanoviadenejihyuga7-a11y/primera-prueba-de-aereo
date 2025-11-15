
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { countries } from '../data/countries';
import RouteMap from '../components/RouteMap';

const CountryDetail: React.FC = () => {
    const { countryId } = useParams<{ countryId: string }>();
    const country = countries.find(c => c.id === countryId);

    if (!country) {
        return (
            <div className="text-center py-20">
                <h1 className="text-2xl text-white">País no encontrado</h1>
                <Link to="/gallery" className="mt-4 inline-block text-polo-blue hover:underline">Volver a la galería</Link>
            </div>
        );
    }
    
    const limaCoords = { lat: -12.0464, lon: -77.0428 };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-catalina-blue rounded-xl shadow-2xl p-6 md:p-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-st-tropaz pb-6">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white font-poppins flex items-center gap-4">
                            <img src={`https://flagcdn.com/w160/${country.countryCode}.png`} alt={`Bandera de ${country.name}`} className="w-16 md:w-20 h-auto object-contain rounded-md shadow-lg" />
                            {country.name}
                        </h1>
                        <p className="text-polo-blue mt-2 text-lg">{country.capital}</p>
                    </div>
                     <Link to="/gallery" className="mt-4 md:mt-0 text-polo-blue hover:text-white transition-colors">&larr; Volver a la galería</Link>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column: Info */}
                    <div className="space-y-6">
                        {/* Basic Info */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Información Básica</h2>
                            <div className="grid grid-cols-2 gap-4 bg-st-tropaz/30 p-4 rounded-lg">
                                <div><strong className="block text-polo-blue">Idioma(s):</strong> <span className="text-pattens-blue">{country.languages.join(', ')}</span></div>
                                <div><strong className="block text-polo-blue">Moneda:</strong> <span className="text-pattens-blue">{country.currency}</span></div>
                                <div><strong className="block text-polo-blue">Continente:</strong> <span className="text-pattens-blue">{country.continent}</span></div>
                                <div><strong className="block text-polo-blue">Zona Horaria:</strong> <span className="text-pattens-blue">{country.timezone}</span></div>
                            </div>
                        </div>

                        {/* Airports */}
                        <div>
                           <h2 className="text-2xl font-bold text-white mb-4">Aeropuertos Principales</h2>
                            <ul className="space-y-2">
                                {country.airports.map(airport => (
                                    <li key={airport.iata} className="bg-st-tropaz/30 p-3 rounded-lg flex justify-between items-center">
                                        <span className="text-pattens-blue">{airport.name}</span>
                                        <span className="font-mono bg-smoky-black text-polo-blue px-2 py-1 rounded text-sm">{airport.iata}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                         {/* Commercial Recs */}
                         <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Recomendaciones Comerciales</h2>
                            <div className="bg-st-tropaz/30 p-4 rounded-lg space-y-2 text-pattens-blue">
                                <p><strong className="text-polo-blue">Estilo de comunicación:</strong> {country.negotiation.style}</p>
                                <p><strong className="text-polo-blue">Puntos clave:</strong> {country.negotiation.tips.slice(0, 2).join('. ')}.</p>
                                <Link to={`/negotiation/${country.id}`} className="text-polo-blue hover:underline font-semibold">Ver guía completa de negociación &rarr;</Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Map and Routes */}
                    <div className="space-y-6">
                         {/* Map */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Ruta Aérea Visual</h2>
                            <div className="bg-smoky-black rounded-lg overflow-hidden border-2 border-st-tropaz aspect-video">
                                <RouteMap from={limaCoords} to={country.coords} />
                            </div>
                        </div>
                        {/* Routes from Peru */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Rutas desde Perú (LIMA)</h2>
                             <div className="space-y-3">
                                {country.routes.map((route, index) => (
                                    <div key={index} className="bg-st-tropaz/30 p-4 rounded-lg">
                                        <p className="font-semibold text-pattens-blue">{route.path}</p>
                                        <div className="text-sm flex justify-between mt-2">
                                            <span className="text-polo-blue">Duración: {route.travelTime}</span>
                                            <span className="text-polo-blue font-medium">{route.airlines.join(' / ')}</span>
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