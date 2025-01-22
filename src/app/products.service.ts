import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  
  getProducts(){
    return[
      {
        pid: 'P-101',
        name: 'Logitech Mouse',
        description: '6 Button Mechanical Mouse',
        price: 899.00
      },
      {
        pid: 'P-102',
        name: 'JBL BT Speaker',
        description: 'Waterproof Radio 360 Surround',
        price: 1099.00
      },
      {
        pid: 'P-103',
        name: 'Mechanical Keyboard',
        description: 'Hot-swappable RGB Backlit',
        price: 2395.00
      },
      {
        pid: 'P-104',
        name: 'Oculus Meta',
        description: 'All-in-one Gaming Headset',
        price: 22450.00
      },
  ]
  }
}
