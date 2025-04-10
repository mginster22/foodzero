import React from "react";
import ReservatiomForm from "../../Forms/ReservatiomForm/ReservatiomForm";
import Header from "../../Header/Header";

const AboutPage = () => {
  return (
    <div>
      <Header
        backgroundimage="/images/about.png"
        title="Who We Are"
        subtitle="The most important thing for us is to give you the comfortable dining experience"
        classNames={true}
      />
      <ReservatiomForm />
    </div>
  );
};

export default AboutPage;
