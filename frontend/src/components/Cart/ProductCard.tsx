import { FC } from 'react';
import { useCart } from 'react-use-cart';
import './itemCard.css';
import Rating from './Reviews';
import { CartItem } from '../Cart/CartProvider'; 

interface ItemCardProps {
  image: string;
  title: string;
  price: number;
  rating: number;
  numReviews: number;
  item: CartItem; // Use the corrected CartItem type
}

const ItemCard: FC<ItemCardProps> = (props) => {
  const { addItem } = useCart();

  return (
    <div className="itemCard-wrapper">
      <img className="itemCard-img" src={props.image} alt="" />
      <h5>{props.title}</h5>
      <h5 className="itemCard-price">{props.price} €</h5>
      <div className="itemCard-rating">
        <Rating
          value={props.rating}
          text={`   ${props.numReviews} Évaluation(s)`}
        />
      </div>
      <button onClick={() => addItem(props.item)}>Add to cart</button>
    </div>
  );
};

export default ItemCard;
