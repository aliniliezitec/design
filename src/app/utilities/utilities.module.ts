import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ColorsComponent } from './colors/colors.component';
import { UtilitiesRouting } from './utilities.routing';
import { TypographyComponent } from './typography/typography.component';
import { SpacingComponent } from './spacing/spacing.component';
import { IconsComponent } from './icons/icons.component';
import { IllustrationComponent } from './illustration/illustration.component';

@NgModule({
  declarations: [
    ColorsComponent,
    IconsComponent,
    IllustrationComponent,
    TypographyComponent,
    SpacingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UtilitiesRouting
  ]
})
export class UtilitiesModule { }
