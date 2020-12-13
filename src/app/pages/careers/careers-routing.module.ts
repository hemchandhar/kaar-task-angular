import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CareerFeedComponent } from './career-feed/career-feed.component';

const routes: Routes = [
  {
    path: '',
    component: CareerFeedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CareersRoutingModule {}
