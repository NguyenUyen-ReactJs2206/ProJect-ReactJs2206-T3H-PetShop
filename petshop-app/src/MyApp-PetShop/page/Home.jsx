import React from "react";
import Banner from "../component/cpnPageHome/Banner";
import ".././css/home.css";
import AllDog from "../component/cpnPageHome/dog/AllDog";
import AllCat from "../component/cpnPageHome/cat/AllCat";
import InformationPet from "../component/cpnPageHome/InformationPet";
import Footer from "../component/Footer";

export default function Home({
  onClickAddCart,
  showInformationProduct,
  setShowInformationProduct,
  onHandleShowInfomationDog,
  onHandleShowInfomationCat,
  showInforCard,
}) {
  return (
    <div className="home-page">
      {showInformationProduct ? (
        <>
          <Banner />
          <div className="container-fluid home-page-content">
            {" "}
            <AllDog
              onClickAddCart={onClickAddCart}
              onHandleShowInfomationDog={onHandleShowInfomationDog}
            />
            <AllCat
              onClickAddCart={onClickAddCart}
              onHandleShowInfomationCat={onHandleShowInfomationCat}
            />{" "}
          </div>
        </>
      ) : (
        <InformationPet
          onClickAddCart={onClickAddCart}
          setShowInformationProduct={setShowInformationProduct}
          showInforCard={showInforCard}
        />
      )}
      <Footer />
    </div>
  );
}
