import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedService } from './shared.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { SanitizeHtml } from './pipes/sanitize-html.pipe';
import { TypescriptPrismPipe } from './pipes/typescript-prism.pipe';
import { HtmlPrismPipe } from './pipes/html-prism.pipe';

@NgModule({
  providers: [
    SharedService,
  ],
  declarations: [
    SanitizeHtml,
    HtmlPrismPipe,
    TypescriptPrismPipe
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
    HtmlPrismPipe,
    TypescriptPrismPipe,
    NgSelectModule
  ],
  entryComponents: [
  ]
})
export class SharedModule { }
