import React from 'react';
import { CHEMICALS } from '../../constants/chemicals';

export const ChemicalSelection = ({ formData, onChange }) => {
  return (
    <div className="md:col-span-2">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Producto / Químico Seleccionado *
      </label>
      <select
        value={formData.quimico}
        onChange={(e) => onChange({ ...formData, quimico: e.target.value })}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
      >
        <option value="">Seleccione un producto</option>
        {Object.entries(CHEMICALS).map(([key, value]) => (
          <option key={key} value={key}>{value.nombreComercial}</option>
        ))}
      </select>
      {formData.quimico && (
        <p className="mt-1 text-xs text-purple-600">
          Fórmula: {CHEMICALS[formData.quimico].formula}
        </p>
      )}
    </div>
  );
};
