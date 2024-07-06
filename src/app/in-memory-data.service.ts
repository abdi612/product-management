import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Product } from './products/product.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products: Product[] = [
      {
        id: 1, name: 'Product 1', price: 10,
        description: 'Product 1'
      },
      {
        id: 2, name: 'Product 2', price: 20,
        description: 'Product 2'
      },
      {
        id: 3, name: 'Product 3', price: 30,
        description: 'Product 3'
      },
    ];
    return { products };
  }

  // Overrides the genId method to ensure that a product always has an id.
  // If the products array is empty,
  // the method below returns the initial number (1).
  // if the products array is not empty, the method below returns the highest
  // product id + 1.
  genId(products: Product[]): number {
    return products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 1;
  }
}
