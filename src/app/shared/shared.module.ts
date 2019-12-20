import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedService } from './shared.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { SanitizeHtml } from './pipes/sanitize-html.pipe';

@NgModule({
  providers: [
    SharedService,
  ],
  declarations: [
    SanitizeHtml
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
    SanitizeHtml,
    NgSelectModule
  ],
  entryComponents: [
  ]
})
export class SharedModule { }
