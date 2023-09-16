import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/joy/Button";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import FlagRoundedIcon from "@mui/icons-material/FlagRounded";
import CV from "../../assets/CV.pdf";
import "./Work.css";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  color: "black",
  backgroundColor: "rgba(255, 255, 240,0.5)",
  borderRadius: "20px",
  display: "flex",
  justifyContent: "center",
  boxShadow: "none",
  //   alignItems: "center",
  height: "80vh",
}));

function Work() {
  return (
    <div className="work">
      <Box sx={{ flexGrow: 0 }}>
        <Grid
          container
          style={{
            display: "flex",

            alignItems: "center",
            justifyContent: "center",
          }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={3.5} sm={7} md={10}>
            <Item>
              <div className="work-div">
                <p className="work-title">Work Experience</p>
                <div className="timeline-div" id="timeline-div">
                  <Timeline position="alternate" className="timeline">
                    <TimelineItem className="asa">
                      <TimelineOppositeContent
                        sx={{ m: "auto 0" }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                        className="role"
                      >
                        <p>Front-End Developer Intern</p>
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot style={{ backgroundColor: "white" }}>
                          <FlagRoundedIcon style={{ color: "#cd1b1b" }} />
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent sx={{ py: "12px", px: 2 }}>
                        <div className="txt-div">
                          <p className="company">OBSS Technology</p>
                          <p className="date">July 2023 - August 2023</p>
                        </div>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem className="asa">
                      <TimelineOppositeContent
                        sx={{ m: "auto 0" }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                        className="role"
                      >
                        <p>Software Developer Intern</p>
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot style={{ backgroundColor: "white" }}>
                          <FlagRoundedIcon style={{ color: "#cd1b1b" }} />
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent sx={{ py: "12px", px: 2 }}>
                        <div className="txt-div">
                          <p className="company">Innova IT Solutions</p>
                          <p className="date">July 2022 - August 2022</p>
                        </div>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem className="asa">
                      <TimelineOppositeContent
                        sx={{ m: "auto 0" }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                        className="role"
                      >
                        <p>Social Media Designer</p>
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot style={{ backgroundColor: "white" }}>
                          <FlagRoundedIcon style={{ color: "#cd1b1b" }} />
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent sx={{ py: "12px", px: 2 }}>
                        <div className="txt-div">
                          <p className="company">HUKARMER</p>
                          <p className="date">October 2021 - Present</p>
                        </div>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem className="asa">
                      <TimelineOppositeContent
                        sx={{ m: "auto 0" }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                        className="role"
                      >
                        <p>Designer</p>
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot style={{ backgroundColor: "white" }}>
                          <FlagRoundedIcon style={{ color: "#cd1b1b" }} />
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent sx={{ py: "12px", px: 2 }}>
                        <div className="txt-div">
                          <p className="company">Hacettepe Career Fair</p>
                          <p className="date">October 2021 - Present</p>
                        </div>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem className="asa">
                      <TimelineOppositeContent
                        sx={{ m: "auto 0" }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                        className="role"
                      >
                        <p>Board Member</p>
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot style={{ backgroundColor: "white" }}>
                          <FlagRoundedIcon style={{ color: "#cd1b1b" }} />
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent sx={{ py: "12px", px: 2 }}>
                        <div className="txt-div">
                          <p className="company">
                            ACM Hacettepe Student Chapter
                          </p>
                          <p className="date">July 2020 - July 2023</p>
                        </div>
                      </TimelineContent>
                    </TimelineItem>
                  </Timeline>
                </div>
              </div>
            </Item>
          </Grid>
        </Grid>
        <a
          href={CV}
          rel="noreferrer"
          download="OğuzhanErtekin-CV"
          target="_blank"
          classLink="cv-link"
        >
          <Button id="downloadButton" className="cv-btn" variant="outlined">
            <p>Download CV</p>
          </Button>
        </a>
      </Box>
    </div>
  );
}

export default Work;
