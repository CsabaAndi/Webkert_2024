import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiveRoutingModule } from './live-routing.module';
import { LiveComponent } from '../live/live.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [/*LiveComponent*/],
  imports: [
    CommonModule,
    LiveRoutingModule,
    MatProgressSpinnerModule,
  ]
})
export class LiveModule { }
