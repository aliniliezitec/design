import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormsComponent } from './forms/forms.component';
import { CardsComponent } from './cards/cards.component';
import { ModalComponent } from './modal/modal.component';
import { TableComponent } from './tables/table.component';
import { DropdownComponent } from './dropdown/dropdown.component';

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
        path: 'dropdowns',
        component: DropdownComponent,
        data: {
          title: 'Dropdownss - Naologic',
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
      {
        path: 'table',
        component: TableComponent,
        data: {
          title: 'Tables - Naologic',
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
