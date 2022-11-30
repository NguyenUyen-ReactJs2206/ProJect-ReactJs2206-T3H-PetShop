import React, { useState } from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import "../../css/pagecart.css";
import styled from "styled-components";
import { FIELD_FORM_PAYMENT } from "../../helper/constants";
import { useForm } from "react-hook-form";
import Ordered from "./Ordered";

const ErrorText = styled.div`
  color: red;
  text-align: start;
`;
export default function Checkout({ cartItems, setShowContent, totalPayment }) {
  const [getValueInforOrder, setGetValueInforOrder] = useState([]);
  const {
    watch, //useEffect
    handleSubmit, //event.predefault, form
    formState: { errors }, //handle catch error
    register, //onChange
    getValues,
  } = useForm({
    criteriaMode: "all",
  });
  const onSubmit = async (getValues) => {
    alert(`Order Success`);
    setGetValueInforOrder([...getValueInforOrder, getValues]);
    // console.log(getValues, "getValues");
    // console.log(getValueInforOrder, "getValueInforOrder");
  };
  const onSubmitButton = () => {};
  const [firstName, lastName, email, phoneNumber, address] = watch([
    FIELD_FORM_PAYMENT.FIRST_NAME,
    FIELD_FORM_PAYMENT.LAST_NAME,
    FIELD_FORM_PAYMENT.EMAIL,
    FIELD_FORM_PAYMENT.PHONE_NUMBER,
    FIELD_FORM_PAYMENT.ADDRESS,
  ]);
  return (
    <div className="container-fluid checkout-order">
      <div className="banner-checkout">
        <h3>CHECKOUT</h3>{" "}
        <h6 className="come-back-cart" onClick={() => setShowContent(true)}>
          {" "}
          <FaArrowLeft /> Come back cart
        </h6>
      </div>
      {cartItems.length === 0 && (
        <div>
          <h5>There are no products to pay for...</h5>
          <h5>Please choose a product!</h5>
        </div>
      )}
      <>
        {" "}
        {cartItems.length > 0 && (
          <div className="container form-payment">
            <div className="form-payment">
              <h3>PAYMENT INFORMATION</h3>
              <p>Please enter personal information to pay</p>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Row>
                    <Col>
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        placeholder="First name"
                        name={FIELD_FORM_PAYMENT.FIRST_NAME}
                        {...register(FIELD_FORM_PAYMENT.FIRST_NAME, {
                          required: "First name is required!",
                          pattern: {
                            value: /^[A-Z]+.*[a-zA-Z]$/,
                            message: "First character must be capitalized!",
                          },
                        })}
                      />
                      {errors && errors?.firstName?.message && (
                        <ErrorText className="form-text danger">
                          {errors?.firstName?.message}
                        </ErrorText>
                      )}
                    </Col>
                    <Col>
                      <Form.Label>LastName</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Last name"
                        name={FIELD_FORM_PAYMENT.LAST_NAME}
                        {...register(FIELD_FORM_PAYMENT.LAST_NAME, {
                          required: "First name is required!",
                          pattern: {
                            value: /^[A-Z]+.*[a-zA-Z]$/,
                            message: "First character must be capitalized!",
                          },
                        })}
                      />
                      {errors && errors?.lastName?.message && (
                        <ErrorText className="form-text danger">
                          {errors?.lastName?.message}
                        </ErrorText>
                      )}
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    placeholder="Email"
                    // type="email"
                    name={FIELD_FORM_PAYMENT.EMAIL}
                    {...register(FIELD_FORM_PAYMENT.EMAIL, {
                      required: "Email is required!",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-]*$/,
                        message: "Please enter the correct email format!",
                      },
                    })}
                  />
                  {errors && errors?.email?.message && (
                    <ErrorText className="form-text danger">
                      {errors?.email?.message}
                    </ErrorText>
                  )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPhoneNumber">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Phone"
                    name={FIELD_FORM_PAYMENT.PHONE_NUMBER}
                    {...register(FIELD_FORM_PAYMENT.PHONE_NUMBER, {
                      required: "Phone number is required!",
                      pattern: {
                        value: /((09|03|07|08|05)+([0-9]{8})\b)/g,
                        message:
                          "Enter phone number is this format: 012-345-6789",
                      },
                      minLength: {
                        value: 10,
                        message: "Phone number must be 10 digits.",
                      },
                      maxLength: {
                        value: 10,
                        message: "Phone number must be 10 digits",
                      },
                    })}
                  />
                  {errors && errors?.phoneNumber?.message && (
                    <ErrorText className="form-text danger">
                      {errors?.phoneNumber?.message}
                    </ErrorText>
                  )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    placeholder="Address"
                    name={FIELD_FORM_PAYMENT.ADDRESS}
                    {...register(FIELD_FORM_PAYMENT.ADDRESS, {
                      required: "Address is required!",
                    })}
                  />
                  {errors && errors?.address?.message && (
                    <ErrorText className="form-text danger">
                      {errors?.address?.message}
                    </ErrorText>
                  )}
                </Form.Group>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  onClick={() => {
                    onSubmitButton(getValues);
                  }}
                >
                  ORDER
                </Button>
              </Form>
            </div>
          </div>
        )}
      </>
      {getValueInforOrder.length > 0 && (
        <Ordered
          getValueInforOrder={getValueInforOrder}
          cartItems={cartItems}
          totalPayment={totalPayment}
        />
      )}
    </div>
  );
}
