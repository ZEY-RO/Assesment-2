import React from "react";

import Test from "./components/Test";
import { Grid, Typography } from "@material-ui/core";
function App() {
  return (
    <Grid
      container
      spacing={5}
      style={{ backgroundColor: "rgb(252, 230, 233)", paddingBottom: "10%" }}
    >
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <div style={{ textAlign: "center" }}>
          <Typography variant="h2">Taha Abny Baber</Typography>
          <Typography variant="h2">FA17-BCS-063</Typography>
        </div>
      </Grid>
      <Grid item xs={2}></Grid>

      <Grid item xs={1}></Grid>
      <Grid item xs={10} >
        <Test style={{ backgroundColor: "rgb(252, 230, 233)" }}></Test>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
}

export default App;
