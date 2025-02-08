import { Box, Card, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MyCard from "../../../components/MyCard";

import { Theme } from "@mui/material/styles";

const useStyles = (theme: Theme) => ({
  section: {
    padding: "166px 64px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "24px",
  },
  mainCard: {
    minHeight: 300,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    gap: "24px",
    alignItems: "center",
    justifyContent: "center",
  },
  mainCardContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    alignItems: "stretch",
    padding: "24px",
  },
  mainCardImage: {
    width: "40%",
    objectFit: "cover",
    borderRadius: theme.shape.borderRadius,
  },
  mainCardContent: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    flex: 1,
    justifyContent: "center",
  },
  cardsRow: {
    display: "flex",
    flexDirection: "row",
    gap: "24px",
  },
  card: {
    height: 300,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
  },
});

export function WhatDoIOfferSection() {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Container sx={{ ...classes.section }}>
      <Typography variant="h1" align="center" gutterBottom>
        What do I offer?
      </Typography>

      <Box sx={{ ...classes.mainCardContainer }}>
        <Card sx={{ ...classes.mainCard }}>
          <Box
            component="img"
            src="/path-to-your-image.jpg"
            sx={{ ...classes.mainCardImage }}
          />
          <Box sx={{ ...classes.mainCardContent }}>
            <Typography variant="h6">Get all your app developed without delays.</Typography>
            <Typography variant="body1">
              Comprehensive web and mobile solutions.
            </Typography>
          </Box>
        </Card>

        <Container sx={{ ...classes.cardsRow }}>
          <Card sx={{ ...classes.card }}>
            <Typography variant="subtitle2" textAlign={"start"}>
              Technical Consulting
            </Typography>
            <Typography variant="body2" textAlign={"start"}>
              Expert advice on technology choices, architecture, and best
              practices for your projects. Helping you make informed decisions
              for your technical solutions.
            </Typography>
          </Card>

          <Card sx={{ ...classes.card }}>
            <Typography variant="subtitle2" textAlign={"start"}>
              UI/UX Design
            </Typography>
            <Typography variant="body2" textAlign={"start"}>
              Creating intuitive and beautiful user interfaces. Focus on user
              experience and modern design principles to make your application
              stand out.
            </Typography>
          </Card>
        </Container>
      </Box>
    </Container>
  );
}
