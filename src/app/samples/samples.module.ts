import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SamplesRouting } from './samples.routing';
import { FormsComponent } from './forms/forms.component';
import { NaoDesignModule } from '@naologic/design';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { ModalsComponent } from './modals/modals.component';

@NgModule({
  declarations: [
    FormsComponent,
    FileManagerComponent,
    ModalsComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    NaoDesignModule,
    SamplesRouting
  ]
})
export class SamplesModule { }
