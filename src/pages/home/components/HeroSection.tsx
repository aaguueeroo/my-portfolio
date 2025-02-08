import { Theme, useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { makeStyles } from "@mui/styles";
 
const useStyles = makeStyles((theme: Theme) => ({
  hero: {
    position: "relative",
    width: "100%",
    height: "100vh",
    maxWidth: "2000px",
    margin: "auto",
    backgroundImage: "url('https://picsum.photos/seed/picsum/200/300')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    width: "100%",
    height: "100%",
    backdropFilter: "blur(5px)",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "center",
    padding: "0 15%",
  },
  title: {
    color: theme.palette.secondary.main,
    fontWeight: 700,
    textAlign: "left",
    marginBottom: theme.spacing(1),
    width: "100%",
  },
  subtitle: {
    color: theme.palette.secondary.main,
    fontWeight: 700,
    textAlign: "left",
    marginBottom: theme.spacing(4),
    width: "100%",
  },
  titleEmphasis: {
    color: theme.palette.primary.main,
    fontWeight: 700,
    textAlign: "left",
    width: "100%",
  },
  iconButton: {
    "& .MuiSvgIcon-root": { 
      fontSize: "4rem" 
    }
  },
  navBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    px: 4,
    py: 2,
  },
  appBar: {
    backgroundColor: "secondary",
    boxShadow: "none",
  },
}));

const HeroSection = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box className={classes.hero}>
      <Box className={classes.overlay}>
        <Typography variant="h1" className={classes.title} gutterBottom>
          Get a premium app{" "}
          <span className={classes.titleEmphasis}>fast and easy</span>
        </Typography>
        <Typography variant="body1" className={classes.subtitle} gutterBottom>
          Share your vision, values and personality --I'll turn them into an app
          that truly represents you.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          endIcon={<ArrowForwardIcon color="primary" />}
        >
          Get a budget for free
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
