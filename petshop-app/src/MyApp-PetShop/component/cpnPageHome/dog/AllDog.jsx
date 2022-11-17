import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { listDog } from "../../../api";
import { PAGINATION_DOG } from "../../../helper/constants";
import PaginationDog from "./PaginationDog";
import styled from "styled-components";

const Input = styled.input`
  border: 1px solid none;
  border-radius: 2px;
  margin-right: 10px;
  padding: 5px;
`;
const Select = styled.select`
  border: 1px solid none;
  border-radius: 2px;
  padding: 5px;
`;
export default function AllDog({ onClickAddCart }) {
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
  //Search and Filter Dog - Bị chậm vài nhịp
  const onHandleSearchDog = (keySearchFilter) => {
    setInputFilterDog(keySearchFilter);

    let listDogFilter = [...listDog];
    let resultFilterDog = [];
    if (inputFilterDog === "") {
      setDogs(listDog);
      setPaginationDog({
        ...paginationDog,
        currentPageDog: PAGINATION_DOG.CURRENT_PAGE_DOG,
        totalPageDog: Math.ceil(listDog.length / PAGINATION_DOG.LIMIT_DOG),
      });
    }
    if (inputFilterDog) {
      resultFilterDog = listDogFilter.filter((element) => {
        return element.name.toLocaleLowerCase().includes(inputFilterDog);
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
    console.log(newDog);
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
                <Button variant="primary" onClick={() => onClickAddCart(item)}>
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
