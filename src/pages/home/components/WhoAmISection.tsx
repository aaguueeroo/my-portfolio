import { Container, Typography, Card, useTheme } from "@mui/material";
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
    height: 500,
    backgroundColor: "#fff",
  },
  cardsRow: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "24px",
  },
  smallCard: {
    height: 300,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});


const WhoAmISection = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Container sx={{...classes.section}}>
      <Typography variant="h1" align="center" gutterBottom>
        Who am I?
      </Typography>
      
      <Card sx={{...classes.mainCard}}>
        <Typography variant="body1" padding={3}>
          I'm a software engineer with a passion for web development. I have
          experience in building web applications using React, Angular, and
          Vue. I'm also familiar with backend technologies like Node.js,
          Express, and MongoDB. I'm always looking for new challenges and
          opportunities to learn and grow.
        </Typography>
      </Card>

      <Container sx={{...classes.cardsRow}}>
        <Card sx={{...classes.smallCard}}>
          <Typography variant="h4" textAlign={"center"}>
            +4
          </Typography>
          <Typography variant="body1" textAlign={"center"}>
            years experience
          </Typography>
        </Card>

        <Card sx={{...classes.smallCard}}>
          <Typography variant="h4" textAlign={"center"}>
            +8000
          </Typography>
          <Typography variant="body1" textAlign={"center"}>
            hours of coding
          </Typography>
        </Card>

        <Card sx={{...classes.smallCard}}>
          <Typography variant="h4" textAlign={"center"}>
            +20
          </Typography>
          <Typography variant="body1" textAlign={"center"}  >
            projects completed          </Typography>
        </Card>
      </Container>
    </Container>
  );
};

export default WhoAmISection;
