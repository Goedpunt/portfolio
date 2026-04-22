import { Component, signal, effect } from '@angular/core';
import { Header } from './header/header';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Footer } from './footer/footer';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, About, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  avatarUrl = './images/mf-avatar.svg';
  devicesUrl = './images/hero-devices.svg';
  footerLogoUrl = './images/matt2.svg';
  socialLinks = [
    { icon: './images/twitter.svg', href: '#', label: 'Twitter' },
    { icon: './images/basket.svg', href: '#', label: 'Dribbble' },
    { icon: './images/linkedin.svg', href: '#', label: 'LinkedIn' },
    { icon: './images/ih.svg', href: '#', label: 'Indie Hackers' },
    { icon: './images/pinterest.svg', href: '#', label: 'Pinterest' },
    { icon: './images/mail.svg', href: '#', label: 'Email' },
  ];

  isDark = signal(this.getInitialTheme());
  currentLang = signal(localStorage.getItem('lang') || 'en');

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'nl']);
    translate.setDefaultLang('en');
    translate.use(this.currentLang());

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
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }
}
