import { Component, inject, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { MessageModule } from 'primeng/message';
import { RouterModule } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { ContactActions } from './contact.actions';
import { selectSubmitting, selectSuccess, selectError } from './contact.reducer';
import { Header } from '../header/header';
import { LanguageService } from '../language.service';
import { signal, effect } from '@angular/core';
import { CardModule } from 'primeng/card';
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
    Header,
    CardModule,
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements OnDestroy {
  private store = inject(Store);
  private languageService = inject(LanguageService);

  submitting$ = this.store.select(selectSubmitting);
  success$ = this.store.select(selectSuccess);
  error$ = this.store.select(selectError);

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
    if (this.name.trim() && this.email.trim() && this.message.trim()) {
      this.store.dispatch(
        ContactActions.submitForm({
          name: this.name.trim(),
          email: this.email.trim(),
          message: this.message.trim(),
        }),
      );
    }
  }

  ngOnDestroy() {
    this.store.dispatch(ContactActions.resetForm());
  }
}
