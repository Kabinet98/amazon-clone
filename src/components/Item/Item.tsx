import { Product } from "../../interfaces/ProductsProps";
import { formatDescription } from "../../utils/formatDescription";
import formatPrice from "../../utils/formatPrice";
import Rating from '@mui/material/Rating';
import { add_to_cart } from "../../app/features/CartSlice";
import { useDispatch } from "react-redux";
import './Item.css';
const Item = (props: Product) => {
  const dispatch = useDispatch();

	return (
		<div className="item">
        <div className="item_image">
          <img src={props.image} alt={props.description} className='product_image' 
            />
        </div>
        <div className="item_description">
          <span className="description_of_item">
            {formatDescription(props.description)}
          </span>
        </div>
        <div className="item_rating">
          <span className="rating"> 
          <Rating name="rate_value" defaultValue={props.rate} precision={0.5} readOnly />
          ({props.rate})
          </span>
        </div>
        <div className="item_price">
          <span className="price">
            {formatPrice(props.price)}{" "}
          </span>
        </div>
        <div className="item_to_cart">
          <button className="add_to_cart"
          onClick={() => dispatch(add_to_cart(props))}
          
          >Add to cart</button>
        </div>
		</div>
	);
};

export default Item;
