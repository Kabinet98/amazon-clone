import { BannerItemsProps } from "../../interfaces/BannerItemsProps";
import "./BannerItems.css";
import { formatDescription } from "../../utils/formatDescription";
const BannerItems = ({
	cardTitle,
	cardWithOneImage,
	cardWithMultipleImages,
    disappearOnMobile
}: BannerItemsProps) => {
	return (
        <div className={disappearOnMobile? "banner_items disappear_on_mobile": "banner_items"}>
			{cardWithOneImage && (
                <div className="banner_card_with_one_item" key={cardWithOneImage.id}>
                    <span className="banner_card_title">{cardTitle} </span>
					<img
						src={cardWithOneImage.image}
						alt={cardWithOneImage.description}
						className="product_image"
					/>
					<div className="item_description">
						<span className="description">
							{cardWithOneImage.description}{" "}
						</span>
						{cardWithOneImage.inStock && (
                            
							<span className="badge">Meilleure vente</span>
						)}
					</div>
					
				</div>
			)}
			{cardWithMultipleImages && (
                <div className="banner_card_with_multiple_products">
                <span className="banner_card_title">{cardTitle} </span>
				<div className="banner_card_with_multiple_items">
					{cardWithMultipleImages.map((product) => (
						<div
							className="card_with_multiple_items"
							key={product.id}
						>
							<img
								src={product.image}
								alt={product.description}
								className="product_images"
								
							/>
							<span>{formatDescription(product.description)} </span>
						</div>
					))}
				</div>

                </div>
                    
			)}
		</div>
	);
};
export default BannerItems;
