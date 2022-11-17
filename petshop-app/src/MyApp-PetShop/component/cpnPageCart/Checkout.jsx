import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import "../../css/pagecart.css";

export default function Checkout({ cartItems, setShowContent }) {
  return (
    <>
      <div className="container-fluid checkout-order">
        <div className="banner-checkout">
          <h3>CHECKOUT</h3>
          <h6 onClick={() => setShowContent(true)}>
            {" "}
            <FaArrowLeft /> Come back cart
          </h6>
        </div>
      </div>{" "}
      {cartItems.length === 0 && (
        <div>
          <h5>There are no products to pay for...</h5>
          <h5>Please choose a product!</h5>
        </div>
      )}
      <div className="container form-payment"></div>
    </>
  );
}
