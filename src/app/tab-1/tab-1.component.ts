import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-1',
  templateUrl: './tab-1.component.html',
  styleUrls: ['./tab-1.component.scss']
})
export class Tab1Component implements OnInit {
  list: any;
  selected: any;
  constructor() { 
    this.list = [
      {
        title:'Sólo Alojamiento', 
        regimen: [
          'Sin régimen',
          'Botella de agua de bienvenida'
        ] 
      },
      {
        title:'Alojamiento + desayuno',
        regimen: [
          'Desayuno buffet completo'
        ]  
      },
      {
        title:'Media Pensión',
        regimen: [
          'Desayuno buffet completo',
          'Cena buffet',
          'No incluye'
        ]  
      },
      {
        title:'Todo Incluido',
        regimen: [
          'Dispondrás de comida y bebida todo el día y durante toda tu estancia',
          'Restaurante buffet',
          'Snack bar',
          'Servicio de bares (marcas nacionales)'
        ]  
      }
      ,
      {
        title:'Unlimited Services',
        regimen: [
          'Restaurante buffet con bebidas premium',
          'Restaurante a la carta (una cena por estancia)',
          'Snack Bar con bebidas Premium',
          'Minibar incluido',
          'Acceso a SPA y 45 minutos de masaje por persona',
          'Actividades deportivas (acuáticas sin motor)',
          'Caja fuerte',
          'Parking gratuito',
          'Lavandería'
        ]  
      }
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
