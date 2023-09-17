import "./SkillsContent.css";
import React from "react";
import "./SkillsContent.css";
import Button from "@mui/joy/Button";
import photo from "../../../assets/photo.png";
import { useState, useEffect } from "react";
import Divider from "@mui/joy/Divider";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";
import df from "../../../assets/df.png";
import cfms from "../../../assets/cf.png";
import psa from "../../../assets/psa.png";
import arwifi from "../../../assets/arwifi.png";

function SkillsContent() {
  let cards = [
    {
      key: 1,
      content: (
        <Card
          image={cfms}
          title="Contact Form Management System"
          category="Front-End Web Project"
          content="CFMS is a Form site where users can send messages to the system, where admins can list and read messages, delete messages, list users in the reader role, add a new user to the system, and report messages in different charts according to category."
          tech={[
            { key: 0, label: "React" },
            { key: 1, label: "WebSocket" },
            { key: 2, label: "Electron" },
            { key: 3, label: "node.js" },
            { key: 4, label: "HTML/CSS/Javascript" },
            { key: 5, label: "MUI" },
            { key: 6, label: "React Charts" },
            { key: 7, label: "Axios" },
            { key: 8, label: "Bootstrap" },
            { key: 9, label: "Storybook" },
            { key: 10, label: "JWT" },
          ]}
          link="https://github.com/oguzhanertekin/Contact-Form-Management-System"
        />
      ),
    },
    {
      key: 2,
      content: (
        <Card
          image={arwifi}
          title="AR Wifi Cam"
          category="Mobile Application"
          content="Using Augmented Reality (AR) technology, the application detects the Wi-Fi signal strength and download/upload speed of the internet to which the phone is connected, and shows this on an 3D object that we add to the real world via the camera via AR technology. With AR Wifi Cam, it is possible to detect where and how much wifi signal strength is."
          tech={[
            { key: 0, label: "Augmented Reality" },
            { key: 1, label: "Flutter" },
            { key: 2, label: "Java" },
            { key: 3, label: "Unity" },
            { key: 4, label: "C#" },
          ]}
          link="https://github.com/oguzhanertekin/AR-Wifi-Cam"
        />
      ),
    },
    {
      key: 3,
      content: (
        <Card
          image={psa}
          title="Personalized Smart Alarm"
          category="AI Model"
          content="An AI model that separates the sleep data monitored by a smart watch into REM sleep and NON-REM sleep, rates the quality of sleep as bad, medium or good according to these sleep data and calculates the person's ideal sleep time and wake-up time. (There are features to be improved)"
          tech={[
            { key: 0, label: "Python" },
            { key: 1, label: "Matplotlib" },
            { key: 2, label: "Numpy" },
            { key: 3, label: "Seaborn" },
            { key: 4, label: "Sklearn" },
          ]}
          link="https://github.com/oguzhanertekin/Personalized-Smart-Alarm"
        />
      ),
    },
    {
      key: 4,
      content: (
        <Card
          image={df}
          title="DeepFake with Python"
          category="AI Model"
          content="Deepfake is a form of media in which a picture of one person is replaced with another using artificial neural networks. The name 'Deepfake' is derived from the underlying artificial intelligence (AI) technique known as 'deep learning.' This project is a simple Deepfake model developed with Python."
          tech={[
            { key: 0, label: "Python" },
            { key: 1, label: "Numpy" },
            { key: 2, label: "Matplotlib" },
            { key: 3, label: "Scikit-image" },
          ]}
          link="https://github.com/oguzhanertekin/deepfake-python"
        />
      ),
    },
  ];
  return (
    <div
      className="container"
      style={{
        display: "flex",
        alignItems: "center",

        justifyContent: "space-evenly",
        height: "100vh",
      }}
    >
      <div className="skills-page">
        <div className="skills-div">
          <div className="skills-header" id="skills-header">
            <p>SKILLS</p>
            <Divider className="divider" />
          </div>

          <div className="pl">
            <AccordionGroup disableDivider sx={{ width: "100%" }}>
              <Accordion>
                <AccordionSummary className="accordion-summary">
                  General
                </AccordionSummary>
                <AccordionDetails className="accordion-details">
                  Algorithms, Data Structures, Object Oriented Programming,
                  Linear Algebra, Data-Intensive Applications, Data Management,
                  Front-End Web Development
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary className="accordion-summary">
                  React.js
                </AccordionSummary>
                <AccordionDetails className="accordion-details">
                  Responsive Web Design, Single Page Applications, API Based
                  Websites
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary className="accordion-summary">
                  Python
                </AccordionSummary>
                <AccordionDetails className="accordion-details">
                  Web Scraping, Automation Bots, Machine Learning Prediction
                  (Numpy, Pandas, Scikit-learn..)
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary className="accordion-summary">
                  Java
                </AccordionSummary>
                <AccordionDetails className="accordion-details">
                  Object Oriented Programming, Algorithms
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary className="accordion-summary">
                  C++
                </AccordionSummary>
                <AccordionDetails className="accordion-details">
                  Data Structures, Algorithms
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary className="accordion-summary">
                  Flutter
                </AccordionSummary>
                <AccordionDetails className="accordion-details">
                  Static Page Applications
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary className="accordion-summary">
                  Other
                </AccordionSummary>
                <AccordionDetails className="accordion-details">
                  Git, HTML, CSS, Javascript, SQL, Unity, WebSocket, Bootstrap,
                  Storybook
                </AccordionDetails>
              </Accordion>
            </AccordionGroup>
          </div>
        </div>
      </div>
      <div className="projects-page">
        <div className="skills-header">
          <p>PROJECTS</p>
        </div>
        <div className="carousel-div">
          <Carousel
            cards={cards}
            height="100%"
            width="70%"
            margin="20px auto"
            offset={2}
            showArrows={true}
          />
        </div>
      </div>
    </div>
  );
}

export default SkillsContent;
