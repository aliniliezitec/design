import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SamplesRouting } from './samples.routing';
import { FormsComponent } from './forms/forms.component';
import {NaoDesignModule} from '@naologic/design';

@NgModule({
  declarations: [
    FormsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NaoDesignModule,
    SamplesRouting
  ]
})
export class SamplesModule { }
