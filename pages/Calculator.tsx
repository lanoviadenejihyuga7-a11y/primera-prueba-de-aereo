
import React, { useState, useRef } from 'react';
import { calculatorRoutes, CalculatorRouteV2 } from '../data/calculatorData';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const initialInputs = {
    // Dims
    bultos: 3,
    longitud: 200,
    ancho: 100,
    altura: 40,
    pesoRealTotal: 100, // Peso Real total de la carga
    
    // Producción (Editables)
    ci: 15,
    gAdm: 15,
    gFin: 15,
    moi: 15,
    mod: 15,
    md: 15,
    mi: 15,

    // Embalaje & Paletización
    embalajeRate: 0.10, // $/kg
    pesoPallet: 25, // kg
    palletsQty: 1,
    palletRate: 5.00, // $/kg (based on Chargeable Weight in example)
    palletAddCost: 100.00, // Fixed additional cost

    // Transporte Interno
    manipuleoRate: 0.10,
    estibaRate: 0.50,
    movilizacionRate: 0.06,
    
    // Documentación & Despacho
    documentacion: 80.00,
    despachoAduanero: 100.00,
    
    // Seguro
    deduciblePercent: 5.0, // %
    primaNetaPercent: 3.0, // %
    derechoEmisionPercent: 3.0, // %

    // Gastos en Destino
    gastosDescargaDestino: 50.00,
    gastosDespachoImpDestino: 120.00,
    gastosTransporteDestino: 80.00,
    gastosAlmacenamientoDestino: 0.00,
    gastosArancelesDestino: 0.00, // Impuestos/Aranceles para DDP
};

