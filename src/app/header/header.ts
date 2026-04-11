import { Component, input, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [ButtonModule, ToggleSwitchModule, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  isDark = input<boolean>(false);
  themeToggle = output<void>();
}
