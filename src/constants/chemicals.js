export const CHEMICALS = {
    'HCl': {
      nombre: 'Ácido Clorhídrico',
      nombreComercial: 'ACIDO CLORHIDRICO',
      pesoMolecular: 36.46,
      factor: 0.03646, // Para HCl: 36.46/1000
      factorFormula: 3.65, // Factor que aparece en la fórmula
      color: '#FF6347',
      rangoVolumenNormal: { min: 3, max: 6 },
      rangoPesoNormal: { min: 0.45, max: 0.55 },
      formula: '% HCl = (N × V × 3.65) / W'
    },
    'NaOH': {
      nombre: 'Soda Cáustica 50% - Membrana',
      nombreComercial: 'SODA CAUSTICA 50% - MEMBRANA',
      pesoMolecular: 40.0,
      factor: 0.040,
      factorFormula: 4.0,
      color: '#4169E1',
      rangoVolumenNormal: { min: 5, max: 30 },
      rangoPesoNormal: { min: 0.45, max: 0.55 },
      formula: '% NaOH = (N × V × 4.0) / W'
    },
    'HNO3': {
      nombre: 'Ácido Nítrico Monomeros',
      nombreComercial: 'ACIDO NITRICO MONOMEROS',
      pesoMolecular: 63.01,
      factor: 0.06301,
      factorFormula: 6.301,
      color: '#FF8C00',
      rangoVolumenNormal: { min: 5, max: 25 },
      rangoPesoNormal: { min: 0.4, max: 0.6 },
      formula: '% HNO3 = (N × V × 6.301) / W'
    },
    'C2H6O': {
      nombre: 'Alcohol Etílico Normal Desnaturalizado',
      nombreComercial: 'ALCOHOL ETILICO NORMAL DESNATURALIZADO',
      pesoMolecular: 46.07,
      factor: 0.04607,
      factorFormula: 4.607,
      color: '#87CEEB',
      rangoVolumenNormal: { min: 10, max: 40 },
      rangoPesoNormal: { min: 0.8, max: 1.2 },
      formula: '% C2H6O = (N × V × 4.607) / W'
    },
    'CH3COCH3': {
      nombre: 'Disolvente 1A',
      nombreComercial: 'DISOLVENTE 1A',
      pesoMolecular: 58.08,
      factor: 0.05808,
      factorFormula: 5.808,
      color: '#DDA0DD',
      rangoVolumenNormal: { min: 8, max: 35 },
      rangoPesoNormal: { min: 0.5, max: 0.8 },
      formula: '% Disolvente = (N × V × 5.808) / W'
    },
    'C2C2': {
      nombre: 'Xileno',
      nombreComercial: 'XILENO',
      pesoMolecular: 106.17,
      factor: 0.10617,
      factorFormula: 10.617,
      color: '#FFA500',
      rangoVolumenNormal: { min: 10, max: 30 },
      rangoPesoNormal: { min: 0.7, max: 1.0 },
      formula: '% Xileno = (N × V × 10.617) / W'
    },
    'NaClO': {
      nombre: 'Hipoclorito de Sodio (CC)',
      nombreComercial: 'HIPOCLORITO DE SODIO (CC)',
      pesoMolecular: 74.44,
      factor: 0.07444,
      factorFormula: 7.444,
      color: '#00CED1',
      rangoVolumenNormal: { min: 15, max: 40 },
      rangoPesoNormal: { min: 0.5, max: 1.0 },
      formula: '% NaClO = (N × V × 7.444) / W'
    },
    'H2O2': {
      nombre: 'Peróxido de Hidrógeno',
      nombreComercial: 'PEROXIDO DE HIDROGENO',
      pesoMolecular: 34.01,
      factor: 0.03401,
      factorFormula: 3.401,
      color: '#E0FFFF',
      rangoVolumenNormal: { min: 10, max: 30 },
      rangoPesoNormal: { min: 0.5, max: 1.0 },
      formula: '% H2O2 = (N × V × 3.401) / W'
    },
    'C4H8O2': {
      nombre: 'Acetato de Etilo',
      nombreComercial: 'ACETATO DE ETILO',
      pesoMolecular: 88.11,
      factor: 0.08811,
      factorFormula: 8.811,
      color: '#98FB98',
      rangoVolumenNormal: { min: 8, max: 25 },
      rangoPesoNormal: { min: 0.6, max: 0.9 },
      formula: '% C4H8O2 = (N × V × 8.811) / W'
    }
  };