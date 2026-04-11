import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { definePreset } from '@primeuix/themes';

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#f5f0ff',
      100: '#ede0ff',
      200: '#d8bfff',
      300: '#bf94ff',
      400: '#a855f7',
      500: '#9333ea',
      600: '#7e22ce',
      700: '#6b21a8',
      800: '#581c87',
      900: '#3b0764',
      950: '#2e0550',
    },
    colorScheme: {
      light: {
        surface: {
          0: '#ffffff',
          50: '#f5f0ff',
          100: '#ede0ff',
          200: '#d8bfff',
          300: '#bf94ff',
          400: '#a855f7',
          500: '#9333ea',
          600: '#7e22ce',
          700: '#6b21a8',
          800: '#581c87',
          900: '#3b0764',
          950: '#2e0550',
        },
        text: {
          color: '#1a0033',
          mutedColor: '#6b21a8',
        },
      },
      dark: {
        surface: {
          0: '#1a0033',
          50: '#2e0550',
          100: '#3b0764',
          200: '#4a0080',
          300: '#581c87',
          400: '#6b21a8',
          500: '#7e22ce',
          600: '#9333ea',
          700: '#a855f7',
          800: '#bf94ff',
          900: '#ede0ff',
          950: '#f5f0ff',
        },
        text: {
          color: '#f5f0ff',
          mutedColor: '#d8bfff',
        },
      },
    },
  },
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: MyPreset,
        options: { darkModeSelector: '.dark-mode' },
      },
    }),
  ],
};
