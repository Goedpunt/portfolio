import { Component, input } from '@angular/core';
import { NgFor } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-footer',
  imports: [NgFor, ButtonModule, DividerModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  logoUrl = input<string>('');
  socialLinks = input<{ icon: string; href: string }[]>([]);
}
