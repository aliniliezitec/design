import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedService } from './shared.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { SanitizeHtml } from './pipes/sanitize-html.pipe';
import { TypescriptPrismPipe } from './pipes/typescript-prism.pipe';
import { HtmlPrismPipe } from './pipes/html-prism.pipe';
import { LoaderInfinityComponent } from './loader-infinity/loader-infinity.component';
import { LoaderInfinityDataComponent } from './loader-infinity-data/loader-infinity-data.component';
import { LoaderTableLottieComponent } from './loader-table-lottie/loader-table-lottie.component';
import { LottieAnimationViewModule } from 'ng-lottie';
import { LoaderBarSmallComponent } from './loader-bar-small/loader-bar-small.component';

@NgModule({
  providers: [
    SharedService,
  ],
  declarations: [
    SanitizeHtml,
    HtmlPrismPipe,
    TypescriptPrismPipe,
    LoaderInfinityComponent,
    LoaderInfinityDataComponent,
    LoaderTableLottieComponent,
    LoaderBarSmallComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    LottieAnimationViewModule

  ],
  exports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    SanitizeHtml,
    HtmlPrismPipe,
    TypescriptPrismPipe,
    NgSelectModule,
    LoaderInfinityComponent,
    LoaderInfinityDataComponent,
    LoaderTableLottieComponent,
    LoaderBarSmallComponent
  ],
  entryComponents: [
  ]
})
export class SharedModule { }
