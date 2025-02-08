import {
  AppBar,
  Box,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import { useTheme } from "@mui/material/styles";
import Menu from "./menu/Menu";
import { useNavigate } from "react-router-dom";
import useStyles from "./menu/menu-styles";
import { useState } from "react";

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <>
      <AppBar position="sticky" color="secondary">
        <Box className={classes.navBox}>
          <IconButton className={classes.iconButton} onClick={() => navigate("/")}>
            <HomeIcon />
          </IconButton>
          <IconButton className={classes.iconButton} onClick={() => setIsMenuOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Box>
      </AppBar>

      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Navbar;
