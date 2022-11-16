import React from "react";
import { Button, Card } from "react-bootstrap";
import "../.././css/listpet.css";

export default function ListDog({
 dogs,
  onClickAddCart
}) {
  return (
        <div className="container show-card">
          <div className="row">
            {dogs.map((item, index) => {
              console.log("item", item);
              return (
                <Card
                  key={index}
                  className="col-xl-3 col-lg-3 col-sm-4 col-6 cards card_pet"
                >
                    <Card.Img
                      className="card_pet-image"
                      variant="top"
                      src={item.url}
                    />
                    <Card.Body>
                      <Card.Title className="card_pet-name">
                        {item.name}
                      </Card.Title>
                      <Card.Text>
                        <span className="card_pet-oldprice">
                          {item.priceOld}
                        </span>
                        <br />
                        <span className="card_pet-newprice">
                          Price Current: {item.priceCurrent} (VNĐ)
                        </span>
                      </Card.Text>
                      <Button variant="primary" onClick={()=>onClickAddCart(item)}>Add to cart</Button>
                    </Card.Body>
                  </Card>
              );
            })}
          </div>
        </div>
  );
}
