import React, { useEffect, useState } from "react";
import Checkout from "../component/cpnPageCart/Checkout";
import ShopCart from "../component/cpnPageCart/ShopCart";
import Footer from "../component/Footer";
import "../css/pagecart.css";

export default function Cart({ cartItems, setCartItems }) {
  //state show
  const [showContent, setShowContent] = useState(true);
  //d là 1 nếu click +
  //d là -1 nếu click -
  //ind là vị trí của sp
  //increase and decrease items
  const handleChange = (item, d) => {
    const ind = cartItems.indexOf(item);
    const arrCartItems = cartItems;
    
    arrCartItems[ind].amount += d;
  
    if (arrCartItems[ind].amount === 0) return (arrCartItems[ind].amount = 1);
    setCartItems([...arrCartItems]);
  };
  //Delete items
  const handleRemove = (item) => {
    const remove = cartItems.filter((e) => e !== item);
    setCartItems(remove);
  };
  //state save price old
  const [oldPrice, setOldPrice] = useState(0);
  //state save discount
  const [discount, setDiscount] = useState(0);
  //state save total payment
  const [totalPayment, setTotalPayment] = useState(0);
  useEffect(() => {
    let oldprice = 0;
    cartItems
      .filter((item) => item.priceOld != null)
      .map((item) => (oldprice += item.amount * item.priceOld));
    cartItems
      .filter((item) => item.priceOld == null)
      .map((item) => (oldprice += item.amount * item.priceCurrent));
    setOldPrice(oldprice);

    let total = 0;
    cartItems.map((item) => (total += item.amount * item.priceCurrent));
    setTotalPayment(total);
  }, [cartItems]);
  useEffect(() => {
    setDiscount(oldPrice - totalPayment);
  }, [oldPrice, totalPayment]);

  return (
    <>
      <div className="page-cart">
        {showContent ? (
          <ShopCart
            cartItems={cartItems}
            handleChange={handleChange}
            handleRemove={handleRemove}
            totalPayment={totalPayment}
            oldPrice={oldPrice}
            discount={discount}
            showContent={showContent}
            setShowContent={setShowContent}
          />
        ) : (
          <Checkout
            cartItems={cartItems}
            setCartItems={setCartItems}
            setShowContent={setShowContent}
            totalPayment={totalPayment}
          />
        )}
      </div>
      <Footer />
    </>
  );
}
