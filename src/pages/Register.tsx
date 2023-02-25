import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Register = () => {
  const { handleSubmit, register, control } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center w-full">
        <Card className="flex justify-center w-[40rem] max-w-384 rounded-[7px]">
          {/* <img
            className="w-[160px] justify-center absolute mt-[-8rem] my-[30px]"
            src="assets/images/logos/PaulLogoWhite.png"
            alt="logo"
          /> */}
          <CardContent className="flex flex-col items-center justify-center p-16 sm:p-24 md:p-32">
            <Typography
              variant="h6"
              className="mb-8 font-semibold text-18 sm:text-24"
            >
              Register
            </Typography>

            <form
              name="loginForm"
              noValidate
              className="flex flex-col justify-center w-[300px]"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="">
                <TextField
                  className="mb-5"
                  label="Name"
                  autoFocus
                  type="email"
                  variant="outlined"
                  required
                  fullWidth
                />
              </div>
              <div className="">
                <TextField
                  className="mb-5"
                  label="Email"
                  autoFocus
                  type="email"
                  variant="outlined"
                  required
                  fullWidth
                />
              </div>

              <div className="">
                <TextField
                  className="mb-5"
                  label="Password"
                  type="password"
                  variant="outlined"
                  required
                  fullWidth
                />
              </div>

              <div className="mx-auto">
                <Button
                  variant="contained"
                  className=" mt-5 bg-[#FBE122] text-black hover:bg-[#424242] hover:text-white"
                  type="submit"
                >
                  Register
                </Button>
              </div>
              <div className="mt-3">
                Already have an account?{" "}
                <Link to="/login">
                  {" "}
                  <span className=" font-bold">Login now</span>
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;
