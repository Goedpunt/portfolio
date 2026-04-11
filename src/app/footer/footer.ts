import { Component, input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [NgFor],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  logoUrl = input<string>('');
  socialLinks = input<{ icon: string; href: string }[]>([]);
}
