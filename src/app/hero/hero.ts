import { Component, input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss'],
})
export class Hero {
  avatarUrl = input<string>('');
  devicesUrl = input<string>('');
}
