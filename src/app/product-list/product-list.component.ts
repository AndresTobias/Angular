import { Component } from '@angular/core';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
  })
export class ProductListComponent {
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Agregado al carrito!');
  }
  
  products = products;
  product: Product | undefined;

  constructor(private cartService: CartService) { }
  
  onNotify() {
    window.alert('Se le notificará cuando el producto salga a la venta');
    window.alert('si es el nokia no se vende');
  }

  share() {
    window.alert('The product has been shared!');
  }
};


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/