import React, { useEffect, useState } from "react";
import { listCat } from "../api";
import ListCat from "../component/ListCat";
import SearchCat from "../component/SearchCat";

export default function Cats() {
  const [cats, setCats] = useState(listCat);
  const [inputCat, setInputCat] = useState("");
  const [selectedCat, setSelectedCat] = useState("British Longhair");
  //filter and categorize cats
  const menuCat = [...new Set(listCat.map((Val) => Val.typeOf))];
  const onSearchCat = (e) => {
    const keySearch = e.target.value.toLowerCase() || e.target.value.toUpperCase();
    console.log(keySearch,"keySearch")
    setInputCat(keySearch);
  };

  const filterCat = (curcat) => {
    console.log(curcat, "curcat");
    setSelectedCat(curcat);
  };

  useEffect(() => {
    console.log(selectedCat,"selectedCat")
    const result = listCat.filter(
      (el) => el.typeOf === selectedCat && el.name.toLowerCase().includes(inputCat)
    );
    console.log(result, "result")

    setCats(result)
  }, [inputCat, selectedCat]);

  return (
    <>
      <SearchCat
        inputCat={inputCat}
        onSearchCat={onSearchCat}
        setCats={setCats}
        listCat={listCat}
        menuCat={menuCat}
        filterCat={filterCat}
      />
      <ListCat cats={cats} />
    </>
  );
}
