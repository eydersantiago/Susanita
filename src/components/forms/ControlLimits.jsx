import React from 'react';

export const ControlLimits = ({ formData, onChange }) => {
  return (
    <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
      <h3 className="font-medium text-purple-700 mb-3">Establecer Límites de Control</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Límite Inferior (%)
          </label>
          <input
            type="number"
            step="0.1"
            value={formData.limiteInferior}
            onChange={(e) => onChange({ ...formData, limiteInferior: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="30.0"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Límite Superior (%)
          </label>
          <input
            type="number"
            step="0.1"
            value={formData.limiteSuperior}
            onChange={(e) => onChange({ ...formData, limiteSuperior: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="35.0"
          />
        </div>
      </div>
    </div>
  );
};