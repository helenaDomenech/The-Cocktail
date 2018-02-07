import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  tab = 1;
  tabs: any;
  selected: any = 'Tabs 1';
  constructor() {
    this.tabs = [
      'Tabs 2',
      'Tabs 1'
    ]
   }

  ngOnInit() {}

  changeTab(item) {
    this.selected = item; 
  }
  isActive(item) {
      return this.selected === item;
  };
}