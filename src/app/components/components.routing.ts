import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormsComponent } from './forms/forms.component';
import { CardsComponent } from './cards/cards.component';
import { ModalComponent } from './modal/modal.component';

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
        path: 'card',
        component: CardsComponent,
        data: {
          title: 'Cards - Naologic',
        }
      },
      {
        path: 'forms',
        component: FormsComponent,
        data: {
          title: 'Forms - Naologic',
        }
      },
      {
        path: 'modal',
        component: ModalComponent,
        data: {
          title: 'Modals - Naologic',
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
