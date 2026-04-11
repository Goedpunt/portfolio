import { Component, signal } from '@angular/core';
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
  isDark = signal(false);

  avatarUrl = './images/mf-avatar.svg';
  devicesUrl = './images/hero-devices.svg';
  footerLogoUrl = './images/matt2.svg';
  socialLinks = [
    { icon: './images/twitter.svg', href: '#' },
    { icon: './images/basket.svg', href: '#' },
    { icon: './images/linkedin.svg', href: '#' },
    { icon: './images/ih.svg', href: '#' },
    { icon: './images/pinterest.svg', href: '#' },
    { icon: './images/mail.svg', href: '#' },
  ];

  toggleTheme() {
    this.isDark.update((v) => !v);
    document.body.classList.toggle('dark-mode');
  }
}
