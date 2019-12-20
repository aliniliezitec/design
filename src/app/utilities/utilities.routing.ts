import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorsComponent } from './colors/colors.component';
import { TypographyComponent } from './typography/typography.component';

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
      {
        path: 'typography',
        component: TypographyComponent,
        data: {
          title: 'Typography - Naologic',
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
