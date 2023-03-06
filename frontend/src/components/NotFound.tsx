import Button from "@mui/material/Button/Button";
import { useNavigate } from "react-router-dom";
import notFound from "../images/404-img.jpg";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#FFD83B]">
      <img className="w-[800px] mx-auto" src={notFound} alt="404" />
      <div
        className="text-center text-2xl font-sans font-semibold pb-8
      "
      >
        Oops! The Page you requested was not found!
      </div>
      <div className="text-center pb-8">
        <Button
          onClick={() => navigate("/")}
          variant="contained"
          className=" mt-5 hover:bg-[#FBE122]  hover:text-black bg-[#424242] text-white"
        >
          Back To Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
