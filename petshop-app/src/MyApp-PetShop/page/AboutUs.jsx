import React, { useState } from "react";
import BannerAboutUs from "../component/cpnPageAboutUs/BannerAboutUs";
import ContentAboutUs from "../component/cpnPageAboutUs/ContentAboutUs";
import PetRelated from "../component/cpnPageAboutUs/PetRelated";
import ReadAllPetRelated from "../component/cpnPageAboutUs/ReadAllPetRelated";
import ShopIntroduction from "../component/cpnPageAboutUs/ShopIntroduction";
import Footer from "../component/Footer";
import "../css/pageaboutus.css";

export default function AboutUs({ onClickAddCart }) {
  const [showAllPetRelated, setShowAllPetRelated] = useState(true);
  return (
    <div className="page-about-us">
      <BannerAboutUs />
      <ShopIntroduction />
      {showAllPetRelated ? (
        <PetRelated setShowAllPetRelated={setShowAllPetRelated} />
      ) : (
        <ReadAllPetRelated
          setShowAllPetRelated={setShowAllPetRelated}
          onClickAddCart={onClickAddCart}
        />
      )}
      <ContentAboutUs/>
      <Footer/>
    </div>
  );
}
