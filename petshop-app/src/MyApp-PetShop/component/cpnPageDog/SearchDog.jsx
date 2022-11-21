import React from "react";
import { Dropdown } from "react-bootstrap";

export default function SearchDog({
  onSearchDog,
  inputDog,
  menuDogs,
  selectedDog,
  onSelectDog,
}) {
  return (
    <div>
        <div className="search-wrapper">
          <label htmlFor="search-form">
            <input
              type="search"
              name="search-form"
              id="search-form"
              className="search-input"
              placeholder="Search for..."
              value={inputDog}
              onChange={(e) => onSearchDog(e)}
            />
          </label>

          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              className="dropdown-selected"
            >
              {selectedDog}
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu">
              {menuDogs.length > 0 &&
                menuDogs.map((Val, id) => {
                  return (
                    <Dropdown.Item className="dropdown-item" onClick={() => onSelectDog(Val)} key={id}>
                      {Val}
                    </Dropdown.Item>
                  );
                })}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
  );
}
