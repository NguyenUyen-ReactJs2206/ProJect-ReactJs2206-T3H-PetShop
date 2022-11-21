import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import "../../css/information.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function InformationPet({
  setShowInformationProduct,
  showInforCard,
  onClickAddCart,
}) {
  return (
    <div className="infor-pet">
      <span
        className="come-back-home"
        onClick={() => setShowInformationProduct(true)}
      >
        {" "}
        <FaArrowLeft />
        Continue to view products
      </span>
      <div className="container">
        {" "}
        <div className="information-box">
          <div className="col-6 image-box">
            <img src={showInforCard.url} alt="#" />
          </div>
          <div className="title-information-box">
            <h4>{showInforCard.name}</h4>
            <hr />
            <div className="intro-pet">
              PRICE: {showInforCard.priceCurrent}$
            </div>
            <table className="table-intro">
              <tbody>
                <tr>
                  <td>Month old: 3 months</td>
                  <td>Gender: Male</td>
                </tr>
                <tr>
                  <td>Health: Agility, eat well</td>
                  <td>Deworming: 2 times</td>
                </tr>
                <tr>
                  <td> Origin: Purebred, bred at Farm Pethouse</td>
                  <td>Vaccination: 3 doses of vaccine</td>
                </tr>
              </tbody>
            </table>
            <ToastContainer />
            <button
              className="add-cart"
              onClick={() =>
                onClickAddCart(
                  showInforCard,
                  toast("The product is already in your cart!")
                )
              }
            >
              Add to cart
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
