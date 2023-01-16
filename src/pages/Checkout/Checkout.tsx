import "./Checkout.css";
import { Cart, Navbar } from "../../paths";
import PlaceIcon from "@mui/icons-material/Place";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import amazonLogo from "../../assets/Amazon-Emblem.jpg";
import { cartSelector } from "../../app/features/CartSlice";
import { useSelector } from "react-redux";
import formatPrice from "../../utils/formatPrice";
import { totalItemInCart } from "../../utils/totalItemInCart";
const Checkout = () => {
	const { products } = useSelector(cartSelector);
	const totalPrice: number = products.reduce((totalPrice, currentItemPrice) =>{
		return totalPrice + currentItemPrice.price * currentItemPrice.quantity;
	}, 0);

	return (
		<div className="checkout">
			<Navbar
				logo={amazonLogo}
				locationIcon={<PlaceIcon sx={{ width: 20, m: 0, p: 0 }} />}
				searchBarIcon={<SearchIcon />}
				cartIcon={<ShoppingBasketIcon sx={{ width: 40 }} />}
			/>
			<div className="checkout_container">
				<div className="checkout_cart_items_section">
					<span>Shopping Cart</span>
					<div className="shopping_cart_items">
						{products.length !== 0 &&
							products.map((product) => (
								<div className="" key={product.id}>
									<Cart {...product} />
								</div>
							))}
						{products.length === 0 && (
							<span>You Cart is empty </span>
						)}
					</div>
				</div>
				<div className="checkout_cart_items_price">
					<div className="pricing_container">
						<div className="subtotal_price">
							<span>Subtotal ({totalItemInCart(products)} items):</span>
							<span className="total_price">
								{" "}
								{formatPrice(totalPrice)}
							</span>
						</div>
						<span className="gift_order">
							<input
								type="checkbox"
								name="order"
								id="order_gift"
							/>
							<span>This order contains a gift</span>
						</span>
						<button className="paiement">
							Proceed to checkout
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
