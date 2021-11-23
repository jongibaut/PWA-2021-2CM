import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const homeModule = () => import('./features/home/home.module').then((m) => m.HomeModule);
const accountModule = () => import('./features/account/account.module').then((m) => m.AccountModule);

const routes: Routes = [
  {
    path: '',
    loadChildren: homeModule
  },
  {
    path: 'account',
    loadChildren: accountModule,
    data: { showHeader: false, showFooter: false }
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
