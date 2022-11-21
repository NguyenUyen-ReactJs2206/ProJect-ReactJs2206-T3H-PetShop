import React from "react";
import { FaFacebook, FaGoogle, FaTiktok, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import { FIELD_FORM_LOGIN } from "../../helper/constants";
// import styled from "styled-components";

export default function LogIn({ setShowForm }) {
  return (
    <div className="container-fluid ">
      <div className="form-login">
        <section>
          <div className="form-content">
            <div className="form">
              <h2>LOG IN</h2>
              <form>
                <div className="input-form">
                  <span>Email</span>
                  <input type="text" name="email" />
                </div>
                <div className="input-form">
                  <span>Password</span>
                  <input type="password" name="password" />
                </div>
                <div className="remember-to-login">
                  <label>
                    <input type="checkbox" name="remember-to-login" />
                    Show Password
                  </label>
                </div>
                <div className="input-form">
                  <input type="submit" value="Login" />
                </div>
                <div className="input-form">
                  <p>
                    Do not have an account?{" "}
                    <Link to="/user/sign-up" onClick={() => setShowForm(false)}>
                      Sign up
                    </Link>
                  </p>
                </div>
              </form>
              <h3>Login with social network</h3>
              <ul className="icon-login">
                <li>
                  <FaFacebook />
                </li>
                <li>
                  <FaGoogle />
                </li>
                <li>
                  <FaTiktok />
                </li>
                <li>
                  <FaTwitter />
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
