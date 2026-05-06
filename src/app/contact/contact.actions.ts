import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const ContactActions = createActionGroup({
  source: 'Contact',
  events: {
    'Submit Form': props<{ name: string; email: string; message: string }>(),
    'Submit Form Success': emptyProps(),
    'Submit Form Failure': props<{ error: string }>(),
    'Reset Form': emptyProps(),
  },
});
