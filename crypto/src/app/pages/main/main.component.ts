import { Component } from '@angular/core';
import { DateTime } from '../../shared/models/DateTime';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})

export class MainComponent {

  d: DateTime;
  time = new Date();

  constructor() {
    this.d = {Day: 'Monday', Time: {Hours: 12, Minutes: 30, Seconds: 0}}
  }

  ngOnInit(): void {
  }

}
