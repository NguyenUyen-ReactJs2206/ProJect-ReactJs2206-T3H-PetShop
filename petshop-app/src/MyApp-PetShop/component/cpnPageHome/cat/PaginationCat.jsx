import React from "react";
import { Pagination } from "react-bootstrap";

export default function PaginationCat({
  onChangePageCat,
  totalPageCat,
  currentPageCat,
}) {
  // tạo ra 1 mảng các trang: vd: 10 => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const arrPageCat = [];
  for (let i = 1; i <= totalPageCat; i++) {
    arrPageCat.push(i);
  }
  return (
    <Pagination className="pagination">
      <Pagination.Prev
        className="pagination-prev"
        onClick={() => {
          if (currentPageCat > 1) {
            onChangePageCat(currentPageCat - 1);
          }
        }}
      />
      {arrPageCat.map((el) => (
        <Pagination.Item
          className="pagination-item"
          onClick={() => onChangePageCat(el)}
          key={el}
          active={currentPageCat === el}
        >
          {el}
        </Pagination.Item>
      ))}

      <Pagination.Next
        className="pagination-next"
        onClick={() => {
          if (currentPageCat < totalPageCat) {
            onChangePageCat(currentPageCat + 1);
          }
        }}
      />
    </Pagination>
  );
}
