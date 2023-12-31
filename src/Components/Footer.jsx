import React from "react";
import { Fade } from "react-awesome-reveal";

function Footer() {
  const Icons = [
    {
      icons: <ion-icon name="logo-github"></ion-icon>,
      Url: "https://github.com/nehemiahcode",
      title: "Github",
    },
    {
      icons: <ion-icon name="logo-linkedin"></ion-icon>,
      Url: "https://www.linkedin.com/in/nehemiah-ekemezie-206937281/",
      title: "Linkden",
    },
    {
      icons: <ion-icon name="logo-twitter"></ion-icon>,
      Url: "https://twitter.com/Miah_codex",
      title: "Twitter",
    },
    {
      icons: <ion-icon name="logo-facebook"></ion-icon>,
      Url: "https://web.facebook.com/ekemezie.nehemiaho",
      title: "Facebook",
    },
  ];
  return (
  
     <footer className="  bg-slate-50 dark:bg-[rgb(0,0,0,0.96)]  w-full h-auto py-6 px-10 laptop:px-10 large-laptop:px-20">
      <h1 className=" font-medium text-3xl py-3 text-center text-blue-800 dark:text-white ">
        Let's Get Social
      </h1>
      <p className=" text-center dark:text-white  text-lg font-normal">
        Follow me on Github, Linkden, Twitter and Facebook
      </p>

      <div className=" grid grid-cols-4 gap-4 h-auto my-3  w-fit  mx-auto ">
        {Icons.map((icon, index) => (
          <div key={index} className="">
            <a
              href={icon.Url}
              title={icon.title}
              className=" ring-[3px] ring-slate-300 text-xl text-sky-600 dark:text-white dark:ring-black cursor-pointer 
                 rounded-full  active:hover:scale-110 inline-flex p-[0.4rem]"
            >
              {icon.icons}
            </a>
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
