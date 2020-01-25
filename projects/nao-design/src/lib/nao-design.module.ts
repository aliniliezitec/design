import { NgModule } from '@angular/core';
import { SanitizeHtml } from './shared/pipes/sanitize-html.pipe';
import { CommonModule } from '@angular/common';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { NaoDesignSystemModule } from './nao-design-system.module';

@NgModule({
  declarations: [
    SanitizeHtml
  ],
  imports: [
    CommonModule,
    NaoDesignSystemModule,
    NgbProgressbarModule
  ],
  exports: [
    SanitizeHtml,
    NaoDesignSystemModule
  ]
})
export class NaoDesignModule {
}
