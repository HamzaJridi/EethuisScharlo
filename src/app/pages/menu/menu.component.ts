import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ng2-webstorage';

import { ApiCallsService } from '../../providers/api-calls.service';
import { NotificationService } from '../../providers/notification.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public getMenuObs: any;
  public menuList = [];
  public selectedMenuList = [];

  constructor(
    private apiCallsService: ApiCallsService,
    private localSt: LocalStorageService,
    private notificationService: NotificationService
  ) {
    const menuListlocalSt = this.localSt.retrieve('shop-card-list');
    console.log('************ menuListlocalSt', menuListlocalSt);
    if (!menuListlocalSt) {
      this.localSt.store('shop-card-list', this.selectedMenuList);
    }
  }

  ngOnInit() {
    this.getMenu();
  }

  public getMenu() {
    this.getMenuObs = this.apiCallsService.getData('menu').subscribe(
      (data) => {
        this.menuList = data['jsonContent'];
      },
      (error) => {
        console.log('********* error', error);
      }
    );
  }

  public addToShop(menuCategory, menuItem) {
    const selectedMenu = {menuCategory, menuItem};
    if (this.alreadyExists(selectedMenu, this.selectedMenuList)) {
      return;
    }
    menuItem['totalPrice'] = menuItem['price'];
    menuItem['quantity'] = 1;
    console.log('************ selectedMenu', selectedMenu);
    this.selectedMenuList = this.localSt.retrieve('shop-card-list');
    this.selectedMenuList.push(selectedMenu);
    this.localSt.store('shop-card-list', this.selectedMenuList);
    this.notificationService.notification.next({
      msgType: 'success',
      msgTitle: 'Artikel toegevoegd',
      msgContent: 'Uw artikel is toegevoegd, met succes, aan de winkelwagen',
    });
  }

  public alreadyExists(menu, list) {
    let exist = false;
    for (const item of list) {
      exist = (menu['menuItem']['name'] === item['menuItem']['name']);
    }
    return exist;
  }

}
