import { ActionReducerMap } from '@ngrx/store';
import { productReducer, ProductState } from './product.reducer';

export interface AppState {
  products: ProductState;
}

export const reducers: ActionReducerMap<AppState> = {
  products: productReducer
};
