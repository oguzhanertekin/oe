import React from "react";
import "./AboutContent.css";

import aboutimage from "../../../assets/3d.png";
import IconButton from "@mui/material/IconButton";

import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import { useState, useEffect } from "react";

const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank");
  if (newWindow) {
    newWindow.opener = null;
  }
};

function AboutContent() {
  return (
    <div
      className="about-container"
      style={{
        display: "flex",
        alignItems: "center",
        textAlign: "right",
        justifyContent: "center",
        height: "0vh",
      }}
    >
      <div className="image-div">
        <div>
          <img src={aboutimage} />
        </div>
      </div>
      <div className="about-div">
        <p className="about-title">About Me</p>
        <p className="about-text">
          Studying at Hacettepe University Computer Science Department as a 4th
          year student. I am someone who loves and cares about his job,
          completes his duties on time, has responsible and high communication
          skills and loves to improve himself in every field. Throughout my
          education life, I actively took part in student societies, fairs,
          summits and various activities. I served as a board member
          (Coordinator, Director, Vice President) at ACM Hacettepe Student
          Chapter for 3 years, and worked as a designer at Hacettepe University
          Career Development Application Research Center and Hacettepe Career
          Fair event for 2 years, and I am still working. Therefore, I define
          myself as a social person and I can easily adapt to the environments I
          am in, both socially and work-wise. In addition to my social skills, I
          also like to improve myself technically. I have been interested in
          software development for 4 years. I did both lab assignments, projects
          and internship tasks with a great passion for software, and while
          doing so, I also improved myself. My first internship was as a
          software developer at Innova Bilişim Çözümleri, and my second
          internship was as a Front-End Developer at OBSS Technology. I am on my
          way to making myself a better software developer with what I have
          learned from both internships and technical courses. I am currently
          interested in Front-End Development and soon I want to gain experience
          in Back-End Development and advance my career as a Full-Stack
          Developer.
        </p>
        <div className="icons">
          <IconButton
            className="icon-btn"
            onClick={() =>
              openInNewTab("https://www.instagram.com/oguzhanertkn/")
            }
          >
            <InstagramIcon sx={{ color: "white" }} />
          </IconButton>
          <IconButton
            className="icon-btn"
            onClick={() =>
              openInNewTab("https://www.linkedin.com/in/oğuzhan-ertekin/")
            }
          >
            <LinkedInIcon sx={{ color: "white" }} />
          </IconButton>
          <IconButton
            className="icon-btn"
            onClick={() =>
              openInNewTab("https://www.github.com/oguzhanertekin/")
            }
          >
            <GitHubIcon sx={{ color: "white" }} />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
