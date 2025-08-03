import React from 'react';

export const PhysicalProperties = ({ formData, onChange }) => {
  return (
    <>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Peso Picnómetro (g)
        </label>
        <input
          type="number"
          step="0.01"
          value={formData.pesoPicnometro}
          onChange={(e) => onChange({ ...formData, pesoPicnometro: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          placeholder="50.0"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Temperatura (°C)
        </label>
        <input
          type="number"
          step="0.1"
          value={formData.temperatura}
          onChange={(e) => onChange({ ...formData, temperatura: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Verificador
        </label>
        <input
          type="text"
          value={formData.verificador}
          onChange={(e) => onChange({ ...formData, verificador: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          placeholder="Yesica Rincon"
        />
      </div>
    </>
  );
};