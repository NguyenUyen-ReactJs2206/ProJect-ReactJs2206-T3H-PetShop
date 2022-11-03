import React, { useEffect, useState } from "react";
import DropdowSelectInput from "../component/DropdowSelectInput";
import InputDog from "../component/InputDog";
import ListDog from "../component/ListDog";
import Pagination from "../component/Pagination";
import { KEY_SEARCH } from "../constants";

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
export default function Dogs({ allPet, setAllPet }) {
  // tạo keySearch ban đầu là first_name cho dropdow
  const [keySearch, setKeySearch] = useState(KEY_SEARCH.USER_NAME);
  const [valueInputSearch, setValueInputSearch] = useState("");

  const onSelectKeySearch = (keyName) => {
    setKeySearch((pre) => (pre = keyName));
  };
  const onSearchPet = (valueInput) => {
    console.log("valueInput của file Dogs", valueInput);
    setValueInputSearch((pre) => (pre = valueInput));
  };

  useEffect(() => {
    console.log(
      "allpet lenght file Dogs",
      [...allPet][0]?.dogs[0]?.alaska.length
    );
    console.log("valueInputSearch", valueInputSearch, "keySearch", keySearch);

    const data = [...allPet][0]?.dogs[0]?.alaska.filter((item) =>
      valueInputSearch ? item[keySearch] === valueInputSearch : true
    );
    if (data) {
      setAllPet([...data]);
    }
    console.log("data", data);
  }, [valueInputSearch, keySearch]);

  return (
    <div className="m-4">
      <div className="container flex mb-2">
        <div className="row">
          <div className="col-8">
            {" "}
            <InputDog onSearchPet={(e) => onSearchPet(e.target.value)} />
          </div>
          <div className="col-4">
            {" "}
            <DropdowSelectInput
              title={keySearch}
              petSearch={listPetSearch}
              onSelect={onSelectKeySearch}
            />
          </div>
        </div>
      </div>
      <ListDog pets={allPet} />
      <Pagination />
    </div>
  );
}
