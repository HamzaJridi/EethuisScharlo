import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ng2-webstorage';

import { ApiCallsService } from '../../providers/api-calls.service';

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
    private localSt: LocalStorageService
  ) { }

  ngOnInit() {
    this.getMenu();
  }

  public getMenu() {
    this.getMenuObs = this.apiCallsService.getData('menu').subscribe(
      (data) => {
        console.log('********* data', data);
        this.menuList = data['jsonContent'];
      },
      (error) => {
        console.log('********* error', error);
      }
    );
  }

  public addToShop(menuCategory, menuItem) {
    console.log('********** menuCategory', menuCategory);
    console.log('********** menuItem', menuItem);
    const selectedMenu = {menuCategory, menuItem};
    this.selectedMenuList.push(selectedMenu);
    this.localSt.store('shop-card-list', this.selectedMenuList);
    let selectedMenuListlocalSt = this.localSt.retrieve('shop-card-list');
    console.log('************* selectedMenuListlocalSt', selectedMenuListlocalSt);
  }

}
