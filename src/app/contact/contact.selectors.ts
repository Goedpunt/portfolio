import { createSelector } from '@ngrx/store';
import { contactFeature } from './contact.reducer';

export const selectContactState = contactFeature.selectContactState;

export const selectIsSubmitting = createSelector(selectContactState, (state) => state.submitting);

export const selectIsSuccess = createSelector(selectContactState, (state) => state.success);

export const selectContactError = createSelector(selectContactState, (state) => state.error);
