import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Select from "react-select";
import {
  brandOptions,
  maxMileage,
  maxPriceOptions,
  minimumYearOptions,
  vehicleOptions,
} from "../utils/selectOption";
import { Autocomplete, Stack, TextField } from "@mui/material";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const SearchForm = () => {
  return (
    <Card sx={{ minWidth: 320 }}>
      <CardContent className="p-7 flex flex-col gap-5">
        <div className="font-semibold text-lg font-sans">
          FIND YOUR RIGHT VEHICLE
        </div>

        <Stack spacing={3} sx={{ width: 270 }}>
          <Autocomplete
            id="size-small-standard"
            size="small"
            options={vehicleOptions}
            getOptionLabel={(option) => option.label}
            // defaultValue={vehicleOptions[]}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                label="Select Vehicle"
                placeholder="Select Vehicle"
              />
            )}
          />
          <Autocomplete
            id="size-small-standard"
            size="small"
            options={brandOptions}
            getOptionLabel={(option) => option.label}
            // defaultValue={vehicleOptions[]}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                label="Select Brand"
                placeholder="Select Brand"
              />
            )}
          />
          <Autocomplete
            id="size-small-standard"
            size="small"
            options={maxPriceOptions}
            getOptionLabel={(option) => option.label}
            // defaultValue={vehicleOptions[]}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                label="Select Max Price"
                placeholder="Select Max Price"
              />
            )}
          />
          <Autocomplete
            id="size-small-standard"
            size="small"
            options={minimumYearOptions}
            getOptionLabel={(option) => option.label}
            // defaultValue={vehicleOptions[]}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                label="Select Min Year"
                placeholder="Select Min Year"
              />
            )}
          />
          <Autocomplete
            id="size-small-standard"
            size="small"
            options={maxMileage}
            getOptionLabel={(option) => option.label}
            // defaultValue={vehicleOptions[]}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                label="Select Max Mileage"
                placeholder="Select Max Mileage"
              />
            )}
          />
        </Stack>

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
