import React, { useState } from "react";
import Banner from "../component/cpnPageHome/Banner";
import ".././css/home.css";
import AllDog from "../component/cpnPageHome/dog/AllDog";
import AllCat from "../component/cpnPageHome/cat/AllCat";
import InformationPet from "../component/cpnPageHome/InformationPet";
import Footer from "../component/Footer";

export default function Home({
  onClickAddCart,
  showInformationProduct,
  cartItems,
  setCartItems,
  setShowInformationProduct,
  onHandleShowInfomation,
}) {
  return (
    <div className="home-page">
      {showInformationProduct ? (
        <>
          <Banner />
          <AllDog
            onClickAddCart={onClickAddCart}
            onHandleShowInfomation={onHandleShowInfomation}
          />
          <AllCat
            onClickAddCart={onClickAddCart}
            onHandleShowInfomation={onHandleShowInfomation}
          />
        </>
      ) : (
        <InformationPet
          cartItems={cartItems}
          setCartItems={setCartItems}
          setShowInformationProduct={setShowInformationProduct}
          onHandleShowInfomation={onHandleShowInfomation}
        />
      )}
      <Footer/>
    </div>
  );
}
