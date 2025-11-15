
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { countries } from '../data/countries';
import { Country } from '../types';

const NegotiationCard: React.FC<{ country: Country }> = ({ country }) => {
  return (
    <Link to={`/negotiation/${country.id}`} className="block bg-catalina-blue rounded-xl shadow-lg hover:shadow-st-tropaz/50 hover:border-polo-blue border-2 border-transparent transform hover:-translate-y-1 transition-all duration-300">
        <div className="p-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
                <img src={`https://flagcdn.com/w80/${country.countryCode}.png`} alt={`Bandera de ${country.name}`} className="w-10 h-auto object-contain rounded-sm" />
                <span className="text-xl font-bold text-white font-poppins">{country.name}</span>
            </div>
            <span className="text-polo-blue">&rarr;</span>
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
            <h1 className="text-4xl font-extrabold text-white font-poppins">Guías de Negociación Internacional</h1>
            <p className="mt-4 text-lg text-polo-blue">Aprende a comunicarte y cerrar tratos exitosos en cada cultura.</p>
        </div>

        <div className="max-w-2xl mx-auto mb-8">
            <input
                type="text"
                placeholder="Buscar país..."
                className="w-full bg-catalina-blue text-white rounded-md border-st-tropaz focus:ring-polo-blue focus:border-polo-blue"
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