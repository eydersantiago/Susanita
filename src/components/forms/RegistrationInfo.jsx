import React from 'react';
import { Activity } from 'lucide-react';
import { lineas } from '../../constants/providers';

export const RegistrationInfo = ({ formData, onChange }) => {
  return (
    <div className="mb-6 p-4 bg-purple-50 rounded-lg">
      <h3 className="font-medium text-purple-700 mb-3 flex items-center gap-2">
        <Activity size={18} />
        Información del Registro
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">
            Consecutivo
          </label>
          <input
            type="text"
            value={formData.consecutivo}
            onChange={(e) => onChange({ ...formData, consecutivo: e.target.value })}
            className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="285"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">
            Línea
          </label>
          <select
            value={formData.linea}
            onChange={(e) => onChange({ ...formData, linea: e.target.value })}
            className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            {lineas.map(linea => (
              <option key={linea} value={linea}>{linea}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">
            Remisión
          </label>
          <input
            type="text"
            value={formData.remision}
            onChange={(e) => onChange({ ...formData, remision: e.target.value })}
            className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="60166459"
          />
        </div>
      </div>
    </div>
  );
};