import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import ".././css/listpet.css";

export default function PetSaleUp({ pets }) {
  console.log("pets", pets[0].cats);
  return (
    <div>
      <div>
        <div className="container-fluid show-card">
          <h6></h6>
          <div className="row">
            {pets[0]?.dogs[0]?.alaska
              .filter((item) => item.priceOld != null)
              .map((item, index) => (
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
                        <span className="card_pet-oldprice">
                          {item.priceOld}
                        </span>
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
            {pets[0]?.dogs[1]?.poodle
              .filter((item) => item.priceOld != null)
              .map((item, index) => (
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
                        <span className="card_pet-oldprice">
                          {item.priceOld}
                        </span>
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

      <div>
        <div className="container-fluid show-card">
          <div className="row">
            {pets[0]?.cats[0]?.britishLonghair
              .filter((item) => item.priceOld != null)
              .map((item, index) => (
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
                        <span className="card_pet-oldprice">
                          {item.priceOld}
                        </span>
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
            {pets[0]?.cats[1]?.munchkin
              .filter((item) => item.priceOld != null)
              .map((item, index) => (
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
                        <span className="card_pet-oldprice">
                          {item.priceOld}
                        </span>
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
