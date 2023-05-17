import "./styles.css";
import { MainContent } from "./MainContent";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Intro } from "./Intro";

export default function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ padding: "20px 0px", flexGrow: 1 }}>
          <Grid container spacing={2}>
            {/* <Grid item xs={12} md={6}>
              <Intro />
            </Grid> */}
            <Grid item xs={12} md={12}>
              <MainContent />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
