import { createFeature, createReducer, on } from '@ngrx/store';
import { ContactActions } from './contact.actions';

export interface ContactState {
  submitting: boolean;
  success: boolean;
  error: string | null;
}

const initialState: ContactState = {
  submitting: false,
  success: false,
  error: null,
};

export const contactFeature = createFeature({
  name: 'contact',
  reducer: createReducer(
    initialState,
    on(ContactActions.submitForm, (state) => ({
      ...state,
      submitting: true,
      success: false,
      error: null,
    })),
    on(ContactActions.submitFormSuccess, (state) => ({
      ...state,
      submitting: false,
      success: true,
      error: null,
    })),
    on(ContactActions.submitFormFailure, (state, { error }) => ({
      ...state,
      submitting: false,
      success: false,
      error,
    })),
    on(ContactActions.resetForm, () => initialState),
  ),
});

export const { selectSubmitting, selectSuccess, selectError, selectContactState } = contactFeature;
