import products from "../../utils/productDatas";
import { Product } from "../../interfaces/ProductsProps";
import { Item } from "../../paths";
import { useState, useEffect } from "react";
import "./Products.css";
const Products = () => {
	const [items, setItems] = useState<Product[]>([]);
	useEffect(() => {
		const displayProducts = () => {
			setItems(products);
		};
		displayProducts();
	}, [items]);
	return (
		<div className="products">
			{items?.map((product) => (
				<div className="" key={product.id}>
					<Item {...product} />
				</div>
			))}
		</div>
	);
};

export default Products;
