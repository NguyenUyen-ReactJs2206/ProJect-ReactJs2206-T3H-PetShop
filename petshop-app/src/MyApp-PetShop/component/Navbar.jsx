import React from "react";
import { Link } from "react-router-dom";
import imageLogo from ".././image/logoPetShop.jpg";
import ".././css/navbar.css";
import { FaAngleDown, FaCartPlus, FaSearch, FaUser } from "react-icons/fa";

export default function Navbar({
  menuDogs,
  onSelectDog,
  menuCats,
  onSelectCat,
  countCartItems,
  setShowInformationProduct
}) {
  return (
    <div className="container-fuid">
      <div id="header">
        <nav>
          <Link to="/" id="logo">
            <img
              src={imageLogo}
              alt="logopetshop"
              onClick={() => setShowInformationProduct(true)}
            />
          </Link>
          <ul id="main-menu">
            <li>
              <Link to="/home" onClick={() => setShowInformationProduct(true)}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="/dogs" onClick={() => setShowInformationProduct(true)}>
                DOGS
                <span>
                  <FaAngleDown />
                </span>
              </Link>
              <ul className="sub-menu">
                {menuDogs.map((Val, index) => (
                  <li key={index}>
                    <Link to={`/dogs/${Val}`} onClick={() => onSelectDog(Val)}>
                      {Val}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link to="/cats" onClick={() => setShowInformationProduct(true)}>
                CATS{" "}
                <span>
                  <FaAngleDown />
                </span>
              </Link>

              <ul className="sub-menu">
                {menuCats.map((Val, index) => (
                  <li key={index}>
                    <Link to={`/cats/${Val}`} onClick={() => onSelectCat(Val)}>
                      {Val}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link to="/about-us">ABOUT US</Link>
            </li>
            <li>
              {" "}
              <Link to="/cart" onClick={() => setShowInformationProduct(true)}>
                <FaCartPlus className="cart-shopping" />
                {countCartItems ? (
                  <>
                    <span className="count-cart-shopping">
                      {countCartItems}
                    </span>
                  </>
                ) : (
                  " "
                )}
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/user">
                <FaUser className="icon-user" />
              </Link>
            </li>

            <li>
              <Link>
                {" "}
                <FaSearch className="icon-search" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
