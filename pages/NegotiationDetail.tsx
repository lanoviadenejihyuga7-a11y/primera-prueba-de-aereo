
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { countries } from '../data/countries';

const DetailCard: React.FC<{ title: string; items: string[]; icon: string; }> = ({ title, items, icon }) => (
    <div className="bg-tea-green/20 border border-tea-green p-6 rounded-2xl hover:bg-tea-green/30 transition-colors">
        <h3 className="text-xl font-bold text-celtic-blue flex items-center gap-2 mb-3 font-display">
            <span className="text-2xl">{icon}</span>
            {title}
        </h3>
        <ul className="list-disc list-inside space-y-2 text-drab-dark-brown font-medium">
            {items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    </div>
);


const NegotiationDetail: React.FC = () => {
    const { countryId } = useParams<{ countryId: string }>();
    const country = countries.find(c => c.id === countryId);

    if (!country) {
        return (
            <div className="text-center py-20">
                <h1 className="text-2xl text-drab-dark-brown">País no encontrado</h1>
                <Link to="/negotiation" className="mt-4 inline-block text-celtic-blue hover:underline font-bold">Volver a las guías</Link>
            </div>
        );
    }
    
    const { negotiation } = country;

    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 border-4 border-tea-green">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b-2 border-vanilla pb-6">
                    <div>
                        <p className="text-celtic-blue font-bold uppercase tracking-wide">Guía de Negociación</p>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-celtic-blue font-display flex items-center gap-4 mt-2">
                            <img src={`https://flagcdn.com/w160/${country.countryCode}.png`} alt={`Bandera de ${country.name}`} className="w-16 md:w-20 h-auto object-contain rounded-lg shadow-md" />
                            {country.name}
                        </h1>
                    </div>
                     <Link to="/negotiation" className="mt-4 md:mt-0 text-celtic-blue hover:text-drab-dark-brown transition-colors font-bold">&larr; Volver a las guías</Link>
                </div>

                <div className="space-y-8">
                    <div className="bg-celtic-blue p-6 rounded-2xl shadow-md">
                        <h3 className="text-xl font-bold text-vanilla mb-2 font-display">Estilo de Negociación General</h3>
                        <p className="text-ivory font-medium">{negotiation.style}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <DetailCard title="Normas Culturales" items={negotiation.culturalNorms} icon="🤝" />
                        <DetailCard title="Consejos Clave" items={negotiation.tips} icon="💡" />
                        <DetailCard title="Oportunidades de Negocio" items={negotiation.opportunities} icon="📈" />
                        <DetailCard title="Métodos de Pago" items={negotiation.paymentMethods} icon="💳" />
                    </div>

                    <div className="bg-red-50 border-2 border-red-200 p-6 rounded-2xl">
                         <h3 className="text-xl font-bold text-red-600 flex items-center gap-2 mb-3 font-display">
                            <span className="text-2xl">🚫</span>
                            Errores a Evitar
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-red-800 font-medium">
                             {negotiation.mistakesToAvoid.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NegotiationDetail;
