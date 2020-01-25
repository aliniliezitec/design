import { NgModule } from '@angular/core';
import { SanitizeHtml } from './shared/pipes/sanitize-html.pipe';
import { HtmlPrismPipe } from './shared/pipes/html-prism.pipe';
import { TypescriptPrismPipe } from './shared/pipes/typescript-prism.pipe';
import { CommonModule } from '@angular/common';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { LoaderTableComponent } from './shared/loader-table/loader-table.component';
import { LoaderInfinityDataComponent } from './shared/loader-infinity-data/loader-infinity-data.component';
import { LoaderInfinityComponent } from './shared/loader-infinity/loader-infinity.component';
import { LoaderBarSmallComponent } from './shared/loader-bar-small/loader-bar-small.component';




@NgModule({
  declarations: [
    SanitizeHtml,
    HtmlPrismPipe,
    TypescriptPrismPipe,
    LoaderTableComponent,
    LoaderInfinityDataComponent,
    LoaderInfinityComponent,
    LoaderBarSmallComponent
  ],
  imports: [
    CommonModule,
    NgbProgressbarModule
  ],
  exports: [

  ]
})
export class NaoDesignModule { }
