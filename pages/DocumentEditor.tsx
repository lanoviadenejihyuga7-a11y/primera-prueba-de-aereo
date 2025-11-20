
import React, { useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { documentTemplates } from '../data/documentTemplates';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const DocumentEditor: React.FC = () => {
    const { documentId } = useParams<{ documentId: string }>();
    const template = documentTemplates.find(d => d.id === documentId);
    const previewRef = useRef<HTMLDivElement>(null);
    const [isGenerating, setIsGenerating] = useState(false);

    const initialFormData = template ? Object.fromEntries(template.fields.map(f => [f.id, ''])) : {};
    const [formData, setFormData] = useState<Record<string, string>>(initialFormData);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const generatePdf = async () => {
        if (!previewRef.current) return;
        setIsGenerating(true);
        try {
            const canvas = await html2canvas(previewRef.current, { scale: 2, backgroundColor: '#ffffff' });
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save(`${template?.id || 'document'}.pdf`);
        } catch (error) {
            console.error("Error generating PDF", error);
        } finally {
            setIsGenerating(false);
        }
    };


    if (!template) {
        return <div className="text-center py-20 text-drab-dark-brown">Plantilla no encontrada.</div>;
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
             <div className="mb-8">
                <Link to="/documents" className="text-celtic-blue hover:text-drab-dark-brown transition-colors font-bold">&larr; Volver a Documentos</Link>
                <h1 className="text-3xl font-extrabold text-celtic-blue font-display mt-2">Editor: {template.name}</h1>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
                {/* Form */}
                <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-tea-green">
                    <h2 className="text-xl font-bold text-celtic-blue mb-6 font-display">Complete los campos</h2>
                    <form className="space-y-4">
                        {template.fields.map(field => (
                            <div key={field.id}>
                                <label htmlFor={field.id} className="block text-sm font-bold text-drab-dark-brown mb-1">{field.label}</label>
                                {field.type === 'textarea' ? (
                                    <textarea
                                        id={field.id}
                                        name={field.id}
                                        rows={3}
                                        placeholder={field.placeholder}
                                        required={field.required}
                                        value={formData[field.id]}
                                        onChange={handleInputChange}
                                        className="w-full bg-ivory text-drab-dark-brown rounded-lg border-tea-green focus:ring-celtic-blue focus:border-celtic-blue p-2"
                                    />
                                ) : (
                                    <input
                                        type={field.type}
                                        id={field.id}
                                        name={field.id}
                                        placeholder={field.placeholder}
                                        required={field.required}
                                        value={formData[field.id]}
                                        onChange={handleInputChange}
                                        className="w-full bg-ivory text-drab-dark-brown rounded-lg border-tea-green focus:ring-celtic-blue focus:border-celtic-blue p-2"
                                    />
                                )}
                            </div>
                        ))}
                    </form>
                </div>
                
                {/* Preview and Download */}
                <div>
                    <div className="flex justify-between items-center mb-4">
                         <h2 className="text-xl font-bold text-celtic-blue font-display">Vista Previa</h2>
                         <button
                            onClick={generatePdf}
                            disabled={isGenerating}
                            className="bg-celtic-blue text-ivory font-bold py-2 px-6 rounded-full hover:bg-drab-dark-brown transition-colors duration-300 disabled:bg-gray-400 shadow-md"
                        >
                            {isGenerating ? 'Generando...' : 'Descargar PDF'}
                        </button>
                    </div>
                    <div className="bg-white text-gray-800 p-8 rounded-xl shadow-2xl min-h-[500px] border border-gray-200" ref={previewRef}>
                        <div className="flex justify-between items-start pb-4 border-b-2 border-gray-800">
                            <div>
                                <h1 className="text-2xl font-bold font-serif tracking-wide">{template.name.toUpperCase()}</h1>
                            </div>
                            <div className="text-right text-sm">
                                <div className="mb-2">
                                    <p className="font-bold text-gray-600">Factura N°:</p>
                                    <p>{formData.invoiceNumber || '...'}</p>
                                </div>
                                <div className="mb-2">
                                    <p className="font-bold text-gray-600">Fecha:</p>
                                    <p>{formData.invoiceDate || '...'}</p>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-600">AWB:</p>
                                    <p>{formData.awbNumber || '...'}</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-8 my-6">
                            <div className="text-sm">
                                <h3 className="font-bold text-base mb-1 text-gray-500 uppercase">Exportador:</h3>
                                <p className="font-semibold">{formData.exporterName || '(Nombre del Exportador)'}</p>
                                <p className="whitespace-pre-wrap">{formData.exporterAddress || '(Dirección)'}</p>
                            </div>
                            <div className="text-sm">
                                <h3 className="font-bold text-base mb-1 text-gray-500 uppercase">Consignatario:</h3>
                                <p className="font-semibold">{formData.consigneeName || '(Nombre del Consignatario)'}</p>
                                <p className="whitespace-pre-wrap">{formData.consigneeAddress || '(Dirección)'}</p>
                            </div>
                        </div>
                        
                        <div className="mt-8">
                             <table className="w-full text-left border-collapse text-sm">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="p-2 border border-gray-300">Descripción</th>
                                        <th className="p-2 border border-gray-300 text-center">Cant.</th>
                                        <th className="p-2 border border-gray-300 text-right">Precio Unit.</th>
                                        <th className="p-2 border border-gray-300 text-right">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-2 border border-gray-300">{formData.itemDescription || '...'}</td>
                                        <td className="p-2 border border-gray-300 text-center">{formData.itemQuantity || '...'}</td>
                                        <td className="p-2 border border-gray-300 text-right">{formData.itemPrice ? `$${formData.itemPrice}` : '...'}</td>
                                        <td className="p-2 border border-gray-300 text-right">{formData.itemQuantity && formData.itemPrice ? `$${(parseFloat(formData.itemQuantity) * parseFloat(formData.itemPrice)).toFixed(2)}` : '...'}</td>
                                    </tr>
                                     {/* Add more rows here for a real app */}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan={3} className="text-right font-bold p-2 border border-gray-300 bg-gray-50">TOTAL (USD)</td>
                                        <td className="font-bold text-right p-2 border border-gray-300 bg-gray-50">{formData.itemQuantity && formData.itemPrice ? `$${(parseFloat(formData.itemQuantity) * parseFloat(formData.itemPrice)).toFixed(2)}` : '...'}</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                         <div className="mt-12 text-xs text-gray-500">
                            <p className="font-bold">Declaración:</p>
                            <p>Declaramos que la información contenida en esta factura es verdadera y correcta.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DocumentEditor;
