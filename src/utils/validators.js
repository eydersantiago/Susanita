import { VALIDATION_RULES } from '../constants/validationRules';

export const validateRanges = (formData, chemical) => {
  const alertas = [];
  const peso = parseFloat(formData.pesoMuestra);
  const volumen = parseFloat(formData.gastoTitulante);

  if (!chemical) return alertas;

  // Validar peso
  if (peso < chemical.rangoPesoNormal.min || peso > chemical.rangoPesoNormal.max) {
    alertas.push({
      tipo: 'warning',
      mensaje: `Peso fuera del rango normal (${chemical.rangoPesoNormal.min}-${chemical.rangoPesoNormal.max} g)`
    });
  }

  // Validar volumen
  if (volumen < chemical.rangoVolumenNormal.min || volumen > chemical.rangoVolumenNormal.max) {
    alertas.push({
      tipo: 'warning',
      mensaje: `Volumen fuera del rango normal (${chemical.rangoVolumenNormal.min}-${chemical.rangoVolumenNormal.max} mL)`
    });
  }

  // Validar volumen extremo
  if (volumen <= VALIDATION_RULES.extremeVolume.min || volumen >= VALIDATION_RULES.extremeVolume.max) {
    alertas.push({
      tipo: 'error',
      mensaje: '¡ALERTA! Volumen extremadamente fuera de rango'
    });
  }

  return alertas;
};

export const validateRequiredFields = (formData) => {
  if (!formData.pesoMuestra || !formData.gastoTitulante || !formData.quimico) {
    return [{
      tipo: 'error',
      mensaje: 'Por favor complete todos los campos requeridos'
    }];
  }
  return [];
};

export const checkLimits = (concentracion, limiteInferior, limiteSuperior) => {
  const alertas = [];
  const limiteInf = parseFloat(limiteInferior);
  const limiteSup = parseFloat(limiteSuperior);

  if (limiteInf && concentracion < limiteInf) {
    alertas.push({
      tipo: 'error',
      mensaje: `Concentración por debajo del límite inferior (${limiteInf}%)`
    });
  }

  if (limiteSup && concentracion > limiteSup) {
    alertas.push({
      tipo: 'error',
      mensaje: `Concentración por encima del límite superior (${limiteSup}%)`
    });
  }

  return alertas;
};
