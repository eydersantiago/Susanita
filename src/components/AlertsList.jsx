import React from 'react';
import { AlertMessage } from './AlertMessage';

export const AlertsList = ({ alertas }) => {
  if (alertas.length === 0) return null;

  return (
    <div className="mt-6 space-y-2">
      {alertas.map((alerta, index) => (
        <AlertMessage key={index} alerta={alerta} />
      ))}
    </div>
  );
};