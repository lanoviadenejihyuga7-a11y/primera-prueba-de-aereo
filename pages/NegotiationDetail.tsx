
import React, { useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { countries } from '../data/countries';
import { Country } from '../types';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

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

const PreMeetingBrief: React.FC<{ country: Country }> = ({ country }) => {
    const briefRef = useRef<HTMLDivElement>(null);
    const [isExporting, setIsExporting] = useState(false);

    // Templates State
    const [emailTemplate, setEmailTemplate] = useState(
        `Asunto: Propuesta de Exportación - GLOBAIR Perú / ${country.name}\n\nEstimado(a) [Nombre del Contacto],\n\nEs un placer saludarle. Represento a [Tu Empresa], una exportadora peruana especializada en productos de alta calidad. Hemos analizado el mercado en ${country.name} y creemos que nuestra oferta se alinea con sus estándares.\n\nMe gustaría solicitar una breve reunión para presentar nuestras credenciales y explorar sinergias.\n\nQuedo a su disposición.\n\nSaludos cordiales,\n[Tu Nombre]`
    );

    const [agendaTemplate, setAgendaTemplate] = useState(
        `AGENDA DE REUNIÓN - ${country.name.toUpperCase()}\n\n1. Introducción y saludos (Protocolo: ${country.negotiation.culturalNorms[2] || 'Formal'}).\n2. Presentación breve de la empresa (5 min).\n3. Propuesta de valor y muestras.\n4. Discusión sobre logística y ${country.negotiation.paymentMethods[0]}.\n5. Siguientes pasos y cierre.`
    );

    const handleExportPDF = async () => {
        if (!briefRef.current) return;
        setIsExporting(true);
        try {
            const canvas = await html2canvas(briefRef.current, { scale: 2, backgroundColor: '#ffffff' });
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('l', 'mm', 'a4'); // Landscape for the 3 columns
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save(`Brief_Negociacion_${country.name}.pdf`);
        } catch (error) {
            console.error("Error exporting brief:", error);
        } finally {
            setIsExporting(false);
        }
    };

    return (
        <div className="mt-12 bg-white rounded-3xl border-4 border-celtic-blue shadow-xl overflow-hidden">
            <div className="bg-celtic-blue p-6 flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-ivory font-display">A. Preparar la Negociación (Pre-meeting)</h2>
                    <p className="text-vanilla text-sm">Resumen ejecutivo y herramientas listas para usar.</p>
                </div>
                <button 
                    onClick={handleExportPDF}
                    disabled={isExporting}
                    className="bg-vanilla text-celtic-blue font-bold py-2 px-6 rounded-full hover:bg-ivory transition-colors shadow-lg flex items-center gap-2"
                >
                    {isExporting ? 'Exportando...' : '📥 Exportar Brief (PDF)'}
                </button>
            </div>

            <div ref={briefRef} className="p-8 bg-white text-drab-dark-brown">
                <div className="grid lg:grid-cols-3 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-tea-green">
                    
                    {/* COL 1: DATOS CLAVE */}
                    <div className="pr-4">
                        <h3 className="text-lg font-bold text-celtic-blue mb-4 uppercase tracking-wide border-b border-vanilla pb-2">📊 Datos Clave</h3>
                        <div className="space-y-4 text-sm">
                            <div>
                                <p className="font-bold text-drab-dark-brown">País & Capital:</p>
                                <p>{country.name}, {country.capital}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <div>
                                    <p className="font-bold text-drab-dark-brown">Moneda:</p>
                                    <p>{country.currency}</p>
                                </div>
                                <div>
                                    <p className="font-bold text-drab-dark-brown">Zona Horaria:</p>
                                    <p>{country.timezone}</p>
                                </div>
                            </div>
                            <div>
                                <p className="font-bold text-drab-dark-brown">Aeropuertos Principales:</p>
                                <ul className="list-disc list-inside pl-1 text-gray-600">
                                    {country.airports.slice(0, 3).map(a => <li key={a.iata}>{a.name} ({a.iata})</li>)}
                                </ul>
                            </div>
                            <div>
                                <p className="font-bold text-drab-dark-brown">Ruta Aérea Sugerida:</p>
                                <p className="bg-tea-green/30 p-2 rounded text-xs">
                                    {country.routes[0]?.path || 'Ruta directa no disponible'} 
                                    <br/><span className="font-bold">({country.routes[0]?.travelTime || 'N/A'})</span>
                                </p>
                            </div>
                            <div>
                                <p className="font-bold text-red-600">⚠️ Riesgos / Precauciones:</p>
                                <p className="text-xs italic text-gray-600">{country.negotiation.mistakesToAvoid[0]}</p>
                            </div>
                        </div>
                    </div>

                    {/* COL 2: CULTURA Y DOCS */}
                    <div className="lg:px-4 pt-8 lg:pt-0">
                        <h3 className="text-lg font-bold text-celtic-blue mb-4 uppercase tracking-wide border-b border-vanilla pb-2">🧠 Cultura & Docs</h3>
                        
                        <div className="mb-6">
                            <p className="font-bold text-drab-dark-brown mb-2">Brief Cultural Rápido:</p>
                            <ul className="space-y-2 text-xs bg-ivory p-3 rounded-lg border border-tea-green">
                                <li className="flex items-start gap-2">
                                    <span>🗣️</span>
                                    <span><strong>Com:</strong> {country.negotiation.style.split('.')[0]}.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span>👔</span>
                                    <span><strong>Protocolo:</strong> {country.negotiation.culturalNorms[0]}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span>💡</span>
                                    <span><strong>Tip:</strong> {country.negotiation.tips[0]}</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-bold text-drab-dark-brown mb-2">Checklist Documental:</p>
                            <div className="space-y-2 text-xs">
                                <div className="flex items-center justify-between bg-gray-50 p-2 rounded border-l-4 border-celtic-blue">
                                    <span>Factura Comercial</span>
                                    <span className="bg-celtic-blue text-white px-1.5 py-0.5 rounded text-[10px]">OBLIGATORIO</span>
                                </div>
                                <div className="flex items-center justify-between bg-gray-50 p-2 rounded border-l-4 border-celtic-blue">
                                    <span>Air Waybill (AWB)</span>
                                    <span className="bg-celtic-blue text-white px-1.5 py-0.5 rounded text-[10px]">OBLIGATORIO</span>
                                </div>
                                <div className="flex items-center justify-between bg-gray-50 p-2 rounded border-l-4 border-celtic-blue">
                                    <span>Packing List</span>
                                    <span className="bg-celtic-blue text-white px-1.5 py-0.5 rounded text-[10px]">OBLIGATORIO</span>
                                </div>
                                <div className="flex items-center justify-between bg-gray-50 p-2 rounded border-l-4 border-yellow-400">
                                    <span>Cert. Origen</span>
                                    <span className="bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded text-[10px]">CONDICIONAL</span>
                                </div>
                                <div className="flex items-center justify-between bg-gray-50 p-2 rounded border-l-4 border-yellow-400">
                                    <span>Permisos Sanitarios</span>
                                    <span className="bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded text-[10px]">CONDICIONAL</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* COL 3: PLANTILLAS */}
                    <div className="lg:pl-4 pt-8 lg:pt-0">
                        <h3 className="text-lg font-bold text-celtic-blue mb-4 uppercase tracking-wide border-b border-vanilla pb-2">📝 Plantillas (Editables)</h3>
                        
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-drab-dark-brown mb-1">Borrador de Email (Primer Contacto):</label>
                                <textarea 
                                    value={emailTemplate}
                                    onChange={(e) => setEmailTemplate(e.target.value)}
                                    className="w-full h-32 text-xs p-2 border border-tea-green rounded bg-ivory focus:ring-celtic-blue focus:border-celtic-blue resize-none"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-drab-dark-brown mb-1">Propuesta de Agenda:</label>
                                <textarea 
                                    value={agendaTemplate}
                                    onChange={(e) => setAgendaTemplate(e.target.value)}
                                    className="w-full h-32 text-xs p-2 border border-tea-green rounded bg-ivory focus:ring-celtic-blue focus:border-celtic-blue resize-none"
                                />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="mt-6 text-center text-[10px] text-gray-400 border-t border-gray-100 pt-2">
                    Generado por GLOBAIR Perú - Guía de Preparación Ejecutiva
                </div>
            </div>
        </div>
    );
};

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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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

            {/* New Pre-Meeting Brief Section */}
            <PreMeetingBrief country={country} />
        </div>
    );
};

export default NegotiationDetail;
