import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ng2-webstorage';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.scss']
})
export class ShoppingCardComponent implements OnInit {
  public selectedMenuList: any
  constructor(private localSt: LocalStorageService) { }

  ngOnInit() {
    this.getSelectedMenuList();
  }

  public getSelectedMenuList() {
    this.selectedMenuList = this.localSt.retrieve('shop-card-list');
    console.log('******** selectedMenuList', this.selectedMenuList);
  }
}
