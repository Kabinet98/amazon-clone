import { ProductInCart } from "../interfaces/Cart";

export const totalItemInCart = (product: ProductInCart[]): number => {
	return product.reduce((totalItem, currentItemQuantity) => {
		return totalItem + currentItemQuantity.quantity;
	}, 0);
};
