import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import(
        '../app/pages/landing-page-module/landing-page-module.module'
      ).then((m) => m.LandingPageModuleModule),
  },
  {
    path: 'en/read',
    loadChildren: () =>
      import('../app/pages/reading-module/reading-module-routing.module').then(
        (m) => m.ReadingModuleRoutingModule
      ),
  },
  {
    path: 'careers',
    loadChildren: () =>
      import('../app/pages/careers/careers-routing.module').then(
        (m) => m.CareersRoutingModule
      ),
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('../app/pages/blog/blog-routing.module').then(
        (m) => m.BlogRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
