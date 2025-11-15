
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { countries } from '../data/countries';
import { Country } from '../types';

const CountryCard: React.FC<{ country: Country }> = ({ country }) => {
  const mainAirport = country.airports.length > 0 ? country.airports[0] : { name: 'N/A', iata: 'N/A' };
  const mainRoute = country.routes.length > 0 ? country.routes[0] : { travelTime: 'N/A', airlines: [] };

  return (
    <div className="bg-catalina-blue rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start">
            <h3 className="text-2xl font-bold text-white font-poppins">{country.name}</h3>
            <img src={`https://flagcdn.com/w80/${country.countryCode}.png`} alt={`Bandera de ${country.name}`} className="w-12 h-auto object-contain rounded-sm" />
        </div>
        <p className="text-sm text-polo-blue mt-1">{country.capital}</p>
        <div className="mt-4 space-y-2 text-sm text-pattens-blue">
            <p><strong className="text-polo-blue">Idioma:</strong> {country.languages.join(', ')}</p>
            <p><strong className="text-polo-blue">Aeropuerto:</strong> {mainAirport.name} ({mainAirport.iata})</p>
            <p><strong className="text-polo-blue">Vuelo (aprox):</strong> {mainRoute.travelTime}</p>
            <p><strong className="text-polo-blue">Aerolíneas:</strong> {mainRoute.airlines.slice(0, 2).join(', ')}</p>
        </div>
      </div>
      <div className="bg-st-tropaz p-4">
        <Link to={`/gallery/${country.id}`} className="block w-full text-center text-white font-semibold hover:text-pattens-blue transition-colors">
          Ver Detalles
        </Link>
      </div>
    </div>
  );
};

const Gallery: React.FC = () => {
    const [continentFilter, setContinentFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    const continents = useMemo(() => ['all', ...Array.from(new Set(countries.map(c => c.continent)))], []);

    const filteredCountries = useMemo(() => {
        return countries.filter(country => {
            const matchesContinent = continentFilter === 'all' || country.continent === continentFilter;
            const matchesSearch = country.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                  country.capital.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesContinent && matchesSearch;
        });
    }, [continentFilter, searchTerm]);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-white font-poppins">Destinos de Exportación</h1>
                <p className="mt-4 text-lg text-polo-blue">Explora los mercados a los que puedes llegar por vía aérea desde Perú.</p>
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-8 p-4 bg-catalina-blue rounded-lg shadow-md">
                <div className="flex-grow">
                    <label htmlFor="search" className="sr-only">Buscar país</label>
                    <input
                        type="text"
                        id="search"
                        placeholder="Buscar por país o capital..."
                        className="w-full bg-smoky-black text-white rounded-md border-st-tropaz focus:ring-polo-blue focus:border-polo-blue"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="continent" className="sr-only">Filtrar por continente</label>
                    <select
                        id="continent"
                        className="w-full bg-smoky-black text-white rounded-md border-st-tropaz focus:ring-polo-blue focus:border-polo-blue"
                        value={continentFilter}
                        onChange={e => setContinentFilter(e.target.value)}
                    >
                        {continents.map(c => <option key={c} value={c}>{c === 'all' ? 'Todos los Continentes' : c}</option>)}
                    </select>
                </div>
            </div>

            {/* Country Grid */}
            {filteredCountries.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {filteredCountries.map(country => (
                        <CountryCard key={country.id} country={country} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <p className="text-xl text-polo-blue">No se encontraron países que coincidan con tu búsqueda.</p>
                </div>
            )}
        </div>
    );
};

export default Gallery;