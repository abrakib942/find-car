import { TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSignupUserMutation } from "../app/auth/authApi";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

type FormData = {
  name: string;
  email: string;
  password: string;
};

const schema = yup.object().shape({
  name: yup.string().required("Please input your name"),
  email: yup.string().email("invalid email").required("Email required"),
  password: yup
    .string()
    .required("Password required")
    .min(8, "Password is too short - should be 8 letters minimum."),
});

const defaultValues = {
  name: "",
  email: "",
  password: "",
};

const Register = () => {
  const [signupUser, { data: signUpData, isLoading, isError, isSuccess }] =
    useSignupUserMutation();

  const navigate = useNavigate();

  const { handleSubmit, formState, control, reset } = useForm<FormData>({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  const onSubmit = (data: FormData) => {
    try {
      console.log(data);
      const payloadObj = {
        name: data?.name,
        email: data?.email,
        password: data?.password,
      };
      signupUser(payloadObj);

      reset(defaultValues);
    } catch (error) {
      toast.error("Registration Failed! Please provide valid information");
      console.log(error);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Registration Successful");

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
    <div className="">
      <div className="flex flex-col items-center justify-center w-full">
        <Card className="flex justify-center w-[40rem] max-w-384 rounded-[7px]">
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
              className="flex flex-col justify-center w-[400px]"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    sx={style}
                    className="mb-3"
                    label="Name"
                    type="name"
                    variant="outlined"
                    error={!!errors.name}
                    helperText={errors?.name?.message}
                    required
                    fullWidth
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    sx={style}
                    className="mb-3"
                    label="Email"
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
