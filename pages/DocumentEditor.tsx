
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

    // Calculate Commercial Invoice Totals
    const subtotal = (parseFloat(formData.itemQuantity) || 0) * (parseFloat(formData.itemUnitValue) || 0);
    const freight = parseFloat(formData.freightCost) || 0;
    const insurance = parseFloat(formData.insuranceCost) || 0;
    const additional = parseFloat(formData.additionalCost) || 0;
    const totalInvoiceValue = subtotal + freight + insurance + additional;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
             <div className="mb-8">
                <Link to="/documents" className="text-celtic-blue hover:text-drab-dark-brown transition-colors font-bold">&larr; Volver a Documentos</Link>
                <h1 className="text-3xl font-extrabold text-celtic-blue font-display mt-2">Editor: {template.name}</h1>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
                {/* Form */}
                <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-tea-green h-fit">
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

                    {/* COMMERCIAL INVOICE PREVIEW */}
                    {template.id === 'commercial-invoice' ? (
                        <div className="bg-white text-gray-900 p-8 rounded-xl shadow-2xl border border-gray-200 font-sans text-xs" ref={previewRef} style={{ minHeight: '297mm', width: '100%' }}>
                            {/* Header */}
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-1/3">
                                    {/* Logo Placeholder */}
                                    <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 text-center p-2 mb-2">
                                        LOGO
                                    </div>
                                    <p className="font-bold text-lg">{formData.shipperName || 'NOMBRE EMPRESA'}</p>
                                    <p className="whitespace-pre-wrap">{formData.shipperAddress}</p>
                                    <p>{formData.shipperPhone}</p>
                                </div>
                                <div className="w-2/3 text-right">
                                    <h1 className="text-2xl font-bold text-celtic-blue uppercase mb-4">FACTURA COMERCIAL</h1>
                                    <p className="text-xs text-gray-500 italic mb-4">Complete en inglés. (imprenta)</p>
                                    
                                    <div className="grid grid-cols-1 gap-1 text-right">
                                        <div className="bg-celtic-blue text-white font-bold p-1">N.º DE GUÍA AÉREA INTERNACIONAL / AWB NO</div>
                                        <div className="p-1 font-mono text-sm">{formData.awbNumber || '---'}</div>
                                        
                                        <div className="bg-celtic-blue text-white font-bold p-1 mt-2">FECHA DE EXPORTACIÓN / EXPORT DATE</div>
                                        <div className="p-1">{formData.exportDate || '---'}</div>

                                        <div className="bg-celtic-blue text-white font-bold p-1 mt-2">REF. DE EXPORTACIÓN (Factura N°)</div>
                                        <div className="p-1 font-mono">{formData.invoiceNumber || '---'}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Parties */}
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                {/* Shipper */}
                                <div>
                                    <div className="bg-celtic-blue text-white font-bold p-1 mb-2 uppercase">Expedidor / Exportador / Shipper</div>
                                    <div className="space-y-1 px-2">
                                        <p><span className="font-bold text-celtic-blue">Nombre:</span> {formData.shipperName}</p>
                                        <p><span className="font-bold text-celtic-blue">Dirección:</span> {formData.shipperAddress}</p>
                                        <p><span className="font-bold text-celtic-blue">Teléfono:</span> {formData.shipperPhone}</p>
                                        <p><span className="font-bold text-celtic-blue">Tax ID / RUC:</span> {formData.shipperTaxId}</p>
                                    </div>
                                </div>
                                {/* Consignee */}
                                <div>
                                    <div className="bg-celtic-blue text-white font-bold p-1 mb-2 uppercase">Consignatario / Consignee</div>
                                    <div className="space-y-1 px-2">
                                        <p><span className="font-bold text-celtic-blue">Nombre:</span> {formData.consigneeName}</p>
                                        <p><span className="font-bold text-celtic-blue">Dirección:</span> {formData.consigneeAddress}</p>
                                        <p><span className="font-bold text-celtic-blue">Teléfono:</span> {formData.consigneePhone}</p>
                                        <p><span className="font-bold text-celtic-blue">Tax ID:</span> {formData.consigneeTaxId}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Routing Info */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div>
                                    <div className="bg-celtic-blue text-white font-bold p-1 text-center uppercase">País de Exportación</div>
                                    <div className="p-2 text-center font-bold border-b border-gray-300">{formData.countryOfExport}</div>
                                    
                                    <div className="bg-celtic-blue text-white font-bold p-1 text-center mt-2 uppercase">Propósito de la Exportación</div>
                                    <div className="p-2 text-center border-b border-gray-300">{formData.exportReason}</div>
                                </div>
                                <div>
                                    <div className="bg-celtic-blue text-white font-bold p-1 text-center uppercase">País de Destino Final</div>
                                    <div className="p-2 text-center font-bold border-b border-gray-300">{formData.countryOfDestination}</div>
                                    
                                    <div className="bg-celtic-blue text-white font-bold p-1 text-center mt-2 uppercase">Importador (Si es distinto)</div>
                                    <div className="p-2 text-center text-gray-400 italic border-b border-gray-300">Mismo que consignatario</div>
                                </div>
                            </div>

                            {/* Item Table */}
                            <div className="mb-6">
                                <table className="w-full border-collapse text-center">
                                    <thead>
                                        <tr className="bg-celtic-blue text-white align-top">
                                            <th className="p-2 border border-white text-[10px]">PAÍS ORIGEN</th>
                                            <th className="p-2 border border-white text-[10px]">N.º PAQUETES</th>
                                            <th className="p-2 border border-white text-[10px] w-1/3">DESCRIPCIÓN COMPLETA DE LOS BIENES</th>
                                            <th className="p-2 border border-white text-[10px]">CANTIDAD</th>
                                            <th className="p-2 border border-white text-[10px]">HS CODE</th>
                                            <th className="p-2 border border-white text-[10px]">UNIDAD</th>
                                            <th className="p-2 border border-white text-[10px]">PESO (kg)</th>
                                            <th className="p-2 border border-white text-[10px]">VALOR UNIT.</th>
                                            <th className="p-2 border border-white text-[10px]">VALOR TOTAL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-gray-300">
                                            <td className="p-2">{formData.itemOrigin}</td>
                                            <td className="p-2">{formData.pkgCount}</td>
                                            <td className="p-2 text-left">{formData.itemDescription}</td>
                                            <td className="p-2">{formData.itemQuantity}</td>
                                            <td className="p-2">{formData.itemHsCode}</td>
                                            <td className="p-2">{formData.itemUnit}</td>
                                            <td className="p-2">{formData.itemWeight}</td>
                                            <td className="p-2 text-right">{formData.itemUnitValue ? `${parseFloat(formData.itemUnitValue).toFixed(2)}` : ''}</td>
                                            <td className="p-2 text-right font-bold">{subtotal > 0 ? subtotal.toFixed(2) : ''}</td>
                                        </tr>
                                        {/* Empty rows for visual similarity */}
                                        <tr className="border-b border-gray-200 h-8"><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                        <tr className="border-b border-gray-200 h-8"><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Footer Totals */}
                            <div className="flex justify-end">
                                <div className="w-1/2 bg-blue-50 rounded p-4 border border-blue-100">
                                    <div className="flex justify-between mb-2 text-sm">
                                        <span>SUBTOTAL ({formData.currency}):</span>
                                        <span>{subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between mb-2 text-sm">
                                        <span>COSTO DEL FLETE:</span>
                                        <span>{freight.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between mb-2 text-sm">
                                        <span>COSTO DEL SEGURO:</span>
                                        <span>{insurance.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between mb-2 text-sm">
                                        <span>ADICIONAL:</span>
                                        <span>{additional.toFixed(2)}</span>
                                    </div>
                                    <div className="border-t border-celtic-blue mt-2 pt-2 flex justify-between font-bold text-lg text-celtic-blue">
                                        <span>VALOR TOTAL DE LA FACTURA:</span>
                                        <span>{totalInvoiceValue.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Declaration & Signature */}
                            <div className="mt-12 border-t-2 border-gray-300 pt-4">
                                <p className="text-center text-gray-600 italic mb-8">
                                    "Por el presente certifico que esta factura muestra el precio real de los bienes descritos, que no se ha emitido ninguna otra factura y que todos los detalles son verdaderos y correctos."
                                </p>
                                <div className="grid grid-cols-2 gap-16">
                                    <div>
                                        <div className="border-b border-gray-400 mb-2"></div>
                                        <p className="text-xs font-bold">NOMBRE Y TÍTULO (EN MAYÚSCULA)</p>
                                    </div>
                                    <div>
                                        <div className="border-b border-gray-400 mb-2"></div>
                                        <p className="text-xs font-bold">FIRMA Y FECHA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : template.id === 'packing-list' ? (
                        // PACKING LIST PREVIEW
                        <div className="bg-white text-drab-dark-brown p-8 rounded-xl shadow-2xl border border-gray-200 font-sans text-xs" ref={previewRef} style={{ minHeight: '297mm', width: '100%' }}>
                            {/* Main Header Title */}
                            <div className="bg-tea-green text-center py-2 mb-4">
                                <h1 className="text-2xl font-bold text-celtic-blue uppercase">LISTA DE EMPAQUE / PACKING LIST</h1>
                            </div>

                            {/* Top Info Block */}
                            <div className="grid grid-cols-2 gap-8 mb-4 border-b border-tea-green pb-4">
                                <div>
                                    <p className="font-bold text-lg text-celtic-blue">{formData.companyName || 'NOMBRE DE LA EMPRESA'}</p>
                                    <p>{formData.companyAddress}</p>
                                    <p>{formData.companyCityZip}</p>
                                </div>
                                <div className="text-right">
                                    <div className="flex justify-between mb-1">
                                        <span className="font-bold text-celtic-blue">Número de lista de empaque:</span>
                                        <span>{formData.packingListNo || '<12345>'}</span>
                                    </div>
                                    <div className="flex justify-between mb-1">
                                        <span className="font-bold text-celtic-blue">Fecha de envío:</span>
                                        <span>{formData.shipDate || '<Date>'}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="font-bold text-celtic-blue">Customer ID:</span>
                                        <span>{formData.customerId || '<ID>'}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Ship From / Ship To */}
                            <div className="grid grid-cols-2 gap-0 mb-6 border-2 border-tea-green">
                                {/* Left: Ship From */}
                                <div className="border-r border-tea-green">
                                    <div className="bg-tea-green px-2 py-1 font-bold text-celtic-blue uppercase text-xs">ENVIAR DESDE:</div>
                                    <div className="p-2 space-y-1">
                                        <p className="font-bold">{formData.shipFromName}</p>
                                        <p>{formData.shipFromAddress}</p>
                                        <p>{formData.shipFromCity}</p>
                                        <div className="mt-2">
                                            <p className="font-bold text-xs text-gray-500">NOMBRE DEL CONTACTO</p>
                                            <p>{formData.shipFromContact}</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Right: Ship To */}
                                <div>
                                    <div className="bg-tea-green px-2 py-1 font-bold text-celtic-blue uppercase text-xs">ENVIAR A:</div>
                                    <div className="p-2 space-y-1">
                                        <p className="font-bold">{formData.shipToName}</p>
                                        <p>{formData.shipToAddress}</p>
                                        <p>{formData.shipToCity}</p>
                                        <div className="mt-2">
                                            <p className="font-bold text-xs text-gray-500">NOMBRE DEL CONTACTO</p>
                                            <p>{formData.shipToContact}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Order Info Strip */}
                            <div className="grid grid-cols-3 text-center mb-6 border-2 border-tea-green bg-white">
                                <div className="border-r border-tea-green">
                                    <div className="bg-tea-green px-2 py-1 font-bold text-celtic-blue text-[10px]">METODO DE ENVIO</div>
                                    <div className="p-2">{formData.shippingMethod}</div>
                                </div>
                                <div className="border-r border-tea-green">
                                    <div className="bg-tea-green px-2 py-1 font-bold text-celtic-blue text-[10px]">ORDEN DE COMPRA DEL CLIENTE</div>
                                    <div className="p-2">{formData.customerPO}</div>
                                </div>
                                <div>
                                    <div className="bg-tea-green px-2 py-1 font-bold text-celtic-blue text-[10px]">FECHA DE ENTREGA</div>
                                    <div className="p-2">{formData.deliveryDate}</div>
                                </div>
                            </div>

                            {/* Items Table */}
                            <div className="mb-6 border border-tea-green">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="bg-tea-green text-celtic-blue">
                                            <th className="p-2 text-left w-1/2">DESCRIPCION DEL ARTICULO</th>
                                            <th className="p-2 text-right">CANTIDAD</th>
                                            <th className="p-2 text-center">UNIDAD DE MEDIDA</th>
                                            <th className="p-2 text-right">PESO</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-tea-green/30">
                                        {[1, 2, 3].map(i => {
                                            const desc = formData[`item${i}Desc`];
                                            if (!desc) return null;
                                            return (
                                                <tr key={i}>
                                                    <td className="p-2">{desc}</td>
                                                    <td className="p-2 text-right">{parseFloat(formData[`item${i}Qty`] || '0').toFixed(2)}</td>
                                                    <td className="p-2 text-center uppercase">{formData[`item${i}Unit`]}</td>
                                                    <td className="p-2 text-right">{parseFloat(formData[`item${i}Weight`] || '0').toFixed(2)}</td>
                                                </tr>
                                            );
                                        })}
                                        {/* Padding Rows */}
                                        <tr className="h-8"><td colSpan={4}></td></tr>
                                        <tr className="h-8"><td colSpan={4}></td></tr>
                                        <tr className="h-8"><td colSpan={4}></td></tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Footer */}
                            <div className="grid grid-cols-3 border-t-4 border-celtic-blue pt-2">
                                <div className="col-span-2 pr-4">
                                    <p className="font-bold text-celtic-blue mb-1">NOTAS:</p>
                                    <p className="text-gray-600 italic bg-gray-100 p-2 min-h-[60px] rounded">{formData.notes || '<INGRESE NOTAS AQUI>'}</p>
                                </div>
                                <div className="flex items-end justify-end">
                                    <div className="bg-celtic-blue/10 p-2 rounded border border-celtic-blue w-full text-center">
                                        <span className="font-bold text-celtic-blue block text-[10px] uppercase mb-1">PESO TOTAL</span>
                                        <span className="text-xl font-bold text-drab-dark-brown">{formData.totalWeight ? parseFloat(formData.totalWeight).toFixed(2) : '0.00'} {formData.weightUnit}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : template.id === 'bill-of-lading' ? (
                        // BILL OF LADING PREVIEW
                        <div className="bg-white text-drab-dark-brown p-8 rounded-xl shadow-2xl border border-gray-200 font-sans text-xs" ref={previewRef} style={{ minHeight: '297mm', width: '100%' }}>
                            {/* Title */}
                            <h1 className="text-2xl font-bold text-gray-800 uppercase mb-4">CONOCIMIENTO DE EMBARQUE</h1>
                            
                            {/* Carrier Banner */}
                            <div className="bg-gray-300 p-2 text-center font-bold border border-gray-400 mb-4">
                                {formData.carrierName || '[Nombre de la empresa]- Conocimiento de embarque'}
                            </div>

                            {/* Header Info Block */}
                            <div className="grid grid-cols-2 gap-4 mb-4 text-[10px] border border-gray-400">
                                <div className="p-2 border-r border-gray-400">
                                    <div className="w-16 h-16 bg-gray-200 flex items-center justify-center mb-2 text-gray-500 text-[8px]">Logotipo</div>
                                    <p className="font-bold">{formData.carrierAddress || '[Dirección]'}</p>
                                    <p>Tel: {formData.carrierPhone || '[Teléfono]'}</p>
                                </div>
                                <div className="p-2">
                                    <p className="font-bold mb-1">REMITENTE TENGA EN CUENTA: LOS GASTOS DE FLETE SE PAGAN POR ADELANTADO EN ESTE CONOCIMIENTO DE EMBARQUE A MENOS QUE SE MARQUE LA RECOGIDA</p>
                                    <p className="font-bold mb-2">CONDUCTOR TENGA EN CUENTA: SI ES UN SOLO ENVÍO, VERIFIQUE AQUÍ: [ ] RECOGIDA DE UN SOLO ENVÍO</p>
                                    <div className="grid grid-cols-3 gap-2 border-t border-gray-300 pt-1">
                                        <div>
                                            <span className="block font-bold">FECHA</span>
                                            <span>{formData.date}</span>
                                        </div>
                                        <div>
                                            <span className="block font-bold">P.O. NO.</span>
                                            <span>{formData.poNumber}</span>
                                        </div>
                                        <div>
                                            <span className="block font-bold">Nº DE SEGUIMIENTO</span>
                                            <span>{formData.trackingNumber}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Parties */}
                            <div className="grid grid-cols-2 border border-gray-400 mb-4">
                                {/* Shipper */}
                                <div className="border-r border-gray-400">
                                    <div className="bg-gray-100 px-2 py-1 font-bold border-b border-gray-400">SHIPPER (desde) / EXPEDIDOR</div>
                                    <div className="p-2 space-y-1">
                                        <p className="font-bold">{formData.shipperName}</p>
                                        <p>{formData.shipperAddress}</p>
                                        <p>{formData.shipperCityState}</p>
                                        <p>Tel: {formData.shipperPhone}</p>
                                    </div>
                                </div>
                                {/* Consignee */}
                                <div>
                                    <div className="bg-gray-100 px-2 py-1 font-bold border-b border-gray-400">DESTINATARIO (a) / CONSIGNATARIO</div>
                                    <div className="p-2 space-y-1">
                                        <p className="font-bold">{formData.consigneeName}</p>
                                        <p>{formData.consigneeAddress}</p>
                                        <p>{formData.consigneeCityState}</p>
                                        <p>Tel: {formData.consigneePhone}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Cargo Table */}
                            <div className="mb-4 border border-gray-400 min-h-[200px]">
                                <table className="w-full text-[10px] border-collapse">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="border-r border-b border-gray-400 p-1 w-16">Unidades</th>
                                            <th className="border-r border-b border-gray-400 p-1 text-left">Tipos de embalaje, descripción de los artículos, marcas especiales y excepciones</th>
                                            <th className="border-r border-b border-gray-400 p-1 w-16">Peso (kg)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-gray-200">
                                            <td className="border-r border-gray-400 p-1 text-center">{formData.units1}</td>
                                            <td className="border-r border-gray-400 p-1">{formData.desc1}</td>
                                            <td className="border-r border-gray-400 p-1 text-center">{formData.weight1}</td>
                                        </tr>
                                        {formData.units2 && (
                                            <tr className="border-b border-gray-200">
                                                <td className="border-r border-gray-400 p-1 text-center">{formData.units2}</td>
                                                <td className="border-r border-gray-400 p-1">{formData.desc2}</td>
                                                <td className="border-r border-gray-400 p-1 text-center">{formData.weight2}</td>
                                            </tr>
                                        )}
                                        {/* Empty Lines */}
                                        {[...Array(5)].map((_, i) => (
                                            <tr key={i} className="border-b border-gray-200 h-6">
                                                <td className="border-r border-gray-400"></td>
                                                <td className="border-r border-gray-400"></td>
                                                <td className="border-r border-gray-400"></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Financials */}
                            <div className="grid grid-cols-2 border border-gray-400 mb-4 text-[10px]">
                                <div className="border-r border-gray-400 p-2">
                                    <p className="font-bold mb-1">REMIT C.O.D. PARA:</p>
                                    <div className="border-b border-gray-300 h-4 mb-1"></div>
                                    <div className="border-b border-gray-300 h-4 mb-1"></div>
                                    <div className="border-b border-gray-300 h-4"></div>
                                </div>
                                <div className="grid grid-rows-3">
                                    <div className="flex border-b border-gray-400">
                                        <div className="w-1/2 border-r border-gray-400 p-1 font-bold bg-gray-100">C.O.D. (PAGO CONTRA ENTREGA)</div>
                                        <div className="w-1/2 p-1 flex justify-between"><span>AMT: $</span> <span>{formData.codAmount}</span></div>
                                    </div>
                                    <div className="flex border-b border-gray-400">
                                        <div className="w-1/2 border-r border-gray-400 p-1 text-center">
                                            <span className="block text-[8px]">C.O.D. TARIFA</span>
                                            <div className="flex justify-between px-1"><span>PREPAGADO:</span> <span>{formData.codFeePrepaid}</span></div>
                                        </div>
                                        <div className="w-1/2 p-1 flex justify-between items-center">
                                            <span>TOTAL CARGOS: $</span>
                                            <span className="font-bold">{formData.freightCharges}</span>
                                        </div>
                                    </div>
                                    <div className="p-1 bg-gray-50 text-[8px] leading-tight">
                                        LOS GASTOS DE FLETE SE PAGAN POR ADELANTADO A MENOS QUE SE MARQUE: [ ] RECOGER
                                    </div>
                                </div>
                            </div>

                            {/* Footer / Signatures */}
                            <div className="border border-gray-400 p-2 text-[9px]">
                                <p className="mb-4 text-justify leading-tight text-gray-600">
                                    RECIBIDO, sujeto a las clasificaciones y tarifas legalmente presentadas vigentes en la fecha de emisión de este Conocimiento de Embarque, la propiedad descrita anteriormente en aparente buen orden, excepto como se indique...
                                </p>
                                <div className="grid grid-cols-3 gap-4 mt-6">
                                    <div className="border-t border-gray-400 pt-1">
                                        <p className="font-bold mb-4">EXPEDIDOR</p>
                                        <p>Firma: ______________________</p>
                                        {formData.shipperSignName && <p className="mt-1 italic">{formData.shipperSignName}</p>}
                                    </div>
                                    <div className="border-t border-gray-400 pt-1">
                                        <p className="font-bold mb-4">PORTADOR</p>
                                        <p>Firma: ______________________</p>
                                        {formData.carrierSignName && <p className="mt-1 italic">{formData.carrierSignName}</p>}
                                    </div>
                                    <div className="border-t border-gray-400 pt-1">
                                        <p className="font-bold"># de piezas recibidas:</p>
                                        <p className="text-lg text-right mt-4">{formData.units1}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : template.id === 'certificate-of-origin' ? (
                        // CERTIFICATE OF ORIGIN PREVIEW (US-PERU TPA)
                        <div className="bg-white text-drab-dark-brown p-8 rounded-xl shadow-2xl border border-gray-200 font-sans text-[10px]" ref={previewRef} style={{ minHeight: '297mm', width: '100%' }}>
                            {/* Table Border Container */}
                            <div className="border border-gray-800">
                                
                                {/* Header */}
                                <div className="grid grid-cols-2 border-b border-gray-800">
                                    <div className="p-2 text-center border-r border-gray-800">
                                        <p className="font-bold">United States - Peru Trade Promotion Agreement</p>
                                        <p className="font-bold text-lg">CERTIFICATE OF ORIGIN</p>
                                        <p className="text-[8px]">(Instructions on reverse, according to US-Peru TPA Implementation instructions)</p>
                                    </div>
                                    <div className="p-2 text-center">
                                        <p className="font-bold">Acuerdo de Promoción Comercial Perú - Estados Unidos</p>
                                        <p className="font-bold text-lg">CERTIFICADO DE ORIGEN</p>
                                        <p className="text-[8px]">(Instrucciones al reverso, según instrucciones para la implementación del APC Perú- EE.UU)</p>
                                    </div>
                                </div>

                                {/* Row 1: Importer & Exporter */}
                                <div className="grid grid-cols-2 border-b border-gray-800">
                                    <div className="p-2 border-r border-gray-800">
                                        <p className="mb-1">1. Importer's legal name, address, telephone and e-mail:</p>
                                        <p className="mb-1 italic text-[9px]">Razón social, dirección, teléfono y correo electrónico del importador</p>
                                        <p className="font-bold text-xs whitespace-pre-line mt-2">{formData.importerNameAddress}</p>
                                    </div>
                                    <div className="p-2">
                                        <p className="mb-1">2. Exporter's legal name, address, telephone and e-mail:</p>
                                        <p className="mb-1 italic text-[9px]">Razón social, dirección, teléfono y correo electrónico del exportador:</p>
                                        <p className="font-bold text-xs whitespace-pre-line mt-2">{formData.exporterNameAddress}</p>
                                    </div>
                                </div>

                                {/* Row 2: Producer & Period */}
                                <div className="grid grid-cols-2 border-b border-gray-800">
                                    <div className="p-2 border-r border-gray-800">
                                        <p className="mb-1">3. Producer's legal name, address, telephone and e-mail:</p>
                                        <p className="mb-1 italic text-[9px]">Razón social, dirección, teléfono y correo electrónico del productor:</p>
                                        <p className="font-bold text-xs whitespace-pre-line mt-2">{formData.producerNameAddress}</p>
                                    </div>
                                    <div className="p-2">
                                        <p className="mb-1">4. Blanket Period: / Período que cubre:</p>
                                        <div className="mt-2 space-y-2">
                                            <div className="flex justify-between">
                                                <span>From: / Desde:</span>
                                                <span className="font-bold border-b border-gray-400 min-w-[80px]">{formData.periodFrom}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>To: / Hasta:</span>
                                                <span className="font-bold border-b border-gray-400 min-w-[80px]">{formData.periodTo}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Row 3: Items Table Header */}
                                <div className="grid grid-cols-5 border-b border-gray-800 text-center bg-gray-100">
                                    <div className="p-1 border-r border-gray-800 col-span-1">5. Description of good: / Descripción de la Mercancía:</div>
                                    <div className="p-1 border-r border-gray-800 col-span-1">6. Tariff Classification: / Clasificación Arancelaria:</div>
                                    <div className="p-1 border-r border-gray-800 col-span-1">7. Preference Criterion: / Criterio preferencial:</div>
                                    <div className="p-1 border-r border-gray-800 col-span-1">8. Invoice Number: / Número de la Factura</div>
                                    <div className="p-1 col-span-1">9. Country of Origin: / País de Origen</div>
                                </div>

                                {/* Row 3: Items Table Content */}
                                <div className="grid grid-cols-5 border-b border-gray-800 min-h-[100px]">
                                    <div className="p-2 border-r border-gray-800 font-bold text-center whitespace-pre-line">{formData.itemDescription}</div>
                                    <div className="p-2 border-r border-gray-800 font-bold text-center">{formData.tariffClassification}</div>
                                    <div className="p-2 border-r border-gray-800 font-bold text-center">{formData.preferenceCriterion}</div>
                                    <div className="p-2 border-r border-gray-800 font-bold text-center">{formData.itemInvoiceNo}</div>
                                    <div className="p-2 font-bold text-center">{formData.countryOfOrigin}</div>
                                </div>

                                {/* Certification Block */}
                                <div className="grid grid-cols-2 border-b border-gray-800">
                                    <div className="p-2 border-r border-gray-800 text-[8px] text-justify">
                                        <p className="mb-2 font-bold">I certify that:</p>
                                        <p className="mb-1">The Information on this document is true and accurate and I assume the responsibility for proving such representations. I understand that I am liable for any false statements or material omissions made on or in connection with this document;</p>
                                        <p className="mb-1">I agree to maintain, and present upon request, documentation necessary to support this certification, and to inform, in writing, all persons to whom the Certificate was given of any changes that could affect the accuracy or validity of this certification;</p>
                                        <p className="mb-1">The goods originated in the territory of one or more of the Parties, and comply with the origin requirements specified for those goods in the United States-Peru Trade Promotion Agreement. There has been no further production or any other operation outside the territories of the parties, other than unloading, reloading, or any other operations necessary to preserve the good, and goods have remained under customs control;</p>
                                        <p>This certification consists of ______ pages, including all attachments.</p>
                                    </div>
                                    <div className="p-2 text-[8px] text-justify">
                                        <p className="mb-2 font-bold">Yo certifico que:</p>
                                        <p className="mb-1">La información contenida en este documento es verdadera y exacta y me hago responsable de comprobar lo aquí declarado. Estoy consciente que soy responsable por cualquier declaración falsa u omisión hecha en o con relación al presente documento;</p>
                                        <p className="mb-1">Me comprometo a conservar y presentar, en caso de ser requerido, los documentos necesarios que respalden el contenido de la presente certificación, así como a notificar por escrito a todas las personas a quienes entregue el presente certificado, de cualquier cambio que pudiera afectar la exactitud o validez del mismo;</p>
                                        <p className="mb-1">Las mercancías son originarias del territorio de una o ambas Partes y cumplen con todos los requisitos de origen que les son aplicables conforme al Acuerdo de Promoción Comercial Perú-Estados Unidos. No ha habido otro procesamiento ulterior o ninguna otra operación fuera de los territorios de las Partes, con excepción de la descarga, recarga o cualquier otra operación necesaria para mantener la mercancía en buenas condiciones, y las mercancías han permanecido bajo control aduanero;</p>
                                        <p>Esta certificación se compone de ______ hojas, incluyendo todos sus anexos.</p>
                                    </div>
                                </div>

                                {/* Signature Block */}
                                <div className="border-b border-gray-800">
                                    <div className="grid grid-cols-2">
                                        <div className="p-2 border-r border-gray-800 border-b">
                                            <span className="block mb-6">Authorized Signature: / Firma autorizada:</span>
                                            <div className="border-b border-gray-400 w-full"></div>
                                        </div>
                                        <div className="p-2 border-b">
                                            <span className="block">Enterprise: / Empresa:</span>
                                            <p className="font-bold mt-2">{formData.authEnterprise}</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="p-2 border-r border-gray-800 border-b">
                                            <span className="block">Name: / Nombre:</span>
                                            <p className="font-bold mt-1">{formData.authName}</p>
                                        </div>
                                        <div className="p-2 border-b">
                                            <span className="block">Title: / Cargo:</span>
                                            <p className="font-bold mt-1">{formData.authTitle}</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3">
                                        <div className="p-2 border-r border-gray-800">
                                            <span className="block">Date: / Fecha:</span>
                                            <p className="font-bold mt-1">{formData.authDate}</p>
                                        </div>
                                        <div className="p-2 border-r border-gray-800">
                                            <span className="block">Telephone: / Teléfono:</span>
                                            <p className="font-bold mt-1">{formData.authPhone}</p>
                                        </div>
                                        <div className="p-2">
                                            <span className="block">Fax: / Fax:</span>
                                            <p className="font-bold mt-1">{formData.authFax}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Remarks */}
                                <div className="p-2 min-h-[50px]">
                                    <p className="mb-1">11. Remarks: / Observaciones:</p>
                                    <p className="font-bold whitespace-pre-wrap">{formData.remarks}</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        // GENERIC PREVIEW FOR OTHER TEMPLATES
                        <div className="bg-white text-gray-800 p-8 rounded-xl shadow-2xl min-h-[500px] border border-gray-200" ref={previewRef}>
                            <div className="flex justify-between items-start pb-4 border-b-2 border-gray-800">
                                <div>
                                    <h1 className="text-2xl font-bold font-serif tracking-wide">{template.name.toUpperCase()}</h1>
                                </div>
                                <div className="text-right text-sm">
                                    <p className="font-bold text-gray-600">Ref:</p>
                                    <p>{formData.invoiceNumber || '...'}</p>
                                </div>
                            </div>
                            <div className="mt-8">
                                 <p>Vista previa genérica para {template.name}.</p>
                                 <pre className="text-xs bg-gray-100 p-4 rounded mt-4 overflow-auto">
                                     {JSON.stringify(formData, null, 2)}
                                 </pre>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DocumentEditor;
