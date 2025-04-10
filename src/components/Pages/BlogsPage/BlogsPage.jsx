import React from "react";
import Header from "../../Header/Header";
import BlogList from "../../BlogList/BlogList";

const BlogsPage = () => {
  return (
    <div >
      <Header
        backgroundimage="/images/blogs.png"
        title="Blogs - Two Columns"
        subtitle="It is easy way to create your beatiful blog for daily"
        textCenter={true}
      />
      
      <BlogList showAll={true} pagination={true}/>
    </div>
  );
};

export default BlogsPage;
