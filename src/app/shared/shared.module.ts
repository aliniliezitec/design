import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedService } from './shared.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { SanitizeHtml } from './pipes/sanitize-html.pipe';
import { TypescriptPrismPipe } from './pipes/typescript-prism.pipe';
import { HtmlPrismPipe } from './pipes/html-prism.pipe';
// import { LoaderInfinityComponent } from './loader-infinity/loader-infinity.component';
// import { LoaderInfinityDataComponent } from './loader-infinity-data/loader-infinity-data.component';
// import { LoaderBarSmallComponent } from './loader-bar-small/loader-bar-small.component';
// import { LoaderTableComponent } from './loader-table/loader-table.component';
import { NaoDesignModule } from '../nao-design.module';

@NgModule({
  providers: [
    SharedService,
  ],
  declarations: [
    SanitizeHtml,
    HtmlPrismPipe,
    TypescriptPrismPipe,
    // LoaderInfinityComponent,
    // LoaderInfinityDataComponent,
    // LoaderTableComponent,
    // LoaderBarSmallComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NaoDesignModule.forRoot()
  ],
  exports: [
    // CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    SanitizeHtml,
    HtmlPrismPipe,
    TypescriptPrismPipe,
    NgSelectModule,
    // LoaderInfinityComponent,
    // LoaderInfinityDataComponent,
    // LoaderTableComponent,
    // LoaderBarSmallComponent
  ],
  entryComponents: [
  ]
})
export class SharedModule { }
