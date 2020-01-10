import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing-page',
  },
  {
    path: '',
    children: [
      {
        path: 'landing-page',
        component: LandingPageComponent,
        data: {
          title: 'Landing page - Naologic',
        }
      },
      {
        path: 'introduction',
        component: IntroductionComponent,
        data: {
          title: 'Getting started - Naologic',
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GettingStartedRouting { }
