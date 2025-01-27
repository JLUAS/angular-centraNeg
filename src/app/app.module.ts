import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './services/users.service';
import { AuthGuardService } from './services/auth-guard.service';
import { NavComponent } from './components/admin/nav/nav.component';
import { HomeComponent } from './pages/admin/home/home.component';
import { HomeComponentUser } from './pages/user/home/home.component';
import { AuthGuardUserService } from './services/auth-guard-user.service';
import { UserNavComponent } from './components/user/user-nav/user-nav.component';
import {MatIconModule} from '@angular/material/icon';
import { UsersComponent } from './pages/admin/users/users.component';
import { UserTableComponent } from './components/admin/user-table/user-table.component';
import { AddUserComponent } from './components/admin/add-user/add-user.component';
import { InformacionComponent } from './components/user/informacion/informacion.component';
import { LeaderComponent } from './pages/leader/leader.component';
import { AuthGuardRootService } from './services/auth-guard-root.service';
import { UsersRootComponent } from './pages/root/users-root/users-root.component';
import { RootNavComponent } from './components/root/root-nav/root-nav.component';
import { GeneralInfoComponent } from './components/user/general-info/general-info.component';
import { NumbersComponent } from './pages/admin/numbers/numbers.component';
import { CallsDashboardComponent } from './components/admin/calls-dashboard/calls-dashboard.component';
import { AuthenticateComponent } from './pages/authenticate/authenticate.component';
import { StartBotComponent } from './components/admin/start-bot/start-bot.component';
import { NuevosNumerosComponent } from './components/admin/nuevos-numeros/nuevos-numeros.component';
import { NumerosContactadosComponent } from './components/admin/numeros-contactados/numeros-contactados.component';
import { NumerosInaccesiblesComponent } from './components/admin/numeros-inaccesibles/numeros-inaccesibles.component';
import { AddNumberComponent } from './components/admin/add-number/add-number.component';
import { PendientesComponent } from './pages/user/pendientes/pendientes.component';
import { PendingCallsComponent } from './components/user/pending-calls/pending-calls.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    HomeComponent,
    HomeComponentUser,
    UserNavComponent,
    UsersComponent,
    UserTableComponent,
    AddUserComponent,
    InformacionComponent,
    LeaderComponent,
    UsersRootComponent,
    RootNavComponent,
    GeneralInfoComponent,
    NumbersComponent,
    CallsDashboardComponent,
    AuthenticateComponent,
    StartBotComponent,
    NuevosNumerosComponent,
    NumerosContactadosComponent,
    NumerosInaccesiblesComponent,
    AddNumberComponent,
    PendientesComponent,
    PendingCallsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [
    provideClientHydration(),
    UsersService,
    AuthGuardService,
    AuthGuardUserService,
    AuthGuardRootService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
