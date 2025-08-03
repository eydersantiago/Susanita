import { useState } from 'react';
import { validateRanges, validateRequiredFields } from '../utils/validators';
import { CHEMICALS } from '../constants/chemicals';

export const useValidation = () => {
  const [alertas, setAlertas] = useState([]);

  const validarDatos = (formData) => {
    const errores = validateRequiredFields(formData);
    if (errores.length > 0) {
      setAlertas(errores);
      return false;
    }
    return true;
  };

  const validarRangos = (formData) => {
    const chemical = CHEMICALS[formData.quimico];
    const nuevasAlertas = validateRanges(formData, chemical);
    setAlertas(nuevasAlertas);
    return nuevasAlertas.filter(a => a.tipo === 'error').length === 0;
  };

  return { alertas, setAlertas, validarDatos, validarRangos };
};