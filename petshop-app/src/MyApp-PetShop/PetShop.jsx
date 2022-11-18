import React, { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Dogs from "./page/Dogs";
import Cats from "./page/Cats";
import Navbar from "./component/Navbar";
import { menuCat, menuDog } from "./helper/help";
import Cart from "./page/Cart";
import AboutUs from "./page/AboutUs";
import User from "./page/User";
import { listCat, listDog } from "./api";

export default function PetShop() {
  //state save item when add to cart
  const [cartItems, setCartItems] = useState([]);

  //menu select for navbar
  const menuDogs = useMemo(() => menuDog(), []);
  const menuCats = useMemo(() => menuCat(), []);
  const [selectedDog, setSelectedDog] = useState("Alaska");
  const [selectedCat, setSelectedCat] = useState("British Longhair");
  //sate show, hide product information
  const [showInformationProduct, setShowInformationProduct] = useState(true);
  //state save item to show information when onclick card for DOG and CAT
  const [showInforCard, setShowInforCard] = useState([]);
  //select pet
  const onSelectDog = (curdog) => {
    setSelectedDog(curdog);
    setShowInformationProduct(true);
  };
  const onSelectCat = (curcat) => {
    setSelectedCat(curcat);
    setShowInformationProduct(true);
  };

  //Push to cart
  const onClickAddCart = (item) => {
    if (cartItems.indexOf(item) !== -1)
      return alert("You already have this product in your cart!");
    setCartItems([...cartItems, item]);
  };

  //show information item for Dog
  const onHandleShowInfomationDog = (item) => {
    let resultDog = [];
    resultDog = [...listDog].find((val) => item.id === val.id);
    setShowInforCard(resultDog);
    setShowInformationProduct(false);
  };
  //show information item for Cat
  const onHandleShowInfomationCat = (item) => {
    let resultCat = [];
    resultCat = [...listCat].find((val) => item.id === val.id);
    setShowInforCard(resultCat);
    setShowInformationProduct(false);
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
          setShowInformationProduct={setShowInformationProduct}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                cartItems={cartItems}
                setCartItems={setCartItems}
                onClickAddCart={onClickAddCart}
                showInformationProduct={showInformationProduct}
                setShowInformationProduct={setShowInformationProduct}
                onHandleShowInfomationDog={onHandleShowInfomationDog}
                onHandleShowInfomationCat={onHandleShowInfomationCat}
                showInforCard={showInforCard}
              />
            }
          ></Route>
          <Route
            path="/home"
            element={
              <Home
                onClickAddCart={onClickAddCart}
                showInformationProduct={showInformationProduct}
                setShowInformationProduct={setShowInformationProduct}
                onHandleShowInfomationDog={onHandleShowInfomationDog}
                onHandleShowInfomationCat={onHandleShowInfomationCat}
                showInforCard={showInforCard}
              />
            }
          ></Route>
          <Route
            path="/dogs"
            element={
              <Dogs
                selectedDog={selectedDog}
                onSelectDog={onSelectDog}
                onClickAddCart={onClickAddCart}
                showInformationProduct={showInformationProduct}
                setShowInformationProduct={setShowInformationProduct}
                onHandleShowInfomationDog={onHandleShowInfomationDog}
                showInforCard={showInforCard}
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
                  showInformationProduct={showInformationProduct}
                  setShowInformationProduct={setShowInformationProduct}
                  onHandleShowInfomationDog={onHandleShowInfomationDog}
                  showInforCard={showInforCard}
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
                showInformationProduct={showInformationProduct}
                setShowInformationProduct={setShowInformationProduct}
                onHandleShowInfomationCat={onHandleShowInfomationCat}
                showInforCard={showInforCard}
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
                  showInformationProduct={showInformationProduct}
                  setShowInformationProduct={setShowInformationProduct}
                  onHandleShowInfomationCat={onHandleShowInfomationCat}
                  showInforCard={showInforCard}
                />
              }
            ></Route>
          ))}
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                setCartItems={setCartItems}
                onClickAddCart={onClickAddCart}
                onHandleShowInfomationCat={onHandleShowInfomationCat}
                onHandleShowInfomationDog={onHandleShowInfomationDog}
                showInforCard={showInforCard}
              />
            }
          ></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="/user/log-in" element={<User />}></Route>
          <Route path="/user/sign-up" element={<User />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
