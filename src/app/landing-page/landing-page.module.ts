import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LandingPageRouting } from './landing-page.routing';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {NaoDesignModule} from 'nao-design';

@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NaoDesignModule,
    LandingPageRouting
  ]
})
export class LandingPageModule { }
