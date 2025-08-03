import React from 'react';
import { AlertCircle } from 'lucide-react';

export const AlertMessage = ({ alerta }) => {
  const bgColor = alerta.tipo === 'error' 
    ? 'bg-red-50 text-red-700 border-red-200' 
    : 'bg-yellow-50 text-yellow-700 border-yellow-200';

  return (
    <div className={`p-3 rounded-lg flex items-start gap-2 border ${bgColor}`}>
      <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />
      <span className="text-sm">{alerta.mensaje}</span>
    </div>
  );
};