
import { DocumentTemplate } from '../types';

export const documentTemplates: DocumentTemplate[] = [
  {
    id: 'commercial-invoice',
    name: 'Factura Comercial',
    description: '📜 **¿Qué es?**\nEl documento legal fundamental que registra la transacción entre el exportador y el importador.\n\n🎯 **¿Para qué sirve?**\nEstablece el valor de la mercancía, los incoterms y actúa como prueba de venta para el comprador.\n\n⭐ **¿Por qué es importante?**\nEs la base principal para el cálculo de impuestos y el despacho aduanero. ¡Sin ella, la carga no entra!',
    definition: 'Es un documento legal emitido por el vendedor (exportador) al comprador (importador) que sirve como prueba de la venta entre ambos. Es fundamental para el despacho de aduanas y determinación de impuestos.',
    issuer: 'Exportador',
    fields: [
      // Header Info
      { id: 'awbNumber', label: 'N.º Guía Aérea (AWB)', type: 'text', placeholder: '8034842974', required: true },
      { id: 'exportDate', label: 'Fecha de Exportación', type: 'date', placeholder: '', required: true },
      { id: 'invoiceNumber', label: 'Ref. Exportación / N.º Factura', type: 'text', placeholder: 'A362P444', required: true },
      
      // Shipper
      { id: 'shipperName', label: 'Expedidor: Nombre Completo', type: 'text', placeholder: 'Mi Empresa S.A.C.', required: true },
      { id: 'shipperAddress', label: 'Expedidor: Dirección', type: 'textarea', placeholder: 'Av. Principal 123, Lima, Perú', required: true },
      { id: 'shipperPhone', label: 'Expedidor: Teléfono', type: 'text', placeholder: '(511) 456-7890', required: true },
      { id: 'shipperTaxId', label: 'Expedidor: RUC / Tax ID', type: 'text', placeholder: '20123456789', required: true },

      // Consignee
      { id: 'consigneeName', label: 'Consignatario: Nombre Completo', type: 'text', placeholder: 'Comprador Internacional Inc.', required: true },
      { id: 'consigneeAddress', label: 'Consignatario: Dirección', type: 'textarea', placeholder: '123 Main Street, Tokyo, Japan', required: true },
      { id: 'consigneePhone', label: 'Consignatario: Teléfono', type: 'text', placeholder: '+81 010 112233', required: true },
      { id: 'consigneeTaxId', label: 'Consignatario: Tax ID', type: 'text', placeholder: '111-22-3333', required: true },

      // Shipment Details
      { id: 'countryOfExport', label: 'País de Exportación', type: 'text', placeholder: 'Perú', required: true },
      { id: 'countryOfDestination', label: 'País de Destino Final', type: 'text', placeholder: 'Japón', required: true },
      { id: 'exportReason', label: 'Propósito de la Exportación', type: 'text', placeholder: 'Venta comercial', required: true },

      // Line Item
      { id: 'itemOrigin', label: 'País de Origen del Bien', type: 'text', placeholder: 'PE', required: true },
      { id: 'itemDescription', label: 'Descripción Completa', type: 'textarea', placeholder: 'Prendas de algodón 100%', required: true },
      { id: 'itemHsCode', label: 'Código HS', type: 'text', placeholder: '6109.10.00', required: true },
      { id: 'itemQuantity', label: 'Cantidad', type: 'number', placeholder: '100', required: true },
      { id: 'itemUnit', label: 'Unidad de Medida', type: 'text', placeholder: 'Unidades', required: true },
      { id: 'itemWeight', label: 'Peso Total (kg)', type: 'number', placeholder: '15.60', required: true },
      { id: 'itemUnitValue', label: 'Valor Unitario', type: 'number', placeholder: '50.00', required: true },
      
      // Totals & Costs
      { id: 'pkgCount', label: 'N.º Total de Paquetes', type: 'number', placeholder: '5', required: true },
      { id: 'freightCost', label: 'Costo del Flete', type: 'number', placeholder: '0.00', required: false },
      { id: 'insuranceCost', label: 'Costo del Seguro', type: 'number', placeholder: '0.00', required: false },
      { id: 'additionalCost', label: 'Costos Adicionales', type: 'number', placeholder: '0.00', required: false },
      { id: 'currency', label: 'Moneda', type: 'text', placeholder: 'USD', required: true },
    ],
  },
  {
    id: 'packing-list',
    name: 'Lista de Empaque (Packing List)',
    description: '📦 **¿Qué es?**\nUn inventario físico detallado de todo lo que estás enviando, bulto por bulto.\n\n🧐 **¿Para qué sirve?**\nPermite identificar pesos, dimensiones y contenidos exactos sin necesidad de abrir las cajas.\n\n🚀 **¿Por qué es importante?**\nAgiliza la inspección física en aduanas y asegura que tu cliente reciba todo completo y en orden.',
    definition: 'Un documento que proporciona al exportador, al transportista internacional y al importador información sobre el envío, incluyendo cómo está embalado, las dimensiones y el peso de cada bulto.',
    issuer: 'Exportador',
    fields: [
        // Header
        { id: 'companyName', label: 'Nombre de la Empresa (Encabezado)', type: 'text', placeholder: 'GLOBAIR EXPORTS S.A.C.', required: true },
        { id: 'companyAddress', label: 'Dirección (Encabezado)', type: 'text', placeholder: 'Av. La Marina 2000, Lima', required: true },
        { id: 'companyCityZip', label: 'Ciudad, Estado, CP', type: 'text', placeholder: 'Lima, 15001', required: true },
        { id: 'packingListNo', label: 'Número de Lista de Empaque', type: 'text', placeholder: 'PL-12345', required: true },
        { id: 'shipDate', label: 'Fecha de Envío', type: 'date', placeholder: '', required: true },
        { id: 'customerId', label: 'ID de Cliente', type: 'text', placeholder: 'CUST-001', required: false },

        // Ship From
        { id: 'shipFromName', label: 'ENVIAR DESDE: Nombre', type: 'text', placeholder: 'GLOBAIR EXPORTS S.A.C.', required: true },
        { id: 'shipFromAddress', label: 'ENVIAR DESDE: Dirección', type: 'text', placeholder: 'Av. La Marina 2000', required: true },
        { id: 'shipFromCity', label: 'ENVIAR DESDE: Ciudad/CP', type: 'text', placeholder: 'Lima, Lima, 15001', required: true },
        { id: 'shipFromContact', label: 'ENVIAR DESDE: Contacto', type: 'text', placeholder: 'Juan Pérez', required: true },

        // Ship To
        { id: 'shipToName', label: 'ENVIAR A: Nombre', type: 'text', placeholder: 'Importadora Mundial LLC', required: true },
        { id: 'shipToAddress', label: 'ENVIAR A: Dirección', type: 'text', placeholder: '789 Trade Blvd', required: true },
        { id: 'shipToCity', label: 'ENVIAR A: Ciudad/CP', type: 'text', placeholder: 'Miami, FL 33101', required: true },
        { id: 'shipToContact', label: 'ENVIAR A: Contacto', type: 'text', placeholder: 'Jane Doe', required: true },

        // Order Details
        { id: 'shippingMethod', label: 'Método de Envío', type: 'text', placeholder: 'Aéreo / Air Freight', required: true },
        { id: 'customerPO', label: 'Orden de Compra del Cliente', type: 'text', placeholder: 'PO-998877', required: false },
        { id: 'deliveryDate', label: 'Fecha de Entrega', type: 'date', placeholder: '', required: false },

        // Items (Simplified for editor, could be dynamic in a full app)
        { id: 'item1Desc', label: 'Artículo 1: Descripción', type: 'text', placeholder: 'Cajas de Arándanos Frescos', required: true },
        { id: 'item1Qty', label: 'Artículo 1: Cantidad', type: 'number', placeholder: '10', required: true },
        { id: 'item1Unit', label: 'Artículo 1: Unidad', type: 'text', placeholder: 'Caja', required: true },
        { id: 'item1Weight', label: 'Artículo 1: Peso (kg/lbs)', type: 'number', placeholder: '50', required: true },

        { id: 'item2Desc', label: 'Artículo 2: Descripción', type: 'text', placeholder: '', required: false },
        { id: 'item2Qty', label: 'Artículo 2: Cantidad', type: 'number', placeholder: '', required: false },
        { id: 'item2Unit', label: 'Artículo 2: Unidad', type: 'text', placeholder: '', required: false },
        { id: 'item2Weight', label: 'Artículo 2: Peso', type: 'number', placeholder: '', required: false },

        { id: 'item3Desc', label: 'Artículo 3: Descripción', type: 'text', placeholder: '', required: false },
        { id: 'item3Qty', label: 'Artículo 3: Cantidad', type: 'number', placeholder: '', required: false },
        { id: 'item3Unit', label: 'Artículo 3: Unidad', type: 'text', placeholder: '', required: false },
        { id: 'item3Weight', label: 'Artículo 3: Peso', type: 'number', placeholder: '', required: false },

        // Footer
        { id: 'notes', label: 'Notas', type: 'textarea', placeholder: 'Mercancía frágil. Mantener refrigerado.', required: false },
        { id: 'totalWeight', label: 'Peso Total', type: 'number', placeholder: '150', required: true },
        { id: 'weightUnit', label: 'Unidad de Peso Total', type: 'text', placeholder: 'LBS', required: true },
    ],
  },
  {
    id: 'bill-of-lading',
    name: 'Conocimiento de Embarque (Bill of Lading)',
    description: '✈️ **¿Qué es?**\nEl contrato oficial de transporte entre el exportador y la aerolínea (Guía Aérea).\n\n🤝 **¿Para qué sirve?**\nConfirma que la aerolínea ha recibido la carga y se compromete a transportarla al destino.\n\n🔑 **¿Por qué es importante?**\nEs el título de propiedad de la mercancía. Quien posee este documento original, ¡es el dueño de la carga!',
    definition: 'Documento emitido por el transportista al expedidor, reconociendo la recepción de la carga para su transporte. Sirve como prueba del contrato de transporte y título de propiedad de los bienes.',
    issuer: 'Transportista / Agente de Carga',
    fields: [
      // Header
      { id: 'carrierName', label: 'Nombre de la Empresa (Transportista)', type: 'text', placeholder: 'Global Logistics Co.', required: true },
      { id: 'carrierAddress', label: 'Dirección del Transportista', type: 'text', placeholder: '123 Logistics Way', required: true },
      { id: 'date', label: 'Fecha', type: 'date', placeholder: '', required: true },
      { id: 'poNumber', label: 'P.O. NO.', type: 'text', placeholder: 'PO-1001', required: false },
      { id: 'trackingNumber', label: 'Nº de Seguimiento', type: 'text', placeholder: 'TRK-998877', required: true },

      // Shipper
      { id: 'shipperName', label: 'EXPEDIDOR: Nombre', type: 'text', placeholder: 'Exportadora Peruana S.A.C.', required: true },
      { id: 'shipperAddress', label: 'EXPEDIDOR: Dirección', type: 'text', placeholder: 'Av. Industrial 200', required: true },
      { id: 'shipperCityState', label: 'EXPEDIDOR: Ciudad/Estado/Zip', type: 'text', placeholder: 'Lima, 15001', required: true },
      { id: 'shipperPhone', label: 'EXPEDIDOR: Teléfono', type: 'text', placeholder: '511-555-0101', required: true },

      // Consignee
      { id: 'consigneeName', label: 'CONSIGNATARIO: Nombre', type: 'text', placeholder: 'Import US LLC', required: true },
      { id: 'consigneeAddress', label: 'CONSIGNATARIO: Dirección', type: 'text', placeholder: '456 Market St', required: true },
      { id: 'consigneeCityState', label: 'CONSIGNATARIO: Ciudad/Estado/Zip', type: 'text', placeholder: 'Miami, FL 33101', required: true },
      { id: 'consigneePhone', label: 'CONSIGNATARIO: Teléfono', type: 'text', placeholder: '305-555-0199', required: true },

      // Items (Row 1)
      { id: 'units1', label: 'Fila 1: Unidades', type: 'number', placeholder: '10', required: true },
      { id: 'desc1', label: 'Fila 1: Descripción / Embalaje', type: 'text', placeholder: 'Cajas de cartón con textiles', required: true },
      { id: 'weight1', label: 'Fila 1: Peso (kg)', type: 'number', placeholder: '150', required: true },

      // Items (Row 2)
      { id: 'units2', label: 'Fila 2: Unidades', type: 'number', placeholder: '', required: false },
      { id: 'desc2', label: 'Fila 2: Descripción / Embalaje', type: 'text', placeholder: '', required: false },
      { id: 'weight2', label: 'Fila 2: Peso (kg)', type: 'number', placeholder: '', required: false },

      // COD & Financials
      { id: 'codAmount', label: 'Monto C.O.D. ($)', type: 'number', placeholder: '0.00', required: false },
      { id: 'codFeePrepaid', label: 'Tarifa C.O.D. Pagada ($)', type: 'number', placeholder: '0.00', required: false },
      { id: 'freightCharges', label: 'Total Cargos ($)', type: 'number', placeholder: '0.00', required: false },
      
      // Signatures (Names)
      { id: 'shipperSignName', label: 'Nombre Impreso Expedidor', type: 'text', placeholder: '', required: false },
      { id: 'carrierSignName', label: 'Nombre Impreso Portador', type: 'text', placeholder: '', required: false },
    ]
  },
  {
    id: 'certificate-of-origin',
    name: 'Certificado de Origen (TLC Perú-EE.UU.)',
    description: '🇵🇪 **¿Qué es?**\nUn documento oficial que certifica la "nacionalidad" peruana de tu producto.\n\n📉 **¿Para qué sirve?**\nPermite acogerse a beneficios del TLC, reduciendo o eliminando los aranceles en destino.\n\n💰 **¿Por qué es importante?**\nHace que tu producto sea más competitivo y barato para el comprador. ¡Es ahorro puro!',
    definition: 'Formato oficial para certificar que las mercancías exportadas califican como originarias bajo las reglas del TLC Perú-EE.UU.',
    issuer: 'Exportador / Productor / Importador',
    fields: [
        // 1. Importer
        { id: 'importerNameAddress', label: '1. Importador (Nombre, Dirección, Tel, Email)', type: 'textarea', placeholder: 'Importer Name, Address, Phone, Email', required: true },
        // 2. Exporter
        { id: 'exporterNameAddress', label: '2. Exportador (Nombre, Dirección, Tel, Email)', type: 'textarea', placeholder: 'Exporter Name, Address, Phone, Email', required: true },
        // 3. Producer
        { id: 'producerNameAddress', label: '3. Productor (Nombre, Dirección, Tel, Email)', type: 'textarea', placeholder: 'Producer Name (or SAME AS EXPORTER)', required: true },
        // 4. Period
        { id: 'periodFrom', label: '4. Período Desde', type: 'date', placeholder: '', required: false },
        { id: 'periodTo', label: '4. Período Hasta', type: 'date', placeholder: '', required: false },
        
        // 5-9 Item Details
        { id: 'itemDescription', label: '5. Descripción de la Mercancía', type: 'textarea', placeholder: 'Textiles de lana de alpaca...', required: true },
        { id: 'tariffClassification', label: '6. Clasificación Arancelaria (HS)', type: 'text', placeholder: '5112.19.00', required: true },
        { id: 'preferenceCriterion', label: '7. Criterio Preferencial', type: 'text', placeholder: 'A, B, or C', required: true },
        { id: 'itemInvoiceNo', label: '8. Número de Factura', type: 'text', placeholder: 'INV-2025-001', required: false },
        { id: 'countryOfOrigin', label: '9. País de Origen', type: 'text', placeholder: 'PE', required: true },
        
        // 11. Remarks
        { id: 'remarks', label: '11. Observaciones', type: 'textarea', placeholder: '', required: false },

        // Signature
        { id: 'authEnterprise', label: 'Empresa (Certificador)', type: 'text', placeholder: 'Empresa Exportadora SAC', required: true },
        { id: 'authName', label: 'Nombre Autorizado', type: 'text', placeholder: 'Juan Pérez', required: true },
        { id: 'authTitle', label: 'Cargo / Título', type: 'text', placeholder: 'Gerente General', required: true },
        { id: 'authDate', label: 'Fecha de Firma', type: 'date', placeholder: '', required: true },
        { id: 'authPhone', label: 'Teléfono', type: 'text', placeholder: '+51 1 555 5555', required: true },
        { id: 'authFax', label: 'Fax', type: 'text', placeholder: '', required: false },
    ],
  },
];
