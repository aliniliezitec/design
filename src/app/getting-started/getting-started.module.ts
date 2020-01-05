import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { GettingStartedRouting } from './getting-started.routing';
import { IntroductionComponent } from './introduction/introduction.component';

@NgModule({
  declarations: [
    IntroductionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    GettingStartedRouting
  ]
})
export class GettingStartedModule { }
