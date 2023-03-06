import { Paper, Input } from "@mui/material";
import { useState, useEffect } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

interface SearchProps {
  placeholder: string;
  searchText: string;
  applySearch: (searchText: string) => void;
}

const SearchBox = ({ placeholder, searchText, applySearch }: SearchProps) => {
  const [searchTextInput, setsearchTextInput] = useState(searchText);

  useEffect(() => {
    setsearchTextInput(searchText);
  }, [searchText]);

  return (
    <div className="flex flex-row items-start justify-start">
      <Paper className="search-box">
        <Input
          placeholder={placeholder || "Search"}
          className="flex flex-1 mx-8"
          disableUnderline
          onBlur={() => applySearch(searchTextInput)}
          value={searchTextInput}
          inputProps={{
            "aria-label": "Search",
          }}
          onChange={(ev) => setsearchTextInput(ev.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              applySearch(searchTextInput);
            }
          }}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </Paper>
    </div>
  );
};

export default SearchBox;
