import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorsComponent } from './colors/colors.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'colors',
  },
  {
    path: '',
    children: [
      {
        path: 'colors',
        component: ColorsComponent,
        data: {
          title: 'Colors - Naologic',
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilitiesRouting { }
