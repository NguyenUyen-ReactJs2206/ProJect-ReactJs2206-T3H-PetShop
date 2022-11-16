import React from 'react'
import { Dropdown } from 'react-bootstrap';
import "../.././css/search.css"
export default function SearchDog( {
  onSearchDog,
  inputDog,
  menuDogs,
  selectedDog,
  onSelectDog,
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
              value={inputDog}
              onChange={(e) => onSearchDog(e)}
            />
          </label>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            {selectedDog}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {menuDogs.length > 0 &&
                menuDogs.map((Val, id) => {
                  return (
                    <Dropdown.Item onClick={() => onSelectDog(Val)} key={id}>
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

