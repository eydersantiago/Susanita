import React from 'react';
import { FlaskConical } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-white rounded-xl shadow-lg p-6 mb-6 bg-gradient-to-r from-purple-600 to-blue-600">
      <h1 className="text-3xl font-bold text-white flex items-center gap-3">
        <FlaskConical size={36} />
        Sistema SLT - Análisis por Titulación
      </h1>
      <p className="text-purple-100 mt-2">Modo Calculadora - Ingreso Manual de Datos</p>
    </header>
  );
};
