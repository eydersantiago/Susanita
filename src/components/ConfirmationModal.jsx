import React from 'react';
import { CHEMICALS } from '../constants/chemicals';

export const ConfirmationModal = ({ show, onClose, onConfirm, formData }) => {
  if (!show) return null;

  const chemical = CHEMICALS[formData.quimico];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-2xl">
        <h3 className="text-xl font-semibold mb-4 text-purple-700">Confirmar Datos de Entrada</h3>
        <div className="space-y-2 text-sm bg-purple-50 p-4 rounded-lg">
          <p><strong>Producto:</strong> {chemical?.nombreComercial}</p>
          <p><strong>Peso de muestra:</strong> {formData.pesoMuestra} g</p>
          <p><strong>Volumen gastado:</strong> {formData.gastoTitulante} mL</p>
          <p><strong>Normalidad:</strong> {formData.normalidad} N</p>
          {formData.loteTitulante && (
            <p><strong>Lote:</strong> {formData.loteTitulante}</p>
          )}
          {formData.consecutivo && (
            <p><strong>Consecutivo:</strong> {formData.consecutivo}</p>
          )}
          {formData.verificador && (
            <p><strong>Verificador:</strong> {formData.verificador}</p>
          )}
        </div>
        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
          <p className="text-xs text-blue-700">
            <strong>Fórmula aplicada:</strong> {chemical?.formula}
          </p>
        </div>
        <div className="flex gap-3 mt-6">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-colors"
          >
            Confirmar y Calcular
          </button>
        </div>
      </div>
    </div>
  );
};