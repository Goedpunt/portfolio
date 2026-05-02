import { Component, input } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [DividerModule, TranslateModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  logoUrl = input<string>('');
  socialLinks = input<{ icon: string; href: string; label: string }[]>([]);
}
