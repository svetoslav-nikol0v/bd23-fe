import { Box, Button, TextField, Typography } from "@mui/material";

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
      <Typography variant="body2" margin={"0 !important"}>
        If you want to:
      </Typography>
      <Typography variant="body2" margin={"0 !important"}>
        - filter by field - <b>`name=John`</b>
      </Typography>
      <Typography variant="body2" margin={"0 !important"}>
        - sort by field - <b>`sort=John`</b>
      </Typography>
      <Typography variant="body2" margin={"0 !important"}>
        - change the order - <b>`order=desc`</b>, by default is <b>`asc`</b>
      </Typography>
      <Typography variant="body2" margin={"0 !important"}>
        - change the number ot items on the page - <b>`limit=3`</b>, by default
        is <b>5</b>
      </Typography>
      <Button fullWidth variant="outlined" size="large" onClick={onSearch}>
        Search
      </Button>
    </Box>
  );
};

export default Search;
