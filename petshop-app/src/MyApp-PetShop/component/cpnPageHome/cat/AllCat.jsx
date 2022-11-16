import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { listCat } from '../../../api';
import { PAGINATION_CAT } from '../../../helper/constants';
import PaginationCat from './PaginationCat';

export default function AllCat({ onClickAddCart }) {
     //Phân trang cho Cat
   const [cats, setCats] = useState([...listCat]);
   //Pagination -- state lưu 1 page gồm 4 card
   const [catPage, setCatPage] = useState(
     listCat.slice(0, PAGINATION_CAT.LIMIT_CAT)
   );
 
   // tổng số item:12 => 3 trang, 1 trang gồm 4 item   => totalPage = Math.ceil(allPet.length/limit)
   const [paginationCat, setPaginationCat] = useState({
     totalPageCat: Math.ceil(listCat.length / PAGINATION_CAT.LIMIT_CAT),
     currentPageCat: PAGINATION_CAT.CURRENT_PAGE_CAT,
   });
 
   const onChangePageCat = (currentPageCat) => {
     setPaginationCat((pre) => ({
       ...pre,
       currentPageCat,
     }));
   };
   useEffect(() => {
     const dataCat = [...listCat];
     setCats([...dataCat]);
 
     setPaginationCat({
       ...paginationCat,
       currentPageCat: PAGINATION_CAT.CURRENT_PAGE_CAT,
       totalPageCat: Math.ceil(dataCat.length / PAGINATION_CAT.LIMIT_CAT),
     });
   }, []);
 
   useEffect(() => {
     const newCat = [...cats].slice(
       (paginationCat.currentPageCat - 1) * PAGINATION_CAT.LIMIT_CAT,
       paginationCat.currentPageCat * PAGINATION_CAT.LIMIT_CAT
     );
     console.log(newCat);
     setCatPage((pre) => (pre = newCat));
   }, [paginationCat.currentPageCat, paginationCat.totalPageCat]);
  return (
    <div className="page-home_allcat">
    <div className="page-home_allcat-title">
      <h4>HELLO, WE ARE CUTE CATS</h4>
    </div>
    <div className="container show-card">
      <div className="row ">
        {catPage.map((item, index) => (
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
                ))}{" "}
                <PaginationCat
                  onChangePageCat={onChangePageCat}
                  totalPageCat={paginationCat.totalPageCat}
                  currentPageCat={paginationCat.currentPageCat}
                />
              </div>
            </div>
          </div>
  )
}
