import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { ComponentsRouting } from './components.routing';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  declarations: [
    ButtonsComponent,
    FormsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsRouting
  ]
})
export class ComponentsModule { }
