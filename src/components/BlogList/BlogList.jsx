import React, { useState } from "react";
import data from "../../assets/data/blog.json";
import Blog from "../Blog/Blog";
import s from "./BlogList.module.scss";
import ReactPaginate from "react-paginate";

const BlogList = ({ showAll = false, pagination = false }) => {
  const itemsPerPage = 6;  // Количество элементов на странице
  const [itemOffset, setItemOffset] = useState(0);

  // Если showAll - показываем все данные, если нет, показываем только два первых элемента
  const blogsToShow = showAll ? data : data.slice(0, 2);

  // Для пагинации
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <div>
      <div className={s.blog}>
        {pagination
          ? currentItems.map((blog) => <Blog key={blog.id} blog={blog} />)  // Для пагинации отображаем элементы с учетом сдвига
          : blogsToShow.map((blog) => <Blog key={blog.id} blog={blog} />)}    
      </div>
      
      {/* Если активирована пагинация, показываем компонент пагинации */}
      {pagination && (
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next"
          previousLabel="Prev"
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={s.pagination}
          activeClassName={s.active}
          pageClassName={s.page}
          previousClassName={s.page}
          nextClassName={s.page}
          breakClassName={s.page}
          renderOnZeroPageCount={null}
        />
      )}
    </div>
  );
};

export default BlogList;
