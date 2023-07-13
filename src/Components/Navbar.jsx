import React from "react";
import { useState, useEffect, useRef } from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";
import Button from "./Button";
import { Button2 } from "./Button";

function Navbar() {
  const [darkmode, setDarkMode] = useState(() => {
    const storedMode = localStorage.getItem("darkmode");
    return storedMode ? storedMode : "light";
  });
  const [navbarisopen, setNavbarisOpen] = useState(false);
  const MenuRef = useRef();
  const IconRef = useRef();

  const handleNavbarClick = () => {
    setNavbarisOpen(!navbarisopen);
  };

  const handleOutsideClick = (event) => {
    if (
      !MenuRef.current.contains(event.target) &&
      !IconRef.current.contains(event.target)
    ) {
      setNavbarisOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const Toggle = [
    { icon: <BsSunFill />, text: "light" },
    { icon: <BsMoonStarsFill />, text: "dark" },
  ];
  const element = document.documentElement;
  useEffect(() => {
    switch (darkmode) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("darkmode", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("darkmode", "light");
        break;
      default:
        break;
    }
  }, [darkmode]);

  const getOtherOption = (currentOption) => {
    return Toggle.find((opt) => opt.text !== currentOption);
  };
  const MenuItems = [
    { Texts: "Home", Url: "#home" },
    { Texts: "Skills", Url: "#skills" },
    { Texts: "Portfolio", Url: "#portfolio" },
    { Texts: "Contact", Url: "#contact" },
  ];

  return (
    <>
      <header
        className={` flex justify-between items-center  z-[99999]  top-0 border-b-[2px] dark:border-gray-600   py-2 px-2 tablet:px-10 mini-laptop:px-10 h-[80px] large-laptop:px-20 bg-white dark:bg-[rgba(0,0,0,0.96)] w-[100%] left-0 `}
      >
        <div className=" flex items-center gap-3 large-laptop:gap-4">
          <div className=" bg-[#4F46E5] dark:bg-purple-800 h-12 w-12 rounded-md shadow-md flex justify-center items-center text-white font-bold text-2xl">
            N
          </div>
          <h1 className=" dark:text-white font-bold text-xl large-laptop:text-3xl">
            Nehemiah
          </h1>
        </div>

        <ul
          ref={MenuRef}
          className={` text-black  dark:text-zinc-300 
          dark:bg-black shadow-lg px-5 pt-16 laptop:p-0  w-[70%] 
           tablet:w-[60%] mini-laptop:w-[30%] large-laptop:w-auto absolute flex flex-col
            gap-5 laptop:flex-row z-[999999] opacity-100 laptop:z-0 laptop:shadow-none laptop:top-auto ${
              navbarisopen
                ? "left-0 laptop:left-auto"
                : "left-[-1000%] duration-300 laptop:left-auto"
            } top-0 left-0 laptop:left-auto h-full laptop:h-auto laptop:bg-transparent bg-white laptop:relative`}
        >
          {MenuItems.map((items, index) => (
            <li
              key={index}
              onClick={handleNavbarClick}
              className=" text-lg font-semibold "
            >
              <a href={items.Url}> {items.Texts}</a>
            </li>
          ))}
          <Button>Hire me</Button>
        </ul>

        {navbarisopen && (
          <div className=" dark:bg-[rgba(0,0,0,0.96)] laptop:hidden transition-all opacity-25 fixed inset-0  w-full "></div>
        )}
        <div className=" flex items-center  gap-4">
          <Button2>Hire me</Button2>
          <div
            onClick={() => setDarkMode(getOtherOption(darkmode).text)}
            className={` h-10 w-10 flex justify-center laptop:cursor-pointer items-center text-4xl rounded-full`}
          >
            <span
              className={`text-black duration-500 ${
                darkmode === "light"
                  ? " text-black font-extrabold  text-2xl"
                  : " text-yellow-500   font-semibold text-xl"
              }`}
            >
              {darkmode === "light" ? Toggle[0].icon : Toggle[1].icon}
            </span>
          </div>
          <div
            ref={IconRef}
            onClick={handleNavbarClick}
            className="  laptop:hidden text-3xl dark:text-white"
          >
            <ion-icon
              name={`${navbarisopen ? "close-outline" : "menu-outline"}`}
            ></ion-icon>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
