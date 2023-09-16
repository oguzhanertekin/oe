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
          Lorem ipsum, dolor sisst amet consectetur adipisicing elit. Illum
          omnis ex facilis temporibus laudantium ipsam fugit. Nihil, ullam. Non
          quos commodi autem ipsa eius aperiam molestias,Lorem ipsum, dolor
          sisst amet consectetur adipisicing elit. Illum omnis ex facilis
          temporibus laudantium ipsam fugit. Nihil, ullam. Non quos commodi
          autem ipsa eius aperiam molestias,Lorem ipsum, dolor sisst amet
          consectetur adipisicing elit. Illum omnis ex facilis temporibus
          laudantium ipsam fugit. Nihil, ullam. Non quos commodi autem ipsa eius
          aperiam molestias,Lorem ipsum, dolor sisst amet consectetur
          adipisicing elit. Illum omnis ex facilis temporibus laudantium ipsam
          fugit. Nihil, ullam. Non quos commodi autem ipsa eius aperiam
          molestias,am molestias,Lorem ipsum, dolor sisst amet consectetur
          adipisicing elit. Illum omnis ex facilis temporibus laudantium ipsam
          fugit. Nihil, ullam. Non quos commodi autem ipsa eius aperiam
          molestias,am molestias,Lorem ipsum, dolor sisst amet consectetur
          adipisicing elit. Illum omnis ex facilis temporibus laudantium ipsam
          fugit. Nihil, ullam. Non quos commodi autem ipsa eius aperiam
          molestias,am molestias,Lorem ipsum, dolor sisst amet consectetur
          adipisicing elit. Illum omnis ex facilis temporibus laudantium ipsam
          fugit. Nihil, ullam. Non quos commodi autem ipsa eius aperiam
          molestias,
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
