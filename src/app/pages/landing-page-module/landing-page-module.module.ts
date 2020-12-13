import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageModuleRoutingModule } from './landing-page-module-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BodyPageComponent } from './body-page/body-page.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [NavBarComponent, BodyPageComponent, FooterComponent],
  imports: [
    CommonModule,
    LandingPageModuleRoutingModule
  ]
})
export class LandingPageModuleModule { }
