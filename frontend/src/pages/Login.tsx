import { TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-hot-toast";
import { useLoginUserMutation } from "../app/auth/authApi";
import { useEffect } from "react";

type FormData = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup.string().email("invalid email").required("You must enter a email"),
  password: yup.string().required("Please enter your password."),
  // .min(8, "Password is too short - should be 8 letters minimum."),
});

const defaultValues = {
  email: "",
  password: "",
};

const Login = () => {
  const [loginUser, { data: loginData, isError, isLoading, isSuccess }] =
    useLoginUserMutation();

  const navigate = useNavigate();

  const { handleSubmit, formState, control, reset } = useForm<FormData>({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  const onSubmit = (data: FormData) => {
    try {
      const payloadObj = {
        name: data.email,
        password: data.password,
      };

      loginUser(payloadObj);

      reset(defaultValues);
    } catch (error) {
      toast.error("Login Failed");
      console.log(error);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Login Successful");

      navigate("/");
    }
  }, [isSuccess, navigate]);

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
    <div className="flex">
      <div className="flex flex-col items-center justify-center w-full">
        <Card className="flex justify-center w-[40rem] max-w-384 rounded-[7px]">
          <CardContent className="flex flex-col items-center justify-center p-16 sm:p-24 md:p-32">
            <Typography
              variant="h6"
              className="mb-8 font-semibold text-18 sm:text-24"
            >
              Login
            </Typography>

            <form
              name="loginForm"
              noValidate
              className="flex flex-col justify-center w-[400px]"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    sx={style}
                    className="mb-5"
                    label="Email "
                    autoFocus
                    type="email"
                    variant="outlined"
                    error={!!errors.email}
                    helperText={errors?.email?.message}
                    required
                    fullWidth
                  />
                )}
              />

              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    sx={style}
                    className="mb-3"
                    label="Password"
                    type="password"
                    variant="outlined"
                    error={!!errors.password}
                    helperText={errors?.password?.message}
                    required
                    fullWidth
                  />
                )}
              />

              <div className="text-[12px] bg-white text-black underline hover:text-[#424242] cursor-pointer">
                Forgot Password?
              </div>

              <div className="mx-auto">
                <Button
                  variant="contained"
                  className=" mt-5 bg-[#FBE122] text-black hover:bg-[#424242] hover:text-white"
                  type="submit"
                >
                  Login
                </Button>
              </div>
              <div className="mt-3">
                Don't have any account?{" "}
                <Link to="/register">
                  {" "}
                  <span className=" font-bold">Register now</span>
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
