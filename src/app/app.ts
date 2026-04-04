import { Component } from '@angular/core';
import { Header } from './header/header';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Hero, About, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class AppComponent {}
