import React, { useState, useMemo, useEffect } from 'react';
import { calculatorRoutes, CalculatorRoute, RouteCosts } from '../data/calculatorData';

const initialInputs = {
    bultos: 1,
    longitud: 0,
    ancho: 0,
    altura: 0,
    pesoReal: 0,
    tarifa: 0,
    ci: 0,
    gAdm: 0,
    gFin: 0,
    moi: 0,
    mod: 0,
    md: 0,
    mi: 0,
    almacenamientoPrecio: 0,
    almacenamientoDias: 0,
    deducible: 10,
    primaNeta: 0.5,
};

const incotermDescriptions = {
  EXW: "Ex Works (En Fábrica): El vendedor entrega la mercancía en sus propias instalaciones. El comprador asume todos los costos y riesgos desde ese punto.",
  FCA: "Free Carrier (Franco Porteador): El vendedor entrega la mercancía al transportista designado por el comprador en un lugar acordado. El riesgo se transfiere cuando el transportista toma posesión.",
  CPT: "Carriage Paid To (Transporte Pagado Hasta): El vendedor paga el flete para el transporte de la mercancía hasta el destino convenido.",
  CIP: "Carriage and Insurance Paid To (Transporte y Seguro Pagado Hasta): Igual que CPT, pero el vendedor también contrata y paga el seguro de la mercancía.",
  DAP: "Delivered at Place (Entregado en Lugar): El vendedor entrega la mercancía, lista para la descarga, en el lugar de destino acordado. Asume el riesgo hasta ese punto.",
  DPU: "Delivered at Place Unloaded (Entregado en Lugar Descargado): El vendedor entrega la mercancía y la descarga en el lugar de destino. Es el único Incoterm que obliga al vendedor a descargar.",
  DDP: "Delivered Duty Paid (Entregado con Derechos Pagados): El vendedor asume la máxima obligación, entregando la mercancía en el destino final, con todos los derechos de importación pagados y lista para la descarga."
};


const InfoIcon: React.FC<{ text: string }> = ({ text }) => (
    <div className="relative flex items-center group ml-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-polo-blue cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-72 p-3 bg-smoky-black text-white text-xs rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
            {text}
        </div>
    </div>
);

