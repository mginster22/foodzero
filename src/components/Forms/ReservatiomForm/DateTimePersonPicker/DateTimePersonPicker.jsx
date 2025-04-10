import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoChevronDown } from "react-icons/io5";
import s from "./DateTimePersonPicker.module.scss";

const peopleOptions = [
  "1 Person",
  "2 Person",
  "3 Person",
  "4 Person",
  "5 Person",
  "6 Person",
];

const DateTimePersonPicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [selectedPeople, setSelectedPeople] = useState("2 Person");
  const [showPeopleDropdown, setShowPeopleDropdown] = useState(false);

  return (
    <div className={s.dtpwrapper}>
      {/* Дата */}
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="MM/dd/yyyy"
        className={s.custominput}
        popperPlacement="bottom-start"
        portalId="root"
      />

      {/* Время */}
      <DatePicker
        selected={selectedTime}
        onChange={(date) => setSelectedTime(date)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="h:mm aa"
        className={s.custominput}
        popperPlacement="bottom-start"
        portalId="root"
      />

      {/* Кол-во персон */}
      <div className={s.customselect}>
        <div
          className={s.customselectheader}
          onClick={() => setShowPeopleDropdown(!showPeopleDropdown)}
        >
          {selectedPeople}
          <IoChevronDown className={s.arrow} />
        </div>
        {showPeopleDropdown && (
          <ul className={s.customselectlist}>
            {peopleOptions.map((option) => (
              <li
                key={option}
                className={s.person}
                onClick={() => {
                  setSelectedPeople(option);
                  setShowPeopleDropdown(false);
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DateTimePersonPicker;
