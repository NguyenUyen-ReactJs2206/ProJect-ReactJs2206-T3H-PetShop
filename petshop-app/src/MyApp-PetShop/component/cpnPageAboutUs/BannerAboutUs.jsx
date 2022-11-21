import React from "react";
import { Link } from "react-router-dom";
import imageLogo from "../../image/logoPetShop.jpg";
import "../../css/pageaboutus.css";
import { FaFacebook, FaPhone } from "react-icons/fa";

export default function BannerAboutUs() {
  return (
    <div className="banner-about-us">
      <Link to="/">
        <img src={imageLogo} alt="logopetshop" className="logo-petshop" />
      </Link>
      <div className="container">
        <div className="box-content">
          <div className="title">
            <h3>PET SHOP - WE ARE A FAMILY</h3>
          </div>
          <div className="row content">
            <div className="col-md-6 col-12 text-content">
              <p>
                Pet Shop Ho Chi Minh City - The store specializes in providing
                cute and friendly pets. Especially dogs and cats!
              </p>
            </div>
            <div className="col-md-6 col-12 text-content">
              <p>Contact us now to welcome this super lovely member home.</p>
              <div className="text-content-phone">
                <FaPhone className="icon-phone" /> <span>034.4444.4444</span> 
              </div>
              <p>OR</p>
              <div className="text-content-facebook">
                <FaFacebook className="icon-facebook" /><span>https://www.facebook.com/PetShopHCM</span> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
