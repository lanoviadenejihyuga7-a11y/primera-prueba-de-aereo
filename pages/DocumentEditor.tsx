
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
        return <div className="text-center py-20 text-white">Plantilla no encontrada.</div>;
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
             <div className="mb-8">
                <Link to="/documents" className="text-polo-blue hover:text-white transition-colors">&larr; Volver a Documentos</Link>
                <h1 className="text-3xl font-extrabold text-white font-poppins mt-2">Editor: {template.name}</h1>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
                {/* Form */}
                <div className="bg-catalina-blue p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold text-white mb-4">Complete los campos</h2>
                    <form className="space-y-4">
                        {template.fields.map(field => (
                            <div key={field.id}>
                                <label htmlFor={field.id} className="block text-sm font-medium text-polo-blue mb-1">{field.label}</label>
                                {field.type === 'textarea' ? (
                                    <textarea
                                        id={field.id}
                                        name={field.id}
                                        rows={3}
                                        placeholder={field.placeholder}
                                        required={field.required}
                                        value={formData[field.id]}
                                        onChange={handleInputChange}
                                        className="w-full bg-smoky-black text-white rounded-md border-st-tropaz focus:ring-polo-blue focus:border-polo-blue"
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
                                        className="w-full bg-smoky-black text-white rounded-md border-st-tropaz focus:ring-polo-blue focus:border-polo-blue"
                                    />
                                )}
                            </div>
                        ))}
                    </form>
                </div>
                
                {/* Preview and Download */}
                <div>
                    <div className="flex justify-between items-center mb-4">
                         <h2 className="text-xl font-bold text-white">Vista Previa</h2>
                         <button
                            onClick={generatePdf}
                            disabled={isGenerating}
                            className="bg-st-tropaz text-white font-bold py-2 px-4 rounded-lg hover:bg-polo-blue transition-colors duration-300 disabled:bg-gray-500"
                        >
                            {isGenerating ? 'Generando...' : 'Descargar PDF'}
                        </button>
                    </div>
                    <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg min-h-[500px]" ref={previewRef}>
                        {/* A simplified preview based on Commercial Invoice */}
                        <h1 className="text-3xl font-bold text-center mb-2">{template.name.toUpperCase()}</h1>
                        <div className="grid grid-cols-2 gap-8 mt-8 border-b pb-4">
                            <div>
                                <h3 className="font-bold">EXPORTADOR:</h3>
                                <p>{formData.exporterName || '(Nombre del Exportador)'}</p>
                                <p>{formData.exporterAddress || '(Dirección)'}</p>
                            </div>
                            <div>
                                <h3 className="font-bold">CONSIGNATARIO:</h3>
                                <p>{formData.consigneeName || '(Nombre del Consignatario)'}</p>
                                <p>{formData.consigneeAddress || '(Dirección)'}</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-8 mt-4">
                            <div><span className="font-bold">Factura N°:</span> {formData.invoiceNumber || '...'}</div>
                            <div><span className="font-bold">Fecha:</span> {formData.invoiceDate || '...'}</div>
                            <div><span className="font-bold">AWB:</span> {formData.awbNumber || '...'}</div>
                        </div>
                        <div className="mt-8">
                             <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="p-2 border">Descripción</th>
                                        <th className="p-2 border">Cant.</th>
                                        <th className="p-2 border">Precio Unit.</th>
                                        <th className="p-2 border">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-2 border">{formData.itemDescription || '...'}</td>
                                        <td className="p-2 border text-center">{formData.itemQuantity || '...'}</td>
                                        <td className="p-2 border text-right">{formData.itemPrice ? `$${formData.itemPrice}` : '...'}</td>
                                        <td className="p-2 border text-right">{formData.itemQuantity && formData.itemPrice ? `$${(parseFloat(formData.itemQuantity) * parseFloat(formData.itemPrice)).toFixed(2)}` : '...'}</td>
                                    </tr>
                                     {/* Add more rows here for a real app */}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan={3} className="text-right font-bold p-2 border">TOTAL (USD)</td>
                                        <td className="font-bold text-right p-2 border">{formData.itemQuantity && formData.itemPrice ? `$${(parseFloat(formData.itemQuantity) * parseFloat(formData.itemPrice)).toFixed(2)}` : '...'}</td>
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
