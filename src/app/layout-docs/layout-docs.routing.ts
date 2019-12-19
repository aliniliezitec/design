import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'overview',
  },
  {
    path: '',
    children: [
      {
        path: 'overview',
        component: OverviewComponent,
        data: {
          title: 'Overview - Naologic',
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutDocsRouting { }
