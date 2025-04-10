import React from "react";
import s from "./HomePage.module.scss";
import HeaderBlock from "./HeaderBlock/HeaderBlock";
import MenuBlock from "./MenuBlock/MenuBlock";
import ChefBlock from "./ChefBlock/ChefBlock";
import Features from "./Features/Features";
import RecentPostBlock from "./RecentPostBlock/RecentPostBlock";
import BlogList from "../../BlogList/BlogList";
import ReservatiomForm from "../../Forms/ReservatiomForm/ReservatiomForm";
import CategoryBlock from "./CategoryBlock/CategoryBlock";

const HomePage = () => {
  return (
    <div className="">
      <HeaderBlock />
      <MenuBlock />
      <ChefBlock />
      <Features />
      <RecentPostBlock />
      <BlogList showAll={false} />
      <ReservatiomForm />
      <CategoryBlock />
    </div>
  );
};

export default HomePage;
