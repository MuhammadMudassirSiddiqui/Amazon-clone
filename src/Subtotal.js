import React from "react";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import CurrencyFormt from "react-currency-format";
import { getBasketTotal } from "./reducer";

export default function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormt
        renderText={(value) => (
          <div>
            <p>
              subtotal = ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Rs"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}
