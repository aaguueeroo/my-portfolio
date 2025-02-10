import { AppBar, Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import Menu from "./menu/Menu";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Theme, useTheme } from "@mui/material/styles";

const useStyles = makeStyles((theme: Theme) => ({
  iconButton: {
    "& .MuiSvgIcon-root": {
      fontSize: "4rem",
    },
  },
  navBox: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: theme.palette.primary.main,
    height: "100%",
  },
  appBar: {
    boxShadow: "none !important", // Forzar con !important
    elevation: 0,
    height: "70px",
  },
}));

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const classes = useStyles(useTheme());

  return (
    <AppBar 
      position="sticky" 
      color="secondary" 
      className={classes.appBar}
    >
      <Box className={classes.navBox}>
        <IconButton
          className={classes.iconButton}
          onClick={() => navigate("/")}
        >
          <HomeIcon />
        </IconButton>
        <IconButton
          className={classes.iconButton}
          onClick={() => setIsMenuOpen(true)}
        >
          <MenuIcon />
        </IconButton>
      </Box>
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </AppBar>
  );
};

export default Navbar;
