import { Product } from "./ProductsProps";

export interface ProductInCart extends Product {
	quantity: number;
}
export interface Cart {
	products: ProductInCart[];
}
