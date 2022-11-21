import React from "react";
import { listCat, listDog } from "../../api";

export default function ShopIntroduction() {
  return (
    <div className=" container shop-introduction ">
      <div className="shop-introduction-pet">
        <h3>CUTE DOGS</h3>
        <div className="row">
          {listDog.map((item, index) => {
            return (
              <div
                className="col-lg-2 col-sm-3 col-4 list-pet-cute"
                key={index}
              >
                <img src={item.url} alt="#" className="list-image" />
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="shop-introduction-pet">
        <h3>CUTE CATS</h3>
        <div className="row">
          {listCat.map((item, index) => {
            return (
              <div
                className="col-lg-2 col-sm-3 col-4 list-pet-cute"
                key={index}
              >
                <img src={item.url} alt="#" className="list-image" />
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
