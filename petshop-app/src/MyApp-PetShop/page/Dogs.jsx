import React, { useEffect, useState } from "react";
import { listDog } from "../api";
import ListDog from "../component/ListDog";
import SearchDog from "../component/SearchDog";
import { PAGINATION_DOG } from "../helper/constants";

export default function Dogs() {
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
    <div className="m-4 page-dog">
      <SearchDog />
      <ListDog
        dogPage={dogPage}
        onChangePageDog={onChangePageDog}
        totalPageDog={paginationDog.totalPageDog}
        currentPageDog={paginationDog.currentPageDog}
      />
    </div>
  );
}
