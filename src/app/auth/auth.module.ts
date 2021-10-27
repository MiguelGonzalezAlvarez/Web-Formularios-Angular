import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingRoutingModule } from './auth-routing.module';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';



@NgModule({
  declarations: [
    RegistroComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingRoutingModule
  ]
})
export class AuthModule { }