import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './features/auth.guard';
const productosModule = () => import('./features/productos/productos.module').then((m) => m.ProductosModule);
const loginModule = () => import('./features/login/login.module').then((m) => m.LoginModule);

const routes: Routes = [
  { path: 'productos', loadChildren: productosModule },
  { path: 'login', loadChildren: loginModule },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
