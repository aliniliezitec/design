import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutService } from './layout.service';
import { SharedModule } from '../shared/shared.module';
import { NaoSidenavComponent } from './nao-sidenav/nao-sidenav.component';
import { NaoLayoutComponent } from './nao-layout/nao-layout.component';
import { NaoNavbarComponent } from './nao-navbar/nao-navbar.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    NgbModule,
  ],
  declarations: [
    NaoNavbarComponent,
    NaoLayoutComponent,
    NaoSidenavComponent,
  ],
  providers: [
    LayoutService
  ]
})
export class LayoutModule { }
