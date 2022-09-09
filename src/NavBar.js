import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import logo from "./images/IMG_1735.JPG";
import SwitchTheme from "./styles/Switch";
import { ThemeContext } from "./context/theme.context";
import "./styles/NavBar.css";

const pages = ["project", "contact", "about"];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: "none",
        backgroundColor: isDarkMode ? "black" : "white",
        height: '10%',
        marginBottom: '0',
        transition: 'background-color 1s ease-in-out',
        
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={NavLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: isDarkMode ? 'white' : 'black',
              textDecoration: "none",
            }}
          >
            SKYE
          </Typography>

          {/* Drop down Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{color: isDarkMode ? 'white' : 'black'}}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <NavLink to={`/${page}`} className="Navlink-sm" key={page}>
                    {page}
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
            {/* End of drop down Menu */}
          </Box>
          <Typography
            variant="h5"
            noWrap
            component={NavLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: isDarkMode ? 'white' : 'black',
              textDecoration: "none",
            }}
          >
            SKYE
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <NavLink
                to={`/${page}`}
                className={`Navlink-lg ${
                  isDarkMode ? "darkMode" : "lightMode"
                }`}
                key={page}
              >
                {page}
              </NavLink>
              // <Button
              //   key={page}
              //   onClick={handleCloseNavMenu}
              //   sx={{ my: 2, color: "white", display: "block" }}
              // >

              // </Button>
            ))}
          </Box>

          <SwitchTheme onChange={toggleDarkMode} checked={isDarkMode}/>
          {/* User Page */}
          <Box sx={{ flexGrow: 0 }}>
            <IconButton LinkComponent={NavLink} to="/about" sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src={logo} />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
