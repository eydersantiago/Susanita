import React, { useState } from 'react';
import CalculatorMode from './CalculatorMode';
import { Tour } from '../components/Tour';

function App() {
  // 1) Creamos el estado que indica si el Tour está activo
  const [showTour, setShowTour] = useState(true);

  return (
    <>
      {/* 2) Pasamos showTour y setShowTour al Tour */}
      <Tour showTour={showTour} setShowTour={setShowTour} />

      {/* 3) Sólo cuando showTour sea false renderizamos CalculatorMode */}
      {!showTour && <CalculatorMode />}
    </>
  );
}

export default App;
