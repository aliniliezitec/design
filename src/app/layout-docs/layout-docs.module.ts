import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { GridComponent } from './grid/grid.component';
import { LayoutDocsRouting } from './layout-docs.routing';
import { ComponentsComponent } from './components/components.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutDocsPublicFlow } from './layout-docs.flowservice';
import {NaoDesignModule} from '@naologic/design';
import {AnnouncementComponent} from "./announcement/announcement.component";

@NgModule({
  declarations: [
    GridComponent,
    ComponentsComponent,
    NavbarComponent,
    AnnouncementComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NaoDesignModule,
    LayoutDocsRouting
  ],
  providers: [
    LayoutDocsPublicFlow
  ]
})
export class LayoutDocsModule { }
