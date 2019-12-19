import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedService } from './shared.service';
import { PrismHtml } from './pipes/prism-html.pipe';

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
  ],
  exports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    PrismHtml
  ],
  entryComponents: [
  ]
})
export class SharedModule { }
