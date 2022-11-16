import React from "react";
import { Pagination } from "react-bootstrap";
import "../../../css/pagination.css";

export default function PaginationDog({
  onChangePageDog,
  totalPageDog,
  currentPageDog,
}) {
  // tạo ra 1 mảng các trang: vd: 10 => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
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
