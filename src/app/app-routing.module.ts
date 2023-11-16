import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { Utils } from './utils/utils';
import { authGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { GamerdashboardComponent } from './dashboard/gamerdashboard/gamerdashboard.component';
import { UltimosLanzamientosComponent } from './dashboard/ultimos-lanzamientos/ultimos-lanzamientos.component';
import { PromocionesComponent } from './dashboard/promociones/promociones.component';
import { promoGuard } from './auth/promo.guard';

const routes: Routes = [

  {
    path:'',redirectTo:'/login',pathMatch:'full'
  },
  {
    path:'login',component:LoginComponent
  },

  {
    path: 'dashboard', component: DashboardComponent,
    canActivate:[authGuard],
    children: [
      {
        path: '', component: AdminDashboardComponent,
        canMatch:[()=>Utils.isRole('Admin')]
      },
      {
        path: '', component: GamerdashboardComponent,
        canMatch: [()=> Utils.isRole('Gamer')]
      },
      {
        path: '', component: GamerdashboardComponent,
        canMatch: [()=> Utils.isRole('Invitado')]
      },
      {
        path: 'ultimoslanzamientos', component: UltimosLanzamientosComponent
      },
      {
        path: 'promociones', component: PromocionesComponent,
        canActivate: [promoGuard],
        
      }
      
    ]
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
