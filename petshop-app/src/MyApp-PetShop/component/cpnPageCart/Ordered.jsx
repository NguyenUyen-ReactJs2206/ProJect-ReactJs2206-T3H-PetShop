import React from "react";
import { Table } from "react-bootstrap";

export default function Ordered({
  getValueInforOrder,
  cartItems,
  totalPayment,
}) {
  return (
    <div className="container ordered">
      <br />
      <div className="order">
        <h3>Your Order</h3>
        <Table className="checkout-cart-item">
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
        <h3>Total Payment : ${totalPayment} </h3>
      </div>
      <br />
      <h2> Shipment Details</h2>
      <Table className="checkout-cart-item">
        <tbody>
          {getValueInforOrder.map((item, index) => {
            return (
              <tr key={index}>
                <td className="">
                  <h6 className="">
                    {item.firstName} {item.lastName}
                  </h6>
                </td>
                <td className="">
                  <span className="">${item.email}</span>
                </td>
                <td className="">
                  <span className="">
                    <b>{item.phoneNumber}</b>
                  </span>
                </td>
                <td className="">
                  <span className="">
                    <b>{item.address}</b>
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
