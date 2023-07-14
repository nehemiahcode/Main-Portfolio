import React from "react";
import { ResumeButton } from "./Button";
import { FaDownload } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import Image from "../assets/hero.webp";

function Hero() {
  return (
    <>
      <section
        id="home"
        className=" w-full h-auto bg-white dark:bg-[rgba(0,0,0,0.96)] grid grid-cols-1 laptop:pt-10 py-10  laptop:grid-cols-2 px-2 laptop:px-20"
      >
        <Fade cascade>
          <div className=" py-1 laptop:py-10 w-full mini-laptop:flex mini-laptop:justify-center mini-laptop:flex-col">
            <h1
              className=" px-5 w-[80%] mini-laptop:w-[70%] laptop:px-0 laptop:w-auto mx-auto laptop:m-0 
          laptop:text-left text-center font-bold laptop:text-4xl text-[#ff2424] text-3xl  dark:text-white"
            >
              Hi, I am Nehemiah. Nice to meet you.
            </h1>
            <p
              className=" py-4 laptop:px-0 px-5 mini-laptop:px-12 mini-laptop:text-center leading-normal laptop:text-left tablet:px-12 text-xl
           text-black dark:text-white mx-auto large-laptop:m-0  text-center  tablet:w-[90%]"
            >
              I am a Front-end React developer. I am quietly confident,
              naturally curious and keep working on improving my skills. Welcome
              to my simple way of showing you what I can or will love to do for
              you. Feel free to look at my latest projects on the portfolio
              section. Remotely available.{" "}
              <span className=" font-bold">codehubby@gmail.com</span>
            </p>
            <ResumeButton>
              Download Resume
              <FaDownload />
            </ResumeButton>
          </div>
          <div className=" flex justify-center items-center">
            <img
              src={Image}
              alt=""
              className=" object-contain w-[300px] h-[300px] 
            laptop:w-[400px] tablet:w-[350px] tablet:h-[350px] laptop:h-[400px] mini-laptop:h-[400px] mini-laptop:w-[400px]"
            />
          </div>
        </Fade>
      </section>
    </>
  );
}

export default Hero;
