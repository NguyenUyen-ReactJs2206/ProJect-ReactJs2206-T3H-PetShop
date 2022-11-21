import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { listCat } from "../../../api";
import { PAGINATION_CAT } from "../../../helper/constants";
import PaginationCat from "./PaginationCat";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Input = styled.input`
  border-radius: 10px;
  border: 1px solid;
  margin-left: 20px;
  padding: 5px;
`;
const Select = styled.select`
  border-radius: 10px;
  border: 1px solid;
  padding: 8px;
  margin-left: 20px;
`;
export default function AllCat({ onClickAddCart, onHandleShowInfomationCat }) {
  const [cats, setCats] = useState([...listCat]);
  //Search for All Cat
  const [inputFilterCat, setInputFilterCat] = useState("");
  //Pagination -- state save 1 page: 4 item
  const [catPage, setCatPage] = useState(
    listCat.slice(0, PAGINATION_CAT.LIMIT_CAT)
  );
  // Total item: 24 => 6 page, 1page inclue 4 item   => totalPage = Math.ceil(listCat.length/limit)
  const [paginationCat, setPaginationCat] = useState({
    totalPageCat: Math.ceil(listCat.length / PAGINATION_CAT.LIMIT_CAT),
    currentPageCat: PAGINATION_CAT.CURRENT_PAGE_CAT,
  });
  //Search and Filter Cat - Bị chậm vài nhịp
  const onHandleSearchCat = (keySearchFilter) => {
    setInputFilterCat(keySearchFilter);

    let listCatFilter = [...cats];
    let resultFilterCat = [];
    if (keySearchFilter === "") {
      setCats(listCat);
      setPaginationCat({
        ...paginationCat,
        currentPageCat: PAGINATION_CAT.CURRENT_PAGE_CAT,
        totalPageCat: Math.ceil(listCat.length / PAGINATION_CAT.LIMIT_CAT),
      });
    }
    if (keySearchFilter) {
      resultFilterCat = listCatFilter.filter((element) => {
        return element.name
          .toLocaleUpperCase()
          .includes(keySearchFilter.toLocaleUpperCase());
      });
      setCats(resultFilterCat);
      setPaginationCat({
        ...paginationCat,
        currentPageCat: PAGINATION_CAT.CURRENT_PAGE_CAT,
        totalPageCat: Math.ceil(
          resultFilterCat.length / PAGINATION_CAT.LIMIT_CAT
        ),
      });
    }
  };

  const onHandleSortPrice = (value) => {
    let listCatSort = [...listCat];
    let resultSortCat = [];
    if (value === "increase") {
      resultSortCat = listCatSort.sort((a, b) => {
        return a.priceCurrent - b.priceCurrent;
      });
      setCats(resultSortCat);
    }
    if (value === "decrease") {
      resultSortCat = listCatSort.sort((a, b) => {
        return b.priceCurrent - a.priceCurrent;
      });
      setCats(resultSortCat);
    }
    if (value === "none") {
      resultSortCat = [...listCat];
      setCats(resultSortCat);
    }
    setPaginationCat({
      ...paginationCat,
      currentPageCat: PAGINATION_CAT.CURRENT_PAGE_CAT,
      totalPageCat: Math.ceil(resultSortCat.length / PAGINATION_CAT.LIMIT_CAT),
    });
  };

  //Divide data by each element
  const onChangePageCat = (currentPageCat) => {
    setPaginationCat((pre) => ({
      ...pre,
      currentPageCat,
    }));
  };
  //Slice start, end
  useEffect(() => {
    const newCat = [...cats].slice(
      (paginationCat.currentPageCat - 1) * PAGINATION_CAT.LIMIT_CAT,
      paginationCat.currentPageCat * PAGINATION_CAT.LIMIT_CAT
    );
    setCatPage((pre) => (pre = newCat));
  }, [cats, paginationCat.currentPageCat, paginationCat.totalPageCat]);

  return (
    <div className="page-home_allcat">
      <div className="page-home_allcat-title">
        <h4>HELLO, WE ARE CUTE CATS</h4>
        <div className="search-and-select-by-price">
          <Input
            type="text"
            className="search-input-all-cat"
            placeholder="Search for..."
            value={inputFilterCat}
            onChange={(e) => onHandleSearchCat(e.target.value)}
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
          {catPage.map((item, index) => (
            <div className="col-xl-3 col-lg-3 col-sm-3 col-6 cards" key={index}>
              <Card
                onClick={() => onHandleShowInfomationCat(item)}
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
          ))}{" "}
          <PaginationCat
            onChangePageCat={onChangePageCat}
            totalPageCat={paginationCat.totalPageCat}
            currentPageCat={paginationCat.currentPageCat}
          />
        </div>
      </div>
    </div>
  );
}
