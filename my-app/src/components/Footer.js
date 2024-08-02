import React from "react";
import Android from "./images/Android.png"; // Replace with your image path
import apple from "./images/apple.png"; // Replace with your image path
import windows from "./images/windows.png"; // Replace with your image path
import flag from "./images/flag.png";

const Footer = () => {
  return (
    <>
      <footer className="flex p-1 bg-[#253849] footer fixed bottom-0 w-full justify-between">
        <div className="flex gap-4">
          <button>
            <img src={apple} alt="" />
          </button>
          <button>
            <img src={Android} alt="" />
          </button>
          <button>
            <img src={windows} alt="" />
          </button>
        </div>
        <div className="flex gap-4">
          <button className="w-300 h-9 flex gap-2 border rounded-xl  hover:bg-white hover:text-[#253849] font-semibold mt-1 p-2">
            {" "}
            <img className="" src={flag} alt="" />
            English
            <svg
              className="w-4 h-4 ml-2 text-white hover:text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <button type="button" className="w-152 h-26 bg-transparent hover:bg-gray-200 text-white font-semibold py-2 px-4 border border-gray-300 rounded-full hover:text-[#253849]" onclick="window.location.href='https://demo.mobiscroll.com/javascript/timeline/month-view#Lang=en-GB&themeVariant=dark'">
            GO BACK TO DEMOS
          </button>

        </div>
      </footer>
    </>
  );
};

export default Footer;
