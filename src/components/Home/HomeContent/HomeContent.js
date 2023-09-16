import React from "react";
import "./HomeContent.css";
import Button from "@mui/joy/Button";
import photo from "../../../assets/photo.png";
import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";

import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Popper from "@mui/material/Popper";

import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

function HomeContent() {
  const [index, setIndex] = useState(0);
  const words = ["Oğuzhan.", "Developer."];
  const [currentWord, setCurrentWord] = useState(words[0]);

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank");
    if (newWindow) {
      newWindow.opener = null;
    }
  };

  useEffect(() => {
    const word = words[index];
    let currentCharacter = 0;
    let interval;

    const typing = () => {
      if (currentCharacter < word.length) {
        setCurrentWord(word.substring(0, currentCharacter + 1));
        currentCharacter++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          erase();
        }, 1500);
      }
    };

    const erase = () => {
      interval = setInterval(() => {
        if (currentCharacter >= 0) {
          setCurrentWord(word.substring(0, currentCharacter));
          currentCharacter--;
        } else {
          clearInterval(interval);
          setIndex((prevIndex) =>
            prevIndex === words.length - 1 ? 0 : prevIndex + 1
          );
        }
      }, 100);
    };

    interval = setInterval(typing, 100);

    return () => clearInterval(interval);
  }, [index]);

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("About");

    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "bottom" ? "auto" : 250,
        display: "flex",
        justifyContent: "center",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem key="mail" disablePadding>
          <IconButton
            className="icon-btn"
            onClick={() => openInNewTab("mailto:oertekin134@gmail.com")}
          >
            <MailIcon sx={{ color: "#cd1b1b" }} />
          </IconButton>
          <p className="list-item">
            <a
              href="mailto:oertekin134@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              oertekin134@gmail.com
            </a>
          </p>
        </ListItem>
        <ListItem key="linkedin" disablePadding>
          <IconButton
            className="icon-btn"
            onClick={() =>
              openInNewTab("https://www.linkedin.com/in/oğuzhan-ertekin/")
            }
          >
            <LinkedInIcon sx={{ color: "#cd1b1b" }} />
          </IconButton>
          <p className="list-item">
            <a
              href="https://www.linkedin.com/in/oğuzhan-ertekin/"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              oğuzhan-ertekin
            </a>
          </p>
        </ListItem>
        <ListItem key="github" disablePadding>
          <IconButton
            className="icon-btn"
            onClick={() =>
              openInNewTab("https://www.github.com/oguzhanertekin")
            }
          >
            <GitHubIcon sx={{ color: "#cd1b1b" }} />
          </IconButton>
          <p className="list-item">
            <a
              href="https://www.github.com/oguzhanertekin"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              oguzhanertekin
            </a>
          </p>
        </ListItem>

        <ListItem key="instagram" disablePadding>
          <IconButton
            className="icon-btn"
            onClick={() =>
              openInNewTab("https://www.instagram.com/oguzhanertkn/")
            }
          >
            <InstagramIcon sx={{ color: "#cd1b1b" }} />
          </IconButton>
          <p className="list-item">
            {" "}
            <a
              href="https://www.instagram.com/oguzhanertkn/"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              oguzhanertkn
            </a>
          </p>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div
      className="container"
      style={{
        display: "flex",
        alignItems: "center",
        textAlign: "left",
        justifyContent: "flex-end",
        height: "100vh",
      }}
    >
      <div className="text-section">
        <p className="name">
          I'm <span className="second-word">{currentWord}</span>
        </p>
        <p className="about">
          Lorem ipsum, dolor sisst amet consectetur adipisicing elit. Illum
          omnis ex facilis temporibus laudantium ipsam fugit. Nihil, ullam. Non
          quos commodi autem ipsa eius aperiam molestias, nostrum officiis culpa
          voluptates! Lorem
        </p>
        <div className="btn-section">
          <Button className="first-button btn" onClick={handleScrollToAbout}>
            Read More
          </Button>
          <Button
            className="second-button btn"
            variant="outlined"
            type="button"
            onClick={toggleDrawer("bottom", true)}
          >
            Contact Me
          </Button>
        </div>
      </div>
      <div className="image-section">
        <div className="circle-container">
          <div className="circle">
            <div className="scrolling-text"></div>
          </div>
        </div>

        <div className="image-overlay">
          <img className="profile-image" src={photo} />
        </div>
      </div>
      <div>
        <React.Fragment key="bottom">
          <SwipeableDrawer
            anchor="bottom"
            open={state["bottom"]}
            onClose={toggleDrawer("bottom", false)}
            onOpen={toggleDrawer("bottom", true)}
          >
            {list("bottom")}
          </SwipeableDrawer>
        </React.Fragment>
      </div>
    </div>
  );
}

export default HomeContent;
