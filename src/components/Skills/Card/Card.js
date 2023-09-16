import Styles from "./Card.module.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Button from "@mui/joy/Button";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";

function Card(props) {
  const { image, title, category, content, tech, link } = props;

  const ListItem = styled("li")(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));

  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "80%", md: "40%" },
    bgcolor: "rgba(255, 255, 255, 0.700)",
    backdropFilter: "blur(6px)",
    border: "2px solid #000",
    boxShadow: 24,
    borderRadius: "15px",
    border: "0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={Styles.cont}>
      <animated.div
        className={Styles.card}
        style={props3}
        onMouseEnter={() => setShown(true)}
        onMouseLeave={() => setShown(false)}
      >
        <img src={image} alt="" />
        <h2>{title}</h2>
        <div className={Styles.text}>
          <p>{category}</p>
        </div>
        <Button
          size="small"
          className={Styles.btn}
          variant="outlined"
          onClick={handleOpen}
        >
          Show Details
        </Button>
        <div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <p className={Styles.modalTitle}>{title}</p>
                <div className={Styles.imageContainer}>
                  <img src={image} alt="" className={Styles.modalImage} />
                </div>

                <p
                  id="transition-modal-description"
                  className={Styles.modalText}
                >
                  {content}
                </p>
                <a
                  href={link}
                  rel="noreferrer"
                  target="_blank"
                  className={Styles.link}
                >
                  Go GitHub→
                </a>
                <Paper
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    listStyle: "none",
                    backgroundColor: "rgba(255, 255, 255,0)",
                    boxShadow: "none",
                    p: 0.5,
                    m: 0,
                  }}
                  component="ul"
                >
                  {tech.map((data) => {
                    return (
                      <ListItem key={data.key}>
                        <Chip label={data.label} />
                      </ListItem>
                    );
                  })}
                </Paper>
              </Box>
            </Fade>
          </Modal>
        </div>
      </animated.div>
    </div>
  );
}

export default Card;
