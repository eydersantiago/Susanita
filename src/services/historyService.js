import { VALIDATION_RULES } from '../constants/validationRules';

export const historyService = {
  getHistory: () => {
    try {
      const historial = localStorage.getItem('historialS5ta');
      return historial ? JSON.parse(historial) : [];
    } catch (error) {
      console.error('Error loading history:', error);
      return [];
    }
  },

  saveToHistory: (resultado, currentHistory) => {
    try {
      const nuevoHistorial = [resultado, ...currentHistory]
        .slice(0, VALIDATION_RULES.maxHistoryItems);
      localStorage.setItem('historialS5ta', JSON.stringify(nuevoHistorial));
      return nuevoHistorial;
    } catch (error) {
      console.error('Error saving history:', error);
      return currentHistory;
    }
  },

  clearHistory: () => {
    try {
      localStorage.removeItem('historialS5ta');
      return [];
    } catch (error) {
      console.error('Error clearing history:', error);
      return null;
    }
  }
};
