import React from "react";
import { Link } from "react-router-dom";
import "../css/footer.css";

export default function Footer() {
  return (
    <div className="footer-clean">
      <footer>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-4 col-md-3 item">
              <h3>PRODUCT</h3>
              <ul>
                <li>
                  <Link to="/dogs">List Dog Cute</Link>
                </li>
                <li>
                  <Link to="/cats">List Cat Cute</Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 item">
              <h3>ABOUT PETSHOP</h3>
              <ul>
                <li>
                  <Link to="/about-us">Company</Link>
                </li>
                <li>
                  <Link to="/home">Shop</Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 item">
              <h3>PURCHASE POLICY</h3>
              <ul>
                <li>
                  <Link to="/">Installment purchase 0%</Link>
                </li>
                <li>
                  <Link to="/">Return and exchange warranty</Link>
                </li>
                <li>
                  <Link to="/">Delivery, receipt, payment</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 item social">
              <Link to="/">
                <i className="icon ion-social-facebook"></i>
              </Link>
              <Link to="/">
                <i className="icon ion-social-twitter"></i>
              </Link>
              <Link to="/">
                <i className="icon ion-social-snapchat"></i>
              </Link>
              <Link to="/">
                <i className="icon ion-social-instagram"></i>
              </Link>
              <p className="copyright">PETSHOP © 2022</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
