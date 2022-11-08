import React from "react";
import { Button, Card } from "react-bootstrap";
import ".././css/listpet.css";
import PaginationDog from "./PaginationDog";

export default function ListDog({
  dogPage,
  onChangePageDog,
  totalPageDog,
  currentPageDog,
}) {
  return (
    <div>
      <h3>List Dog</h3>
      <div>
        <div className="container-fluid show-card">
          <div className="row">
            {dogPage.map((item, index) => {
              console.log("item", item);
              return (
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
              );
            })}
            <PaginationDog
              onChangePageDog={onChangePageDog}
              totalPageDog={totalPageDog}
              currentPageDog={currentPageDog}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
