import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-1',
  templateUrl: './tab-1.component.html',
  styleUrls: ['./tab-1.component.scss']
})
export class Tab1Component implements OnInit {
  list: any;
  selected: any;
  feature: any;
  constructor() { 
    this.list = [
      {
        title:'Sólo Alojamiento', 
        regimen: 'Botella de agua incluida' 
      },
      {
        title:'Alojamiento + desayuno',
        regimen: 'dormir'  
      }
    ]
    this.feature = [
        'Sin régimen'
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
