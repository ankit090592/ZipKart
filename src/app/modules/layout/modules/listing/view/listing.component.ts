import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TOAST_MESSAGES } from 'src/app/constants/messages';
import { CART } from 'src/app/constants/routes';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})

export class ListingComponent implements OnInit, OnDestroy {
  brands: string[] = [];
  sub: Subscription = new Subscription();
  addToCartCtrl = new FormControl();
  dataSource: string[] = [];
  constructor(private _route: ActivatedRoute, private _utilityService: UtilityService,
    private _router: Router) {
    if (typeof this._route.queryParams['_value'].brand === 'string') {
      this.brands.push(this._route.queryParams['_value'].brand)
    } else {
      this.brands = this._route.queryParams['_value'].brand;
    }
  }

  ngOnInit(): void {
    this.sub.add(
      this._utilityService.fetchJSONData('/assets/mobiles-data.json').subscribe(response => {
        this.brands.forEach(element => {
          this.dataSource.push(response.data.find(item => item.brandName === element))
        })
      })
    )
  }

  addToCart(brandId, modelId) {
    this._router.navigate([CART.fullUrl], { queryParams: { brand: brandId, model: modelId } });
  }

  buyNow(event) {
    this._utilityService.showAlert(TOAST_MESSAGES.orderPlaced)
    this._router.navigate(['/'])
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
