import React from "react";
import s from "./DateWrapper.module.scss";

const DateWrapper = () => {
  return (
    <div className={s.datewrapper}>
      <div className={s.date}>
        <p>Open Time</p>
        <p>Sunday - Friday</p>
      </div>
      <div className={s.dotted}></div>
      <div className={s.time}>
        <p>
          Brunch <br />
          11:00–12:00
        </p>
        <p>
          Lunch <br />
          13:00–17:00
        </p>
        <p>
          Dinner <br />
          18:00–20:00
        </p>
      </div>
    </div>
  );
};

export default DateWrapper;
