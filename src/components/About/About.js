import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import bg from "../../assets/bg-white.png";
import AboutContent from "./AboutContent/AboutContent";

import "./About.css";
const Item = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  color: "white",
  backgroundColor: "rgba(255, 255, 10,1)",
}));

function About() {
  return (
    <div className="about">
      <Box sx={{ flexGrow: 0 }}>
        <Grid
          container
          style={{
            justifyContent: "center",
          }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={0} sm={0.5} md={1} className="space">
            {/* <Item>ss</Item> */}
          </Grid>

          <Grid item xs={3.5} sm={7} md={10}>
            {/* <Item> */}
            <AboutContent />
            {/* </Item> */}
          </Grid>

          <Grid item xs={0} sm={0.5} md={1} className="space">
            {/* <Item>ss</Item> */}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default About;
