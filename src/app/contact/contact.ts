import { Component, inject, OnDestroy, signal, effect } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { MessageModule } from 'primeng/message';
import { RouterModule } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ContactActions } from './contact.actions';
import { selectIsSubmitting, selectIsSuccess, selectContactError } from './contact.selectors';
import { Header } from '../header/header';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-contact',
  imports: [
    FormsModule,
    TranslateModule,
    ButtonModule,
    InputTextModule,
    TextareaModule,
    MessageModule,
    RouterModule,
    AsyncPipe,
    CardModule,
    Header,
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements OnDestroy {
  private store = inject(Store);
  private languageService = inject(LanguageService);

  submitting$ = this.store.select(selectIsSubmitting);
  success$ = this.store.select(selectIsSuccess);
  error$ = this.store.select(selectContactError);

  isDark = signal(this.getInitialTheme());
  currentLang = signal(this.languageService.getCurrentLang());

  name = '';
  email = '';
  message = '';

  constructor() {
    effect(() => {
      const dark = this.isDark();
      document.documentElement.classList.toggle('dark-mode', dark);
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    });
  }

  private getInitialTheme(): boolean {
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  toggleTheme() {
    this.isDark.update((v) => !v);
  }

  switchLang(lang: string) {
    this.currentLang.set(lang);
    this.languageService.setLanguage(lang);
  }

  onSubmit() {
    if (this.name && this.email && this.message) {
      this.store.dispatch(
        ContactActions.submitForm({
          name: this.name,
          email: this.email,
          message: this.message,
        }),
      );
    }
  }

  ngOnDestroy() {
    this.store.dispatch(ContactActions.resetForm());
  }
}
