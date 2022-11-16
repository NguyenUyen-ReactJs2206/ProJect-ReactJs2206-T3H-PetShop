import React, { useEffect, useMemo, useState } from "react";
import { listDog } from "../api";
import ListDog from "../component/cpnPageDog/ListDog";
import SearchDog from "../component/cpnPageDog/SearchDog";
import { menuDog } from "../helper/help";
import "../css/pagedog.css"

export default function Dogs({ selectedDog, onSelectDog, onClickAddCart  }) {
  const menuDogs = useMemo(() => menuDog(), []);
  const [dogs, setDogs] = useState(listDog);
  const [inputDog, setInputDog] = useState("");

  const onSearchDog = (e) => {
    const keySearch = e.target.value;
    console.log(keySearch, "keySearch");
    setInputDog(keySearch);
  };

  useEffect(() => {
    console.log(selectedDog, "selectedDog");
    const result = listDog.filter(
      (el) =>
        (el.typeOf === selectedDog &&
          el.name.toLocaleLowerCase().includes(inputDog)) ||
        (el.typeOf === selectedDog &&
          el.name.toLocaleUpperCase().includes(inputDog))
    );
    console.log(result, "result");

    setDogs(result);
  }, [inputDog, selectedDog]);
  return (
    <div className="page-dog">
       <h3>HELLO. I'M DOG!</h3>
      <SearchDog
        inputDog={inputDog}
        onSearchDog={onSearchDog}
        selectedDog={selectedDog}
        menuDogs={menuDogs}
        onSelectDog={onSelectDog}
      />
      <ListDog dogs={dogs} onClickAddCart={onClickAddCart} />
    </div>
  );
}
