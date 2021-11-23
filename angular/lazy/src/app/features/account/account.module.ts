import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { LoginComponent } from './pages/login/login.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { RegisterComponent } from './pages/register/register.component';


@NgModule({
  declarations: [AccountComponent, LoginComponent, RecoveryComponent, RegisterComponent],
  imports: [
    CommonModule,
    AccountRoutingModule
  ],
  exports: [AccountComponent, LoginComponent, RecoveryComponent, RegisterComponent]

})
export class AccountModule { }
