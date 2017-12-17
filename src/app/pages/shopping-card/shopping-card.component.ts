import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { LocalStorageService } from 'ng2-webstorage';

import { ApiCallsService } from '../../providers/api-calls.service';
import { NotificationService } from '../../providers/notification.service';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.scss']
})
export class ShoppingCardComponent implements OnInit {
  @ViewChild('staticModal') public staticModal: any;

  public selectedMenuList: any;
  public menuOrder = {};
  public totalPrice  = 0;
  public discountPrice  = 0;
  constructor(
    private localSt: LocalStorageService,
    private apiCallsService: ApiCallsService,
    private notificationService: NotificationService
  ) {
    this.menuOrder['customer'] = {
      name: null,
      email: '',
      address: null,
      telephone: null,
      comment: ''
    };
  }

  ngOnInit() {
    this.getSelectedMenuList();
    this.calculateTotalPrice();
  }

  public getSelectedMenuList() {
    this.selectedMenuList = this.localSt.retrieve('shop-card-list');
  }

  public deleteMenu(item) {
    const index = this.selectedMenuList.indexOf(item);
    if (index > -1) {
      this.selectedMenuList.splice(index, 1);
      this.localSt.store('shop-card-list', this.selectedMenuList);
    }
    this.calculateTotalPrice();
  }

  public deleteAllMenus() {
    this.selectedMenuList = [];
    this.localSt.store('shop-card-list', this.selectedMenuList);
    this.calculateTotalPrice();
  }

  public orderMenus() {
    if (!this.menuOrder['customer']['name']  || !this.menuOrder['customer']['address'] || !this.menuOrder['customer']['telephone']) {
      return;
    }
    // this.menuOrder['customer'] = {
    //   name: 'hamza jridi',
    //   address: 'Tunis',
    //   tel: '22428402',
    //   email: 'hamza@me.com'
    // };
    this.menuOrder['order'] =  this.calculatePrices(this.selectedMenuList, false);
    this.calculateTotalPrice();

    this.apiCallsService.postData('order', this.menuOrder).subscribe(
      (data) => {
        this.notificationService.notification.next({
          msgType: 'success',
          msgTitle: 'Bestellen bevestiging',
          msgContent: 'Wij hebben uw bestellen ontvangen!',
        });
        this.deleteAllMenus();
        this.staticModal.hide();
      },
      (error) => {
        this.notificationService.notification.next({
          msgType: 'error',
          msgTitle: 'Fout bij bestellen',
          msgContent: 'Sorry, een fout opgetreden, probeer het opnieuw of bel ons',
        });
      }
    );
  }
  public calculateTotalPrice() {
    this.menuOrder['totalPrice'] =  this.calculatePrices(this.selectedMenuList, true);
    this.totalPrice = this.menuOrder['totalPrice'];
    this.menuOrder['discountPrice'] = (this.menuOrder['totalPrice'] * 0.9).toFixed(2);
    this.discountPrice = this.menuOrder['discountPrice'];
  }
  public getItemTotalPrice(item, raiseFlag) {
    if (raiseFlag == false){
      item['quantity'] = Math.floor(item['quantity'] - 1);
    }else if(raiseFlag == true){
      item['quantity'] = Math.floor(item['quantity'] + 1);
    }else{
      item['quantity'] = Math.floor(item['quantity']);
    }

    if (item['quantity'] < 1 ){
      item['quantity'] = 1;
    }
    item['totalPrice'] = (item['price'] * item['quantity']).toFixed(2);
    this.calculateTotalPrice();
  }

  public calculatePrices(orderList, price) {
    let totalPrice = 0;
    for (let item of orderList) {
      item['menuItem']['totalPrice'] = item['menuItem']['price'] * item['menuItem']['quantity'];
      totalPrice += item['menuItem']['totalPrice'];
    }
    // orderList.push({totalPrice});
    return price ? (totalPrice).toFixed(2) : orderList;
  }
}
