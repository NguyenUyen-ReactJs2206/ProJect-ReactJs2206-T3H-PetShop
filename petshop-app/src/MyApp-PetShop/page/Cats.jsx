import React, { useEffect, useMemo, useState } from "react";
import { listCat } from "../api";
import ListCat from "../component/cpnPageCat/ListCat";
import SearchCat from "../component/cpnPageCat/SearchCat";
import { menuCat } from "../helper/help";
import "../css/pagecat.css";
import InformationPet from "../component/cpnPageHome/InformationPet";
import Footer from "../component/Footer";
export default function Cats({
  selectedCat,
  onSelectCat,
  onClickAddCart,
  showInformationProduct,
  setShowInformationProduct,
  onHandleShowInfomationCat,
  showInforCard,
}) {
  const menuCats = useMemo(() => menuCat(), []);
  const [cats, setCats] = useState(listCat);
  const [inputCat, setInputCat] = useState("");

  const onSearchCat = (e) => {
    const keySearch = e.target.value;
    setInputCat(keySearch);
  };

  useEffect(() => {
    const result = listCat.filter(
      (el) =>
        (el.typeOf === selectedCat &&
          el.name.toLocaleLowerCase().includes(inputCat)) ||
        (el.typeOf === selectedCat &&
          el.name.toLocaleUpperCase().includes(inputCat))
    );
    setCats(result);
  }, [inputCat, selectedCat]);

  return (
    <>
      {" "}
      <div className="page-cats">
        {showInformationProduct ? (
          <>
            {" "}
            <div className="title-page-dog">
            {" "}
            <h3>HELLO. I'M CAT!</h3>
          </div>
            <SearchCat
              inputCat={inputCat}
              onSearchCat={onSearchCat}
              selectedCat={selectedCat}
              menuCats={menuCats}
              onSelectCat={onSelectCat}
            />
            <ListCat
              cats={cats}
              onClickAddCart={onClickAddCart}
              onHandleShowInfomationCat={onHandleShowInfomationCat}
            />
          </>
        ) : (
          <InformationPet
            onClickAddCart={onClickAddCart}
            setShowInformationProduct={setShowInformationProduct}
            showInforCard={showInforCard}
          />
        )}
      </div>
      <Footer/>
    </>
  );
}
