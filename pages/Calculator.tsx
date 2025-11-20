
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
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-celtic-blue cursor-pointer hover:text-drab-dark-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-72 p-3 bg-celtic-blue text-ivory text-xs rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none border-2 border-vanilla">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-drab-dark-brown">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-celtic-blue font-display">Calculadora de Costos de Exportación</h1>
                <p className="mt-4 text-lg text-drab-dark-brown font-medium">Estima los costos de tus envíos aéreos desde Perú.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg mb-8 border-4 border-vanilla">
                <div className="grid md:grid-cols-3 gap-6 items-center">
                    <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="route-select" className="block text-sm font-bold text-celtic-blue mb-1">RUTA DESTINATARIO</label>
                            <select id="route-select" onChange={handleRouteChange} defaultValue="" className="mt-1 w-full bg-ivory text-drab-dark-brown rounded-lg border-tea-green focus:ring-celtic-blue focus:border-celtic-blue p-3">
                                <option value="" disabled>Seleccionar ruta...</option>
                                {calculatorRoutes.map(r => <option key={r.id} value={r.id}>{r.name}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-celtic-blue mb-1">PAÍS DESTINO</label>
                            <p className="mt-1 p-3 bg-tea-green/20 rounded-lg h-[50px] flex items-center border border-tea-green font-medium">{selectedRoute?.destinationCountry || '...'}</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-around md:justify-end gap-6 pt-5">
                         <div>
                            <p className="text-xs font-bold text-celtic-blue text-center mb-1 uppercase">Origen</p>
                            <img src={`https://flagcdn.com/w80/pe.png`} alt="Bandera de Perú" className="w-16 h-auto rounded-md shadow-md" />
                         </div>
                         <div>
                            <p className="text-xs font-bold text-celtic-blue text-center mb-1 uppercase">Destino</p>
                            {selectedRoute ? (
                                <img src={`https://flagcdn.com/w80/${selectedRoute.destinationCountryCode}.png`} alt={`Bandera de ${selectedRoute.destinationCountry}`} className="w-16 h-auto rounded-md shadow-md" />
                            ) : (
                                <div className="w-16 h-10 bg-tea-green/50 rounded-md border border-tea-green"></div>
                            )}
                         </div>
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
                {/* Left Panel: Inputs */}
                <div className="bg-white p-8 rounded-3xl shadow-lg space-y-8 border-2 border-tea-green">
                    <div>
                        <h3 className="text-lg font-bold text-celtic-blue mb-4 border-b-2 border-vanilla pb-2 font-display">Datos Generales</h3>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                            <InputField label="Cant. Bultos" name="bultos" value={inputs.bultos} onChange={handleInputChange} />
                            <InputField label="Longitud (cm)" name="longitud" value={inputs.longitud} onChange={handleInputChange} max={200} />
                            <InputField label="Ancho (cm)" name="ancho" value={inputs.ancho} onChange={handleInputChange} max={200} />
                            <InputField label="Altura (cm)" name="altura" value={inputs.altura} onChange={handleInputChange} max={158} />
                            <InputField label="Peso Real (kg)" name="pesoReal" value={inputs.pesoReal} onChange={handleInputChange} />
                            <InputField label="Tarifa (USD/kg)" name="tarifa" value={inputs.tarifa} onChange={handleInputChange} step={0.01} />
                        </div>
                        <div className="mt-6 grid sm:grid-cols-3 gap-4 text-center">
                            <InfoBox label="Peso Bruto (Vol.)" value={pesoBruto.toFixed(2) + ' kg'} />
                            <InfoBox label="Peso Real" value={inputs.pesoReal.toFixed(2) + ' kg'} />
                            <InfoBox label="Peso Facturable" value={pesoFacturable.toFixed(2) + ' kg'} highlight />
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-celtic-blue mb-4 border-b-2 border-vanilla pb-2 font-display">Costo de Producción (USD)</h3>
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
                            <h3 className="text-lg font-bold text-celtic-blue mb-4 border-b-2 border-vanilla pb-2 font-display">Almacenamiento</h3>
                            <div className="space-y-4">
                               <InputField label="Precio por día (USD)" name="almacenamientoPrecio" value={inputs.almacenamientoPrecio} onChange={handleInputChange} />
                               <InputField label="Cantidad de días" name="almacenamientoDias" value={inputs.almacenamientoDias} onChange={handleInputChange} />
                            </div>
                        </div>
                         <div>
                            <h3 className="text-lg font-bold text-celtic-blue mb-4 border-b-2 border-vanilla pb-2 font-display">Seguro</h3>
                            <div className="space-y-4">
                               <InputField label="% Deducible" name="deducible" value={inputs.deducible} onChange={handleInputChange} step={0.1} />
                               <InputField label="% Prima Neta" name="primaNeta" value={inputs.primaNeta} onChange={handleInputChange} step={0.01} />
                            </div>
                        </div>
                    </div>
                     {logisticCosts && (
                        <div>
                            <h3 className="text-lg font-bold text-celtic-blue mb-4 border-b-2 border-vanilla pb-2 font-display">Costos Logísticos (USD) - Editables</h3>
                            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4">
                               {Object.entries(logisticCosts).map(([key, value]) => (
                                   <InputField small key={key} label={key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase())} name={key} value={value} onChange={handleLogisticCostChange} />
                               ))}
                            </div>
                        </div>
                     )}

                    <div className="flex gap-4 pt-4">
                        <button onClick={handleCalculate} className="w-full bg-celtic-blue text-ivory font-bold py-4 rounded-xl hover:bg-drab-dark-brown transition-colors shadow-lg tracking-wide">{results ? 'RE-CALCULAR' : 'CALCULAR'}</button>
                        <button onClick={handleClear} className="w-full bg-vanilla text-drab-dark-brown font-bold py-4 rounded-xl hover:bg-tea-green transition-colors shadow-md">BORRAR</button>
                    </div>
                </div>

                {/* Right Panel: Results */}
                <div className="bg-celtic-blue p-8 rounded-3xl shadow-2xl text-ivory transition-opacity duration-500 h-fit sticky top-24">
                   {results && selectedRoute ? (
                       <div className="space-y-6">
                           <div className="flex justify-between items-center mb-4 pb-4 border-b border-ivory/20">
                                <h3 className="text-2xl font-bold font-display">Desglose de Costos</h3>
                                <button onClick={handleExportCsv} className="bg-vanilla text-celtic-blue text-sm font-bold py-2 px-4 rounded-full hover:bg-ivory transition-colors shadow-md">
                                    Exportar a CSV
                                </button>
                           </div>
                           <div className="max-h-[500px] overflow-y-auto pr-2 custom-scrollbar-light">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-ivory/30 text-vanilla">
                                            <th className="text-left font-bold pb-3 pl-2">Concepto</th>
                                            <th className="text-right font-bold pb-3 pr-2">Costo (USD)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-ivory/10">
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
                           <div className="bg-drab-dark-brown/20 rounded-xl p-4 border border-ivory/10 space-y-3 mt-4">
                                <div className="flex justify-between items-center text-xl font-bold text-vanilla">
                                    <span>COSTO TOTAL (USD)</span>
                                    <span>${Number(totalCost).toFixed(2)}</span>
                                </div>
                                {exchangeRates && (
                                  <>
                                    <div className="flex justify-between items-center text-sm font-medium">
                                        <span>En Soles (PEN)</span>
                                        <span>S/ {(Number(totalCost) * (exchangeRates['PEN'] || 3.75)).toFixed(2)}</span>
                                    </div>
                                    {selectedRoute.destinationCurrency !== 'USD' && (
                                     <div className="flex justify-between items-center text-sm font-medium">
                                        <span>En {selectedRoute.destinationCurrency}</span>
                                        <span>{(Number(totalCost) * (exchangeRates[selectedRoute.destinationCurrency] || 1)).toLocaleString('es-PE', { style: 'currency', currency: selectedRoute.destinationCurrency })}</span>
                                    </div>
                                    )}
                                  </>
                                )}
                           </div>
                       </div>
                   ) : (
                    <div className="flex flex-col items-center justify-center h-full text-center py-12">
                        <div className="w-16 h-16 bg-vanilla rounded-full flex items-center justify-center mb-4">
                            <span className="text-3xl">🧮</span>
                        </div>
                        <p className="text-ivory font-bold text-lg">Calculadora Lista</p>
                        <p className="text-ivory/70 mt-2">Complete los datos y presione "Calcular" para ver el desglose de costos.</p>
                    </div>
                   )}
                </div>
            </div>
            {notification && (
                <div className="fixed bottom-5 right-5 bg-tea-green text-drab-dark-brown font-bold py-4 px-6 rounded-xl shadow-xl z-50 transition-opacity duration-300 border-2 border-celtic-blue">
                    {notification}
                </div>
            )}
        </div>
    );
};


