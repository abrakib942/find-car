import { Button, TextField } from "@mui/material";
import React from "react";
import newsletterBg from "../../../images/others/newsletter-bg.jpg";

const Newsletter = () => {
  const style = {
    "& label.Mui-focused": {
      color: "#23292E",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#23292E",
      },
    },
  };

  return (
    <div
      style={{
        background: `url(${newsletterBg})`,
      }}
      className="p-16  text-white"
    >
      <div className="flex flex-col items-center gap-2 mb-3 justify-center">
        <div className="font-sans text-2xl text-[#FBE122]">NEWSLETTER</div>
        <div className="font-sans text-2xl font-bold">
          GET NOTIFIED OF ANY UPDATES!
        </div>
      </div>
      <div className="lg:flex md:flex items-center justify-center gap-1">
        <TextField
          className="lg:w-[450px] w-[270px] bg-white rounded-lg"
          placeholder="Your Email address"
          autoFocus
          type="email"
          variant="outlined"
          size="medium"
        />
        <Button
          variant="contained"
          className="px-8 py-4 font-semibold bg-[#FBE122] text-black hover:bg-[#424242] hover:text-white"
          type="submit"
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default Newsletter;
