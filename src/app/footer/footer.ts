import { Component, input } from '@angular/core';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-footer',
  imports: [DividerModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  logoUrl = input<string>('');
  socialLinks = input<{ icon: string; href: string; label: string }[]>([]);
}
