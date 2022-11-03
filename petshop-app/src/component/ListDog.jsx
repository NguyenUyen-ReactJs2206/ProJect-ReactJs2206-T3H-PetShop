import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import ".././css/listpet.css";

export default function ListDog({ pets }) {
  console.log("pest file ListDog", pets);
  return (
    <div>
      <div>
        <div className="container-fluid show-card">
          <h6></h6>
          <div className="row">
            {pets[0]?.dogs[0]?.alaska.map((item, index) => (
              <Card
                key={index}
                className="col-xl-3 col-lg-3 col-sm-6 col-6 cards"
              >
                <Card className="card_pet">
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
                      <span className="card_pet-oldprice">{item.priceOld}</span>
                      <br />
                      <span className="card_pet-newprice">
                        Giá hiện tại: {item.priceCurrent} (VNĐ)
                      </span>
                    </Card.Text>
                    <Button variant="primary">Buy Now</Button>
                  </Card.Body>
                </Card>
              </Card>
            ))}
            {pets[0]?.dogs[1]?.poodle.map((item, index) => (
              <Card
                key={index}
                className="col-xl-3 col-lg-3 col-sm-6 col-6 cards"
              >
                <Card className="card_pet ">
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
                      <span className="card_pet-oldprice">{item.priceOld}</span>
                      <br />
                      <span className="card_pet-newprice">
                        Giá hiện tại: {item.priceCurrent} (VNĐ)
                      </span>
                    </Card.Text>
                    <Button variant="primary">Buy Now</Button>
                  </Card.Body>
                </Card>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
