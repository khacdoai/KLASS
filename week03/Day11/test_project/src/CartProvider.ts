// CartContext.ts
import { createContext } from 'react';
import type { Product } from './types';
import type { Dispatch, SetStateAction } from 'react';

const CartContext = createContext<{
  cart: Product[];
  setCart: Dispatch<SetStateAction<Product[]>>;
}>({
  cart: [],
  setCart: () => {},
});

export default CartContext;
