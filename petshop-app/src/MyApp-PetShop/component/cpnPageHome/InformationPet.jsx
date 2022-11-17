import React from "react";
import { FaArrowLeft } from "react-icons/fa";

export default function InformationPet({ cartItems,  setShowInformationProduct }) {
  return (
    <div>
      <span onClick={()=>setShowInformationProduct(true)}>
        {" "}
        <FaArrowLeft />
        Continue to view products
      </span>
      <div className="container">
        <div className="col-6 image-pet">
          <img src="" alt="" />
        </div>
        <div className="col-6 image-pet">
          <h3>Name</h3>
        </div>
      </div>
    </div>
  );
}
