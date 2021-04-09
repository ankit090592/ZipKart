import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TOAST_MESSAGES } from 'src/app/constants/messages';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { PRODUCT_LIST } from 'src/app/constants/routes'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {
  sub: Subscription = new Subscription();
  brandControl = new FormControl();
  brandsList: string[];

  constructor(private _utilityService:UtilityService,
    private _router: Router) { }
  

  ngOnInit(): void {
    this.sub.add(
    this._utilityService.fetchJSONData('/assets/mobiles-data.json').subscribe(response => {
      this.brandsList = response.data.map(item => item.brandName)
    })
    )
  }

  searchBrand(event){
    if (!this.brandControl.value || !this.brandControl.value.length) {
      this._utilityService.showAlert(TOAST_MESSAGES.requiredFields('brand'))
      return;
    }

    this._router.navigate([PRODUCT_LIST.fullUrl],{ queryParams: {brand:this.brandControl.value}});
  }

  ngOnDestroy(): void {
    if(this.sub){
      this.sub.unsubscribe();
    }
  }

}
