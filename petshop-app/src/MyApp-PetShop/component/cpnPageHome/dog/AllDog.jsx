import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { listDog } from "../../../api";
import { PAGINATION_DOG } from "../../../helper/constants";
import PaginationDog from "./PaginationDog";

export default function AllDog({ onClickAddCart }) {
  //Phân trang cho Dog
  const [dogs, setDogs] = useState([...listDog]);
  //Pagination -- state lưu 1 page gồm 4 card
  const [dogPage, setDogPage] = useState(
    listDog.slice(0, PAGINATION_DOG.LIMIT_DOG)
  );

  // tổng số item:12 => 3 trang, 1 trang gồm 4 item   => totalPage = Math.ceil(allPet.length/limit)
  const [paginationDog, setPaginationDog] = useState({
    totalPageDog: Math.ceil(listDog.length / PAGINATION_DOG.LIMIT_DOG),
    currentPageDog: PAGINATION_DOG.CURRENT_PAGE_DOG,
  });

  const onChangePageDog = (currentPageDog) => {
    setPaginationDog((pre) => ({
      ...pre,
      currentPageDog,
    }));
  };
  useEffect(() => {
    const dataDog = [...listDog];
    setDogs([...dataDog]);

    setPaginationDog({
      ...paginationDog,
      currentPageDog: PAGINATION_DOG.CURRENT_PAGE_DOG,
      totalPageDog: Math.ceil(dataDog.length / PAGINATION_DOG.LIMIT_DOG),
    });
  }, []);

  useEffect(() => {
    const newDog = [...dogs].slice(
      (paginationDog.currentPageDog - 1) * PAGINATION_DOG.LIMIT_DOG,
      paginationDog.currentPageDog * PAGINATION_DOG.LIMIT_DOG
    );
    console.log(newDog);
    setDogPage((pre) => (pre = newDog));
  }, [paginationDog.currentPageDog, paginationDog.totalPageDog]);

  return (
    <div className="page-home_alldog">
      <div className="page-home_alldog-title">
        <h4>HELLO, WE ARE CUTE DOGS</h4>
      </div>
      <div className="container show-card">
        <div className="row ">
          {dogPage.map((item, index) => (
            <Card
              key={index}
              className="col-xl-3 col-lg-3 col-sm-6 col-6 cards card_pet"
            >
                <Card.Img
                  className="card_pet-image"
                  variant="top"
                  src={item.url}
                />
                <Card.Body>
                  <Card.Title className="card_pet-name">{item.name}</Card.Title>
                  <Card.Text>
                    <span className="card_pet-oldprice">{item.priceOld}</span>
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
          ))}
          <PaginationDog
            onChangePageDog={onChangePageDog}
            totalPageDog={paginationDog.totalPageDog}
            currentPageDog={paginationDog.currentPageDog}
          />
        </div>
      </div>
    </div>
  );
}
