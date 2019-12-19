import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NaoLayoutComponent } from './layout/nao-layout/nao-layout.component';

const routes: Routes = [
  {
    path: '',
    component: NaoLayoutComponent,
    children: [
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
