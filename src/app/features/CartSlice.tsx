import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart, ProductInCart } from "../../interfaces/Cart";
import { Product } from "../../interfaces/ProductsProps";

import { RootState } from "../Store";

const initialState: Cart = {
	products: [],
};

export const CartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		add_to_cart: (state, action: PayloadAction<Product>) => {
			const isItemInCart: ProductInCart | undefined = state.products.find(
				(product) => product.id === action.payload.id
			);
			if (isItemInCart) {
				state.products.map((product) =>
					product.id === action.payload.id
						? { ...product, quantity: (product.quantity += 1) }
						: product
				);
			} else state.products.push({ ...action.payload, quantity: 1 });
		},
		remove_from_cart: (state, action: PayloadAction<string>) => {
			const findItemIndex: number = state.products.findIndex(
				(product) => product.id === action.payload
			);
			if (findItemIndex !== -1) {
				state.products.splice(findItemIndex, 1);
			}
			return state;
		},
		increase_item_quantity: (
			state,
			action: PayloadAction<{ id: string }>
		) => {
			const isItemToIncreaseInCart: ProductInCart | undefined =
				state.products.find(
					(product) => product.id === action.payload.id
				);
			if (isItemToIncreaseInCart) {
				state.products.map((product) =>
					product.id === action.payload.id
						? { ...product, quantity: (product.quantity += 1) }
						: product
				);
			}
		},
		decrease_item_quantity: (
			state,
			action: PayloadAction<{ id: string }>
		) => {
			const findItem = state.products.find(
				(product) => product.id === action.payload.id
			);
			if (findItem) {
				state.products.map((product) => {
					if (product.id === action.payload.id) {
						if (product.quantity > 1) {
							return {
								...product,
								quantity: (product.quantity -= 1),
							};
						} else if (
							product.quantity === 1 ||
							product.quantity <= 0
						) {
							const productToDelete = state.products.findIndex(
								(product) => product.id === action.payload.id
							);
							if (productToDelete !== -1) {
								state.products.splice(productToDelete, 1);
							}
						}
					}
				});
			}
		},
	},
});

export const {
	add_to_cart,
	remove_from_cart,
	increase_item_quantity,
	decrease_item_quantity,
} = CartSlice.actions;
export const cartSelector = (state: RootState) => state.cart;
const cartReducer = CartSlice.reducer;
export default cartReducer;
