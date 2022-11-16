import React from "react";
import Banner from "../component/cpnPageHome/Banner";
import ".././css/home.css";
// import AllPet from "../component/cpnPageHome/AllPet";
import AllDog from "../component/cpnPageHome/dog/AllDog";
import AllCat from "../component/cpnPageHome/cat/AllCat";

export default function Home({ onClickAddCart }) {
  return (
    <div className="home-page">
      <Banner />
      <AllDog onClickAddCart={onClickAddCart} />
      <AllCat onClickAddCart={onClickAddCart} />
    </div>
  );
}
