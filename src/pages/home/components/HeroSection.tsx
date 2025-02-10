import { Theme, useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { makeStyles } from "@mui/styles";
 
const useStyles = makeStyles((theme: Theme) => ({
  heroWrapper: {
    flex: 1,
    flexGrow: 1,
    width: "100%",
    padding: "0",
    margin: "0",
    overflow: "hidden",
  },
  heroBackground: {
    width: "100%",
    height: "100%",
    padding: "0",
    margin: "0",
    position: "absolute",
    backgroundImage: "url('src/assets/images/hero.png')",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
    zIndex: 1,
    overflow: "hidden",
  },
  column: {
    flex: 1,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    zIndex: 2,
  },
  title: {
    color: theme.palette.secondary.main,
    fontWeight: 700,
    textAlign: "left",
  },
  subtitle: {
    color: theme.palette.secondary.main,
    fontWeight: 700,
    textAlign: "left",
  },
  titleEmphasis: {
    color: theme.palette.primary.main,
    fontWeight: 700,
    textAlign: "left",
  },
  
}));

const HeroSection = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box className={classes.heroWrapper}>
      <Box className={classes.heroBackground} />
      <Box className={classes.column}>
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
