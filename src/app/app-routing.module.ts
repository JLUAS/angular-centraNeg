import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

import { AuthGuardService } from './services/auth-guard.service';
import { HomeComponent } from './pages/admin/home/home.component';
import { HomeComponentUser } from './pages/user/home/home.component';
import { AuthGuardUserService } from './services/auth-guard-user.service';
import { UsersComponent } from './pages/admin/users/users.component';
import { PendientesComponent } from './pages/user/pendientes/pendientes.component';
import { AuthGuardRootService } from './services/auth-guard-root.service';

import { UsersRootComponent } from './pages/root/users-root/users-root.component';
import { AuthenticateComponent } from './pages/authenticate/authenticate.component';
import { NumbersComponent } from './pages/admin/numbers/numbers.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'autenticar', component:AuthenticateComponent, canActivate: [AuthGuardService||AuthGuardUserService||AuthGuardRootService]},
  {path: 'dashboard', component:HomeComponent, canActivate: [AuthGuardService]},
  {path: 'usuarios', component:UsersComponent, canActivate: [AuthGuardService]},
  {path: 'numeros', component:NumbersComponent, canActivate: [AuthGuardService]},
  {path: 'root/usuarios', component:UsersRootComponent, canActivate: [AuthGuardRootService]},
  {path: 'informacion/agente', component:HomeComponentUser, canActivate: [AuthGuardUserService]},
  {path: 'llamadas pendientes/agentes', component:PendientesComponent, canActivate: [AuthGuardUserService]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
