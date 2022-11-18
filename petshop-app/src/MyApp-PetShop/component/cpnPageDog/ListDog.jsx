import React from "react";
import { Button, Card } from "react-bootstrap";
import "../.././css/listpet.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ListDog({
  dogs,
  onClickAddCart,
  onHandleShowInfomationDog,
}) {
  return (
    <div className="container show-card">
      <div className="row">
        {dogs.map((item, index) => {
          console.log("item", item);
          return (
            <div className="col-xl-3 col-lg-3 col-sm-6 col-6 cards ">
              <Card
                key={index}
                onClick={() => onHandleShowInfomationDog(item)}
                className="card_pet"
              >
                <Card.Img
                  className="card_pet-image"
                  variant="top"
                  src={item.url}
                />
                <Card.Body>
                  <Card.Title className="card_pet-name">{item.name}</Card.Title>
                  <Card.Text className="card-text_pet">
                    <span className="card_pet-oldprice">{item.priceOld}</span>
                    <br />
                    <span className="card_pet-newprice">
                      Price Current: {item.priceCurrent}$
                    </span>
                  </Card.Text>
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
