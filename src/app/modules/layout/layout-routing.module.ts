import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CART, HOME, PRODUCT_LIST } from 'src/app/constants/routes';
import { LayoutComponent } from './view/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: HOME.path, pathMatch: 'full' },
      {
        path: HOME.path,
        loadChildren: () =>
          import('./modules/home/home.module').then(
            (m) => m.HomeModule
          ),
      },
      {
        path: PRODUCT_LIST.path,
        loadChildren: () =>
          import('./modules/listing/listing.module').then(
            (m) => m.ListingModule
          ),
      },
      {
        path: CART.path,
        loadChildren: () =>
          import('./modules/cart/cart.module').then(
            (m) => m.CartModule
          ),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
