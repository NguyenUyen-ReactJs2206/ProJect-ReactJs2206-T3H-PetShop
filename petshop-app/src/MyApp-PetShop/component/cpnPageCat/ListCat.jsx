import React from "react";
import { Button, Card } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ListCat({
  cats,
  onClickAddCart,
  onHandleShowInfomationCat,
}) {
  return (
    <div className="container show-card">
      <div className="row">
        {cats.map((item, index) => {
          return (
            <div
              className="col-xl-3 col-lg-3 col-sm-4 col-6 cards "
              key={index}
            >
              <Card
                onClick={() => onHandleShowInfomationCat(item)}
                className="card_pet"
              >
                <Card.Img
                  className="card_pet-image"
                  variant="top"
                  src={item.url}
                />
                <Card.Body>
                  <Card.Title className="card_pet-name">{item.name}</Card.Title>
                  <Card.Title className="card-title_pet">
                    <span className="card_pet-oldprice">{item.priceOld}</span>
                    <br />
                    <span className="card_pet-newprice">
                      Price Current: {item.priceCurrent}$
                    </span>
                  </Card.Title>
                </Card.Body>
              </Card>
              <ToastContainer />
              <Button
                variant="primary"
                onClick={() =>
                  onClickAddCart(
                    item,
                    toast("The product is already in your cart!")
                  )
                }
                className="button-add-to-cart"
              >
                Add to cart
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
