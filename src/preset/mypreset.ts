import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const MyAuraLight = definePreset(Aura, {
  semantic: {
    colorScheme: {
      light: {
        semantic: {
          // Cambios generales
          highlight: { background: '{primary.50}', color: '{primary.700}' },
          background: '{surface.50}',
          text: '{neutral.900}'
        },
        datepicker: {
          date: {
            selectedBackground: '{primary.500}',
            selectedColor: '#ffffff',
            rangeSelectedBackground: '{primary.100}',
            rangeSelectedColor: '{neutral.900}',
            todayBackground: '{primary.50}',
            todayColor: '{primary.700}'
          }
        }
      },
      dark: {
        // Mantener la definición original de Aura para modo oscuro
      }
    }
  }
});

export default MyAuraLight;
