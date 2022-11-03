import React, { useEffect, useState } from "react";
import DropdowSelectInput from "../component/DropdowSelectInput";
import InputDog from "../component/InputDog";
import ListDog from "../component/ListDog";

export default function Dogs({
  petPage,
  onSearchPet,
  keySearch,
  listPetSearch,
  onSelectKeySearch,
  onChangePage,
  totalPage,
  currentPage,
}) {
  console.log("listPets Dogs", petPage);

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
      <ListDog
        petPage={petPage}
        onChangePage={onChangePage}
        totalPage={totalPage}
        currentPage={currentPage}
      />
    </div>
  );
}
