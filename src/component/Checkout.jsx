import './Checkout.css';
import Subtotal from './Subtotal';

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="Checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="checkout__ad"
        />
        <div>
          <h2 className="checkout__title">Your shopping bascket</h2>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
