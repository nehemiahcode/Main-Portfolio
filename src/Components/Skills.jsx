import React from "react";
import SettingImage from "../assets/settings.svg";
import HelpImage from "../assets/help-svg.svg";
import Clockimage from "../assets/clock-svg.svg";
import { SkillData } from "./Data";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaGitSquare } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaVuejs } from "react-icons/fa";
import { DiAngularSimple } from "react-icons/di";
import { Zoom } from "react-awesome-reveal";

function Skills() {
  const { text1, text2, text3 } = SkillData;
  const SkillDetails = [
    { image: SettingImage, text: text1 },
    { image: Clockimage, text: text2 },
    { image: HelpImage, text: text3, margin: true },
  ];

  const Icons = [
    {
      icon: <ion-icon name="logo-html5"></ion-icon>,
      text: "Html",
      title: "Html icon",
    },
    {
      icon: <ion-icon name="logo-css3"></ion-icon>,
      text: "Css",
      title: "Css icon",
    },
    {
      icon: <ion-icon name="logo-javascript"></ion-icon>,
      text: "javascript",
      title: "Javascript icon",
    },
    {
      icon: <ion-icon name="logo-react"></ion-icon>,
      text: "React",
      title: "React icon",
    },
    {
      icon: <ion-icon name="logo-firebase"></ion-icon>,
      text: "Firebase",
      title: "Firebase icon",
    },
    {
      icon: <ion-icon name="logo-github"></ion-icon>,
      text: "Github",
      title: "Github icon",
    },
    {
      icon: <BiLogoTailwindCss />,
      text: "Tailwind",
      title: "Tailwind css icon",
    },
    { icon: <FaGitSquare />, text: "Git", title: "Git icon" },
  ];

  const Icon2 = [
    { icon: <TbBrandNextjs />, text: "Next js", title: "Next js icon" },
    { icon: <FaVuejs />, text: "Vue js", title: "Vue js icon" },
    { icon: <DiAngularSimple />, text: "Angula js", title: "Angula js icon" },
  ];
  return (
    <section
      id="skills"
      className=" w-full bg-white dark:bg-[rgba(0,0,0,0.96)] laptop:px-20 py-5"
    >
      <h1 className=" text-center px-10 pt-5 pb-2 laptop:text-left dark:text-white  text-[#ff2424] font-bold text-4xl laptop:text-5xl">
        {" "}
        Skills
      </h1>
      <div className=" mx-auto bg-[#ff1a1a] w-[180px] h-[5px] laptop:ml-12"></div>
      <div className=" w-[100%] h-auto bg-white dark:bg-[rgba(0,0,0,0.96)] grid gap-5 grid-cols-1 mini-laptop:px-10 py-10 mini-laptop:grid-cols-2 laptop:grid-cols-3">
        {SkillDetails.map((skills, index) => (
          <Zoom key={index} cascade>
            <div
              className={`flex flex-col w-full  ${
                skills.margin && " mini-laptop:ml-[53%] laptop:m-0 "
              } gap-4 items-center py-5`}
            >
              <img
                src={skills.image}
                alt="settings_image.svg"
                className=" w-[200px]"
              />
              <div className="">
                <p className=" w-[85%] tablet:w-[60%] laptop:text-xl text-xl mini-laptop:w-[100%] leading-normal mx-auto text-black dark:text-white text-center">
                  {skills.text}
                </p>
              </div>
            </div>
          </Zoom>
        ))}
      </div>

      <div className=" mx-auto w-full h-auto flex flex-col laptop:flex-row gap-10 items-center py-20 justify-center">
        <Zoom className=" flex justify-center">
          <div className=" bg-white shadow-slate-300  dark:shadow-black dark:bg-[rgba(26,25,25,0.96)] shadow-xl w-[90%] tablet:max-w-[450px] h-[auto] laptop:max-w-[100%] px-10 py-5">
            <h1 className=" dark:text-white text-2xl laptop:text-3xl font-semibold pb-4">
              Languages and tools i am familiar with.
            </h1>

            <div className=" grid grid-cols-2 laptop:grid-cols-3 gap-4 h-auto w-full">
              {Icons.map((icons, index) => (
                <div key={index} className=" flex w-[100%] items-center gap-3">
                  <div
                    title={icons.title}
                    className=" ring-[3px] ring-slate-300 text-xl text-sky-600 dark:text-white dark:ring-black cursor-pointer 
                      rounded-full  active:hover:scale-110 inline-flex p-2"
                  >
                    {icons.icon}
                  </div>
                  <p className=" font-medium text-sm dark:text-white">
                    {icons.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Zoom>
       <Zoom className="flex justify-center ">
       <div className=" bg-white  dark:bg-[rgba(26,25,25,0.96)] shadow-slate-300  dark:shadow-black   shadow-xl w-[90%] h-[250px] mini-laptop: max-w-[300px] px-6 py-5">
          <h1 className=" dark:text-white text-2xl pb-4 font-semibold">
            The ones i am about to learn
          </h1>
          <div className=" grid grid-cols-2 gap-5 ">
            {Icon2.map((icon2, index) => (
              <div key={index}  className=" flex items-center">
                <div className=" flex items-center gap-3">
                  <div
                    title={icon2.title}
                    className=" ring-[3px] ring-slate-300 text-xl text-sky-600 dark:text-white
                     dark:ring-black cursor-pointer active:hover:scale-110 
                     rounded-full inline-flex  p-2 ring-offset-0 "
                  >
                    {icon2.icon}
                  </div>
                  <p className=" font-medium text-sm dark:text-white">
                    {icon2.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
       </Zoom>
      </div>
    </section>
  );
}

export default Skills;
