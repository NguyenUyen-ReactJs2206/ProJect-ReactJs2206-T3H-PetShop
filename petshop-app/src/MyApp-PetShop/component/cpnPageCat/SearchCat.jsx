import React from "react";
import { Dropdown } from "react-bootstrap";

export default function SearchCat({
  onSearchCat,
  inputCat,
  menuCats,
  selectedCat,
  onSelectCat,
}) {
  return (
    <div>
      <div className="wrapper">
        <div className="search-wrapper">
          <label htmlFor="search-form">
            <input
              type="search"
              name="search-form"
              id="search-form"
              className="search-input"
              placeholder="Search for..."
              value={inputCat}
              onChange={(e) => onSearchCat(e)}
            />
          </label>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {selectedCat}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {menuCats.length > 0 &&
                menuCats.map((Val, id) => {
                  return (
                    <Dropdown.Item onClick={() => onSelectCat(Val)} key={id}>
                      {Val}
                    </Dropdown.Item>
                  );
                })}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
