import React from "react";
import { Table } from "react-bootstrap";
import { FaRemoveFormat, FaTrash } from "react-icons/fa";
import "../../css/pagecart.css";
import Checkout from "./Checkout";

export default function ShopCart({
  cartItems,
  handleChange,
  handleRemove,
  totalPayment,
  oldPrice,
  discount,
  showContent,
  setShowContent,
}) {
  return (
    <>
      {showContent ? (
        <div className="container-fluid checkout-cart">
          <div className="checkout-cart-title">
            <h3>PAYMENT ORDER</h3>
          </div>
          <div className="row box-checkout-cart">
            <div className="checkout-cart-left col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 ">
              <Table className="checkout-cart-item">
                <thead className="cart-item-menu">
                  <tr className="item-menu">
                    <th className="item-menu-product">Product</th>
                    <th className="item-menu-price">Price</th>
                    <th className="item-menu-amount">Amount</th>
                    <th className="item-menu-total-money">Total Money</th>
                    <th className="item-menu-remove">Remove</th>
                  </tr>
                </thead>
                {cartItems.length === 0 && (
                  <div>
                    <h5>There are no products in the cart...</h5>
                    <h5>Please choose a product!</h5>
                  </div>
                )}
                <tbody>
                  {cartItems.map((item, index) => {
                    console.log(item, "item");
                    var priceCart = `${item.priceCurrent}`;
                    var amountCart = `${item.amount}`;
                    const totalMoney =
                      parseInt(priceCart) * parseInt(amountCart);
                    return (
                      <tr key={index}>
                        <td className="cart-item-info">
                          <img
                            className="cart-item-image"
                            src={item.url}
                            alt="#"
                          />

                          <h6 className="cart-item-name">{item.name}</h6>
                        </td>

                        <td className="cart-item-price">
                          <span className="cart-item-oldprice">
                            {item.priceOld}
                          </span>
                          <br />
                          <span className="cart-item-newprice">
                            {item.priceCurrent}đ
                          </span>
                        </td>
                        <td className="cart-item-amount">
                          {" "}
                          <div>
                            <button
                              className="cart-decrease-amount"
                              onClick={() => {
                                handleChange(item, -1);
                              }}
                            >
                              -
                            </button>
                            <span className="cart-item-amount">
                              <b>{item.amount}</b>
                            </span>
                            <button
                              className="cart-increase-amount"
                              onClick={() => {
                                handleChange(item, 1);
                              }}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="cart-item-totalmoney">
                          <b>{totalMoney}đ</b>
                        </td>
                        <td className="cart-item-remove">
                          <FaTrash
                            className="item-remove"
                            onClick={() => handleRemove(item)}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
            <div className="checkout-cart-right col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="checkout-step-title">
                <h4>Orders</h4>
              </div>
              <Table className="cart-order">
                <tbody>
                  <tr className="row-priceold">
                    <td className="cart-order_priceold">Price old</td>
                    <td className="number_priceold">{oldPrice}</td>
                  </tr>
                  <tr className="row-discount">
                    <td className="cart-order_discount">Discount</td>
                    <td className="number_discount">{discount}</td>
                  </tr>
                  <tr className="row-toltal-payment">
                    <td className="cart-order_toltal-payment">
                      <h5>Total payment</h5>
                    </td>
                    <td className="number_toltal-payment">{totalPayment}</td>
                  </tr>
                  <tr className="payment">
                    <input
                      className="make-a-payment"
                      placeholder="MAKE A PAYMENT"
                      onClick={() => setShowContent(false)}
                    />
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>{" "}
        </div>
      ) : (
        <Checkout cartItems={cartItems} setShowContent={setShowContent} />
      )}
    </>
  );
}
