import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  imports: [CardModule, TranslateModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}
