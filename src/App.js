import "./App.css";
import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Work from "./components/Work/Work.js";
import Skills from "./components/Skills/Skills";
import bg from "./assets/bg.PNG";
import Container from "@mui/material/Container";
import Navbar from "./components/Navbar/Navbar";
import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import IconButton from "@mui/material/IconButton";
import EmailIcon from "@mui/icons-material/Email";

import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: "white",
  backgroundColor: "red",
}));

function App() {
  const navigate = useNavigate();
  const [selectedLink, setSelectedLink] = useState("Home");

  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          const id = section.getAttribute("id");
          setSelectedLink(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="App">
      <div className="container">
        <Navbar className="navbar" page={selectedLink} />

        <section className="home-section" id="Home">
          <Home />
        </section>
        <section className="about-section" id="About">
          <About />
        </section>
        <section className="skills-section" id="Skills">
          <Skills />
        </section>
        <section className="work-section" id="Work">
          <Work />
        </section>
      </div>
      <div className="mail-btn-div">
        <IconButton
          aria-describedby={id}
          type="button"
          onClick={handleClick}
          aria-label="mail"
          className="mail-btn"
          style={{
            border: "1px solid red",
            color: "red",
          }}
        >
          <EmailIcon />
        </IconButton>
        <Popper
          id={id}
          open={open}
          anchorEl={anchorEl}
          transition
          placement="left"
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Box
                className="mail-box"
                sx={{
                  p: 1,
                }}
              >
                <p className="mail">oertekin134@gmail.com</p>
              </Box>
            </Fade>
          )}
        </Popper>
      </div>
    </div>
  );
}

export default App;
