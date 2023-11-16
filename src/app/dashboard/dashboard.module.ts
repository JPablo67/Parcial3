import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SideNavComponent } from './side-nav/side-nav.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports:[
    DashboardComponent,
    SideNavComponent,
  ]
})
export class DashboardModule { }
