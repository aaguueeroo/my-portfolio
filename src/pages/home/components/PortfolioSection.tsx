import { Box, Button, Theme, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const useStyles = (theme: Theme) => ({
  section: {},
  box: {
    padding: "128px 128px",
    display: "flex",
    height: "30vh",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "24px",
    maxWidth: "1440px",
    alignSelf: "center",
    backgroundImage: "url('https://picsum.photos/seed/picsum/200/300')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  button: {
    padding: '8px 32px',
    color: 'white',
    fontWeight: 'bold',
    lineHeight: 1.2,
    '& .MuiSvgIcon-root': {
      fontSize: '2.5rem',
      color: theme.palette.primary.main,
    },
    gap: 4,
    bgcolor: theme.palette.secondary.main,
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
      bgcolor: theme.palette.primary.main,
      '& .MuiSvgIcon-root': {
        color: theme.palette.secondary.main
      }
    }
  },
});

const PortfolioSection = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box sx={{ ...classes.box }}>
      <Typography variant="h1" textAlign={"start"}>
        Get to know my work
      </Typography>
      <Button
        variant="contained"
        endIcon={<ArrowForwardIcon />}
        sx={{ ...classes.button }}
      >
        See projects
      </Button>
    </Box>
  );
};

export default PortfolioSection;