const Calculator: React.FC = () => {
    const [selectedRoute, setSelectedRoute] = useState<CalculatorRoute | null>(null);
    const [inputs, setInputs] = useState<Record<string, number>>(initialInputs);
    const [logisticCosts, setLogisticCosts] = useState<RouteCosts | null>(null);
    const [results, setResults] = useState<Record<string, number> | null>(null);
    const [exchangeRates, setExchangeRates] = useState<Record<string, number> | null>(null);
    const [notification, setNotification] = useState<string | null>(null);

    const showNotification = (message: string) => {
        setNotification(message);
        setTimeout(() => {
            setNotification(null);
        }, 3000);
    };

    useEffect(() => {
        fetch('https://open.er-api.com/v6/latest/USD')
            .then(res => res.json())
            .then(data => {
                if (data && data.rates) {
                    setExchangeRates(data.rates);
                }
            }).catch(err => console.error("Failed to fetch exchange rates", err));
    }, []);

    const handleRouteChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const route = calculatorRoutes.find(r => r.id === e.target.value) || null;
        setSelectedRoute(route);
        if (route) {
            setInputs(prev => ({ ...prev, tarifa: route.freightRate }));
            setLogisticCosts(route.costs);
        } else {
            setInputs(prev => ({ ...prev, tarifa: 0 }));
            setLogisticCosts(null);
        }
        setResults(null);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs(prev => ({ ...prev, [name]: parseFloat(value) || 0 }));
    };

    const handleLogisticCostChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (logisticCosts) {
            setLogisticCosts(prev => ({ ...prev!, [name]: parseFloat(value) || 0 }));
        }
    };

    const { pesoBruto, pesoFacturable, totalProduccion } = useMemo(() => {
        const pesoBrutoCalc = (Number(inputs.longitud) * Number(inputs.ancho) * Number(inputs.altura) * Number(inputs.bultos)) / 6000;
        const pesoFacturableCalc = Math.max(pesoBrutoCalc, Number(inputs.pesoReal));
        const totalProduccionCalc = Number(inputs.ci) + Number(inputs.gAdm) + Number(inputs.gFin) + Number(inputs.moi) + Number(inputs.mod) + Number(inputs.md) + Number(inputs.mi);
        return {
            pesoBruto: pesoBrutoCalc,
            pesoFacturable: pesoFacturableCalc,
            totalProduccion: totalProduccionCalc
        };
    }, [inputs]);

    const handleCalculate = () => {
        if (!logisticCosts || !selectedRoute) {
            showNotification("Por favor, seleccione una ruta primero.");
            return;
        };

        const costoProduccion = totalProduccion;
        const flete = pesoFacturable * Number(inputs.tarifa);
        
        // FIX: Operator '+' cannot be applied to types 'unknown' and 'number'.
        // By explicitly typing the accumulator as a number, we resolve the type inference issue.
        const valorPreSeguro = costoProduccion + flete + Object.values(logisticCosts).reduce<number>((a, b) => a + Number(b), 0) - (Number(logisticCosts.cip) + Number(logisticCosts.cpt) + Number(logisticCosts.dap_dpu) + Number(logisticCosts.ddp) + Number(logisticCosts.descarga) + Number(logisticCosts.despacho_aduanero_imp) + Number(logisticCosts.transporte));

        const seguro = (valorPreSeguro * (1 + Number(inputs.deducible) / 100)) * (Number(inputs.primaNeta) / 100);

        const almacenamiento = Number(inputs.almacenamientoPrecio) * Number(inputs.almacenamientoDias);

        const calculatedResults: Record<string, number> = {
            costoProduccion,
            ...logisticCosts,
            flete,
            seguro,
            almacenamiento
        };
        
        setResults(calculatedResults);
        showNotification('Cálculo actualizado exitosamente');
    };

    const handleClear = () => {
        setInputs(initialInputs);
        setSelectedRoute(null);
        setLogisticCosts(null);
        setResults(null);
        const select = document.getElementById('route-select') as HTMLSelectElement;
        if (select) select.value = "";
    };

    // FIX: Operator '+' cannot be applied to types 'unknown' and 'number'.
    // By explicitly typing the accumulator as a number, we resolve the type inference issue.
    const totalCost = results ? Object.values(results).reduce<number>((sum, val) => sum + Number(val), 0) : 0;
    
    const handleExportCsv = () => {
        if (!results || !selectedRoute || !exchangeRates) return;

        const headers = ['Concepto', 'Costo (USD)'];
        
        const dataRows = [
            ['Costo de Producción', Number(results.costoProduccion).toFixed(2)],
            ['Env, Empaq, Enval', Number(results.env_empaq_enval).toFixed(2)],
            ['EXW', Number(results.exw).toFixed(2)],
            ['Paletización', Number(results.paletizacion).toFixed(2)],
            ['Manipulación y Carga', Number(results.manipulacion_carga).toFixed(2)],
            ['Documentación', Number(results.documentacion).toFixed(2)],
            ['Despacho Aduanero (Exp.)', Number(results.despacho_aduanero_exp).toFixed(2)],
            ['FCA', Number(results.fca).toFixed(2)],
            ['Flete', Number(results.flete).toFixed(2)],
            ['CPT', Number(results.cpt).toFixed(2)],
            ['Seguro', Number(results.seguro).toFixed(2)],
            ['CIP', Number(results.cip).toFixed(2)],
            ['Descarga', Number(results.descarga).toFixed(2)],
            ['Despacho Aduanero (Imp.)', Number(results.despacho_aduanero_imp).toFixed(2)],
            ['Transporte', Number(results.transporte).toFixed(2)],
            ['DAP/DPU', Number(results.dap_dpu).toFixed(2)],
            ['Almacenamiento', Number(results.almacenamiento).toFixed(2)],
            ['DDP', Number(results.ddp).toFixed(2)],
        ];

        const totalRows = [
            ['', ''], // Spacer
            ['COSTO TOTAL (USD)', Number(totalCost).toFixed(2)],
            ['En Soles (PEN)', (Number(totalCost) * (exchangeRates['PEN'] || 3.75)).toFixed(2)],
        ];

        if (selectedRoute.destinationCurrency !== 'USD') {
            const destTotal = Number(totalCost) * (exchangeRates[selectedRoute.destinationCurrency] || 1);
            totalRows.push([`En ${selectedRoute.destinationCurrency}`, destTotal.toFixed(2)]);
        }
        
        const allRows = [...dataRows, ...totalRows];

        const csvContent = [
            headers.join(','),
            ...allRows.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(','))
        ].join('\n');
        
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement("a");
        if (link.download !== undefined) {
            const url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", `calculo_costos_${selectedRoute.id}.csv`);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        showNotification('Registro exportado exitosamente');
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-pattens-blue">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-white font-poppins">Calculadora de Costos de Exportación</h1>
                <p className="mt-4 text-lg text-polo-blue">Estima los costos de tus envíos aéreos desde Perú.</p>
            </div>

            <div className="bg-catalina-blue p-6 rounded-lg shadow-lg mb-8">
                <div className="grid md:grid-cols-3 gap-6 items-center">
                    <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="route-select" className="block text-sm font-medium text-polo-blue">RUTA DESTINATARIO</label>
                            <select id="route-select" onChange={handleRouteChange} defaultValue="" className="mt-1 w-full bg-smoky-black text-white rounded-md border-st-tropaz focus:ring-polo-blue focus:border-polo-blue">
                                <option value="" disabled>Seleccionar ruta...</option>
                                {calculatorRoutes.map(r => <option key={r.id} value={r.id}>{r.name}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-polo-blue">PAÍS DESTINO</label>
                            <p className="mt-1 p-2 bg-smoky-black rounded-md h-[42px] flex items-center">{selectedRoute?.destinationCountry || '...'}</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-around md:justify-end gap-6 pt-5">
                         <div>
                            <p className="text-sm font-medium text-polo-blue text-center mb-1">ORIGEN</p>
                            <img src={`https://flagcdn.com/w80/pe.png`} alt="Bandera de Perú" className="w-16 h-auto rounded-sm shadow-md" />
                         </div>
                         <div>
                            <p className="text-sm font-medium text-polo-blue text-center mb-1">DESTINO</p>
                            {selectedRoute ? (
                                <img src={`https://flagcdn.com/w80/${selectedRoute.destinationCountryCode}.png`} alt={`Bandera de ${selectedRoute.destinationCountry}`} className="w-16 h-auto rounded-sm shadow-md" />
                            ) : (
                                <div className="w-16 h-10 bg-smoky-black rounded-sm shadow-md"></div>
                            )}
                         </div>
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
                {/* Left Panel: Inputs */}
                <div className="bg-catalina-blue p-6 rounded-lg shadow-lg space-y-6">
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4 border-b border-st-tropaz pb-2">Datos Generales</h3>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                            <InputField label="Cant. Bultos" name="bultos" value={inputs.bultos} onChange={handleInputChange} />
                            <InputField label="Longitud (cm)" name="longitud" value={inputs.longitud} onChange={handleInputChange} max={200} />
                            <InputField label="Ancho (cm)" name="ancho" value={inputs.ancho} onChange={handleInputChange} max={200} />
                            <InputField label="Altura (cm)" name="altura" value={inputs.altura} onChange={handleInputChange} max={158} />
                            <InputField label="Peso Real (kg)" name="pesoReal" value={inputs.pesoReal} onChange={handleInputChange} />
                            <InputField label="Tarifa (USD/kg)" name="tarifa" value={inputs.tarifa} onChange={handleInputChange} step={0.01} />
                        </div>
                        <div className="mt-4 grid sm:grid-cols-3 gap-4 text-center">
                            <InfoBox label="Peso Bruto (Vol.)" value={pesoBruto.toFixed(2) + ' kg'} />
                            <InfoBox label="Peso Real" value={inputs.pesoReal.toFixed(2) + ' kg'} />
                            <InfoBox label="Peso Facturable" value={pesoFacturable.toFixed(2) + ' kg'} highlight />
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-white mb-4 border-b border-st-tropaz pb-2">Costo de Producción (USD)</h3>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                            <InputField label="C.I" name="ci" value={inputs.ci} onChange={handleInputChange} />
                            <InputField label="G. Adm" name="gAdm" value={inputs.gAdm} onChange={handleInputChange} />
                            <InputField label="G. Fin" name="gFin" value={inputs.gFin} onChange={handleInputChange} />
                            <InputField label="M.O.I" name="moi" value={inputs.moi} onChange={handleInputChange} />
                            <InputField label="M.O.D" name="mod" value={inputs.mod} onChange={handleInputChange} />
                            <InputField label="M.D" name="md" value={inputs.md} onChange={handleInputChange} />
                            <InputField label="M.I" name="mi" value={inputs.mi} onChange={handleInputChange} />
                        </div>
                         <div className="mt-4">
                            <InfoBox label="Total Producción" value={'$' + totalProduccion.toFixed(2)} highlight />
                        </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                            <h3 className="text-lg font-bold text-white mb-4 border-b border-st-tropaz pb-2">Almacenamiento</h3>
                            <div className="space-y-4">
                               <InputField label="Precio por día (USD)" name="almacenamientoPrecio" value={inputs.almacenamientoPrecio} onChange={handleInputChange} />
                               <InputField label="Cantidad de días" name="almacenamientoDias" value={inputs.almacenamientoDias} onChange={handleInputChange} />
                            </div>
                        </div>
                         <div>
                            <h3 className="text-lg font-bold text-white mb-4 border-b border-st-tropaz pb-2">Seguro</h3>
                            <div className="space-y-4">
                               <InputField label="% Deducible" name="deducible" value={inputs.deducible} onChange={handleInputChange} step={0.1} />
                               <InputField label="% Prima Neta" name="primaNeta" value={inputs.primaNeta} onChange={handleInputChange} step={0.01} />
                            </div>
                        </div>
                    </div>
                     {logisticCosts && (
                        <div>
                            <h3 className="text-lg font-bold text-white mb-4 border-b border-st-tropaz pb-2">Costos Logísticos (USD) - Editables</h3>
                            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
                               {Object.entries(logisticCosts).map(([key, value]) => (
                                   <InputField small key={key} label={key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase())} name={key} value={value} onChange={handleLogisticCostChange} />
                               ))}
                            </div>
                        </div>
                     )}

                    <div className="flex gap-4 pt-4">
                        <button onClick={handleCalculate} className="w-full bg-black text-white font-bold py-3 rounded-md hover:bg-gray-800 transition-colors">{results ? 'RE-CALCULAR' : 'CALCULAR'}</button>
                        <button onClick={handleClear} className="w-full bg-black text-white font-bold py-3 rounded-md hover:bg-gray-800 transition-colors">BORRAR</button>
                    </div>
                </div>

                {/* Right Panel: Results */}
                <div className="bg-st-tropaz p-6 rounded-lg shadow-lg transition-opacity duration-500">
                   {results && selectedRoute ? (
                       <div className="space-y-4">
                           <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-bold text-white">Desglose de Costos</h3>
                                <button onClick={handleExportCsv} className="bg-pattens-blue text-smoky-black text-sm font-bold py-2 px-3 rounded-md hover:bg-polo-blue hover:text-white transition-colors">
                                    Exportar a CSV
                                </button>
                           </div>
                           <div className="max-h-[450px] overflow-y-auto pr-2">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-polo-blue">
                                            <th className="text-left font-semibold pb-2">Concepto</th>
                                            <th className="text-right font-semibold pb-2">Costo (USD)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <ResultRow label="Costo de Producción" value={results.costoProduccion} />
                                        <ResultRow label="Env, Empaq, Enval" value={results.env_empaq_enval} />
                                        <ResultRow label="EXW" value={results.exw} info={incotermDescriptions.EXW} />
                                        <ResultRow label="Paletización" value={results.paletizacion} />
                                        <ResultRow label="Manipulación y Carga" value={results.manipulacion_carga} />
                                        <ResultRow label="Documentación" value={results.documentacion} />
                                        <ResultRow label="Despacho Aduanero (Exp.)" value={results.despacho_aduanero_exp} />
                                        <ResultRow label="FCA" value={results.fca} info={incotermDescriptions.FCA} />
                                        <ResultRow label="Flete" value={results.flete} />
                                        <ResultRow label="CPT" value={results.cpt} info={incotermDescriptions.CPT} />
                                        <ResultRow label="Seguro" value={results.seguro} />
                                        <ResultRow label="CIP" value={results.cip} info={incotermDescriptions.CIP} />
                                        <ResultRow label="Descarga" value={results.descarga} />
                                        <ResultRow label="Despacho Aduanero (Imp.)" value={results.despacho_aduanero_imp} />
                                        <ResultRow label="Transporte" value={results.transporte} />
                                        <ResultRow label="DAP/DPU" value={results.dap_dpu} info={incotermDescriptions.DAP + ' ' + incotermDescriptions.DPU} />
                                        <ResultRow label="Almacenamiento" value={results.almacenamiento} />
                                        <ResultRow label="DDP" value={results.ddp} info={incotermDescriptions.DDP} />
                                    </tbody>
                                </table>
                           </div>
                           <div className="border-t-2 border-polo-blue pt-4 space-y-3">
                                <div className="flex justify-between items-center text-lg font-bold text-white">
                                    <span>COSTO TOTAL (USD)</span>
                                    <span>${Number(totalCost).toFixed(2)}</span>
                                </div>
                                {exchangeRates && (
                                  <>
                                    <div className="flex justify-between items-center text-md text-pattens-blue">
                                        <span>En Soles (PEN)</span>
                                        <span>S/ {(Number(totalCost) * (exchangeRates['PEN'] || 3.75)).toFixed(2)}</span>
                                    </div>
                                    {selectedRoute.destinationCurrency !== 'USD' && (
                                     <div className="flex justify-between items-center text-md text-pattens-blue">
                                        <span>En {selectedRoute.destinationCurrency}</span>
                                        <span>{(Number(totalCost) * (exchangeRates[selectedRoute.destinationCurrency] || 1)).toLocaleString('es-PE', { style: 'currency', currency: selectedRoute.destinationCurrency })}</span>
                                    </div>
                                    )}
                                  </>
                                )}
                           </div>
                       </div>
                   ) : (
                    <div className="flex items-center justify-center h-full">
                        <p className="text-polo-blue text-center">Complete los datos y presione "Calcular" para ver el desglose de costos.</p>
                    </div>
                   )}
                </div>
            </div>
            {notification && (
                <div className="fixed bottom-5 right-5 bg-green-600 text-white py-3 px-5 rounded-lg shadow-lg z-50 transition-opacity duration-300">
                    {notification}
                </div>
            )}
        </div>
    );
};


