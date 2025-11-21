
import React from 'react';
import { Link } from 'react-router-dom';
import { documentTemplates } from '../data/documentTemplates';

const Documents: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-celtic-blue font-display">Generador de Documentos</h1>
                <p className="mt-4 text-lg text-drab-dark-brown font-medium">Crea, edita y descarga los documentos esenciales para tu exportación.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {documentTemplates.map(doc => (
                    <div key={doc.id} className="bg-white rounded-2xl shadow-lg flex flex-col border-2 border-tea-green overflow-hidden hover:shadow-xl transition-shadow">
                        <div className="p-8 flex-grow">
                            <h2 className="text-2xl font-bold text-celtic-blue mb-3 font-display">{doc.name}</h2>
                            <p className="text-drab-dark-brown text-sm leading-relaxed whitespace-pre-line">{doc.description}</p>
                        </div>
                         <div className="bg-vanilla p-4 mt-auto">
                            <Link to={`/documents/${doc.id}`} className="block w-full text-center text-celtic-blue font-bold font-display hover:text-drab-dark-brown transition-colors">
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
