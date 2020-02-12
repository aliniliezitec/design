import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { ComponentsComponent } from './components/components.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AnnouncementComponent } from './announcement/announcement.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'grid',
  },
  {
    path: '',
    children: [
      {
        path: 'announcement',
        component: AnnouncementComponent,
        data: {
          title: 'Announcement - Naologic',
        }
      },
      {
        path: 'grid',
        component: GridComponent,
        data: {
          title: 'Grid - Naologic',
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
