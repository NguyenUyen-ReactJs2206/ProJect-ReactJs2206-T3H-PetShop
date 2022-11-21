import React from "react";
import { Pagination } from "react-bootstrap";

export default function PaginationDog({
  onChangePageDog,
  totalPageDog,
  currentPageDog,
}) {
  const arrPageDog = [];
  for (let i = 1; i <= totalPageDog; i++) {
    arrPageDog.push(i);
  }
  return (
    <Pagination className="pagination">
      <Pagination.Prev
        className="pagination-prev"
        onClick={() => {
          if (currentPageDog > 1) {
            onChangePageDog(currentPageDog - 1);
          }
        }}
      />
      {arrPageDog.map((el) => (
        <Pagination.Item
          className="pagination-item"
          onClick={() => onChangePageDog(el)}
          key={el}
          active={currentPageDog === el}
        >
          {el}
        </Pagination.Item>
      ))}

      <Pagination.Next
        className="pagination-next"
        onClick={() => {
          if (currentPageDog < totalPageDog) {
            onChangePageDog(currentPageDog + 1);
          }
        }}
      />
    </Pagination>
  );
}
