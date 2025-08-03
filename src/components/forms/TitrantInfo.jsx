import React from 'react';

export const TitrantInfo = ({ formData, onChange, normalidadEditable, setNormalidadEditable }) => {
  return (
    <>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Normalidad (N)
          <button
            onClick={() => setNormalidadEditable(!normalidadEditable)}
            className="ml-2 text-purple-500 hover:text-purple-700 text-xs"
          >
            {normalidadEditable ? 'Bloquear' : 'Editar'}
          </button>
        </label>
        <input
          type="number"
          step="0.01"
          value={formData.normalidad}
          onChange={(e) => onChange({ ...formData, normalidad: e.target.value })}
          disabled={!normalidadEditable}
          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
            normalidadEditable ? 'border-gray-300' : 'border-gray-200 bg-gray-50'
          }`}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Lote/Calibración del Titulante
        </label>
        <input
          type="text"
          value={formData.loteTitulante}
          onChange={(e) => onChange({ ...formData, loteTitulante: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          placeholder="1D680725"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Fecha de Estandarización
        </label>
        <input
          type="date"
          value={formData.fechaEstandarizacion}
          onChange={(e) => onChange({ ...formData, fechaEstandarizacion: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
      </div>
    </>
  );
};