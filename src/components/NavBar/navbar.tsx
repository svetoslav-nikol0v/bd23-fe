import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ROUTES } from "../../config/constants";
import { useAppContext } from "../../providers/AppProvider/useAppContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { logout, isAuthenticated } = useAppContext();

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box flexGrow={1} display="flex" flexDirection="row" gap={2}>
            <Link to={`/${ROUTES.PEOPLE}`} style={{ textDecoration: "none" }}>
              <Typography
                variant="body1"
                color="white"
                component="div"
                sx={{ flexGrow: 1 }}
              >
                People
              </Typography>
            </Link>
            <Link to={`/${ROUTES.FILMS}`} style={{ textDecoration: "none" }}>
              <Typography
                variant="body1"
                color="white"
                component="div"
                sx={{ flexGrow: 1 }}
              >
                Films
              </Typography>
            </Link>
            <Link to={`/${ROUTES.PLANETS}`} style={{ textDecoration: "none" }}>
              <Typography
                variant="body1"
                color="white"
                component="div"
                sx={{ flexGrow: 1 }}
              >
                Planets
              </Typography>
            </Link>
            <Link to={`/${ROUTES.VEHICLES}`} style={{ textDecoration: "none" }}>
              <Typography
                variant="body1"
                color="white"
                component="div"
                sx={{ flexGrow: 1 }}
              >
                Vehicles
              </Typography>
            </Link>
            <Link to={`/${ROUTES.SPECIES}`} style={{ textDecoration: "none" }}>
              <Typography
                variant="body1"
                color="white"
                component="div"
                sx={{ flexGrow: 1 }}
              >
                Species
              </Typography>
            </Link>
            <Link
              to={`/${ROUTES.STARSHIPS}`}
              style={{ textDecoration: "none" }}
            >
              <Typography
                variant="body1"
                color="white"
                component="div"
                sx={{ flexGrow: 1 }}
              >
                Starships
              </Typography>
            </Link>
            <Link
              to={`/${ROUTES.USERS}`}
              style={{ textDecoration: "none" }}
              replace={false}
            >
              <Typography
                variant="body1"
                color="white"
                component="div"
                sx={{ flexGrow: 1 }}
              >
                Users
              </Typography>
            </Link>
          </Box>
          {isAuthenticated ? (
            <Button color="inherit" onClick={logout}>
              Logout
            </Button>
          ) : (
            <></>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
