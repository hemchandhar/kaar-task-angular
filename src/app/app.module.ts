import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogModule } from './pages/blog/blog.module';
import { CareersModule } from './pages/careers/careers.module';
import { LandingPageModuleModule } from './pages/landing-page-module/landing-page-module.module';
import { ReadingModuleModule } from './pages/reading-module/reading-module.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BlogModule,
    CareersModule,
    LandingPageModuleModule,
    ReadingModuleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
