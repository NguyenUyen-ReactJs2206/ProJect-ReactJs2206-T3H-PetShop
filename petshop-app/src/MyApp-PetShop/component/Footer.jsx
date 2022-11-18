import React from "react";
import { Link } from "react-router-dom";
import "../css/footer.css";

export default function Footer() {
  return (
    <div class="footer-clean">
      <footer>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-sm-4 col-md-3 item">
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
            <div class="col-sm-4 col-md-3 item">
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
            <div class="col-sm-4 col-md-3 item">
              <h3>PURCHASE POLICY</h3>
              <ul>
                <li>
                  <a href="#">Installment purchase 0%</a>
                </li>
                <li>
                  <a href="#">Return and exchange warranty</a>
                </li>
                <li>
                  <a href="#">Delivery, receipt, payment</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 item social">
              <a href="#">
                <i class="icon ion-social-facebook"></i>
              </a>
              <a href="#">
                <i class="icon ion-social-twitter"></i>
              </a>
              <a href="#">
                <i class="icon ion-social-snapchat"></i>
              </a>
              <a href="#">
                <i class="icon ion-social-instagram"></i>
              </a>
              <p class="copyright">PETSHOP © 2022</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
