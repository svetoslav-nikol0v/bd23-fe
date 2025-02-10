import { useEffect, useState } from "react";
import apiRequest from "../../api/request";
import { IRequestParams } from "../../types/interfaces";

export const DEFAULT_ERROR_MESSAGE = "An error occurred fetching images";

const useFetch = <T>(params: IRequestParams) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<T>();
  const [error, setError] = useState<string>("");

  const fetchData = async (params: IRequestParams): Promise<void> => {
    setIsLoading(true);

    try {
      const data = await apiRequest<T>(params);
      setData(data);
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : DEFAULT_ERROR_MESSAGE);
    }

    setIsLoading(false);
  };

  const refetch = (params: IRequestParams) => fetchData(params);

  useEffect(() => {
    fetchData(params);
  }, [params.endpoint, params.body, params.method, params.token]);

  return {
    data,
    isLoading,
    error,
    refetch,
  };
};

export default useFetch;
