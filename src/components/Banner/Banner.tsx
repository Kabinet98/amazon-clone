import "./Banner.css";
import banner1 from "../../assets/banner1.jpeg";
import banner2 from "../../assets/banner2.jpeg";
import banner3 from "../../assets/banner3.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SettingProps } from "../../interfaces/BannerSettingsProps";
import Slider from "react-slick";
import BannerItems from "../BannerItems/BannerItems";
import products from "../../utils/productDatas";

const Banner = () => {
	const randomProduct = () => {
		const allProducts = new Array(4)
			.fill({})
			.map(
				() =>
					products[
						Math.floor(Math.random() * (products.length * 0.75))
					]
			);
		return allProducts;
	};

	const settings: SettingProps = {
		dots: false,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3500,
		cssEase: "linear",
	};
	return (
		<div className="banner">
			<Slider {...settings} className="slide">
				<div className="banner_number_one">
					<img src={banner1} className="banner_image" />
				</div>
				<div className="banner_number_two">
					<img src={banner2} className="banner_image" />
				</div>
				<div className="banner_number_three">
					<img src={banner3} className="banner_image" />
				</div>
			</Slider>

			<div className="banner_card_items">
				<BannerItems
					cardTitle="Pick up where you left off "
					cardWithOneImage={products[0]}
				/>
				<BannerItems
					cardTitle="Today's Offer"
					cardWithMultipleImages={randomProduct()}
					disappearOnMobile={true}
				/>
				<BannerItems
					cardTitle="Pay Again "
					cardWithOneImage={products[2]}
				/>
				<BannerItems
					cardTitle="Are you looking for a gift? "
					cardWithOneImage={products[3]}
				/>
			</div>
		</div>
	);
};

export default Banner;
