import React from "react";
import { Button, Card, Carousel } from "react-bootstrap";
import { listCat, listDog } from "../../api";
import "../../css/slide.css";

export default function PetCartRelated({ onClickAddCart }) {
  return (
    <div className="container-fluid featured-products">
      <div className="row carousel-related">
        <div className="col-xl-12 col-lg-12 col-sm-12 col-12 featured-products-title">
          <h5>FEATURED PRODUCTS</h5>
        </div>
        <div className="col-xl-4 col-lg-4 col-sm-6 col-12">
          <Carousel className="product-related_slide">
            {listDog
              .filter((item) => item.priceOld != null)
              .map((item, index) => (
                <Carousel.Item interval={5000}>
                  <Card className="d-block slide_product_related" key={index}>
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
                            Price Current: {item.priceCurrent}đ
                          </span>
                        </Card.Text>
                        <Button
                          variant="primary"
                          onClick={() => onClickAddCart(item)}
                        >
                          Add to cart
                        </Button>
                      </Card.Body>
                    </Card>
                  </Card>
                </Carousel.Item>
              ))}
          </Carousel>
        </div>
        <div className="col-xl-4 col-lg-4 col-sm-6 col-12">
          <Carousel className="product-related_slide">
            {listCat
              .filter((item) => item.priceOld != null)
              .map((item, index) => (
                <Carousel.Item interval={5000}>
                  <Card className="d-block slide_product_related" key={index}>
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
                            Price Current: {item.priceCurrent}đ
                          </span>
                        </Card.Text>
                        <Button
                          variant="primary"
                          onClick={() => onClickAddCart(item)}
                        >
                          Add to cart
                        </Button>
                      </Card.Body>
                    </Card>
                  </Card>
                </Carousel.Item>
              ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