const InputField: React.FC<{ label: string; name: string; value: number; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; max?: number, step?: number, small?: boolean }> = 
({ label, name, value, onChange, max, step = 1, small = false }) => (
    <div>
        <label htmlFor={name} className={`block ${small ? 'text-xs' : 'text-sm'} font-medium text-polo-blue`}>{label}</label>
        <input
            type="number"
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            max={max}
            step={step}
            min="0"
            className={`mt-1 w-full bg-smoky-black text-white rounded-md border-st-tropaz focus:ring-polo-blue focus:border-polo-blue ${small ? 'text-sm p-1' : ''}`}
        />
    </div>
);

const InfoBox: React.FC<{ label: string; value: string; highlight?: boolean }> = ({ label, value, highlight }) => (
    <div className={`p-2 rounded-md ${highlight ? 'bg-st-tropaz' : 'bg-smoky-black'}`}>
        <p className="text-xs text-polo-blue">{label}</p>
        <p className={`font-bold ${highlight ? 'text-white' : 'text-pattens-blue'}`}>{value}</p>
    </div>
);

const ResultRow: React.FC<{ label: string; value: number, info?: string }> = ({ label, value, info }) => (
    <tr className="border-b border-st-tropaz/50">
        <td className="py-2 flex items-center">
            {label}
            {info && <InfoIcon text={info} />}
        </td>
        <td className="py-2 text-right font-mono">${value.toFixed(2)}</td>
    </tr>
);


export default Calculator;