import { Box, Button, TextField } from "@mui/material";

interface ISearchProps {
  search: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Add this line
  onSearch: () => void;
}

const Search = ({ search, onChange, onSearch }: ISearchProps) => {
  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"
      display="flex"
      flexDirection="column"
      alignItems="center"
      paddingBottom={5}
      paddingTop={5}
    >
      <TextField
        id="search"
        label="Search"
        variant="outlined"
        name="search"
        value={search}
        onChange={onChange}
      />
      <Button fullWidth variant="outlined" size="large" onClick={onSearch}>
        Search
      </Button>
    </Box>
  );
};

export default Search;
