import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TOAST_MESSAGES } from 'src/app/constants/messages';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit, OnDestroy {
  brandId: string;
  modelId: string;
  sub: Subscription = new Subscription();
  addToCartCtrl = new FormControl();
  dataSource: any;
  qty:number = 1;
  constructor(private _route: ActivatedRoute, private _utilityService: UtilityService,
    private router: Router) {
        this.modelId = this._route.queryParams['_value'].model;
        this.brandId = this._route.queryParams['_value'].brand;
  }

  ngOnInit(): void {
    this.sub.add(
      this._utilityService.fetchJSONData('/assets/mobiles-data.json').subscribe(response => {
     this.dataSource = response.data.find(item => item.brandId === this.brandId).models.find(item=> item.id === this.modelId)        
      })
    )
  }

  decQty(event){
    if(this.qty === 1){
      return;
    }
    this.qty--
  }

  incQty(event){
    this.qty++
  }

  placeOrder(event) {
    this._utilityService.showAlert(TOAST_MESSAGES.orderPlaced)
    this.router.navigate(['/'])
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
