import React from 'react';
import { Info, Calculator } from 'lucide-react';

export const Tour = ({ showTour, setShowTour }) => {
  if (!showTour) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl p-6 max-w-2xl w-full space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Info className="text-blue-500" />
          Bienvenido al Sistema
        </h2>

        {/* TARJETA CLICABLE */}
        <div
          onClick={() => setShowTour(false)}
          className="cursor-pointer p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition"
        >
          <h3 className="font-semibold flex items-center gap-2 mb-2">
            <Calculator size={20} />
            Modo Calculadora
          </h3>
          <p className="text-sm">Ingrese manualmente los datos de su titulación para calcular la concentración.</p>
        </div>

        <div className="p-4 bg-gray-100 rounded-lg opacity-50">
          <h3 className="font-semibold mb-2">📷 Modo Screenshot (Próximamente)</h3>
          <p className="text-sm">Cargue una captura de pantalla y el sistema extraerá los datos automáticamente.</p>
        </div>

        <div className="p-4 bg-gray-100 rounded-lg opacity-50">
          <h3 className="font-semibold mb-2">📋 Modo Copy-Paste (Próximamente)</h3>
          <p className="text-sm">Copie y pegue datos desde Excel directamente.</p>
        </div>

        <button
          onClick={() => setShowTour(false)}
          className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Saltar Tour
        </button>
      </div>
    </div>
  );
};
