import React, { useEffect, useState } from "react";
import PetCartRelated from "../component/cpnPageCart/PetCartRelated";
import ShopCart from "../component/cpnPageCart/ShopCart";
import "../css/pagecart.css";

export default function Cart({ cartItems, setCartItems, onClickAddCart }) {
  //state show
  const [showContent, setShowContent] = useState(true);

  //increase and decrease items
  const handleChange = (item, d) => {
    const ind = cartItems.indexOf(item);
    //mảng
    const arrCartItems = cartItems;
    console.log(arrCartItems, "arrCartItems");
    // lấy ra mảng của sản phẩm thứ ind và +1 nếu Increase, -1 nếu là Decrease
    arrCartItems[ind].amount += d;
    console.log(arrCartItems[ind], "arrCartItems[ind]");
    // nếu Decrese === 0 thì vẫn để amount là 1
    if (arrCartItems[ind].amount === 0) return (arrCartItems[ind].amount = 1);
    setCartItems([...arrCartItems]);
  };
  //Delete items
  const handleRemove = (item) => {
    const remove = cartItems.filter((e) => e != item);
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
    <div className="page-cart">
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
      {showContent ? <PetCartRelated onClickAddCart={onClickAddCart} /> : ""}
    </div>
  );
}
