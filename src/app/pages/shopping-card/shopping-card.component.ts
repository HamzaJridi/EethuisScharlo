import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ng2-webstorage';

import { ApiCallsService } from '../../providers/api-calls.service';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.scss']
})
export class ShoppingCardComponent implements OnInit {
  public selectedMenuList: any;
  public menuOrder = {};

  constructor(private localSt: LocalStorageService,
              private apiCallsService: ApiCallsService) { }

  ngOnInit() {
    this.getSelectedMenuList();
  }

  public getSelectedMenuList() {
    this.selectedMenuList = this.localSt.retrieve('shop-card-list');
    console.log('******** selectedMenuList', this.selectedMenuList);
  }

  public deleteMenu(item) {
    const index = this.selectedMenuList.indexOf(item);
    if (index > -1) {
      this.selectedMenuList.splice(index, 1);
      console.log('******** selectedMenuList', this.selectedMenuList);
      this.localSt.store('shop-card-list', this.selectedMenuList);
    }
  }

  public deleteAllMenus() {
    this.selectedMenuList = [];
    this.localSt.store('shop-card-list', this.selectedMenuList);
  }

  public orderMenus() {
    this.menuOrder['customer'] = {
      name: 'hamza jridi',
      address: 'Tunis',
      tel: '22428402',
      email: 'hamza@me.com'
    };
    this.menuOrder['order'] =  this.calculatePrices(this.selectedMenuList, false);
    this.menuOrder['totalPrice'] =  this.calculatePrices(this.selectedMenuList, true);
    this.apiCallsService.postData('order', this.menuOrder).subscribe(
      (data) => {
        console.log('*********** data', data);
      },
      (error) => {
        console.log('*********** error', error);
      }
    );
  }

  public calculatePrices(orderList, price) {
    let totalPrice = 0;
    for (let item of orderList) {
      console.log('********* item', item);
      item['menuItem']['totalPrice'] = item['menuItem']['price'] * item['menuItem']['quantity'];
      totalPrice += item['menuItem']['totalPrice'];
    }
    // orderList.push({totalPrice});
    return price ? totalPrice : orderList;
  }
}
