import React from "react";
import { listCat, listDog } from "../api";
import Banner from "../component/Banner";
import PetSaleUp from "../component/PetSaleUp";

export default function Home() {
  return (
    <div>
      <Banner />
      <PetSaleUp listDog={listDog} listCat={listCat} />
    </div>
  );
}
