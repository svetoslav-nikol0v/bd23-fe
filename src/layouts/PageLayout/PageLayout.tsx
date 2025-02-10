import React from "react";
import Navbar from "../../components/NavBar/navbar";
import { Container } from "@mui/material";

type PageLayoutProps = {
  children?: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <Container
      maxWidth="xl"
      style={{ display: "flex", flex: 1, flexDirection: "column" }}
    >
      <Navbar />
      {children}
    </Container>
  );
};

export default PageLayout;
