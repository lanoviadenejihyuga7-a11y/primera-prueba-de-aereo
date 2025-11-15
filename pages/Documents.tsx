
import React from 'react';
import { Link } from 'react-router-dom';
import { documentTemplates } from '../data/documentTemplates';

const Documents: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-white font-poppins">Generador de Documentos</h1>
                <p className="mt-4 text-lg text-polo-blue">Crea, edita y descarga los documentos esenciales para tu exportación.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {documentTemplates.map(doc => (
                    <div key={doc.id} className="bg-catalina-blue rounded-xl shadow-lg flex flex-col">
                        <div className="p-6 flex-grow">
                            <h2 className="text-2xl font-bold text-white mb-2">{doc.name}</h2>
                            <p className="text-polo-blue text-sm">{doc.description}</p>
                        </div>
                         <div className="bg-st-tropaz p-4 mt-auto">
                            <Link to={`/documents/${doc.id}`} className="block w-full text-center text-white font-semibold hover:text-pattens-blue transition-colors">
                                Abrir Editor
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Documents;
