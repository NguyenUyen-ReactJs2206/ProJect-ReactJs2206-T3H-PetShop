import React from 'react'
import ".././css/searchDog.css"
export default function SearchDog() {
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
        // value={q}
        // onChange={(e) => setQ(e.target.value)}
      />
    </label>

    <div className="select">
      <select
        // onChange={(e) => {
        //   setFilterParam(e.target.value);
        // }}
        className="custom-select"
        aria-label="Filter Countries By Region"
      >
        <option value="All">Filter By Name</option>
        <option value="Alaska">Alaska</option>
        <option value="Poodle">Poodle</option>
      </select>
      <span className="focus"></span>
    </div>
  </div>
</div>
</div>
  )
}
