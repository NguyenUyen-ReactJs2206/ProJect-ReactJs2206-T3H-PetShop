import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { listDog } from "../../../api";
import { PAGINATION_DOG } from "../../../helper/constants";
import PaginationDog from "./PaginationDog";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Input = styled.input`
  margin-left: 20px;
  padding: 5px;
  border-radius: 10px;
  border: 1px solid;
`;
const Select = styled.select`
  padding: 8px;
  margin-left: 20px;
  border-radius: 10px;
  border: 1px solid;
`;
export default function AllDog({ onClickAddCart, onHandleShowInfomationDog }) {
  const [dogs, setDogs] = useState([...listDog]);
  //Search for All Dog
  const [inputFilterDog, setInputFilterDog] = useState("");
  //Pagination -- state save 1 page: 4 item
  const [dogPage, setDogPage] = useState(
    listDog.slice(0, PAGINATION_DOG.LIMIT_DOG)
  );

  // Total item: 24 => 6 page, 1page inclue 4 item   => totalPage = Math.ceil(listCat.length/limit)
  const [paginationDog, setPaginationDog] = useState({
    totalPageDog: Math.ceil(listDog.length / PAGINATION_DOG.LIMIT_DOG),
    currentPageDog: PAGINATION_DOG.CURRENT_PAGE_DOG,
  });
  //Search and Filter Dog
  const onHandleSearchDog = (keySearchFilter) => {
    setInputFilterDog(keySearchFilter);

    let listDogFilter = [...listDog];
    let resultFilterDog = [];
    if (keySearchFilter === "") {
      setDogs(listDog);
      setPaginationDog({
        ...paginationDog,
        currentPageDog: PAGINATION_DOG.CURRENT_PAGE_DOG,
        totalPageDog: Math.ceil(listDog.length / PAGINATION_DOG.LIMIT_DOG),
      });
    }
    if (keySearchFilter) {
      resultFilterDog = listDogFilter.filter((element) => {
        return element.name
          .toLocaleUpperCase()
          .includes(keySearchFilter.toLocaleUpperCase());
      });
      setDogs(resultFilterDog);
      setPaginationDog({
        ...paginationDog,
        currentPageCat: PAGINATION_DOG.CURRENT_PAGE_DOG,
        totalPageCat: Math.ceil(
          resultFilterDog.length / PAGINATION_DOG.LIMIT_DOG
        ),
      });
    }
  };

  //Sort by price
  const onHandleSortPrice = (value) => {
    let listDogSort = [...listDog];
    let resultSortDog = [];
    if (value === "increase") {
      resultSortDog = listDogSort.sort((a, b) => {
        return a.priceCurrent - b.priceCurrent;
      });
      setDogs(resultSortDog);
    }
    if (value === "decrease") {
      resultSortDog = listDogSort.sort((a, b) => {
        return b.priceCurrent - a.priceCurrent;
      });
      setDogs(resultSortDog);
    }
    if (value === "none") {
      resultSortDog = [...listDog];
      setDogs(resultSortDog);
    }
    setPaginationDog({
      ...paginationDog,
      currentPageDog: PAGINATION_DOG.CURRENT_PAGE_DOG,
      totalPageDog: Math.ceil(resultSortDog.length / PAGINATION_DOG.LIMIT_DOG),
    });
  };

  //Divide data by each element
  const onChangePageDog = (currentPageDog) => {
    setPaginationDog((pre) => ({
      ...pre,
      currentPageDog,
    }));
  };

  //Slice start, end:
  useEffect(() => {
    const newDog = [...dogs].slice(
      (paginationDog.currentPageDog - 1) * PAGINATION_DOG.LIMIT_DOG,
      paginationDog.currentPageDog * PAGINATION_DOG.LIMIT_DOG
    );
    setDogPage((pre) => (pre = newDog));
  }, [dogs, paginationDog.currentPageDog, paginationDog.totalPageDog]);

  return (
    <div className="page-home_alldog">
      <div className="page-home_alldog-title">
        <h4>HELLO, WE ARE CUTE DOGS</h4>
        <div className="search-and-select-by-price">
          <Input
            type="text"
            className="search-input-all-cat"
            placeholder="Search for..."
            value={inputFilterDog}
            onChange={(e) => onHandleSearchDog(e.target.value)}
          />
          <Select
            className="select-by-price"
            onChange={(e) => onHandleSortPrice(e.target.value)}
          >
            <option value="none">Sort By Price</option>
            <option value="increase">Price Increase</option>
            <option value="decrease">Price Decrease</option>
          </Select>
        </div>
      </div>
      <div className="container-fluid show-card">
        <div className="row ">
          {dogPage.map((item, index) => (
            <div className="col-xl-3 col-md-3 col-sm-3 col-6 cards" key={index}>
              <Card
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
