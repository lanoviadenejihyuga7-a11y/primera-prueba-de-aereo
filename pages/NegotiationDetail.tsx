
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { countries } from '../data/countries';

const DetailCard: React.FC<{ title: string; items: string[]; icon: string; }> = ({ title, items, icon }) => (
    <div className="bg-st-tropaz/30 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-polo-blue flex items-center gap-2 mb-3">
            <span className="text-2xl">{icon}</span>
            {title}
        </h3>
        <ul className="list-disc list-inside space-y-2 text-pattens-blue">
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
                <h1 className="text-2xl text-white">País no encontrado</h1>
                <Link to="/negotiation" className="mt-4 inline-block text-polo-blue hover:underline">Volver a las guías</Link>
            </div>
        );
    }
    
    const { negotiation } = country;

    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-catalina-blue rounded-xl shadow-2xl p-6 md:p-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-st-tropaz pb-6">
                    <div>
                        <p className="text-polo-blue">Guía de Negociación</p>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white font-poppins flex items-center gap-4">
                            <img src={`https://flagcdn.com/w160/${country.countryCode}.png`} alt={`Bandera de ${country.name}`} className="w-16 md:w-20 h-auto object-contain rounded-md shadow-lg" />
                            {country.name}
                        </h1>
                    </div>
                     <Link to="/negotiation" className="mt-4 md:mt-0 text-polo-blue hover:text-white transition-colors">&larr; Volver a las guías</Link>
                </div>

                <div className="space-y-8">
                    <div className="bg-st-tropaz/30 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-polo-blue mb-2">Estilo de Negociación General</h3>
                        <p className="text-pattens-blue">{negotiation.style}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <DetailCard title="Normas Culturales" items={negotiation.culturalNorms} icon="🤝" />
                        <DetailCard title="Consejos Clave" items={negotiation.tips} icon="💡" />
                        <DetailCard title="Oportunidades de Negocio" items={negotiation.opportunities} icon="📈" />
                        <DetailCard title="Métodos de Pago" items={negotiation.paymentMethods} icon="💳" />
                    </div>

                    <div className="bg-red-900/30 border border-red-500/50 p-6 rounded-lg">
                         <h3 className="text-xl font-semibold text-red-300 flex items-center gap-2 mb-3">
                            <span className="text-2xl">🚫</span>
                            Errores a Evitar
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-red-200">
                             {negotiation.mistakesToAvoid.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NegotiationDetail;