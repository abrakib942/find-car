import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Select from "react-select";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export const options = [
  {
    label: "Bike",
    value: "bike",
  },
  {
    label: "Car",
    value: "car",
  },
  {
    label: "Bicycle",
    value: "bicycle",
  },
  {
    label: "Gardens",
    value: "gardens",
  },
];

const SearchForm = () => {
  return (
    <Card sx={{ minWidth: 320 }}>
      <CardContent className="p-7 flex flex-col gap-5">
        <Select
          //   defaultValue={{label: 'all', value: 'all'}}
          onChange={(value) => {
            console.log(value);
          }}
          options={options}
          className="basic-multi-select w-full"
          classNamePrefix="select"
          //   sx={{ m: 1, minWidth: 120 }}
          //   size="small"
        />
        <Select
          //   defaultValue={{label: 'all', value: 'all'}}
          onChange={(value) => {
            console.log(value);
          }}
          options={options}
          className="basic-multi-select w-full"
          classNamePrefix="select"
          //   sx={{ m: 1, minWidth: 120 }}
          //   size="small"
        />
        <Select
          //   defaultValue={{label: 'all', value: 'all'}}
          onChange={(value) => {
            console.log(value);
          }}
          options={options}
          className="basic-multi-select w-full"
          classNamePrefix="select"
          //   sx={{ m: 1, minWidth: 120 }}
          //   size="small"
        />
        <Select
          //   defaultValue={{label: 'all', value: 'all'}}
          onChange={(value) => {
            console.log(value);
          }}
          options={options}
          className="basic-multi-select w-full"
          classNamePrefix="select"
          //   sx={{ m: 1, minWidth: 120 }}
          //   size="small"
        />
        <Select
          //   defaultValue={{label: 'all', value: 'all'}}
          onChange={(value) => {
            console.log(value);
          }}
          options={options}
          className="basic-multi-select w-full"
          classNamePrefix="select"
          //   sx={{ m: 1, minWidth: 120 }}
          //   size="small"
        />
        <Button
          //   onClick={() => navigate("/")}
          variant="contained"
          className="w-full mt-5 bg-[#FBE122]  text-black hover:text-white"
        >
          Search Vehicle
        </Button>
      </CardContent>
    </Card>
  );
};

export default SearchForm;
