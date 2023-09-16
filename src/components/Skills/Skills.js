import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import bg from "../../assets/bg.PNG";
import { experimentalStyled as styled } from "@mui/material/styles";
import SkillsContent from "./SkillsContent/SkillsContent";
import "./Skills.css";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  color: "black",
  //   backgroundColor: "rgba(255, 255, 10,1)",
  //   width: "85vw",
}));

function Skills() {
  return (
    <div className="skills">
      <Box sx={{ flexGrow: 0 }}>
        <Grid
          container
          style={{
            justifyContent: "center",
          }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={0} sm={0} md={1} className="space">
            {/* <Item>SPACE</Item> */}
          </Grid>

          <Grid item xs={3.5} sm={8} md={10}>
            {/* <Item> */}
            <SkillsContent />
            {/* </Item> */}
          </Grid>

          <Grid item xs={0} sm={0} md={1} className="space">
            {/* <Item>SPACE</Item> */}
          </Grid>
        </Grid>
      </Box>
      <div className="skills-bg">
        <img src={bg} width="40%" className="skills-image" />
      </div>
    </div>
  );
}

export default Skills;
