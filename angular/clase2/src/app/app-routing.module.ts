import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharComponent } from './components/char/char.component';
import { CharsComponent } from './components/chars/chars.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'characters', component: CharsComponent },
  { path: 'characters/:id', component: CharComponent },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
