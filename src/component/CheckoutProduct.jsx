import { useStateValue } from "../Store/StateProvider";
import "./CheckoutProduct.css";

const CheckoutProduct = (props) => {
  const { id, image, title, price, rating } = props;
  const [{ basket }, dispatch] = useStateValue();

  const productAmount = basket.find((item) => item.id === id).amount;

  const removeFromBaskethandler = () => {
    dispatch({ type: "REMOVE_FROM_BASKET", id });
  };
  const handleTotalProduct = (e) => {
      dispatch({ type: "INCREASE_PRODUCT", id, e });
      if(productAmount === 1 && e.target.className === "decrement"){
        dispatch({ type: "REMOVE_FROM_BASKET", id });
      }
  };
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
        <button onClick={(e) => handleTotalProduct(e)} className="increment">
          +
        </button>
        <p>{productAmount}</p>
        <button onClick={(e) => handleTotalProduct(e)} className="decrement">
          -
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
