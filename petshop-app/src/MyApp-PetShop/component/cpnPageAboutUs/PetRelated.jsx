import React from "react";
import { Card, Carousel } from "react-bootstrap";
import { listCat, listDog } from "../../api";
import "../../css/pagecart.css";

export default function PetRelated({setShowAllPetRelated
}) {
  return (
    <div className="container-fluid featured-products">
      <div className="row carousel-related">
        <div className="col-xl-12 col-lg-12 col-sm-12 col-12 featured-products-title">
          <h5>SHOCK PRICE PROMOTION</h5>
        </div>
        <div className="col-xl-4 col-lg-4 col-sm-6 col-12">
          <Carousel className="product-related_slide">
            {listDog
              .filter((item) => item.priceOld != null)
              .map((item, index) => (
                <Carousel.Item
                  interval={5000}
                  key={index}
                >
                  <div className="cards">
                    <Card
                      className="d-block slide_product_related card_pet"
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
                        <Card.Title className="card-title_pet">
                          <span className="card_pet-oldprice">
                            {item.priceOld}
                          </span>
                          <br />
                          <span className="card_pet-newprice">
                            Price Current: {item.priceCurrent}$
                          </span>
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </div>
                </Carousel.Item>
              ))}
          </Carousel>
        </div>
        <div className="col-xl-4 col-lg-4 col-sm-6 col-12">
          <Carousel className="product-related_slide">
            {listCat
              .filter((item) => item.priceOld != null)
              .map((item, index) => (
                <Carousel.Item
                  interval={5000}
                  key={index}
                >
                  <div className="cards ">
                    <Card
                      className="d-block slide_product_related card_pet"
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
                        <Card.Title className="card-title_pet">
                          <span className="card_pet-oldprice">
                            {item.priceOld}
                          </span>
                          <br />
                          <span className="card_pet-newprice">
                            Price Current: {item.priceCurrent}$
                          </span>
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </div>
                </Carousel.Item>
              ))}
          </Carousel>
        </div>
        <div className="col-xl-12 col-lg-12 col-sm-12 col-12 readmore-all-pet-related">
          <h6 onClick={()=>setShowAllPetRelated(false)}>Readmore All Pet Related</h6>
        </div>
      </div>
    </div>
  );
}
