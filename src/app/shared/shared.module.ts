import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedService } from './shared.service';
import { PrismHtml } from './pipes/prism-html.pipe';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  providers: [
    SharedService,
  ],
  declarations: [
    PrismHtml
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  exports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    PrismHtml,
    NgSelectModule
  ],
  entryComponents: [
  ]
})
export class SharedModule { }
