import React from "react";
import s from "./ReservatiomForm.module.scss";
import DateTimePersonPicker from "./DateTimePersonPicker/DateTimePersonPicker";

const ReservatiomForm = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.text}>
          <p className={s.title}>Make a Reservation</p>
          <p className={s.subtitle}>Get in touch with restaurant</p>
        </div>
        <form className={s.reservForm}>
          <div className={s.formInput}>
            <DateTimePersonPicker />
          </div>
          <button className={s.buttonBuy}>Book Now</button>
        </form>
      </div>
    </div>
  );
};

export default ReservatiomForm;
