import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./page/Home";
import Dogs from "./page/Dogs";
import Cats from "./page/Cats";
import Order from "./page/Order";
import Cart from "./page/Cart";
import { listPets } from "./api";


export default function PetShop() {
  const [listPet, setlistPet] = useState([...listPets]);

  console.log("listPet", listPet)
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home allPet={listPets} />}></Route>
        <Route path="/home" element={<Home allPet={listPets} />}></Route>
        <Route path="/dogs" element={<Dogs allPet={listPets} setAllPet={setlistPet} />}></Route>
        <Route path="/cats" element={<Cats allPet={listPets} />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
