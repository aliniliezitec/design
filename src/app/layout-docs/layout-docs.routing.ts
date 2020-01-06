import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { ComponentsComponent } from './components/components.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'grid',
  },
  {
    path: '',
    children: [
      {
        path: 'grid',
        component: GridComponent,
        data: {
          title: 'grid - Naologic',
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
