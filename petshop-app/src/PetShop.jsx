import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./page/Home";
import Dogs from "./page/Dogs";
import Cats from "./page/Cats";
import Order from "./page/Order";
import Cart from "./page/Cart";
import { listPets } from "./api";
import { KEY_SEARCH, PAGINATION } from "./constants";

const listPetSearch = [
  {
    name: "Name",
    key: KEY_SEARCH.USER_NAME,
  },
  {
    name: "Price Current",
    key: KEY_SEARCH.PRICE_CURRENT,
  },
];
export default function PetShop() {
  const [pets, setPet] = useState([...listPets]);

  // console.log("listPet", pets);

  // tạo keySearch ban đầu là first_name cho dropdow
  const [keySearch, setKeySearch] = useState(KEY_SEARCH.USER_NAME);
  const [valueInputSearch, setValueInputSearch] = useState("");
  //Pagination
  //state lưu 1 page gồm 4 card
  const [petPage, setPetPage] = useState(listPets.slice(0, PAGINATION.LIMIT));
  // tổng số item:12 => 3 trang, 1 trang gồm 4 item   => totalPage = Math.ceil(allPet.length/limit)
  const [pagination, setPagination] = useState({
    totalPage: Math.ceil(listPets.length / PAGINATION.LIMIT),
    currentPage: PAGINATION.CURRENT_PAGE,
  });

  const onSelectKeySearch = (keyName) => {
    setKeySearch((pre) => (pre = keyName));
    console.log("keyName", keyName, "keySearch",keySearch)
  };
  const onSearchPet = (valueInput) => {
    // console.log("valueInput của file Dogs", valueInput);
    setValueInputSearch((pre) => (pre = valueInput));
  };

  const onChangePage = (currentPage) => {   
    setPagination((pre) => ({
      ...pre,
      currentPage,
    }));
    console.log("currentPage of OnChange", currentPage)
  }; 

  useEffect(() => {
    // console.log(
    //   "listPet lenght file Dogs",
    //   [...listPets][0]?.dogs[0]?.alaska.length
    // );
    // console.log("valueInputSearch", valueInputSearch, "keySearch", keySearch);

    //Search, pagination for dog Alaska
    const dataAlaska = [...listPets][0]?.dogs[0]?.alaska.filter((item) =>
      valueInputSearch ? item[keySearch] === valueInputSearch : true
    );
    if (dataAlaska) {
      setPet([...dataAlaska]);

      setPagination({
        ...pagination,
        currentPage: PAGINATION.CURRENT_PAGE,
        totalPage: Math.ceil(dataAlaska.length / PAGINATION.LIMIT),
      });
    }
    // console.log("dataAlaska", dataAlaska);
  }, [valueInputSearch, keySearch]);

  useEffect(() => {
    // console.log("pets", pets);
    const newPet = [...pets].slice(
    (pagination.currentPage - 1) * PAGINATION.LIMIT,
      pagination.currentPage * PAGINATION.LIMIT
    )
    // console.log("tham so 1",(pagination.currentPage - 1) * PAGINATION.LIMIT)
    // console.log("tham so 2",pagination.currentPage * PAGINATION.LIMIT)
    // console.log("pagination.currentPage",pagination.currentPage)
    // console.log("newwpet", newPet)
    setPetPage((pre) => (pre = newPet)); 
    console.log("petPage", petPage)
  }, [pagination.currentPage, pagination.totalPage]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home allPet={listPets} />}></Route>
        <Route path="/home" element={<Home allPet={listPets} />}></Route>
        <Route
          path="/dogs"
          element={
            <Dogs
              petPage={petPage}
              onSearchPet={(e) => onSearchPet(e.target.value)}
              keySearch={keySearch}
              listPetSearch={listPetSearch}
              onSelectKeySearch={onSelectKeySearch}
              onChangePage={onChangePage}
              totalPage={pagination.totalPage}
              currentPage={pagination.currentPage}
            />
          }
        ></Route>
        <Route path="/cats" element={<Cats allPet={listPets} />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
