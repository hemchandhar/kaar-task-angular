import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareersRoutingModule } from './careers-routing.module';
import { CareerNavComponent } from './career-nav/career-nav.component';
import { CareerFeedComponent } from './career-feed/career-feed.component';


@NgModule({
  declarations: [CareerNavComponent, CareerFeedComponent],
  imports: [
    CommonModule,
    CareersRoutingModule
  ]
})
export class CareersModule { }
