import React, { useEffect, useState } from "react";
import PetCartRelated from "../component/cpnPageCart/PetCartRelated";
import ShopCart from "../component/cpnPageCart/ShopCart";
import "../css/pagecart.css";

export default function Cart({
  cartItems,
  handleChange,
  handleRemove,
  totalPayment,
  oldPrice,
  discount,
  onClickAddCart,
}) {
  //state show
  const [showContent, setShowContent] = useState(true);

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
