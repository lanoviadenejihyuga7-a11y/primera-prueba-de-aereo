
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { countries } from '../data/countries';
import { Country } from '../types';

const NegotiationCard: React.FC<{ country: Country }> = ({ country }) => {
  return (
    <Link to={`/negotiation/${country.id}`} className="block bg-white rounded-2xl shadow-lg border-2 border-tea-green transform hover:-translate-y-1 hover:shadow-xl hover:border-celtic-blue transition-all duration-300 group">
        <div className="p-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
                <img src={`https://flagcdn.com/w80/${country.countryCode}.png`} alt={`Bandera de ${country.name}`} className="w-12 h-auto object-contain rounded-md shadow-sm" />
                <span className="text-xl font-bold text-celtic-blue font-display group-hover:text-drab-dark-brown transition-colors">{country.name}</span>
            </div>
            <span className="text-tea-green font-bold text-2xl group-hover:translate-x-1 transition-transform">&rarr;</span>
          </div>
        </div>
    </Link>
  );
};

const Negotiation: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCountries = countries.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-celtic-blue font-display">Guías de Negociación Internacional</h1>
            <p className="mt-4 text-lg text-drab-dark-brown font-medium">Aprende a comunicarte y cerrar tratos exitosos en cada cultura.</p>
        </div>

        <div className="max-w-2xl mx-auto mb-8">
            <input
                type="text"
                placeholder="Buscar país..."
                className="w-full bg-white text-drab-dark-brown rounded-lg border-celtic-blue focus:ring-celtic-blue focus:border-celtic-blue p-3 shadow-sm"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCountries.map(country => (
                <NegotiationCard key={country.id} country={country} />
            ))}
        </div>
    </div>
  );
};

export default Negotiation;
