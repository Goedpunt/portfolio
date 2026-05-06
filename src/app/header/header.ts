import { Component, input, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SelectModule } from 'primeng/select';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    ButtonModule,
    ToggleSwitchModule,
    FormsModule,
    TranslateModule,
    SelectModule,
    RouterModule,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  isDark = input<boolean>(false);
  currentLang = input<string>('en');
  themeToggle = output<void>();
  langChange = output<string>();

  languages = [
    { label: '🇬🇧 English', value: 'en' },
    { label: '🇳🇱 Nederlands', value: 'nl' },
  ];

  onLangChange(value: string) {
    this.langChange.emit(value);
  }
}
