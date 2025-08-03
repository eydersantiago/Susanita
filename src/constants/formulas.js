const calcularConcentracion = () => {
    const peso = parseFloat(formData.pesoMuestra);
    const volumen = parseFloat(formData.gastoTitulante);
    const normalidad = parseFloat(formData.normalidad);
    const factorNormalidad = parseFloat(formData.factorNormalidad);
    const quimicoSeleccionado = quimicos[formData.quimico];

    if (!quimicoSeleccionado) return null;

    // Usar la fórmula específica de cada químico
    // Fórmula general: % = (N × V × Factor) / W
    const concentracion = (normalidad * volumen * quimicoSeleccionado.factorFormula * factorNormalidad) / peso;
    
    return concentracion.toFixed(2);
  };
