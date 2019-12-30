import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { OverviewComponent } from './overview/overview.component';
import { LayoutDocsRouting } from './layout-docs.routing';
import { ComponentsComponent } from './components/components.component';

@NgModule({
  declarations: [
    OverviewComponent,
    ComponentsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LayoutDocsRouting
  ]
})
export class LayoutDocsModule { }
