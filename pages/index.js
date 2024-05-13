import { useState } from "react";
import Head from "next/head";
// 套件
import DatePicker from "react-datepicker";
import Modal from "react-modal";
// icons
import { FaPlus, FaCalendarAlt } from "react-icons/fa";
// styles
import "react-datepicker/dist/react-datepicker.css";

Modal.setAppElement("#__next");

export default function Home() {
  const [modalIsOpen, setIsOpen] = useState(false); // modla 開關
  const [showDatePicker, setShowDatePicker] = useState(false); // 月曆開關
  const [startDate, setStartDate] = useState(new Date()); // 月曆預設日期
  // modla 開關
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
    setShowDatePicker(!showDatePicker);
  }

  // 月曆開關
  const handleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
    // 576 以下才開啟 modla
    if (window.innerWidth <= 576) {
      openModal();
    }
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
              {/* 電腦版月曆 */}
              {showDatePicker ? (
                <div className="d-none d-sm-block date-picker">
                  <DatePicker
                    inline
                    showTimeSelect
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    popperClassName="my-popper"
                  />
                </div>
              ) : (
                ""
              )}
              {/* 手機版月曆 */}
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className={`d-block d-sm-none modal`}
                overlayClassName={`overlay`}
              >
                <DatePicker
                  inline
                  showTimeSelect
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  popperClassName="my-popper"
                />
              </Modal>
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
