import React from "react";
import { useState, useEffect, useRef } from "react";
import { BiSolidMoon } from "react-icons/bi";
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
    { icon: <BiSolidMoon />, text: "dark" },
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
        className={` flex justify-between items-center relative z-[99999]  top-0 border-b-[2px] dark:border-gray-600   py-2 px-3 tablet:px-10 mini-laptop:px-10 h-[80px] large-laptop:px-20 bg-white dark:bg-[rgba(0,0,0,0.96)] w-[100%] left-0 `}
      >
        <div className=" flex items-center gap-3 large-laptop:gap-4">
          <div className=" bg-[#ff1616] dark:bg-purple-800 h-12 w-12 rounded-md shadow-md flex justify-center items-center text-white font-bold text-2xl">
            N
          </div>
        </div>

        <ul
          ref={MenuRef}
          className={` text-black  dark:text-zinc-300 
          dark:bg-black shadow-lg px-5 pt-16 laptop:p-0  w-[70%] 
           tablet:w-[60%] mini-laptop:w-[30%] large-laptop:w-auto fixed flex flex-col
            gap-5 laptop:flex-row z-[999999] opacity-100 laptop:z-0 laptop:shadow-none laptop:top-auto ${
              navbarisopen
                ? "left-0 laptop:left-auto"
                : "left-[-1000%] duration-300 laptop:left-auto"
            } top-0 left-0 bottom-0 laptop:left-auto h-full laptop:h-auto laptop:bg-transparent bg-white laptop:relative`}
        >
          {MenuItems.map((items, index) => (
            <li
              key={index}
              onClick={handleNavbarClick}
              className=" text-lg font-bold text-black laptop:text-red-500 dark:text-white "
            >
              <a href={items.Url}> {items.Texts}</a>
            </li>
          ))}
          <Button><p onClick={handleNavbarClick}>Intrested?</p></Button>
        </ul>

        {navbarisopen && (
          <div className=" dark:bg-[rgba(155,144,144,0.23)] laptop:hidden transition-all opacity-25 fixed inset-0  w-full "></div>
         )}
        <div className=" flex items-center justify-normal  gap-4">
          <Button2>Intrested?</Button2>
          <div
            onClick={() => setDarkMode(getOtherOption(darkmode).text)}
            className={`  flex justify-center laptop:cursor-pointer ring-gray-200 ring-[.2rem] dark:ring-[rgba(0,0,0,0.34)] dark:p-[0.2rem] items-center  rounded-full`}
          >
            <span
              className={`text-black duration-500 flex items-center ${
                darkmode === "light"
                  ? " text-[rgba(0,0,0,0.7)] font-extrabold  text-3xl"
                  : " text-yellow-500   font-semibold text-[1.6rem]"
              }`}
            >
              {darkmode === "light" ? Toggle[1].icon : Toggle[0].icon}
            </span>
          </div>
          <div
            ref={IconRef}
            onClick={handleNavbarClick}
            className=" flex items-center   laptop:hidden text-4xl dark:text-white"
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
