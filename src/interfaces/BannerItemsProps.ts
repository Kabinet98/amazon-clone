import { Product } from "./ProductsProps";
export interface BannerItemsProps {
	cardTitle: string;
	cardWithOneImage?: Product;
	cardWithMultipleImages?: Product[];
	disappearOnMobile?:boolean;
}
