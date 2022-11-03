import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import ".././css/listpet.css";
import PaginationCpn from "./PaginationCpn";

export default function ListDog({
  petPage,
  onChangePage,
  totalPage,
  currentPage,
}) {
  console.log("pest file ListDog", petPage);
  return (
    <div>
      <h3>List Dog</h3>
      <div> 
        <div className="container-fluid show-card">
          <h6></h6>
          <div className="row">
            {petPage?.map((item, index) => {
              console.log("item",item)
              return(
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
              </Card>)
            })}
            <PaginationCpn
              onChangePage={onChangePage}
              totalPage={totalPage}
              currentPage={currentPage}
            />
            {petPage?.dogs?.poodle.map((item, index) => (
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
