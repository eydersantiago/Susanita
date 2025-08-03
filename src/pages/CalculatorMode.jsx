import React, { useState, useEffect } from 'react';
import { Calculator } from 'lucide-react';

// Layout
import { MainLayout } from '../layout/MainLayout';
import { Header } from '../layout/Header';

// Components
import { Tour } from '../components/Tour';
import { Probeta } from '../components/Probeta';
import { ConfirmationModal } from '../components/ConfirmationModal';
import { AlertsList } from '../components/AlertsList';
import { ResultDisplay } from '../components/ResultDisplay';
import { HistoryTable } from '../components/HistoryTable';

// Form Components
import { RegistrationInfo } from '../components/forms/RegistrationInfo';
import { ChemicalSelection } from '../components/forms/ChemicalSelection';
import { MeasurementInputs } from '../components/forms/MeasurementInputs';
import { TitrantInfo } from '../components/forms/TitrantInfo';
import { PhysicalProperties } from '../components/forms/PhysicalProperties';
import { ControlLimits } from '../components/forms/ControlLimits';

// Hooks
import { useTourStatus } from '../hooks/useTourStatus';
import { useValidation } from '../hooks/useValidations';
import { useCalculations } from '../hooks/useCalculations';
import { useLocalStorage } from '../hooks/useLocalStorage';

// Services
import { historyService } from '../services/historyService';

// Constants
import { CHEMICALS } from '../constants/chemicals';
import { VALIDATION_RULES } from '../constants/validationRules';

const CalculatorMode = () => {
  // Estado principal
  const [formData, setFormData] = useState({
    pesoMuestra: '',
    gastoTitulante: '',
    quimico: '',
    normalidad: VALIDATION_RULES.defaultNormality,
    factorNormalidad: '1.0',
    limiteInferior: '',
    limiteSuperior: '',
    loteTitulante: '',
    fechaEstandarizacion: new Date().toISOString().split('T')[0],
    pesoPicnometro: '',
    temperatura: VALIDATION_RULES.defaultTemperature,
    gravedadEspecifica: '',
    consecutivo: '',
    remision: '',
    verificador: '',
    linea: 'INDUSTRIAL'
  });

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [resultado, setResultado] = useState(null);
  const [normalidadEditable, setNormalidadEditable] = useState(false);
  const [historial, setHistorial] = useLocalStorage('historialS5ta', []);

  // Hooks personalizados
  const { showTour, setShowTour } = useTourStatus();
  const { alertas, setAlertas, validarDatos, validarRangos } = useValidation();
  const { calcularConcentracion, calcularGravedadEspecifica, verificarLimites } = useCalculations();

  // Manejar cálculo
  const handleCalcular = () => {
    if (validarDatos(formData)) {
      setShowConfirmation(true);
    }
  };

  // Confirmar cálculo
  const confirmarCalculo = () => {
    if (!validarRangos(formData)) {
      setShowConfirmation(false);
      return;
    }

    const concentracion = calcularConcentracion(formData);
    const gravedadEsp = calcularGravedadEspecifica(formData);
    const alertasLimites = verificarLimites(concentracion, formData);

    const resultadoCalculo = {
      concentracion,
      gravedadEspecifica: gravedadEsp,
      fecha: new Date().toISOString(),
      datos: { ...formData, gravedadEspecifica: gravedadEsp },
      alertas: [...alertas, ...alertasLimites]
    };

    setResultado(resultadoCalculo);
    setAlertas([...alertas, ...alertasLimites]);
    
    // Guardar en historial
    const nuevoHistorial = historyService.saveToHistory(resultadoCalculo, historial);
    setHistorial(nuevoHistorial);
    
    setShowConfirmation(false);
  };

  return (
    <MainLayout>
      <Tour showTour={showTour} setShowTour={setShowTour} />
      <Header />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Panel de entrada */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-purple-700">
            <Calculator className="text-purple-600" />
            Datos de Entrada
          </h2>

          <RegistrationInfo formData={formData} onChange={setFormData} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ChemicalSelection formData={formData} onChange={setFormData} />
            <MeasurementInputs formData={formData} onChange={setFormData} />
            <TitrantInfo 
              formData={formData} 
              onChange={setFormData}
              normalidadEditable={normalidadEditable}
              setNormalidadEditable={setNormalidadEditable}
            />
            <PhysicalProperties formData={formData} onChange={setFormData} />
          </div>

          <ControlLimits formData={formData} onChange={setFormData} />

          <button
            onClick={handleCalcular}
            className="mt-6 w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 font-medium shadow-lg transform hover:scale-[1.02]"
          >
            Calcular Concentración
          </button>
        </div>

        {/* Panel de visualización */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-purple-700">Visualización</h2>
          
          {formData.quimico && (
            <div className="text-center">
              <Probeta 
                color={CHEMICALS[formData.quimico].color}
                nivel={formData.gastoTitulante ? Math.min((parseFloat(formData.gastoTitulante) / 25) * 100, 100) : 0}
              />
              <p className="mt-4 text-sm text-gray-600 font-medium">
                {CHEMICALS[formData.quimico].nombreComercial}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Bureta de 25 mL
              </p>
            </div>
          )}

          <AlertsList alertas={alertas} />
          <ResultDisplay resultado={resultado} />
        </div>
      </div>

      <HistoryTable historial={historial} />

      <ConfirmationModal 
        show={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        onConfirm={confirmarCalculo}
        formData={formData}
      />
    </MainLayout>
  );
};

export default CalculatorMode;