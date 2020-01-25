import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PhotographyRouting } from './photography.routing';
import { OverviewComponent } from './overview/overview.component';
import { CompositionsComponent } from './compositions/compositions.component';
import { CastingComponent } from './casting/casting.component';
import { LocationsComponent } from './locations/locations.component';
import { LightingAndColorComponent } from './lighting-and-color/lighting-and-color.component';
import {NaoDesignModule} from 'nao-design';

@NgModule({
  declarations: [
    OverviewComponent,
    CompositionsComponent,
    CastingComponent,
    LocationsComponent,
    LightingAndColorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NaoDesignModule,
    PhotographyRouting
  ]
})
export class PhotographyModule { }
