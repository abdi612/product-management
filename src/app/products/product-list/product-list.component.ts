import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../product.model';
import { AppState } from '../../state';
import { loadProducts } from '../../state/product.actions';
import { selectProducts } from '../../state/product.selectors';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private store: Store<AppState>) {
    this.products$ = this.store.pipe(select(selectProducts));
    console.log('products ', this.products$)
  }

  ngOnInit(): void {
    console.log('ProductListComponent')
    this.store.dispatch(loadProducts());
  }
}
