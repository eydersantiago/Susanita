import React from 'react';
import { CheckCircle } from 'lucide-react';

export const ResultDisplay = ({ resultado }) => {
  if (!resultado) return null;

  const cumple = resultado.alertas.filter(a => a.tipo === 'error').length === 0;

  return (
    <div className="mt-6">
      <div className="p-4 bg-green-50 rounded-lg border border-green-200">
        <h3 className="font-semibold text-green-800 flex items-center gap-2 mb-3">
          <CheckCircle size={20} />
          Resultado del Análisis
        </h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-green-700">Concentración:</span>
            <span className="text-2xl font-bold text-green-900">{resultado.concentracion}%</span>
          </div>
          {resultado.gravedadEspecifica && (
            <div className="flex justify-between items-center pt-2 border-t border-green-200">
              <span className="text-sm text-green-700">Gravedad Específica:</span>
              <span className="text-lg font-semibold text-green-900">{resultado.gravedadEspecifica}</span>
            </div>
          )}
        </div>
      </div>

      {/* Estado de cumplimiento */}
      <div className="mt-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-purple-700">Estado:</span>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            cumple ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {cumple ? 'CUMPLE' : 'NO CUMPLE'}
          </span>
        </div>
      </div>
    </div>
  );
};
