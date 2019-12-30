import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { ComponentsComponent } from './components/components.component';

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
      {
        path: 'components',
        component: ComponentsComponent,
        data: {
          title: 'Components - Naologic',
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
