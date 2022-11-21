import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { listCat, listDog } from "../../api";

export default function ReadAllPetRelated({
  onClickAddCart,
  setShowAllPetRelated,
}) {
  return (
    <div className="container-fluid show-card-pet-related">
      <h3>ALL PETS SHOCK PRICE PROMOTION</h3>
      <div className="row">
        <ul className="card-grid">
          {listDog
            .filter((item) => item.priceOld != null)
            .map((item, index) => {
              return (
                <li key={index}>
                  <article className="card">
                    <div className="card-image">
                      <img src={item.url} alt={item.name} />
                    </div>
                    <div className="card-content">
                      <h2 className="card-name">{item.name}</h2>

                      <li className="card-list-sale">
                        Price Old:
                        <span>{item.priceOld}$</span>
                      </li>
                      <li className="card-list">
                        Price Current:
                        <span>{item.priceCurrent}$</span>
                      </li>
                    </div>
                    <div>
                      <button
                        className="btn add-to-cart-pet-related bg-primary"
                        onClick={() => onClickAddCart(item)}
                      >
                        Add to cart
                      </button>
                    </div>
                  </article>
                </li>
              );
            })}
          {listCat
            .filter((item) => item.priceOld != null)
            .map((item, index) => {
              return (
                <li key={index}>
                  <article className="card">
                    <div className="card-image">
                      <img src={item.url} alt={item.name} />
                    </div>
                    <div className="card-content">
                      <h2 className="card-name">{item.name}</h2>
                      <li className="card-list-sale">
                        Price Old:
                        <span>{item.priceOld}$</span>
                      </li>
                      <li className="card-list">
                        Price Current:
                        <span>{item.priceCurrent} $</span>
                      </li>
                    </div>
                    <div>
                      <button
                        className="btn add-to-cart-pet-related bg-primary"
                        onClick={() => onClickAddCart(item)}
                      >
                        Add to cart
                      </button>
                    </div>
                  </article>
                </li>
              );
            })}
        </ul>
      </div>
      <div
        className="readless-all-pet-related"
        onClick={() => setShowAllPetRelated(true)}
      >
        {" "}
        <h6> Readless All Pet Related</h6>
      </div>
    </div>
  );
}
