import React from "react";
import Starters from "./Starters/Starters";
import Mains from "./Mains/Mains";
import Drinks from "./Drinks/Drinks";
import ReservatiomForm from "../../Forms/ReservatiomForm/ReservatiomForm";
import Header from "../../Header/Header";
const MenuPage = () => {
  return (
    <div>
      <Header
        title="View Our New Menu"
        subtitle="The freshest ingredients for you every day"
        backgroundimage="/images/menupage.png"
      />
      <Starters />
      <Mains />
      <Drinks />
      <ReservatiomForm />
    </div>
  );
};

export default MenuPage;
