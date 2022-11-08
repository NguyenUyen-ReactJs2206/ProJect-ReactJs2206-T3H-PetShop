import React from "react";
import { Link } from "react-router-dom";
import imageLogo from ".././image/logoPetShop.jpg";
import ".././css/navbar.css";
import { FaCartPlus, FaSearch, FaUser } from "react-icons/fa";

export default function Navbar() {
  return (
    <div>
      <div className="container-fluid header bg-light p-2">
        <div className="row row-navbar">
          <div className="logo-petshop col-xl-3 col-lg-3 col-md-2 col-sm-2 col-12 ">
            <Link to={"/"} className="nav-link"> <img src={imageLogo} alt="logo" className="logo" /></Link>
          </div>
          <div className="navbar-menu col-xl-6 col-lg-6 col-md-6 col-sm-6 col-8">
            <div className=" navbar menu">
              <div className="nav-item menu-item">
                <Link to="/home" className="menu -link nav-link">
                  HOME
                </Link> 
              </div>
              <div className="nav-item menu-item">
                <Link to={"/dogs"} className="nav-link">
                  DOGS
                </Link>
              </div>
              <div className="nav-item menu-item">
                <Link to={"/cats"} className="nav-link">
                  CATS
                </Link>
              </div>
              <div className="nav-item menu-item">
                <Link to={"/order"} className="nav-link">
                  CHECKOUT
                </Link>
              </div>
            </div>
          </div>
          <div className="nav-icons col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4">
            <div className="icon-item">
              <Link>
                <FaCartPlus className="cart-shopping" />
              </Link>

              <span className="cart-number">0</span>
            </div>
            <div className="icon-item">
              <Link>
                <FaUser className="icon-user" />
              </Link>
            </div>
            <div className="icon-item">
              <Link>
                {" "}
                <FaSearch className="icon-search" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}