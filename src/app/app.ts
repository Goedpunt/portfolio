import { Component, signal, effect } from '@angular/core';
import { Header } from './header/header';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, About, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class AppComponent {
  avatarUrl = 'https://mattfarley.ca/img/mf-avatar.svg';
  devicesUrl = 'https://mattfarley.ca/img/hero-devices.svg';
  footerLogoUrl = './images/matt2.svg';
  socialLinks = [
    { icon: './images/twitter.svg', href: '#' },
    { icon: './images/basket.svg', href: '#' },
    { icon: './images/linkedin.svg', href: '#' },
    { icon: './images/ih.svg', href: '#' },
    { icon: './images/pinterest.svg', href: '#' },
    { icon: './images/mail.svg', href: '#' },
  ];

  isDark = signal(this.getInitialTheme());

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
}
