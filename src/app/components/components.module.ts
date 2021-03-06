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
import { NaoDesignModule } from '@naologic/design';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { WizardComponent } from './wizard/wizard.component';

@NgModule({
  declarations: [
    ButtonsComponent,
    CardsComponent,
    DropdownComponent,
    DatepickerComponent,
    FormsComponent,
    ModalComponent,
    LoadersComponent,
    TableComponent,
    InputGroupComponent,
    WizardComponent
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
