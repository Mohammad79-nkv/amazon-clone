import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../Store/StateProvider";
import { getTotal } from "../Reducer/Reducer";
import { Link } from "react-router-dom";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              this order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <Link to="/payment">
        <button className="paymentBtn">Proceed to Checkout</button>
      </Link>
    </div>
  );
};

export default Subtotal;
