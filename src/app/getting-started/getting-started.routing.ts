import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'introduction',
  },
  {
    path: '',
    children: [
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
