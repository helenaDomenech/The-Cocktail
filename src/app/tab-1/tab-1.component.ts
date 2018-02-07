import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-1',
  templateUrl: './tab-1.component.html',
  styleUrls: ['./tab-1.component.scss']
})
export class Tab1Component implements OnInit {
  list:any;
  selected :any;
  constructor() { 
    this.list = [
      'Sólo Alojamiento',
      'Alojamiento y desayuno',
      'Media Pensión',
      'Todo Incluido',
      'Unlimited Service'
   ]; 
  }
  select(item) {
    this.selected = item; 
  };
  isActive(item) {
      return this.selected === item;
  };
  ngOnInit() {
  }

}
