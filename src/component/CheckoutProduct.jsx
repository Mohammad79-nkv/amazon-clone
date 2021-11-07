
import { useStateValue } from '../Store/StateProvider';
import './CheckoutProduct.css'

const CheckoutProduct = (props) => {
  const { id, image, title, price, rating } = props;
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBaskethandler = () => {
    dispatch({ type: "REMOVE_FROM_BASKET", id})
  }
  return (
    <div className="checkoutProduct">
      <img
        className="checkoutProduct__image"
        src={image}
        alt="checkoutProduct_img"
      />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>*</p>
            ))}
        </div>
        <button onClick={removeFromBaskethandler}>Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
