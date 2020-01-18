import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { ComponentsComponent } from './components/components.component';
import { NavbarComponent } from './navbar/navbar.component';

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
      {
        path: 'navigation',
        component: NavbarComponent,
        data: {
          title: 'Navigation - Naologic',
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
