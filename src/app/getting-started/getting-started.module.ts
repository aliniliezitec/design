import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { GettingStartedRouting } from './getting-started.routing';
import { IntroductionComponent } from './introduction/introduction.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    IntroductionComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    GettingStartedRouting
  ]
})
export class GettingStartedModule { }
