export const calculateConcentration = (peso, volumen, normalidad, factorFormula, factorNormalidad = 1) => {
  if (!peso || !volumen || !normalidad || !factorFormula) return null;
  const concentracion = (normalidad * volumen * factorFormula * factorNormalidad) / peso;
  return concentracion.toFixed(2);
};

export const calculateSpecificGravity = (pesoPicnometro, temperatura) => {
  if (!pesoPicnometro || !temperatura) return '';
  // Fórmula simplificada para ejemplo
  const gravedad = 1.1664 - (0.0001 * (temperatura - 20));
  return gravedad.toFixed(4);
};
