import React from "react";
import s from "./Blog.module.scss";

const Blog = ({ blog }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.imageBlock}>
        <img src={blog.image} alt="food" />
      </div>
      <div style={{ padding: "0 15px" }}>
        <div className={s.userComents}>
          <div className={s.avatar}>
            <img src={blog.avatar} alt="avatar" />
          </div>
          <p>{blog.author}</p>
          <span>.</span>
          <p>{blog.date}</p>
          <span>.</span>
          <p>{blog.time}</p>
          <span>.</span>
          <p>{blog.comments}</p>
        </div>
        <div className={s.info}>
          <p className={s.title}>{blog.title}</p>
          <p className={s.doted}></p>
          <p className={s.subTitle}>{blog.excerpt}</p>
        </div>
        <div className={s.buttonMore}>
          <button>Read more</button>
          <div>
            <img
              src="/images/arrow.png"
              style={{ width: "29px" }}
              alt="arrow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
