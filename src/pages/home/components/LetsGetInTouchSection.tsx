import { Box, Container, Typography, Button } from "@mui/material";
import { Theme, useTheme } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EmailIcon from "@mui/icons-material/Email";

const useStyles = (theme: Theme) => ({
  section: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "160px 0px",
    gap: "44px",
    width: "100%",
    alignSelf: "stretch",
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "24px",
    justifyContent: "center",
    alignItems: "center",
  },
  primaryButton: {
    padding: '8px 32px',
    color: 'white',
    fontWeight: 'bold',
    lineHeight: 1.2,
    '& .MuiSvgIcon-root': {
      fontSize: '2.5rem',
      color: theme.palette.secondary.main,
    },
    gap: 4,
    bgcolor: theme.palette.primary.main,
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
      bgcolor: theme.palette.primary.main,
      '& .MuiSvgIcon-root': {
        color: theme.palette.secondary.main
      }
    }
  },
  secondaryButton: {
    padding: '8px 32px',
    color: theme.palette.secondary.main,
    fontWeight: 'bold',
    lineHeight: 1.2,
    border: `2px solid ${theme.palette.secondary.main}`,
    '& .MuiSvgIcon-root': {
      fontSize: '2.5rem',
      color: theme.palette.primary.main,
    },
    gap: 4,
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
      bgcolor: 'transparent',
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
      '& .MuiSvgIcon-root': {
        color: theme.palette.primary.main
      }
    }
  }
});

export function LetsGetInTouchSection() {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Container sx={{...classes.section}}>
      <Typography variant="h1" align="center">
        Let's get in touch
      </Typography>
      
      <Typography variant="body1" align="center">
        Ready to bring your vision to life? Let's create something amazing together.
      </Typography>

      <Box sx={{...classes.buttonsContainer}}>
        <Button
          variant="contained"
          sx={{...classes.primaryButton}}
          endIcon={<ArrowForwardIcon />}
        >
          Get a free budget
        </Button>

        <Button
          variant="outlined"
          sx={{...classes.secondaryButton}}
          endIcon={<EmailIcon />}
        >
          Contact me
        </Button>
      </Box>
    </Container>
  );
} 