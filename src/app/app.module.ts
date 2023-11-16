import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginComponent } from './login/login.component';
import { GamerdashboardComponent } from './dashboard/gamerdashboard/gamerdashboard.component';
import { UltimosLanzamientosComponent } from './dashboard/ultimos-lanzamientos/ultimos-lanzamientos.component';
import { PromocionesComponent } from './dashboard/promociones/promociones.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GamerdashboardComponent,
    UltimosLanzamientosComponent,
    PromocionesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
