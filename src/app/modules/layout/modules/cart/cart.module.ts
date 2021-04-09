import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './view/cart.component';
import { MatButtonModule } from '@angular/material/button';
import { AbsoluteRoutingModule } from 'src/app/pipes/absolute-routing/absolute-routing.module';


@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    MatButtonModule,
    AbsoluteRoutingModule
  ]
})
export class CartModule { }
