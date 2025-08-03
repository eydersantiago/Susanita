import React from 'react';

export const MeasurementInputs = ({ formData, onChange }) => {
  return (
    <>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Peso de la Muestra (g) *
        </label>
        <input
          type="number"
          step="0.0001"
          value={formData.pesoMuestra}
          onChange={(e) => onChange({ ...formData, pesoMuestra: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          placeholder="0.4871"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Volumen Gastado (mL) *
        </label>
        <input
          type="number"
          step="0.01"
          value={formData.gastoTitulante}
          onChange={(e) => onChange({ ...formData, gastoTitulante: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          placeholder="4.35"
        />
      </div>
    </>
  );
};