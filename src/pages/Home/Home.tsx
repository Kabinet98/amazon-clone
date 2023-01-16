import { Navbar, Banner, Products } from "../../paths";
import PlaceIcon from "@mui/icons-material/Place";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import amazonLogo from "../../assets/Amazon-Emblem.jpg";
const Home = () => {
	return (
		<>
			<Navbar
				logo={amazonLogo}
				locationIcon={<PlaceIcon sx={{ width: 20, m: 0, p: 0 }} />}
				searchBarIcon={<SearchIcon />}
				cartIcon={<ShoppingBasketIcon sx={{ width: 40 }} />}
			/>
			<Banner />
			<Products />
		</>
	);
};

export default Home;
