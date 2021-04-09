import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingRoutingModule } from './listing-routing.module';
import { ListingComponent } from './view/listing.component';
import { MatButtonModule } from '@angular/material/button';
import { AbsoluteRoutingModule } from 'src/app/pipes/absolute-routing/absolute-routing.module';


@NgModule({
  declarations: [ListingComponent],
  imports: [
    CommonModule,
    ListingRoutingModule,
    MatButtonModule,
    AbsoluteRoutingModule
  ]
})
export class ListingModule { }
