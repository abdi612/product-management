// import { createReducer, on, Action } from '@ngrx/store';
// import { loadProducts, loadProductsSuccess, loadProductsFailure } from './product.actions';
// import { Product } from '../products/product.model';

// export interface ProductState {
//   products: Product[];
//   error: any;
// }

// export const initialState: ProductState = {
//   products: [],
//   error: null
// };

// const reducer = createReducer(
//   initialState,
//   on(loadProducts, state => ({ ...state, error: null })),
//   on(loadProductsSuccess, (state, { products }) => ({ ...state, products })),
//   on(loadProductsFailure, (state, { error }) => ({ ...state, error }))
// );

// export function productReducer(state: ProductState | undefined, action: Action) {
//   return reducer(state, action);
// }

import { createReducer, on } from '@ngrx/store';
import { Product } from '../products/product.model';
import { loadProductsSuccess, addProductSuccess, updateProductSuccess } from './product.actions';

export interface ProductState {
  products: Product[];
}

export const initialState: ProductState = {
  products: []
};

export const productReducer = createReducer(
  initialState,
  on(loadProductsSuccess, (state, { products }) => ({ ...state, products })),
  on(addProductSuccess, (state, { product }) => ({
    ...state,
    products: [...state.products, product]
  })),
  on(updateProductSuccess, (state, { product }) => ({
    ...state,
    products: state.products.map(p => p.id === product?.id ? product : p)
  }))
);
