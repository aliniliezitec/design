import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ColorsComponent } from './colors/colors.component';
import { UtilitiesRouting } from './utilities.routing';
import { TypographyComponent } from './typography/typography.component';

@NgModule({
  declarations: [
    ColorsComponent,
    TypographyComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UtilitiesRouting
  ]
})
export class UtilitiesModule { }
