import React from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import "../../css/pagecart.css";

export default function Checkout({ cartItems, setShowContent, totalPayment }) {
  return (
    <div className="container-fluid checkout-order">
      <div className="banner-checkout">
        <h3>CHECKOUT</h3>
        <h6 onClick={() => setShowContent(true)}>
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
      {cartItems.length > 0 && (
        <div className="container form-payment">
          <div className="order">
            <h3>Your Order</h3>
            <Table className="checkout-cart-item">
              <thead className="cart-item-menu">
                <tr className="item-menu">
                  <th className="item-menu-product">Product</th>
                  <th className="item-menu-price">Price</th>
                  <th className="item-menu-amount">Amount</th>
                  <th className="item-menu-total-money">Total Money</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => {
                  var priceCart = `${item.priceCurrent}`;
                  var amountCart = `${item.amount}`;
                  const totalMoney = parseInt(priceCart) * parseInt(amountCart);
                  return (
                    <tr key={index}>
                      <td className="cart-item-info">
                        <h6 className="cart-item-name">{item.name}</h6>
                      </td>
                      <td className="cart-item-price">
                        <span className="cart-item-newprice">
                          ${item.priceCurrent}
                        </span>
                      </td>
                      <td className="cart-item-amount">
                        <span className="cart-item-amount">
                          <b>{item.amount}</b>
                        </span>
                      </td>
                      <td className="cart-item-totalmoney">
                        <b>${totalMoney}</b>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <hr />
            <h2>TOTAL PAYMENT : ${totalPayment} </h2>
          </div>
          <hr />
          <div className="form-payment">
            <h3>PAYMENT INFORMATION</h3>
            <p>Please enter personal information to pay</p>
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Row>
                  <Col>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control placeholder="First name" />
                  </Col>
                  <Col>
                    <Form.Label>LastName</Form.Label>
                    <Form.Control placeholder="Last name" />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="number" placeholder="Phone" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="Address" />
              </Form.Group>
              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button href="#" variant="primary" type="submit">
                ORDER
              </Button>
            </Form>
          </div>
        </div>
      )}
    </div>
  );
}
