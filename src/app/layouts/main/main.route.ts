import { Routes } from '@angular/router';
import { Home } from '../../pages/home/home';
import { Products } from '../../pages/products/products';

export const mainRoutes: Routes = [
  { path: '', component: Home },
  { path: 'products', component: Products },
];
