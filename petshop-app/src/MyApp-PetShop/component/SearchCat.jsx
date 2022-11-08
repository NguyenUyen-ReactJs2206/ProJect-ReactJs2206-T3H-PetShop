import React from "react";
import { Button, Dropdown } from "react-bootstrap";
import ".././css/searchDog.css";

export default function SearchCat({
  onSearchCat,
  inputCat,
  setCats,
  listCat,
  menuCat,
  filterCat,
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
             All
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-3" onClick={() => setCats(listCat)}>
                All
              </Dropdown.Item>
              {menuCat.map((Val, id) => {
                return (
                  <Dropdown.Item
                    href="#/action-3"
                    onClick={() => filterCat(Val)}
                    key={id}
                  >
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
