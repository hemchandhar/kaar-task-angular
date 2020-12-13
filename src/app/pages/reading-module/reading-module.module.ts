import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReadingModuleRoutingModule } from './reading-module-routing.module';
import { StickyBarComponent } from './sticky-bar/sticky-bar.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';


@NgModule({
  declarations: [StickyBarComponent, NewsFeedComponent],
  imports: [
    CommonModule,
    ReadingModuleRoutingModule
  ]
})
export class ReadingModuleModule { }
