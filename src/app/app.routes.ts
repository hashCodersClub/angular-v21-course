import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  { path: 'home', redirectTo: '' },
  { path: 'products', component: Products },
  { path: 'login', component: Login },
  { path: 'register', component: Register },

  { path: '**', component: NotFound },
];
