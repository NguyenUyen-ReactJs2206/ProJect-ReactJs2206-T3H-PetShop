import React, { useEffect, useMemo, useState } from "react";
import { listDog } from "../api";
import ListDog from "../component/cpnPageDog/ListDog";
import SearchDog from "../component/cpnPageDog/SearchDog";
import { menuDog } from "../helper/help";
import "../css/pagedog.css";
import InformationPet from "../component/cpnPageHome/InformationPet";
import Footer from "../component/Footer";

export default function Dogs({
  selectedDog,
  onSelectDog,
  onClickAddCart,
  showInformationProduct,
  setShowInformationProduct,
  onHandleShowInfomationDog,
  showInforCard,
}) {
  const menuDogs = useMemo(() => menuDog(), []);
  const [dogs, setDogs] = useState(listDog);
  const [inputDog, setInputDog] = useState("");

  const onSearchDog = (e) => {
    const keySearch = e.target.value;
    setInputDog(keySearch);
  };

  useEffect(() => {
    const result = listDog.filter(
      (el) =>
        (el.typeOf === selectedDog &&
          el.name.toLocaleLowerCase().includes(inputDog)) ||
        (el.typeOf === selectedDog &&
          el.name.toLocaleUpperCase().includes(inputDog))
    );
    setDogs(result);
  }, [inputDog, selectedDog]);
  return (
    <>
      {" "}
      {showInformationProduct ? (
        <div className="page-dogs">
          {" "}
          <div className="title-page-dog">
            {" "}
            <h3>HELLO. I'M DOG!</h3>
          </div>
          <SearchDog
            inputDog={inputDog}
            onSearchDog={onSearchDog}
            selectedDog={selectedDog}
            menuDogs={menuDogs}
            onSelectDog={onSelectDog}
          />
          <ListDog
            dogs={dogs}
            onClickAddCart={onClickAddCart}
            onHandleShowInfomationDog={onHandleShowInfomationDog}
          />
        </div>
      ) : (
        <InformationPet
          onClickAddCart={onClickAddCart}
          setShowInformationProduct={setShowInformationProduct}
          showInforCard={showInforCard}
        />
      )}
      <Footer />
    </>
  );
}
