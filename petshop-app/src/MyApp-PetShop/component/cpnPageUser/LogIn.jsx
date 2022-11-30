import React, { useState } from "react";
import { FaFacebook, FaGoogle, FaTiktok, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { FIELD_FORM_LOGIN } from "../../helper/constants";

const ErrorText = styled.div`
  color: red;
  text-align: start;
`;
export default function LogIn({ setShowForm }) {
  const {
    watch, //useEffect
    handleSubmit, //event.predefault, form
    formState: { errors }, //handle catch error
    register, //onChange
    getValues,
  } = useForm({
    criteriaMode: "all",
  });

  const onSubmit = async (getVal) => {
  alert(`Successful login with email account ${getVal.email}`)
  };

  const [email, password, isShowPass] = watch([
    FIELD_FORM_LOGIN.EMAIL,
    FIELD_FORM_LOGIN.PASSWORD,
    FIELD_FORM_LOGIN.IS_SHOW_PASS,
  ]);
  return (
    <div className="container-fluid ">
      <div className="form-login">
        <section>
          <div className="form-content">
            <div className="form">
              <h2>LOG IN</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-form">
                  <span>Email</span>
                  <input
                    type="email"
                    name={FIELD_FORM_LOGIN.EMAIL}
                    {...register(FIELD_FORM_LOGIN.EMAIL, {
                      required: "Email is required!",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/,
                        message: "Please enter the correct email format!",
                      },
                    })}
                  />
                  {errors && errors?.email?.message && (
                    <ErrorText className="form-text danger">
                      {errors?.email?.message}
                    </ErrorText>
                  )}
                </div>
                <div className="input-form">
                  <span>Password</span>
                  <input
                    type={isShowPass ? "text" : "password"}
                    name={FIELD_FORM_LOGIN.PASSWORD}
                    {...register(FIELD_FORM_LOGIN.PASSWORD, {
                      required: "Password is required!",
                      pattern: {
                        value: /^(?=.*[A-Z])(?=.*[0-9]).{6,20}$/,
                        message:
                          "Password must contain at least one uppercase and a number",
                      },
                      minLength: {
                        value: 6,
                        message: "Minimum password is 8 characters.",
                      },
                      maxLength: {
                        value: 20,
                        message: "Maximum password is 20 characters.",
                      },
                    })}
                  />
                  {errors && errors?.password?.message && (
                    <ErrorText className="form-text danger">
                      {errors?.password?.message}
                    </ErrorText>
                  )}
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name={FIELD_FORM_LOGIN.IS_SHOW_PASS}
                    {...register(FIELD_FORM_LOGIN.IS_SHOW_PASS)}
                  />
                  <label
                    className="form-check-label"
                    style={{ width: "100%", textAlign: "start" }}
                  >
                    Show Password
                  </label>
                </div>
                <div className="input-form">
                  <input
                    type="submit"
                    value="Login"
                    onClick={() => {
                      const getVal = getValues([
                        FIELD_FORM_LOGIN.EMAIL,
                        FIELD_FORM_LOGIN.PASSWORD,
                      ]);
                    }}
                  />
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
