import React from "react";
import "./CheckOut.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

export default function CheckOut() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.JPG"
          alt=""
        />
        {basket?.length == 0 ? (
          <div>
            <h2>Your Shoping Basket is empty</h2>
            <p>
              This time you have nothing in the basket.To buy items click "add
              to basket" next to the item
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your shoping basket</h2>

            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}
