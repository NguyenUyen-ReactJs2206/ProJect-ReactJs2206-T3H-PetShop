import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagramSquare,
  FaPhone,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "../css/boxcontact.css";

export default function BoxContact({ showContact, setShowContact }) {
  return (
    <>
      {" "}
      <div className="box-contact">
        <ul className="list-contact">
          <li className="contact-phone" onClick={() => setShowContact(false)}>
            <Link to="/">
              <FaPhone className="phone" />
            </Link>
          </li>
          <li
            className="contact-facebook"
            onClick={() => setShowContact(false)}
          >
            <Link to="/">
              <FaFacebook className="facebook" />
            </Link>
          </li>
          <li
            className="contact-instagram"
            onClick={() => setShowContact(false)}
          >
            <Link to="/">
              <FaInstagramSquare className="instagram" />
            </Link>
          </li>
          <li className="contact-twitter" onClick={() => setShowContact(false)}>
            <Link to="/">
              <FaTwitter className="twitter" />
            </Link>
          </li>
          <li className="contact-tiktok" onClick={() => setShowContact(false)}>
            <Link to="/">
              <FaTiktok className="tiktok" />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
