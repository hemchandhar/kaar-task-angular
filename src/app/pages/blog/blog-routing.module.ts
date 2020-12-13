import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogFeedComponent } from './blog-feed/blog-feed.component';

const routes: Routes = [
  {
    path: '',
    component: BlogFeedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
