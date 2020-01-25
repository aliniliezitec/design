import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { ComponentsRouting } from './components.routing';
import { FormsComponent } from './forms/forms.component';
import { CardsComponent } from './cards/cards.component';
import { ModalComponent } from './modal/modal.component';
import { TableComponent } from './tables/table.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ComponentsPublicFlow } from './components.flowservice';
import { LoadersComponent } from './loaders/loaders.component';
import { InputGroupComponent } from './input-group/input-group.component';
import { NaoDesignModule } from '../nao-design.module';

@NgModule({
  declarations: [
    ButtonsComponent,
    CardsComponent,
    DropdownComponent,
    FormsComponent,
    ModalComponent,
    LoadersComponent,
    TableComponent,
    InputGroupComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NaoDesignModule,
    ComponentsRouting
  ],
  providers: [
    ComponentsPublicFlow,
  ],
})
export class ComponentsModule { }
