import React from 'react';

export const Probeta = ({ color, nivel }) => {
  return (
    <div className="relative w-32 h-56 mx-auto">
      {/* Probeta principal */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-200 rounded-b-2xl border-2 border-gray-400 shadow-inner">
        {/* Líquido con animación */}
        <div 
          className="absolute bottom-0 left-0 right-0 rounded-b-2xl transition-all duration-700 ease-in-out"
          style={{
            height: `${nivel}%`,
            background: `linear-gradient(to top, ${color}dd, ${color}99)`,
          }}
        >
          {/* Efecto de superficie del líquido */}
          <div 
            className="absolute top-0 left-0 right-0 h-2 bg-white opacity-30 rounded-full"
            style={{ filter: 'blur(2px)' }}
          />
        </div>
        
        {/* Marcas de medición */}
        {[10, 20, 30, 40, 50, 60, 70, 80, 90].map((mark) => (
          <div key={mark}>
            <div
              className="absolute left-0 w-4 border-t border-gray-500"
              style={{ bottom: `${mark}%` }}
            />
            <span 
              className="absolute text-xs text-gray-600 font-mono"
              style={{ bottom: `${mark - 1}%`, left: '-25px' }}
            >
              {mark === 50 ? '25' : mark === 90 ? '45' : ''}
            </span>
          </div>
        ))}
        
        {/* Etiqueta mL */}
        <span className="absolute -right-8 top-1/2 transform -translate-y-1/2 text-xs text-gray-600 font-semibold">
          mL
        </span>
      </div>
      
      {/* Cuello de la probeta */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-8 bg-gradient-to-t from-gray-200 to-gray-100 rounded-t-xl border-2 border-gray-400 border-b-0" />
      
      {/* Reflejo de luz */}
      <div className="absolute left-2 top-8 bottom-8 w-3 bg-white opacity-40 rounded-full" 
           style={{ filter: 'blur(3px)' }} />
    </div>
  );
};