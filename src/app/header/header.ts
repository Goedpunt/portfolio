<<<<<<< HEAD
import { Component, input, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-header',
  imports: [ButtonModule, ToggleSwitchModule, FormsModule, TranslateModule, SelectModule],
=======
<<<<<<< HEAD
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
=======
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
>>>>>>> 676d30c (contact form)
>>>>>>> 9b4add6 (contact form)
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
