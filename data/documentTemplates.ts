
import { DocumentTemplate } from '../types';

export const documentTemplates: DocumentTemplate[] = [
  {
    id: 'commercial-invoice',
    name: 'Factura Comercial',
    description: 'Documento clave que detalla la transacción entre el exportador y el importador.',
    definition: 'Es un documento legal emitido por el vendedor (exportador) al comprador (importador) que sirve como prueba de la venta entre ambos. Es fundamental para el despacho de aduanas.',
    issuer: 'Exportador',
    fields: [
      { id: 'exporterName', label: 'Nombre del Exportador', type: 'text', placeholder: 'Mi Empresa S.A.C.', required: true },
      { id: 'exporterAddress', label: 'Dirección del Exportador', type: 'textarea', placeholder: 'Av. Principal 123, Lima, Perú', required: true },
      { id: 'consigneeName', label: 'Nombre del Consignatario (Importador)', type: 'text', placeholder: 'Comprador Internacional Inc.', required: true },
      { id: 'consigneeAddress', label: 'Dirección del Consignatario', type: 'textarea', placeholder: '123 Main Street, New York, USA', required: true },
      { id: 'invoiceNumber', label: 'Número de Factura', type: 'text', placeholder: 'INV-2024-001', required: true },
      { id: 'invoiceDate', label: 'Fecha de Factura', type: 'date', placeholder: '', required: true },
      { id: 'awbNumber', label: 'Número de Air Waybill (AWB)', type: 'text', placeholder: '123-45678901', required: false },
      { id: 'itemDescription', label: 'Descripción del Producto', type: 'textarea', placeholder: 'Cajas de arándanos frescos', required: true },
      { id: 'itemQuantity', label: 'Cantidad', type: 'number', placeholder: '100', required: true },
      { id: 'itemPrice', label: 'Precio Unitario (USD)', type: 'number', placeholder: '15.50', required: true },
    ],
  },
  {
    id: 'packing-list',
    name: 'Packing List (Lista de Empaque)',
    description: 'Detalla el contenido, peso y dimensiones de cada bulto en el envío.',
    definition: 'Un documento que proporciona al exportador, al transportista internacional y al importador información sobre el envío, incluyendo cómo está embalado, las dimensiones y el peso de cada bulto.',
    issuer: 'Exportador',
    fields: [
        { id: 'exporterName', label: 'Nombre del Exportador', type: 'text', placeholder: 'Mi Empresa S.A.C.', required: true },
        { id: 'consigneeName', label: 'Nombre del Consignatario', type: 'text', placeholder: 'Comprador Internacional Inc.', required: true },
        { id: 'invoiceNumber', label: 'Referencia a Factura N°', type: 'text', placeholder: 'INV-2024-001', required: true },
        { id: 'packageNumber', label: 'N° de Bulto', type: 'number', placeholder: '1', required: true },
        { id: 'packageContent', label: 'Contenido del Bulto', type: 'textarea', placeholder: '10 cajas de arándanos frescos', required: true },
        { id: 'netWeight', label: 'Peso Neto (kg)', type: 'number', placeholder: '120', required: true },
        { id: 'grossWeight', label: 'Peso Bruto (kg)', type: 'number', placeholder: '135', required: true },
        { id: 'dimensions', label: 'Dimensiones (cm)', type: 'text', placeholder: '60x40x30', required: true },
    ],
  },
  {
    id: 'certificate-of-origin',
    name: 'Certificado de Origen',
    description: 'Acredita que los productos son originarios de Perú para acogerse a beneficios arancelarios.',
    definition: 'Documento que certifica el país donde la mercancía fue producida. Es requerido por muchas autoridades aduaneras como parte del proceso de despacho para determinar aranceles.',
    issuer: 'Cámara de Comercio o entidad autorizada',
    fields: [
        { id: 'exporterName', label: 'Nombre y Dirección del Exportador', type: 'textarea', placeholder: 'Mi Empresa S.A.C., Av. Principal 123, Lima, Perú', required: true },
        { id: 'importerName', label: 'Nombre y Dirección del Importador', type: 'textarea', placeholder: 'Comprador Internacional Inc., 123 Main Street, New York, USA', required: true },
        { id: 'countryOfOrigin', label: 'País de Origen', type: 'text', placeholder: 'REPÚBLICA DEL PERÚ', required: true },
        { id: 'transportDetails', label: 'Detalles del Transporte', type: 'text', placeholder: 'Aéreo, Vuelo LATAM LA2486', required: true },
        { id: 'itemDescription', label: 'Descripción Detallada de la Mercancía', type: 'textarea', placeholder: 'Arándanos (Vaccinium corymbosum), frescos. HS Code: 0810.40.00.00', required: true },
        { id: 'quantityAndWeight', label: 'Cantidad y Peso', type: 'text', placeholder: '100 cajas / 135 kg brutos', required: true },
    ],
  },
];