const InputField: React.FC<{ label: string; name: string; value: number; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; max?: number, step?: number, small?: boolean }> = 
({ label, name, value, onChange, max, step = 1, small = false }) => (
    <div>
        <label htmlFor={name} className={`block ${small ? 'text-xs' : 'text-sm'} font-bold text-drab-dark-brown mb-1`}>{label}</label>
        <input
            type="number"
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            max={max}
            step={step}
            min="0"
            className={`w-full bg-ivory text-drab-dark-brown rounded-lg border-tea-green focus:ring-celtic-blue focus:border-celtic-blue shadow-sm ${small ? 'text-sm p-2' : 'p-3'}`}
        />
    </div>
);

const InfoBox: React.FC<{ label: string; value: string; highlight?: boolean }> = ({ label, value, highlight }) => (
    <div className={`p-3 rounded-xl border ${highlight ? 'bg-celtic-blue border-celtic-blue' : 'bg-tea-green/30 border-tea-green'}`}>
        <p className={`text-xs font-bold ${highlight ? 'text-vanilla' : 'text-celtic-blue'}`}>{label}</p>
        <p className={`font-bold text-lg ${highlight ? 'text-ivory' : 'text-drab-dark-brown'}`}>{value}</p>
    </div>
);

const ResultRow: React.FC<{ label: string; value: number, info?: string }> = ({ label, value, info }) => (
    <tr className="hover:bg-white/5 transition-colors">
        <td className="py-3 pl-2 flex items-center">
            {label}
            {info && (
                <div className="relative flex items-center group ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-vanilla cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 p-3 bg-vanilla text-drab-dark-brown text-xs rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none font-medium">
                        {info}
                    </div>
                </div>
            )}
        </td>
        <td className="py-3 pr-2 text-right font-mono text-ivory">${value.toFixed(2)}</td>
    </tr>
);


export default Calculator;