const Calculator: React.FC = () => {
    const [selectedRoute, setSelectedRoute] = useState<CalculatorRouteV2 | null>(null);
    const [inputs, setInputs] = useState(initialInputs);
    const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
    const pdfRef = useRef<HTMLDivElement>(null);

    const handleRouteChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const route = calculatorRoutes.find(r => r.id === e.target.value) || null;
        setSelectedRoute(route);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs(prev => ({ ...prev, [name]: parseFloat(value) || 0 }));
    };

    // --- CALCULATIONS ---

    // 1. Weights
    const pesoVolumetricoTotal = (inputs.longitud * inputs.ancho * inputs.altura * inputs.bultos) / 6000;
    // Peso Facturable (Chargeable Weight): Max of Real vs Volumetric. Used for Air Freight.
    const pesoFacturable = Math.max(inputs.pesoRealTotal, pesoVolumetricoTotal);
    
    const pesoBrutoConPallets = inputs.pesoRealTotal + (inputs.pesoPallet * inputs.palletsQty);

    // 2. Production Cost
    const costoProduccion = inputs.ci + inputs.gAdm + inputs.gFin + inputs.moi + inputs.mod + inputs.md + inputs.mi;

    // 3. Packaging & Palletization
    // Embalaje: Based on Real Weight
    const costoEmbalaje = inputs.pesoRealTotal * inputs.embalajeRate;
    
    // Paletización: Matches the user logic (Weight * Rate + Additional).
    const costoPaletizacion = (pesoFacturable * inputs.palletRate) + inputs.palletAddCost;

    // EXW (Ex Works) = Produccion + Embalaje
    const costoEXW = costoProduccion + costoEmbalaje;

    // 4. Internal Transport
    // Based on Real Weight
    const transporteInternoRate = inputs.manipuleoRate + inputs.estibaRate + inputs.movilizacionRate;
    const costoTransporteInterno = inputs.pesoRealTotal * transporteInternoRate; // "Manipulación y carga"

    // 5. FCA (Free Carrier)
    // FCA = EXW + Paletización + Manipulación + Documentación + Despacho Export
    const costoFCA = costoEXW + costoPaletizacion + costoTransporteInterno + inputs.documentacion + inputs.despachoAduanero;

    // 6. Freight (Flete)
    let fleteRate = 0;
    let fleteTotal = 0;
    let freightBracket = "";

    if (selectedRoute) {
        if (pesoFacturable <= 50) {
            fleteTotal = selectedRoute.rates.min_0_50; // Flat fee
            fleteRate = 0; // Not applicable per kg
            freightBracket = "Mínimo (0-50kg)";
        } else {
            if (pesoFacturable <= 99) {
                fleteRate = selectedRoute.rates.k_51_99;
                freightBracket = "51-99 kg";
            } else if (pesoFacturable <= 299) {
                fleteRate = selectedRoute.rates.k_100_299;
                freightBracket = "100-299 kg";
            } else if (pesoFacturable <= 999) {
                fleteRate = selectedRoute.rates.k_300_999;
                freightBracket = "300-999 kg";
            } else {
                fleteRate = selectedRoute.rates.k_1000_plus;
                freightBracket = "1000+ kg";
            }
            fleteTotal = pesoFacturable * fleteRate;
        }
    }

    // 7. CPT (Carriage Paid To) = FCA + Freight
    const costoCPT = costoFCA + fleteTotal;

    // 8. Insurance (Seguro)
    const deducibleDecimal = inputs.deduciblePercent / 100;
    const sumaAsegurada = deducibleDecimal < 1 ? costoCPT / (1 - deducibleDecimal) : 0;
    
    const primaNeta = sumaAsegurada * (inputs.primaNetaPercent / 100);
    const derechoEmision = primaNeta * (inputs.derechoEmisionPercent / 100);
    const costoSeguroTotal = primaNeta + derechoEmision;

    // 9. CIP (Carriage and Insurance Paid To) = CPT + Insurance
    const costoCIP = costoCPT + costoSeguroTotal;

    // 10. Destination Costs (Gastos en Destino)
    const costoDescargaDestino = inputs.gastosDescargaDestino;
    const costoDespachoImpDestino = inputs.gastosDespachoImpDestino;
    const costoTransporteDestino = inputs.gastosTransporteDestino;

    // 11. DAP/DPU (Delivered at Place / Unloaded)
    // Assuming cumulative: CIP + Unloading + Import Customs + Transport
    const costoDAP_DPU = costoCIP + costoDescargaDestino + costoDespachoImpDestino + costoTransporteDestino;

    const costoAlmacenamientoDestino = inputs.gastosAlmacenamientoDestino;
    const costoArancelesDestino = inputs.gastosArancelesDestino;

    // 12. DDP (Delivered Duty Paid)
    const costoDDP = costoDAP_DPU + costoAlmacenamientoDestino + costoArancelesDestino;

    // COSTO TOTAL
    const costoTotalFinal = costoDDP;


    const handleDownloadPDF = async () => {
        if (!pdfRef.current) return;
        setIsGeneratingPdf(true);
        try {
            const canvas = await html2canvas(pdfRef.current, { 
                scale: 2, 
                backgroundColor: '#ffffff',
                logging: false
            });
            
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
            
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save(`Cotizacion_GLOBAIR_${selectedRoute?.id || 'general'}_${new Date().toISOString().slice(0,10)}.pdf`);
        } catch (error) {
            console.error("Error generating PDF:", error);
            alert("Hubo un error al generar el PDF.");
        } finally {
            setIsGeneratingPdf(false);
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-drab-dark-brown font-sans relative">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-celtic-blue font-display">Calculadora de Costos Aéreos</h1>
                <p className="mt-4 text-lg font-medium">Calcula desde EXW hasta DDP con tarifas actualizadas (2025).</p>
            </div>

            {/* SECTION 1: ROUTE & DIMENSIONS */}
            <div className="bg-white p-6 rounded-3xl shadow-lg border-2 border-tea-green mb-8">
                 <h2 className="text-xl font-bold text-celtic-blue mb-4 font-display flex items-center gap-2">
                    <span className="bg-vanilla text-celtic-blue w-8 h-8 flex items-center justify-center rounded-full text-sm">1</span>
                    Ruta y Carga
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <label className="block text-sm font-bold text-drab-dark-brown mb-1">Seleccionar Ruta</label>
                        <select onChange={handleRouteChange} className="w-full p-3 rounded-lg border-tea-green bg-ivory focus:ring-celtic-blue font-medium">
                            <option value="">-- Seleccione un destino --</option>
                            {calculatorRoutes.sort((a,b) => a.name.localeCompare(b.name)).map(r => (
                                <option key={r.id} value={r.id}>{r.name} ({r.country})</option>
                            ))}
                        </select>
                        {selectedRoute && (
                            <div className="mt-4 p-4 bg-tea-green/20 rounded-xl border border-tea-green">
                                <p className="text-sm font-bold text-celtic-blue mb-2">Tarifas por rango (USD/kg):</p>
                                <div className="grid grid-cols-5 gap-2 text-xs text-center">
                                    <div className="bg-white p-2 rounded shadow-sm">
                                        <span className="block font-bold text-drab-dark-brown">0-50</span>
                                        <span className="text-celtic-blue">${selectedRoute.rates.min_0_50}</span>
                                        <span className="block text-[9px] text-gray-500">(Mínimo)</span>
                                    </div>
                                    <div className="bg-white p-2 rounded shadow-sm">
                                        <span className="block font-bold text-drab-dark-brown">51-99</span>
                                        <span className="text-celtic-blue">${selectedRoute.rates.k_51_99}</span>
                                    </div>
                                    <div className="bg-white p-2 rounded shadow-sm">
                                        <span className="block font-bold text-drab-dark-brown">100-299</span>
                                        <span className="text-celtic-blue">${selectedRoute.rates.k_100_299}</span>
                                    </div>
                                    <div className="bg-white p-2 rounded shadow-sm">
                                        <span className="block font-bold text-drab-dark-brown">300-999</span>
                                        <span className="text-celtic-blue">${selectedRoute.rates.k_300_999}</span>
                                    </div>
                                    <div className="bg-white p-2 rounded shadow-sm">
                                        <span className="block font-bold text-drab-dark-brown">1000+</span>
                                        <span className="text-celtic-blue">${selectedRoute.rates.k_1000_plus}</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Input label="Peso Real Total (kg)" name="pesoRealTotal" value={inputs.pesoRealTotal} onChange={handleInputChange} />
                        <Input label="Cant. Bultos" name="bultos" value={inputs.bultos} onChange={handleInputChange} />
                        <Input label="Largo (cm)" name="longitud" value={inputs.longitud} onChange={handleInputChange} />
                        <Input label="Ancho (cm)" name="ancho" value={inputs.ancho} onChange={handleInputChange} />
                        <Input label="Alto (cm)" name="altura" value={inputs.altura} onChange={handleInputChange} />
                    </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                    <MetricBox label="Peso Volumétrico" value={`${pesoVolumetricoTotal.toFixed(2)} kg`} />
                    <MetricBox label="Peso Facturable (Cobrable)" value={`${pesoFacturable.toFixed(2)} kg`} highlight />
                    <MetricBox label="Flete Seleccionado" value={fleteRate > 0 ? `$${fleteRate}/kg` : 'Tarifa Mínima'} />
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* LEFT COL: INPUTS */}
                <div className="lg:col-span-2 space-y-8">
                    
                    {/* SECTION 2: PRODUCTION */}
                    <div className="bg-white p-6 rounded-3xl shadow-md border-2 border-tea-green">
                         <h2 className="text-xl font-bold text-celtic-blue mb-4 font-display flex items-center gap-2">
                            <span className="bg-vanilla text-celtic-blue w-8 h-8 flex items-center justify-center rounded-full text-sm">2</span>
                            Costos de Producción (USD)
                        </h2>
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                            <Input label="C.I" name="ci" value={inputs.ci} onChange={handleInputChange} small />
                            <Input label="G. Adm" name="gAdm" value={inputs.gAdm} onChange={handleInputChange} small />
                            <Input label="G. Fin" name="gFin" value={inputs.gFin} onChange={handleInputChange} small />
                            <Input label="M.O.I" name="moi" value={inputs.moi} onChange={handleInputChange} small />
                            <Input label="M.O.D" name="mod" value={inputs.mod} onChange={handleInputChange} small />
                            <Input label="M.D" name="md" value={inputs.md} onChange={handleInputChange} small />
                            <Input label="M.I" name="mi" value={inputs.mi} onChange={handleInputChange} small />
                        </div>
                    </div>

                     {/* SECTION 3: LOGISTICS & PACKING */}
                     <div className="bg-white p-6 rounded-3xl shadow-md border-2 border-tea-green">
                         <h2 className="text-xl font-bold text-celtic-blue mb-4 font-display flex items-center gap-2">
                            <span className="bg-vanilla text-celtic-blue w-8 h-8 flex items-center justify-center rounded-full text-sm">3</span>
                            Logística y Embalaje
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-8">
                            <div className="space-y-3 bg-ivory/50 p-4 rounded-xl border border-tea-green">
                                <h3 className="font-bold text-celtic-blue border-b border-tea-green pb-1">Embalaje & Paletización</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <Input label="Tarifa Embalaje ($/kg)" name="embalajeRate" value={inputs.embalajeRate} onChange={handleInputChange} step={0.01} small />
                                    <div className="pt-6 text-right font-bold text-drab-dark-brown">${costoEmbalaje.toFixed(2)}</div>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-2 pt-2">
                                     <Input label="Peso Pallet (kg)" name="pesoPallet" value={inputs.pesoPallet} onChange={handleInputChange} small />
                                     <Input label="Cant. Pallets" name="palletsQty" value={inputs.palletsQty} onChange={handleInputChange} small />
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                     <Input label="Tarifa Paletización ($)" name="palletRate" value={inputs.palletRate} onChange={handleInputChange} step={0.01} small />
                                     <Input label="Adicional ($)" name="palletAddCost" value={inputs.palletAddCost} onChange={handleInputChange} small />
                                </div>
                                <div className="text-xs text-gray-500 text-right">*Tarifa sobre Peso Facturable</div>
                            </div>

                            <div className="space-y-3 bg-ivory/50 p-4 rounded-xl border border-tea-green">
                                <h3 className="font-bold text-celtic-blue border-b border-tea-green pb-1">Transporte Interno & Docs</h3>
                                <div className="grid grid-cols-3 gap-2">
                                    <Input label="Manipuleo" name="manipuleoRate" value={inputs.manipuleoRate} onChange={handleInputChange} step={0.01} small />
                                    <Input label="Estiba" name="estibaRate" value={inputs.estibaRate} onChange={handleInputChange} step={0.01} small />
                                    <Input label="Moviliz." name="movilizacionRate" value={inputs.movilizacionRate} onChange={handleInputChange} step={0.01} small />
                                </div>
                                <div className="text-right font-bold text-drab-dark-brown pt-1">Transp. Int: ${costoTransporteInterno.toFixed(2)}</div>
                                <div className="pt-2 grid grid-cols-2 gap-2">
                                     <Input label="Documentación ($)" name="documentacion" value={inputs.documentacion} onChange={handleInputChange} small />
                                     <Input label="Despacho Exp. ($)" name="despachoAduanero" value={inputs.despachoAduanero} onChange={handleInputChange} small />
                                </div>
                            </div>
                        </div>
                    </div>

                     {/* SECTION 4: INSURANCE */}
                     <div className="bg-white p-6 rounded-3xl shadow-md border-2 border-tea-green">
                         <h2 className="text-xl font-bold text-celtic-blue mb-4 font-display flex items-center gap-2">
                            <span className="bg-vanilla text-celtic-blue w-8 h-8 flex items-center justify-center rounded-full text-sm">4</span>
                            Seguro
                        </h2>
                        <div className="grid grid-cols-3 gap-4 items-end">
                            <Input label="Deducible (%)" name="deduciblePercent" value={inputs.deduciblePercent} onChange={handleInputChange} step={0.1} />
                            <Input label="Prima Neta (%)" name="primaNetaPercent" value={inputs.primaNetaPercent} onChange={handleInputChange} step={0.1} />
                            <Input label="Der. Emisión (%)" name="derechoEmisionPercent" value={inputs.derechoEmisionPercent} onChange={handleInputChange} step={0.1} />
                        </div>
                         <div className="mt-4 p-2 bg-vanilla/30 rounded text-sm text-drab-dark-brown flex justify-between">
                            <span>Suma Asegurada:</span>
                            <span className="font-bold">${sumaAsegurada.toFixed(2)}</span>
                        </div>
                    </div>

                    {/* SECTION 5: DESTINATION COSTS */}
                    <div className="bg-white p-6 rounded-3xl shadow-md border-2 border-tea-green">
                         <h2 className="text-xl font-bold text-celtic-blue mb-4 font-display flex items-center gap-2">
                            <span className="bg-vanilla text-celtic-blue w-8 h-8 flex items-center justify-center rounded-full text-sm">5</span>
                            Gastos en Destino (USD)
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            <Input label="Descarga Destino" name="gastosDescargaDestino" value={inputs.gastosDescargaDestino} onChange={handleInputChange} />
                            <Input label="Despacho Aduanero (Imp)" name="gastosDespachoImpDestino" value={inputs.gastosDespachoImpDestino} onChange={handleInputChange} />
                            <Input label="Transporte Destino" name="gastosTransporteDestino" value={inputs.gastosTransporteDestino} onChange={handleInputChange} />
                            <Input label="Almacenamiento" name="gastosAlmacenamientoDestino" value={inputs.gastosAlmacenamientoDestino} onChange={handleInputChange} />
                            <Input label="Aranceles/Impuestos" name="gastosArancelesDestino" value={inputs.gastosArancelesDestino} onChange={handleInputChange} />
                        </div>
                    </div>

                </div>

                {/* RIGHT COL: SUMMARY */}
                <div className="bg-celtic-blue rounded-3xl shadow-2xl p-6 text-ivory sticky top-24 h-fit border-4 border-vanilla flex flex-col">
                    <h2 className="text-2xl font-bold font-display mb-6 text-center text-vanilla border-b border-ivory/30 pb-4">Resumen de Costos</h2>
                    
                    <div className="space-y-2 text-sm font-medium flex-grow overflow-y-auto max-h-[600px] pr-2 custom-scrollbar">
                        <SummaryRow label="Costo de producción" value={costoProduccion} />
                        <SummaryRow label="Env, empaq, enval" value={costoEmbalaje} />
                        
                        <div className="border-t border-dashed border-vanilla my-1"></div>
                        <SummaryRow label="EXW" value={costoEXW} bold color="text-vanilla" />
                        <div className="border-t border-dashed border-vanilla my-1"></div>

                        <SummaryRow label="Paletización" value={costoPaletizacion} />
                        <SummaryRow label="Manipulación y carga" value={costoTransporteInterno} />
                        <SummaryRow label="Documentación" value={inputs.documentacion} />
                        <SummaryRow label="Despacho aduanero" value={inputs.despachoAduanero} />
                        
                        <div className="border-t border-dashed border-vanilla my-1"></div>
                        <SummaryRow label="FCA" value={costoFCA} bold color="text-vanilla" />
                        <div className="border-t border-dashed border-vanilla my-1"></div>

                        <SummaryRow label={`Flete (${freightBracket})`} value={fleteTotal} />
                        
                        <div className="border-t border-dashed border-vanilla my-1"></div>
                        <SummaryRow label="CPT" value={costoCPT} bold color="text-vanilla" />
                        <div className="border-t border-dashed border-vanilla my-1"></div>

                        <SummaryRow label="Seguro" value={costoSeguroTotal} />
                        
                        <div className="border-t border-dashed border-vanilla my-1"></div>
                        <SummaryRow label="CIP" value={costoCIP} bold color="text-vanilla" />
                        <div className="border-t border-dashed border-vanilla my-1"></div>

                        <SummaryRow label="Descarga" value={costoDescargaDestino} />
                        <SummaryRow label="Despacho aduanero (Imp)" value={costoDespachoImpDestino} />
                        <SummaryRow label="Transporte" value={costoTransporteDestino} />

                        <div className="border-t border-dashed border-vanilla my-1"></div>
                        <SummaryRow label="DAP/DPU" value={costoDAP_DPU} bold color="text-vanilla" />
                        <div className="border-t border-dashed border-vanilla my-1"></div>

                        <SummaryRow label="Almacenamiento" value={costoAlmacenamientoDestino} />
                        <SummaryRow label="DDP (Incl. Impuestos)" value={costoDDP} bold color="text-vanilla" />

                        <div className="bg-vanilla text-celtic-blue p-4 rounded-xl mt-4 shadow-lg transform scale-105">
                            <div className="flex justify-between items-center text-xl font-extrabold font-display">
                                <span>COSTO TOTAL</span>
                                <span>${costoTotalFinal.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>

                    {/* DOWNLOAD BUTTON */}
                    <button 
                        onClick={handleDownloadPDF}
                        disabled={isGeneratingPdf}
                        className="mt-6 w-full bg-tea-green text-celtic-blue font-bold py-3 px-4 rounded-full hover:bg-white transition-colors shadow-md flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isGeneratingPdf ? (
                            <>Generando PDF...</>
                        ) : (
                            <>Descargar Cotización PDF</>
                        )}
                    </button>
                </div>
            </div>

            {/* HIDDEN PDF TEMPLATE */}
            <div style={{ position: 'absolute', top: '-9999px', left: 0, width: '210mm' }}>
                <div ref={pdfRef} className="bg-white text-gray-800 p-10 font-sans" style={{ width: '210mm', minHeight: '297mm' }}>
                    {/* Header */}
                    <div className="flex justify-between items-end border-b-4 border-celtic-blue pb-4 mb-8">
                        <div>
                            <h1 className="text-3xl font-bold text-celtic-blue font-display">GLOBAIR PERÚ</h1>
                            <p className="text-sm text-gray-500 font-bold mt-1">Exportación Aérea Simplificada</p>
                        </div>
                        <div className="text-right">
                            <h2 className="text-2xl font-bold text-gray-700">COTIZACIÓN</h2>
                            <p className="text-sm text-gray-600">Fecha: {new Date().toLocaleDateString()}</p>
                        </div>
                    </div>

                    {/* Route Info */}
                    <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-200">
                        <h3 className="text-lg font-bold text-celtic-blue border-b border-gray-300 pb-2 mb-4 uppercase tracking-wide">Detalles del Envío</h3>
                        <div className="grid grid-cols-2 gap-6 text-sm">
                            <div>
                                <p className="mb-2"><span className="font-bold text-gray-600">Origen:</span> Lima, Perú</p>
                                <p className="mb-2"><span className="font-bold text-gray-600">Destino:</span> {selectedRoute ? `${selectedRoute.name}, ${selectedRoute.country}` : 'No seleccionado'}</p>
                            </div>
                            <div>
                                <p className="mb-2"><span className="font-bold text-gray-600">Carga:</span> {inputs.bultos} Bultos ({inputs.longitud}x{inputs.ancho}x{inputs.altura} cm)</p>
                                <p className="mb-2"><span className="font-bold text-gray-600">Peso Facturable:</span> {pesoFacturable.toFixed(2)} kg</p>
                            </div>
                        </div>
                    </div>

                    {/* Cost Table */}
                    <div className="mb-8">
                        <h3 className="text-lg font-bold text-celtic-blue border-b border-gray-300 pb-2 mb-4 uppercase tracking-wide">Desglose de Costos</h3>
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-celtic-blue text-white">
                                    <th className="p-2 text-left rounded-tl-lg">Concepto</th>
                                    <th className="p-2 text-right rounded-tr-lg">Monto (USD)</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                <tr className="border-b"><td className="p-2 pl-4">Costo de producción</td><td className="p-2 text-right">{costoProduccion.toFixed(2)}</td></tr>
                                <tr className="border-b"><td className="p-2 pl-4">Env, empaq, enval</td><td className="p-2 text-right">{costoEmbalaje.toFixed(2)}</td></tr>
                                <tr className="bg-gray-100 font-bold"><td className="p-2 text-celtic-blue">EXW</td><td className="p-2 text-right text-celtic-blue">{costoEXW.toFixed(2)}</td></tr>
                                
                                <tr className="border-b"><td className="p-2 pl-4">Paletización</td><td className="p-2 text-right">{costoPaletizacion.toFixed(2)}</td></tr>
                                <tr className="border-b"><td className="p-2 pl-4">Manipulación y carga</td><td className="p-2 text-right">{costoTransporteInterno.toFixed(2)}</td></tr>
                                <tr className="border-b"><td className="p-2 pl-4">Documentación</td><td className="p-2 text-right">{inputs.documentacion.toFixed(2)}</td></tr>
                                <tr className="border-b"><td className="p-2 pl-4">Despacho aduanero</td><td className="p-2 text-right">{inputs.despachoAduanero.toFixed(2)}</td></tr>
                                <tr className="bg-gray-100 font-bold"><td className="p-2 text-celtic-blue">FCA</td><td className="p-2 text-right text-celtic-blue">{costoFCA.toFixed(2)}</td></tr>

                                <tr className="border-b"><td className="p-2 pl-4">Flete</td><td className="p-2 text-right">{fleteTotal.toFixed(2)}</td></tr>
                                <tr className="bg-gray-100 font-bold"><td className="p-2 text-celtic-blue">CPT</td><td className="p-2 text-right text-celtic-blue">{costoCPT.toFixed(2)}</td></tr>

                                <tr className="border-b"><td className="p-2 pl-4">Seguro</td><td className="p-2 text-right">{costoSeguroTotal.toFixed(2)}</td></tr>
                                <tr className="bg-gray-100 font-bold"><td className="p-2 text-celtic-blue">CIP</td><td className="p-2 text-right text-celtic-blue">{costoCIP.toFixed(2)}</td></tr>

                                <tr className="border-b"><td className="p-2 pl-4">Descarga</td><td className="p-2 text-right">{costoDescargaDestino.toFixed(2)}</td></tr>
                                <tr className="border-b"><td className="p-2 pl-4">Despacho aduanero (Imp)</td><td className="p-2 text-right">{costoDespachoImpDestino.toFixed(2)}</td></tr>
                                <tr className="border-b"><td className="p-2 pl-4">Transporte</td><td className="p-2 text-right">{costoTransporteDestino.toFixed(2)}</td></tr>
                                <tr className="bg-gray-100 font-bold"><td className="p-2 text-celtic-blue">DAP/DPU</td><td className="p-2 text-right text-celtic-blue">{costoDAP_DPU.toFixed(2)}</td></tr>

                                <tr className="border-b"><td className="p-2 pl-4">Almacenamiento</td><td className="p-2 text-right">{costoAlmacenamientoDestino.toFixed(2)}</td></tr>
                                <tr className="border-b"><td className="p-2 pl-4">Aranceles/Impuestos</td><td className="p-2 text-right">{costoArancelesDestino.toFixed(2)}</td></tr>
                                <tr className="bg-gray-100 font-bold"><td className="p-2 text-celtic-blue">DDP</td><td className="p-2 text-right text-celtic-blue">{costoDDP.toFixed(2)}</td></tr>
                            </tbody>
                            <tfoot>
                                <tr className="bg-celtic-blue text-white text-lg">
                                    <td className="p-4 font-bold rounded-bl-lg">COSTO TOTAL</td>
                                    <td className="p-4 text-right font-bold rounded-br-lg">${costoTotalFinal.toFixed(2)}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Input: React.FC<{ label: string; name: string; value: number; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; step?: number, small?: boolean }> = ({ label, name, value, onChange, step = 1, small }) => (
    <div>
        <label className={`block font-bold text-drab-dark-brown mb-1 ${small ? 'text-xs' : 'text-sm'}`}>{label}</label>
        <input 
            type="number" 
            name={name} 
            value={value} 
            onChange={onChange} 
            step={step}
            className={`w-full rounded-lg border-tea-green bg-ivory focus:ring-celtic-blue focus:border-celtic-blue text-drab-dark-brown font-semibold shadow-sm transition-shadow focus:shadow-md ${small ? 'p-1 text-sm' : 'p-2'}`}
        />
    </div>
);

const MetricBox: React.FC<{ label: string; value: string; highlight?: boolean }> = ({ label, value, highlight }) => (
    <div className={`p-3 rounded-2xl border-2 flex flex-col justify-center items-center shadow-sm ${highlight ? 'bg-celtic-blue border-celtic-blue shadow-md scale-105 z-10' : 'bg-tea-green/20 border-tea-green'}`}>
        <p className={`text-xs font-bold mb-1 uppercase tracking-wide ${highlight ? 'text-vanilla' : 'text-celtic-blue'}`}>{label}</p>
        <p className={`font-bold text-lg ${highlight ? 'text-ivory' : 'text-drab-dark-brown'}`}>{value}</p>
    </div>
);

const SummaryRow: React.FC<{ label: string; value: number; bold?: boolean; color?: string }> = ({ label, value, bold, color }) => (
    <div className={`flex justify-between items-center ${bold ? 'font-bold text-base' : ''} ${color || ''}`}>
        <span>{label}</span>
        <span>${value.toFixed(2)}</span>
    </div>
);

export default Calculator;
