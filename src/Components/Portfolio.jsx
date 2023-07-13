import React from "react";
import { sculptureList } from "./Data";
import { useState } from "react";
import { Zoom } from "react-awesome-reveal";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Portfolio() {
  const [index, setInDex] = useState(0);
  const [showmessage, setShowMessage] = useState(false)

  const hasBack = index > 0;
  const hasNext = index < sculptureList.length - 1;
  function handleBackClick() {
    if (hasBack) {
      setInDex(index - 1);
    }
  }
  function handleNextClick() {
    if (hasNext) {
      setInDex(index + 1);
    } else {
      setInDex(0);
    }
  }

  const sculpture = sculptureList[index];

  const handleButtonClick = (event) => {
    if (sculpture.Url.trim() === "") {
      event.preventDefault();
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    }
  };
  return (
    <section
      id="portfolio"
      className=" w-full bg-white dark:bg-[rgba(0,0,0,0.96)] h-auto px-4 py-20"
    >

      <h1 className=" text-center px-10 pt-5 pb-2 laptop:text-left dark:text-white  text-[#4F46E5] font-bold text-4xl laptop:text-5xl">
        Portfolio
      </h1>

      <div className=" mx-auto bg-[#4F46E5] w-[180px] h-[5px] laptop:ml-12"></div>
      <p className=" text-[1.2rem] dark:text-white px-10 text-center laptop:text-left py-2 laptop:w-[50%]">
        Here are some of my recent projects. Use the Button arrows to view
        projects{" "}
        <span className=" font-bold dark:text-white"> Next & Prev</span>.
      </p>
     
      <div className=" py-5  w-full h-auto">
        <h1 className=" text-black font-bold text-2xl dark:text-white  pt-5 pb-2 text-center">
          {sculpture.description}
        </h1>
        <div className=" mx-auto bg-[#4F46E5] w-[180px] h-[3px] "></div>
        <h1 className="dark:text-white text-center font-medium text-lg">
          {" "}
          On {index + 1} of 5 Projects
        </h1>
        <Zoom>
        <div className=" flex justify-center w-[98%]  bg-white dark:bg-[rgba(0,0,0,0.96)] tablet:w-[80%] mini-laptop:w-[70%] mini-laptop:h-[400px] laptop:w-[60%]  mx-auto relative">
          <img
            src={sculpture.imageurl}
            alt={sculpture.alt}
            className=" w-[100%]  object-center object-cover h-[400px] laptop:w-[80%] laptop:h-[390px]  align-middle"
          />
          <div className=" absolute  bg-[rgba(0,0,0,0.45)] ring-4 ring-black ring-inset py-10  text-[#f1f1f1] w-[100%] laptop:w-[80%] h-full top-0  text-center">
            <h1 className=" text-2xl font-semibold text-white py-2">
              {sculpture.description}
            </h1>
            <p className=" w-[80%] mx-auto text-lg text-center font-normal ">
              {sculpture.text}
            </p>
            <button onClick={handleButtonClick} className=" my-4 bg-[#4b0e68] z-[9999] absolute  dark:bg-slate-900 px-5 py-3 w-[160px]
             ring-4 ring-white ring-inset   mx-auto left-[24%] laptop:left-[36%]  rounded-md font-medium hover:bg-blue-600">
              <a href={sculpture.Url} title="Preview of Projects">
                Preview
              </a>
            </button>
            {showmessage && <div className=" bg-[rgba(0,0,0,0.87)] dark:bg-[rgba(255,255,255,0.8)] dark:text-black top-[150px] large-laptop:left-[34%] mb-3 left-[20%] py-5 px-5 text-white flex items-center justify-center rounded-lg absolute">Sorry you are on it now!</div>}
          </div>
          <div className=" flex justify-between w-full laptop:w-[80%]  items-center top-[50%] absolute">
            <button
              onClick={handleBackClick}
              disabled={!hasBack}
              className="  bg-white  active:hover:scale-110   rounded-full h-[50px] text-2xl text-black ring-4 ring-black ring-inset w-[50px] flex justify-center items-center"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={handleNextClick}
              disabled={!hasNext}
              className=" bg-[rgb(255,255,255)]  active:hover:scale-110  rounded-full h-[50px]  text-2xl text-black  ring-4 ring-black ring-inset  w-[50px] flex justify-center items-center"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </Zoom>
      </div>
    </section>
  );
}

export default Portfolio;
