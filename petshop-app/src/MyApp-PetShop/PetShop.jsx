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
  const onSelectDog = (curdog) => {
    setSelectedDog(curdog);
  };
  const onSelectCat = (curcat) => {
    setSelectedCat(curcat);
  };

  //Push to cart
  const onClickAddCart = (item) => {
    if (cartItems.indexOf(item) !== -1)
      return alert("You already have this product in your cart!");
    setCartItems([...cartItems, item]);
  };
  //increase and decrease items
  const handleChange = (item, d) => {
    // d là 1 nếu click +
    // d là -1 nếu click -
    // ind vị trí của sản phẩm
    const ind = cartItems.indexOf(item);
    //mảng
    const arrCartItems = cartItems;
    console.log(arrCartItems, "arrCartItems");
    // lấy ra mảng của sản phẩm thứ ind và +1 nếu Increase, -1 nếu là Decrease
    arrCartItems[ind].amount += d;
    console.log(arrCartItems[ind], "arrCartItems[ind]");
    // nếu Decrese === 0 thì vẫn để amount là 1
    if (arrCartItems[ind].amount === 0) return (arrCartItems[ind].amount = 1);
    setCartItems([...arrCartItems]);
  };
  //Delete items
  const handleRemove = (item) => {
    const remove = cartItems.filter((e) => e != item);
    setCartItems(remove);
  };
  //state save price old
  const [oldPrice, setOldPrice] = useState(0);
  //state save discount
  const [discount, setDiscount] = useState(0);
  //state save total payment
  const [totalPayment, setTotalPayment] = useState(0);
  useEffect(() => {
    let oldprice = 0;
    cartItems
      .filter((item) => item.priceOld != null)
      .map((item) => (oldprice += item.amount * item.priceOld));
    cartItems
      .filter((item) => item.priceOld == null)
      .map((item) => (oldprice += item.amount * item.priceCurrent));
    setOldPrice(oldprice);

    let total = 0;
    cartItems.map((item) => (total += item.amount * item.priceCurrent));
    setTotalPayment(total);
  }, [cartItems]);
  useEffect(() => {
    setDiscount(oldPrice - totalPayment);
  }, [oldPrice, totalPayment]);

// const [showInforCard, setShowInforCard] = useState([])
  //show information item
  const onHandleShowInfomation = (item) => {
  //   if (showInforCard.id === item.id)
  //   setShowInforCard([...showInforCard, item]);
  //  console.log(showInforCard,"showInforCard")
  // console.log(item, "item")
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
                onHandleShowInfomation={onHandleShowInfomation}
              />
            }
          ></Route>
          <Route
            path="/home"
            element={
              <Home
                cartItems={cartItems}
                setCartItems={setCartItems}
                onClickAddCart={onClickAddCart}
                showInformationProduct={showInformationProduct}
                setShowInformationProduct={setShowInformationProduct}
                onHandleShowInfomation={onHandleShowInfomation}
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
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                handleChange={handleChange}
                handleRemove={handleRemove}
                totalPayment={totalPayment}
                oldPrice={oldPrice}
                discount={discount}
                onClickAddCart={onClickAddCart}
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
