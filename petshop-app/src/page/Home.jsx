import React from "react";
import Banner from "../component/Banner";
import PetSaleUp from "../component/PetSaleUp";

export default function Home({allPet}) {
  console.log("list", allPet)
  return (
    <div>
      <Banner />
      <PetSaleUp  pets={allPet}/>
    </div>
  );
}
