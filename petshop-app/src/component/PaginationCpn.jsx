import React from 'react'
import { Pagination } from 'react-bootstrap';


export default function PaginationCpn({
  totalPage,
  currentPage,
  onChangePage,
}) {
  // tạo ra 1 mảng các trang: vd: 10 => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const arrPages = [];
  for (let i = 1; i <= totalPage; i++) {
    arrPages.push(i);
  } 
  return (
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      {arrPages.map((el) => (
        <Pagination.Item
          onClick={() => onChangePage(el)}
          key={el}
          active={currentPage === el}
        >
          {el}
        </Pagination.Item>
      ))}

      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}