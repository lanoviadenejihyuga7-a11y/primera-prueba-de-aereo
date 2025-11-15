
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-catalina-blue mt-12">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center text-sm text-polo-blue">
          <p>&copy; {new Date().getFullYear()} AeroExport Perú. Todos los derechos reservados.</p>
          <p className="mt-1">Simplificando la exportación aérea desde el corazón de Sudamérica.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
