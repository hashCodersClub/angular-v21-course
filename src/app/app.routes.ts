import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { NotFound } from './pages/not-found/not-found';
import { mainRoutes } from './layouts/main/main.route';
import { authRoutes } from './layouts/auth/auth.route';
import { Main } from './layouts/main/main';

export const routes: Routes = [
  //unprotected routes
  { path: '', children: mainRoutes, component: Main },

  //auth routes
  { path: 'auth', children: authRoutes },

  { path: '**', component: NotFound },
];
