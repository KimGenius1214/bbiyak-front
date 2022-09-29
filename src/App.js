import logo from "./logo.svg";
import * as React from "react";
import "./App.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

function App() {
  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const jsx = `
<Grid container spacing={${spacing}}>
`;
  return (
    <div className="App">
      {/* <CssBaseline /> */}
      <Container maxWidth="xl">
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h3" align="left">
              h6. Heading
            </Typography>
            <Grid container justifyContent="center" spacing={spacing}>
              {[0, 1, 2, 3, 4].map((value) => (
                <Grid key={value} item>
                  <Card sx={{ maxWidth: 220 }}>
                    <CardMedia
                      component="img"
                      height={320}
                      a
                      image="https://an2-img.amz.wtchn.net/image/v2/A3w93ZJKG1mmpfhnT4fviA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk5qRTJPVFF4TWprMU1EVTROakkwTVRjaWZRLjhlVmVkcUhkQzVSa1E3R1VCc1lKSG92aW9KdlZRSDljTk00UmVyYk1ibnM"
                      alt="green iguana"
                    />
                  </Card>

                  <Typography variant="h6" align="left">
                    h6. Heading
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
