import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly STORAGE_KEY = 'lang';
  private readonly FALLBACK = 'en';

  constructor(
    private translate: TranslateService,
    private title: Title,
  ) {}

  init() {
    const saved = localStorage.getItem(this.STORAGE_KEY) ?? this.FALLBACK;
    this.apply(saved);
  }

  setLanguage(lang: string) {
    localStorage.setItem(this.STORAGE_KEY, lang);
    this.apply(lang);
  }

  getCurrentLang(): string {
    return localStorage.getItem(this.STORAGE_KEY) ?? this.FALLBACK;
  }

  private apply(lang: string) {
    this.translate.use(lang);
    document.documentElement.lang = lang;
    this.translate.get('APP.PAGE_TITLE').subscribe((t: string) => this.title.setTitle(t));
  }
}
