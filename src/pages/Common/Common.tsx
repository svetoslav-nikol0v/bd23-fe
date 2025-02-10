import { Link, useLocation, useNavigate } from "react-router-dom";
import PageLayout from "../../layouts/PageLayout/PageLayout";
import useFetch from "../../hooks/useFetch/useFetch";
import {
  IFilm,
  IPerson,
  IPlanet,
  IResult,
  ISpecies,
  IStarship,
  IVehicle,
} from "../../types/interfaces";
import { Method } from "../../types/enum";
import { useAppContext } from "../../providers/AppProvider/useAppContext";
import { extractId } from "../../utils/string";
import { Box, CircularProgress, Pagination, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { useState } from "react";
import Search from "../../components/Search/Search";

type Result = IPerson | IFilm | IVehicle | IPlanet | ISpecies | IStarship;

const Common = () => {
  const location = useLocation();
  const { token } = useAppContext();
  const navigate = useNavigate();
  const endpoint = location.pathname + location.search;

  const [search, setSearch] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const requestParams = {
    method: Method.GET,
    endpoint,
    token,
  };

  const { isLoading, data, error, refetch } =
    useFetch<IResult<Result>>(requestParams);

  const handleSearch = () => {
    navigate(`${location.pathname}?${search}`);
  };

  return (
    <PageLayout>
      <Search search={search} onChange={handleChange} onSearch={handleSearch} />
      {isLoading ? (
        <Box
          justifyContent="center"
          alignItems="center"
          display="flex"
          flex={1}
        >
          <CircularProgress />
        </Box>
      ) : (
        <></>
      )}
      {!isLoading && <ErrorMessage error={error} />}
      <List>
        {!isLoading &&
          !error &&
          data?.results?.map((result: Result) => (
            <ListItem key={extractId(result.url)}>
              <Link to={`${extractId(result.url)}`}>
                <ListItemText>
                  {"name" in result ? result.name : result.title}
                </ListItemText>
              </Link>
            </ListItem>
          ))}
      </List>
      {data?.totalPages ? (
        <Pagination
          count={data?.totalPages}
          style={{ display: "flex", justifyContent: "center" }}
          onChange={(_, page) =>
            refetch({
              ...requestParams,
              ...{
                endpoint: `${requestParams.endpoint}?page=${page}`,
              },
            })
          }
        />
      ) : (
        <Typography variant="body2" align="center">
          No result
        </Typography>
      )}
    </PageLayout>
  );
};

export default Common;
