import "./CartItem.css";
import { Product } from "../../interfaces/ProductsProps";
import { formatDescription } from "../../utils/formatDescription";
import { IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import formatPrice from "../../utils/formatPrice";
import {
	remove_from_cart,
	increase_item_quantity,
	decrease_item_quantity,
} from "../../app/features/CartSlice";
import { cartSelector } from "../../app/features/CartSlice";
import { useSelector, useDispatch } from "react-redux";

import "./CartItem.css";
const CartItem = (props: Product) => {
	const { products } = useSelector(cartSelector);
	const productQuantity: number | undefined = products.find((product) => product.id === props.id )?.quantity;
	const dispatch = useDispatch();
	return (
		<div className="cart_item_details">
			<div className="cart_item">
				<div className="cart_item_image">
					<img src={props.image} alt={props.description} />
				</div>
				<div className="cart_item_description">
					<span>{formatDescription(props.description, 50)} </span>
					{props.inStock && <span> In Stock</span>}
					<span>Eligible for Free Shipping</span>
					<span>
						<input type="checkbox" name="gift" id="gift" />
						This is a gift
					</span>
					<div className="item_quantity">
						<div className="add_quantity">
							<IconButton
								color="primary"
								onClick={() =>
									dispatch(increase_item_quantity({id: props.id}))
								}
							>
								<AddCircleIcon />
							</IconButton>
							<span>{productQuantity} </span>
							<IconButton
								color="error"
								onClick={() =>
									dispatch(decrease_item_quantity({id:props.id}))
								}
							>
								{" "}
								<RemoveCircleIcon />{" "}
							</IconButton>
						</div>
						<button className="delete_item"
						onClick={() =>
							dispatch(remove_from_cart(props.id))
						}
						>Delete</button>
					</div>
				</div>
			</div>
			<div className="cart_item_price">
				<span>{formatPrice(props.price)} </span>
			</div>
		</div>
	);
};

export default CartItem;
