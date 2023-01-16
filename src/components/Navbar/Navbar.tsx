import { ReactNode, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { cartSelector } from "../../app/features/CartSlice";
import { useSelector } from "react-redux";
import { totalItemInCart } from "../../utils/totalItemInCart";
import "./Navbar.css";
interface NavbarProps {
	logo: string;
	locationIcon: ReactNode;
	searchBarIcon: ReactNode;
	cartIcon: ReactNode;
}

const Navbar = (props: NavbarProps) => {
	const [isClicked, setIsClicked] = useState<boolean>(false);
	const { products } = useSelector(cartSelector);
	return (
		<>
			<div className="navbar">
				<div className="navbar_img">
					<NavLink to="/">
						<img
							src={props.logo}
							alt="amazon-logo"
							className="navbar_logo"
						/>
					</NavLink>
					<span style={{ color: "red", marginLeft: "3px" }}>
						Clone
					</span>
				</div>
				<div
					className={
						isClicked
							? "navbar_middle_section isactive"
							: "navbar_middle_section"
					}
				>
					<div className="navbar_delivery_infos">
						{props.locationIcon}
						<div className="delivery_address">
							<span className="deliver_accountName">
								Postal Code
							</span>
							<span className="postal_address">
								Montreal H1T1E5
							</span>
						</div>
					</div>
					<div className="navbar_searchBar">
						<input
							type="search"
							name="searchBar"
							className="searchBar"
						/>
						<button className="search_button">
							{props.searchBarIcon}{" "}
						</button>
					</div>
					<div className="navbar_account_infos">
						<span className="">Hello, 👋</span>
						<NavLink to="/signin" className="account_name">
							{" "}
							Sign in/Sign up
						</NavLink>
					</div>
					<div className="navbar_return_and_orders">
						<span>Returns</span>
						<span>& Orders</span>
					</div>
					<div className="navbar_return_and_orders">
						<span>Your</span>
						<span>Prime</span>
					</div>
					<NavLink to="/checkout" className="navbar_cart">
						<div className="cart_quantity">
							<span className="cart_items_number">
								{totalItemInCart(products)}{" "}
							</span>
							{props.cartIcon}
						</div>
						<span>Cart</span>
					</NavLink>
				</div>
				<div className="navbar_hamburger_buttons">
					<span
						className="hamburger_button"
						onClick={() => setIsClicked((clicked) => !clicked)}
					>
						{<MenuIcon />}{" "}
					</span>
				</div>
			</div>
		</>
	);
};
export default Navbar;
