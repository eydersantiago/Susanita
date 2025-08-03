import React from 'react';
import { Beaker } from 'lucide-react';
import { formatDate } from '../utils/formatters';
import { CHEMICALS } from '../constants/chemicals';

export const HistoryTable = ({ historial }) => {
  if (historial.length === 0) return null;

  return (
    <div className="mt-6 bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4 text-purple-700 flex items-center gap-2">
        <Beaker className="text-purple-600" />
        Historial de Análisis
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-purple-200 bg-purple-50">
              <th className="text-left py-3 px-4 font-semibold text-purple-700">Fecha/Hora</th>
              <th className="text-left py-3 px-4 font-semibold text-purple-700">Consecutivo</th>
              <th className="text-left py-3 px-4 font-semibold text-purple-700">Producto</th>
              <th className="text-left py-3 px-4 font-semibold text-purple-700">Peso (g)</th>
              <th className="text-left py-3 px-4 font-semibold text-purple-700">Volumen (mL)</th>
              <th className="text-left py-3 px-4 font-semibold text-purple-700">Concentración</th>
              <th className="text-left py-3 px-4 font-semibold text-purple-700">Gravedad Esp.</th>
              <th className="text-left py-3 px-4 font-semibold text-purple-700">Estado</th>
            </tr>
          </thead>
          <tbody>
            {historial.slice(0, 10).map((item, index) => (
              <tr key={index} className="border-b hover:bg-purple-50 transition-colors">
                <td className="py-3 px-4">{formatDate(item.fecha)}</td>
                <td className="py-3 px-4">{item.datos.consecutivo || '-'}</td>
                <td className="py-3 px-4 text-xs">
                  {CHEMICALS[item.datos.quimico]?.nombreComercial || item.datos.quimico}
                </td>
                <td className="py-3 px-4">{item.datos.pesoMuestra}</td>
                <td className="py-3 px-4">{item.datos.gastoTitulante}</td>
                <td className="py-3 px-4 font-semibold">{item.concentracion}%</td>
                <td className="py-3 px-4">{item.gravedadEspecifica || '-'}</td>
                <td className="py-3 px-4">
                  {item.alertas.filter(a => a.tipo === 'error').length > 0 ? (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      NO CUMPLE
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      CUMPLE
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};