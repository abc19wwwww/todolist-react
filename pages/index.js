import { useState } from "react";
import Head from "next/head";
// 套件
import DatePicker from "react-datepicker";
// icons
import { FaPlus, FaCalendarAlt } from "react-icons/fa";
// styles
import "react-datepicker/dist/react-datepicker.css";

export default function Home() {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const handleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  return (
    <>
      <Head>
        <title>todolist-react</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container">
          {/* title */}
          <div className="title">
            <h1 className="fw-bold">代辦事項</h1>
          </div>
          {/* content */}
          <div className="content">
            <div className="creat">
              <input type="text" />
              <button className="fa-calendar-btn" onClick={handleDatePicker}>
                <FaCalendarAlt />
              </button>
              {showDatePicker ? (
                <div className="date-picker">
                  <DatePicker
                    inline
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    popperClassName="my-popper"
                  />
                </div>
              ) : (
                ""
              )}
              <button className="fa-plus-btn">
                <FaPlus />
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
