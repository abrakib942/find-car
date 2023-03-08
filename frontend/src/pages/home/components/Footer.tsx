import React from "react";
import facebook from "../../../images/others/facebook.png";
import github from "../../../images/others/github.png";
import linkedin from "../../../images/others/linked.png";

const Footer = () => {
  return (
    <div className="bg-[#23292E] p-8">
      <div className="flex item-center justify-center mb-5 gap-3">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/abrakib942"
        >
          <img src={facebook} alt="" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/abrakib942"
        >
          <img src={github} alt="" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/abrakib/"
        >
          <img src={linkedin} alt="" />
        </a>
      </div>
      <div className="text-center text-gray-400 font-sans">
        Copyright © 2023 - All right reserved by A.B. Rakib
      </div>
    </div>
  );
};

export default Footer;
