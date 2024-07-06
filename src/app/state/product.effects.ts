// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { ProductService } from '../products/product.service';
// import { loadProducts, loadProductsSuccess, loadProductsFailure } from './product.actions';
// import { catchError, map, mergeMap } from 'rxjs/operators';
// import { of } from 'rxjs';

// @Injectable()
// export class ProductEffects {
//   loadProducts$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(loadProducts),
//       mergeMap(() =>
//         this.productService.getProducts().pipe(
//           map(products => loadProductsSuccess({ products })),
//           catchError(error => of(loadProductsFailure({ error })))
//         )
//       )
//     )
//   );

//   constructor(
//     private actions$: Actions,
//     private productService: ProductService
//   ) {}
// }


import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, of } from 'rxjs';
import { ProductService } from '../products/product.service';
import { AppState } from './index';
import { loadProducts, loadProductsSuccess, addProduct, addProductSuccess, updateProduct, updateProductSuccess } from './product.actions';

@Injectable()
export class ProductEffects {

  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType(loadProducts),
    mergeMap(() => this.productService.getProducts()
      .pipe(
        map(products => loadProductsSuccess({ products })),
        catchError(() => of({ type: '[Product List] Load Products Failure' }))
      ))
  ));

  addProduct$ = createEffect(() => this.actions$.pipe(
    ofType(addProduct),
    mergeMap(action => this.productService.addProduct(action.product)
      .pipe(
        map(product => addProductSuccess({ product })),
        catchError(() => of({ type: '[Product Form] Add Product Failure' }))
      ))
  ));

  updateProduct$ = createEffect(() => this.actions$.pipe(
    ofType(updateProduct),
    mergeMap(action => this.productService.updateProduct(action.product.id, action.product)
      .pipe(
        map(product => updateProductSuccess({ product })),
        catchError(() => of({ type: '[Product Form] Update Product Failure' }))
      ))
  ));

  constructor(
    private actions$: Actions,
    private productService: ProductService,
    private store: Store<AppState>
  ) {}
}
