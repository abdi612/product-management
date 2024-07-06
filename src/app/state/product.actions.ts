// import { createAction, props } from '@ngrx/store';
// import { Product } from '../products/product.model';

// export const loadProducts = createAction('[Product List] Load Products');
// export const loadProductsSuccess = createAction('[Product List] Load Products Success', props<{ products: Product[] }>());
// export const loadProductsFailure = createAction('[Product List] Load Products Failure', props<{ error: any }>());


import { createAction, props } from '@ngrx/store';
import { Product } from '../products/product.model';

export const loadProducts = createAction('[Product List] Load Products');
export const loadProductsSuccess = createAction('[Product List] Load Products Success', props<{ products: Product[] }>());

export const addProduct = createAction('[Product Form] Add Product', props<{ product: Product }>());
export const addProductSuccess = createAction('[Product Form] Add Product Success', props<{ product: Product }>());

export const updateProduct = createAction('[Product Form] Update Product', props<{ product: Product }>());
export const updateProductSuccess = createAction('[Product Form] Update Product Success', props<{ product: Product }>());
