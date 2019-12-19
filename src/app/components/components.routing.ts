import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'buttons',
  },
  {
    path: '',
    children: [
      {
        path: 'buttons',
        component: ButtonsComponent,
        data: {
          title: 'Buttons - Naologic',
        }
      },
      {
        path: 'forms',
        component: FormsComponent,
        data: {
          title: 'Forms - Naologic',
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRouting { }
