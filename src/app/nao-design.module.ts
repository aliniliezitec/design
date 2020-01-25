import { ModuleWithProviders, NgModule } from '@angular/core';
import { LoaderTableComponent } from './shared/loader-table/loader-table.component';
import { LoaderInfinityDataComponent } from './shared/loader-infinity-data/loader-infinity-data.component';
import { LoaderInfinityComponent } from './shared/loader-infinity/loader-infinity.component';
import { LoaderBarSmallComponent } from './shared/loader-bar-small/loader-bar-small.component';
import { CommonModule } from '@angular/common';
import {NgbModule, NgbProgressbarModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';

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
  providers: [],
  exports: [
    LoaderTableComponent,
    LoaderInfinityDataComponent,
    LoaderInfinityComponent,
    LoaderBarSmallComponent
  ]
})
export class NaoDesignModule {
  static forRoot(designConfig?): ModuleWithProviders {
    return {
      ngModule: NaoDesignModule,
      providers: [
        { provide: 'designConfig', useValue: designConfig },
      ]
    };
  }
  static forChild(): ModuleWithProviders {
    return {
      ngModule: NaoDesignModule
    };
  }
}
