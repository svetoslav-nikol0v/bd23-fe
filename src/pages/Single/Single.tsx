import { useLocation } from "react-router-dom";
import PageLayout from "../../layouts/PageLayout/PageLayout";
import { useAppContext } from "../../providers/AppProvider/useAppContext";
import { Method } from "../../types/enum";
import { IPerson } from "../../types/interfaces";
import useFetch from "../../hooks/useFetch/useFetch";
import { Box, CircularProgress, Typography } from "@mui/material";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const Single = () => {
  const location = useLocation();
  const { token } = useAppContext();
  const endpoint = location.pathname;

  const requestParams = {
    method: Method.GET,
    endpoint,
    token,
  };

  const render = (d: any) => {
    return Object.keys(d).map((key: string, index: number) => (
      <Typography
        component={"div"}
        key={`${key}-${index}`}
        variant="body2"
        margin={1}
        style={{ wordBreak: "break-word" }}
      >
        <b>{key}</b>: {typeof d[key] === "object" ? render(d[key]) : d[key]}
      </Typography>
    ));
  };

  const { isLoading, data, error } = useFetch<IPerson>(requestParams);

  return (
    <PageLayout>
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
      {!isLoading && !error && data ? render(data) : <></>}
    </PageLayout>
  );
};

export default Single;
