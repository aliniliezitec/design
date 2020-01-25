import { ModuleWithProviders, NgModule } from '@angular/core';
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

  ],
  providers: [
  ],
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
