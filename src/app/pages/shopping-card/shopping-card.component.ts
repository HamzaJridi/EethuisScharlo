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
  @ViewChild('staticModal') public staticModal: ElementRef;

  public selectedMenuList: any;
  public menuOrder = {};
  public totalPrice  = 0;
  constructor(
    private localSt: LocalStorageService,
    private apiCallsService: ApiCallsService,
    private notificationService: NotificationService
  ) {
    this.menuOrder['customer'] = {
      name: null,
      email: null,
      address: null,
      telephone: null,
      comment: null
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
    if (!this.menuOrder['customer']['email'] && !this.menuOrder['customer']['telephone']) {
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
          msgTitle: 'Order Confirmation',
          msgContent: 'Your order has been submitted, we thank you for chosing us',
        });
        this.deleteAllMenus();
        this.staticModal.hide();
      },
      (error) => {
        this.notificationService.notification.next({
          msgType: 'success',
          msgTitle: 'Order Error',
          msgContent: 'Sorry, an error occured, please retry or call us',
        });
      }
    );
  }
  public calculateTotalPrice() {
    this.menuOrder['totalPrice'] =  this.calculatePrices(this.selectedMenuList, true);
    this.totalPrice = this.menuOrder['totalPrice'];
  }
  public getItemTotalPrice(item) {
    item['totalPrice'] = item['price'] * item['quantity'];
    this.calculateTotalPrice();
  }

  public calculatePrices(orderList, price) {
    let totalPrice = 0;
    for (let item of orderList) {
      item['menuItem']['totalPrice'] = item['menuItem']['price'] * item['menuItem']['quantity'];
      totalPrice += item['menuItem']['totalPrice'];
    }
    // orderList.push({totalPrice});
    return price ? totalPrice : orderList;
  }
}
