import React, { useMemo, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Dogs from "./page/Dogs";
import Cats from "./page/Cats";
import Navbar from "./component/Navbar";
import { menuCat, menuDog } from "./helper/help";
import Cart from "./page/Cart";
import AboutUs from "./page/AboutUs";
import User from "./page/User";

export default function PetShop() {
  //làm select cho cat trên navbar
  const menuCats = useMemo(() => menuCat(), []);
  const [selectedCat, setSelectedCat] = useState("British Longhair");
  const onSelectCat = (curcat) => {
    console.log(curcat, "curcat");
    setSelectedCat(curcat);
  };
  //làm select cho dog trên navbar
  const menuDogs = useMemo(() => menuDog(), []);
  const [selectedDog, setSelectedDog] = useState("Alaska");
  const onSelectDog = (curdog) => {
    console.log(curdog, "curdog");
    setSelectedDog(curdog);
  };
  //thêm vào giỏ hàng
  const [cartItems, setCartItems] = useState([]);
  const onClickAddCart = (item) => {
    console.log(cartItems.indexOf(item), "cartItems.indexOf(item)");
    if (cartItems.indexOf(item) !== -1) return;
    setCartItems([...cartItems, item]);
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar
          menuDogs={menuDogs}
          onSelectDog={onSelectDog}
          menuCats={menuCats}
          onSelectCat={onSelectCat}
          countCartItems={cartItems.length}
        />
        <Routes>
          <Route
            path="/"
            element={<Home onClickAddCart={onClickAddCart} />}
          ></Route>
          <Route
            path="/home"
            element={<Home onClickAddCart={onClickAddCart} />}
          ></Route>
          <Route
            path="/dogs"
            element={
              <Dogs
                selectedDog={selectedDog}
                onSelectDog={onSelectDog}
                onClickAddCart={onClickAddCart}
              />
            }
          ></Route>

         {menuDogs.map((Val) => (
            <Route
              path={`/dogs/${Val}`}
              element={
                <Dogs
                  selectedDog={selectedDog}
                  onSelectDog={onSelectDog}
                  onClickAddCart={onClickAddCart}
                />
              }
            ></Route>
          ))}
          <Route
            path="/cats"
            element={
              <Cats
                selectedCat={selectedCat}
                onSelectCat={onSelectCat}
                onClickAddCart={onClickAddCart}
              />
            }
          ></Route>

          {menuCats.map((Val) => (
            <Route
              path={`/cats/${Val}`}
              element={
                <Cats
                  selectedCat={selectedCat}
                  onSelectCat={onSelectCat}
                  onClickAddCart={onClickAddCart}
                />
              }
            ></Route>
          ))}
          <Route path="/about-us" element={<AboutUs/>}></Route>
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} setCartItems={setCartItems} onClickAddCart={onClickAddCart}/>}
          ></Route>
           <Route path="/user" element={<User/>}></Route>
           <Route path="/user/log-in" element={<User/>}></Route>
           <Route path="/user/sign-up" element={<User/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}
