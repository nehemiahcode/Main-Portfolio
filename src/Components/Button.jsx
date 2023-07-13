import React, { useRef } from "react";
// Import custom CSS file for the Button component
import "./Button.css";
import Resume from "../assets/myresume.pdf";

function Button({ children }) {
  const buttonRef = useRef(null);

  const handleClick = (e) => {
    const button = buttonRef.current;
    const x = e.clientX - button.offsetLeft;
    const y = e.clientY - button.offsetTop;
    const rippleEffect = document.createElement("span");
    rippleEffect.style.left = `${x}px`;
    rippleEffect.style.top = `${y}px`;
    button.appendChild(rippleEffect);
    setTimeout(() => {
      button.removeChild(rippleEffect);
    }, 1000);
  };

  return (
    <div>
      <button
      type="button"
        ref={buttonRef}
        className="button px-10 py-3 w-[170px]  rounded-md shadow-md laptop:hidden flex dark:bg-purple-800 text-white bg-[#4F46E5]"
        onClick={handleClick}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;

export function Button2({ children }) {
  const buttonRef = useRef(null);

  const handleClick = (e) => {
    const button = buttonRef.current;
    const x = e.clientX - button.offsetLeft;
    const y = e.clientY - button.offsetTop;
    const rippleEffect = document.createElement("span");
    rippleEffect.style.left = `${x}px`;
    rippleEffect.style.top = `${y}px`;
    button.appendChild(rippleEffect);
    setTimeout(() => {
      button.removeChild(rippleEffect);
    }, 1000);
  };

  return (
    <div>
      <button
          type="button"
        ref={buttonRef}
        className="button px-10 py-3 w-[170px]  laptop:flex hidden  rounded-md shadow-md  dark:bg-purple-800 text-white bg-[#4F46E5] "
        onClick={handleClick}
      >
        {children}
      </button>
    </div>
  );
}

export function ResumeButton({ children }) {
  const buttonRef = useRef(null);

  const handleClick = (e) => {
    const button = buttonRef.current;
    const x = e.clientX - button.offsetLeft;
    const y = e.clientY - button.offsetTop;
    const rippleEffect = document.createElement("span");
    rippleEffect.style.left = `${x}px`;
    rippleEffect.style.top = `${y}px`;
    button.appendChild(rippleEffect);
    setTimeout(() => {
      button.removeChild(rippleEffect);
    }, 1000);
  };

  return (
    <div className=" flex justify-center laptop:justify-start my-6">
      <a
        href={`${Resume}`}
        download={"Nehemiah's Resume.pdf"}
      >
        <button
            type="button"
          ref={buttonRef}
          className="button px-5 py-3 w-[auto] flex items-center gap-3   rounded-md shadow-md  dark:bg-purple-800 text-white bg-[#4F46E5] "
          onClick={handleClick}
        >
          {children}
        </button>
      </a>
    </div>
  );
}


export function SubmitButton({ children }) {
  const ButtonRef = useRef(null);

  const handleButton = (e) => {
    const button = ButtonRef.current;
    const x = e.clientX - button.offsetLeft;
    const y = e.clientY - button.offsetTop;
    const rippleEffect = document.createElement("span");
    rippleEffect.style.left = `${x}px`;
    rippleEffect.style.top = `${y}px`;
    button.appendChild(rippleEffect);
    setTimeout(() => {
      button.removeChild(rippleEffect);
    }, 1000);
  }

  return (
    <div className="w-full">
        <button
          ref={ButtonRef}
          className="button px-5 py-3 w-[200px] rounded-md shadow-md  dark:bg-purple-800 text-white bg-[#4F46E5] "
          onClick={handleButton}
        >
          {children}
        </button>

     </div>
  );
}
