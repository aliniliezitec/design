import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { LoaderTableComponent } from './shared/loader-table/loader-table.component';
import { LoaderInfinityDataComponent } from './shared/loader-infinity-data/loader-infinity-data.component';
import { LoaderInfinityComponent } from './shared/loader-infinity/loader-infinity.component';
import { LoaderBarSmallComponent } from './shared/loader-bar-small/loader-bar-small.component';

@NgModule({
  declarations: [
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
    LoaderTableComponent,
    LoaderInfinityDataComponent,
    LoaderInfinityComponent,
    LoaderBarSmallComponent
  ]
})
export class NaoDesignSystemModule {
  static forRoot(designConfig?): ModuleWithProviders {
    return {
      ngModule: NaoDesignSystemModule,
      providers: [
        { provide: 'designConfig', useValue: designConfig },
      ]
    };
  }
  static forChild(): ModuleWithProviders {
    return {
      ngModule: NaoDesignSystemModule
    };
  }
}
