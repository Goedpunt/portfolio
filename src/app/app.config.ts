import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { definePreset } from '@primeuix/themes';
import { provideHttpClient } from '@angular/common/http';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideStore, provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { contactFeature } from './contact/contact.reducer';
import { ContactEffects } from './contact/contact.effects';

const MyPreset = definePreset(Aura, {
  semantic: {
    colorScheme: {
      light: {
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
      },
      dark: {
        primary: {
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
      },
    },
  },
  components: {
    card: {
      colorScheme: {
        light: {
          root: {
            background: '{primary.600}',
            color: '{primary.50}',
          },
        },
        dark: {
          root: {
            background: '{primary.500}',
            color: '#ffffff',
          },
        },
      },
    },
    button: {
      colorScheme: {
        light: {
          outlined: {
            primary: {
              borderColor: '{primary.600}',
              color: '{primary.600}',
              hoverBackground: '{primary.600}',
              hoverColor: '#ffffff',
            },
          },
        },
        dark: {
          outlined: {
            primary: {
              borderColor: '{primary.200}',
              color: '{primary.200}',
              hoverBackground: '{primary.200}',
              hoverColor: '#1a0033',
            },
          },
        },
      },
    },
    select: {
      colorScheme: {
        light: {
          root: {
            background: '#ffffff',
            borderColor: '{primary.600}',
            color: '{primary.600}',
          },
          overlay: {
            background: '#ffffff',
            borderColor: '{primary.600}',
          },
          option: {
            focusBackground: '{primary.100}',
            selectedBackground: '{primary.600}',
            selectedColor: '#ffffff',
            color: '{primary.600}',
          },
        },
        dark: {
          root: {
            background: '#1a0033',
            borderColor: '{primary.200}',
            color: '{primary.200}',
          },
          overlay: {
            background: '#1a0033',
            borderColor: '{primary.200}',
          },
          option: {
            focusBackground: '{primary.400}',
            selectedBackground: '{primary.200}',
            selectedColor: '#1a0033',
            color: '{primary.200}',
          },
        },
      },
    },
  },
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: MyPreset,
        options: { darkModeSelector: '.dark-mode' },
      },
    }),
    provideTranslateService({
      fallbackLang: 'en',
    }),
    ...provideTranslateHttpLoader(),
    provideStore(),
    provideState(contactFeature),
    provideEffects([ContactEffects]),
    provideStoreDevtools({ maxAge: 25 }),
  ],
};
