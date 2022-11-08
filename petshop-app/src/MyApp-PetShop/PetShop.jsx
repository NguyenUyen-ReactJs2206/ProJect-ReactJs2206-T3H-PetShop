import React from "react";
import { listCat, listDog } from "./api";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Dogs from "./page/Dogs";
import Cats from "./page/Cats";
import Checkout from "./page/Checkout";
import Card from "./page/Card";
import Navbar from "./component/Navbar";


export default function PetShop() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home listDog={listDog} listCat={listCat}/>}></Route>
          <Route path="/home" element={<Home listDog={listDog} listCat={listCat}/>}></Route>
          <Route path="/dogs" element={<Dogs />}></Route>
          <Route path="/cats" element={<Cats />}></Route>
          <Route path="/order" element={<Checkout/>}></Route>
          <Route path="/cart" element={<Card/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
