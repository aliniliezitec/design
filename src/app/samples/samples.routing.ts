import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { ModalsComponent } from './modals/modals.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'forms',
  },
  {
    path: '',
    children: [
      {
        path: 'forms',
        component: FormsComponent,
        data: {
          title: 'Forms - Naologic',
        }
      },
      {
        path: 'modals',
        component: ModalsComponent,
        data: {
          title: 'Modals - Naologic',
        }
      },
      {
        path: 'file-manager',
        component: FileManagerComponent,
        data: {
          title: 'File manager - Naologic',
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamplesRouting {
}
