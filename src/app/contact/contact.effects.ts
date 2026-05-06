import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ContactActions } from './contact.actions';
import { map, switchMap, of, delay } from 'rxjs';

@Injectable()
export class ContactEffects {
  private actions$ = inject(Actions);

  submitForm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContactActions.submitForm),
      switchMap(() =>
        of(true).pipe(
          delay(1000),
          // TODO: replace with real HTTP call e.g. this.http.post('/api/contact', payload)
          map(() => ContactActions.submitFormSuccess()),
        ),
      ),
    ),
  );
}
