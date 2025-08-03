import { calculateConcentration, calculateSpecificGravity } from '../utils/calculations';
import { checkLimits } from '../utils/validators';
import { CHEMICALS } from '../constants/chemicals';

export const useCalculations = () => {
  const calcularConcentracion = (formData) => {
    const chemical = CHEMICALS[formData.quimico];
    if (!chemical) return null;

    return calculateConcentration(
      parseFloat(formData.pesoMuestra),
      parseFloat(formData.gastoTitulante),
      parseFloat(formData.normalidad),
      chemical.factorFormula,
      parseFloat(formData.factorNormalidad)
    );
  };

  const calcularGravedadEspecifica = (formData) => {
    return calculateSpecificGravity(
      parseFloat(formData.pesoPicnometro),
      parseFloat(formData.temperatura)
    );
  };

  const verificarLimites = (concentracion, formData) => {
    return checkLimits(
      parseFloat(concentracion),
      formData.limiteInferior,
      formData.limiteSuperior
    );
  };

  return { calcularConcentracion, calcularGravedadEspecifica, verificarLimites };
};