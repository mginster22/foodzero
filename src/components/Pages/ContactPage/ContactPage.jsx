import React from "react";
import Header from "../../Header/Header";
import DateWrapper from "./DateWrapper/DateWrapper";
import Location from "./Location/Location";
import ReservatiomForm from '../../Forms/ReservatiomForm/ReservatiomForm';

const ContactPage = () => {
  return (
    <div>
      <div>
        <Header
          title="Get in Touch"
          subtitle="The freshest ingredients for you every day"
          backgroundimage="/images/contact.png"
        >
          <DateWrapper />
        </Header>
        <Location/>
        <ReservatiomForm/>
      </div>
    </div>
  );
};

export default ContactPage;
