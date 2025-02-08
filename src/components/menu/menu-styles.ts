import { Theme } from "@mui/material/styles";

const useStyles = (theme: Theme) => ({
  drawer: {
    width: "100%",
    bgcolor: theme.palette.background.default,
  },
  container: {
    padding: '48px 128px',
    height: "100%",
    display: "flex",
    alignItems: "flex-end",
    flexDirection: "column",
  },
  closeButtonContainer: {
    display: "flex", 
    justifyContent: "flex-end"
  },
  closeIcon: {
    fontSize: "5rem"
  },
  list: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: '128px',
  },
  listItem: {
    background: 'none',
    border: 'none',
    padding: '24px 0',
    display: 'flex',
    justifyContent: 'flex-end',
    gap: 2,
    alignItems: 'flex-end',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      background: 'none',
      transform: 'translateX(-20px)',
      '& .MuiTypography-root': {
        color: theme.palette.primary.main
      }
    }
  },
  listItemText: {
    transition: 'color 0.3s ease-in-out',
    fontSize: "4.5rem",
    alignSelf: "flex-end",
    textAlign: "right"
  },
  listItemIcon: {
    fontSize: "4.5rem",
    transition: 'all 0.3s ease-in-out'
  },
  button: {
    alignSelf: "center",
    marginBottom: '64px',
    padding: '8px 64px',
    color: 'white',
    fontSize: '3.2rem !important',
    fontWeight: 'bold',
    lineHeight: 1.2,
    '& .MuiSvgIcon-root': {
      fontSize: '3.5rem',
      color: theme.palette.primary.main,
    },
    gap: 4,
    bgcolor: theme.palette.secondary.main,
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
      bgcolor: theme.palette.primary.main,
      fontSize: '3.3rem !important',
      '& .MuiSvgIcon-root': {
        color: theme.palette.secondary.main
      }
    }
  },
});

export default useStyles; 