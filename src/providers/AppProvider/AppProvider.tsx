import React, { PropsWithChildren, useEffect, useState } from "react";
import { IToken } from "../../types/interfaces";
import apiRequest from "../../api/request";
import { DEFAULT_ERROR_MESSAGE } from "../../config/constants";
import { Method } from "../../types/enum";
import { AppContext } from "./useAppContext";
import * as localStorage from "../../utils/logalStorage";

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [token, setToken] = useState<string>("");
  const [isAuthenticated, setIsAuthenticate] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmedPassword, setConfirmedPassword] = useState<string>("");

  const login = async (): Promise<void> => {
    setIsLoading(true);
    setError("");

    try {
      const requestParams = {
        method: Method.POST,
        endpoint: "/auth/login",
        body: JSON.stringify({
          email,
          password,
        }),
      };
      const { token } = await apiRequest<IToken>(requestParams);
      localStorage.set("token", token);
      setToken(token);
      setIsAuthenticate(Boolean(token));
    } catch (error) {
      setError(error instanceof Error ? error.message : DEFAULT_ERROR_MESSAGE);
    }
    setIsLoading(false);
  };

  const logout = () => {
    setError("");
    setIsAuthenticate(false);
    setToken("");
    localStorage.remove("token");
  };

  useEffect(() => {
    setIsLoading(true);
    const token = localStorage.get("token");
    setToken(token || "");
    setIsAuthenticate(Boolean(token));
    setIsLoading(false);
  }, []);

  const register = async () => {
    setIsLoading(true);
    setError("");

    try {
      const requestParams = {
        method: Method.POST,
        endpoint: "/auth/register",
        body: JSON.stringify({
          email,
          password,
          confirmedPassword,
        }),
      };
      const { token } = await apiRequest<IToken>(requestParams);
      localStorage.set("token", token);
      setToken(token);
      setIsAuthenticate(Boolean(token));
    } catch (error) {
      setError(error instanceof Error ? error.message : DEFAULT_ERROR_MESSAGE);
    }
    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "confirmedPassword":
        setConfirmedPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        token,
        error,
        login,
        logout,
        register,
        handleChange,
        email,
        password,
        confirmedPassword,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
