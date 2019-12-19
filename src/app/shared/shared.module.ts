import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDateAdapter, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedService } from './shared.service';

@NgModule({
  providers: [
    SharedService,
  ],
  declarations: [
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,


  ],
  exports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,



  ],
  entryComponents: [
  ]
})
export class SharedModule { }
