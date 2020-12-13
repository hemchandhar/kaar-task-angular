import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyPageComponent } from './body-page/body-page.component';

const routes: Routes = [
  {
    path:'',
    component:BodyPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageModuleRoutingModule { }
