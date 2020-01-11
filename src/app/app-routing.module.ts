import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NaoLayoutComponent } from './layout/nao-layout/nao-layout.component';

const routes: Routes = [
  {
    path: '',
    component: NaoLayoutComponent,
    children: [
      {
        path: 'getting-started',
        loadChildren: () => import('./getting-started/getting-started.module').then(m => m.GettingStartedModule),
      },
      {
        path: 'layout',
        loadChildren: () => import('./layout-docs/layout-docs.module').then(m => m.LayoutDocsModule),
      },
      {
        path: 'components',
        loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule),
      },
      {
        path: 'utilities',
        loadChildren: () => import('./utilities/utilities.module').then(m => m.UtilitiesModule),
      },
      {
        path: 'photography',
        loadChildren: () => import('./photography/photography.module').then(m => m.PhotographyModule),
      },
      {
        path: 'samples',
        loadChildren: () => import('./samples/samples.module').then(m => m.SamplesModule),
      }
    ]
  }
];

const landingPageRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/landing-page',
        pathMatch: 'full'
      },
      {
        path: 'landing-page',
        loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot([
    ...landingPageRoutes,
    ...routes,
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
