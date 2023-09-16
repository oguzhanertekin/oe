import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Container from "@mui/material/Container";

import Button from "@mui/material/Button";

import "./Navbar.css";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRef } from "react";

const pages = ["Home", "About", "Skills", "Work"];

function Navbar(props) {
  const { page } = props;

  const [activePage, setActivePage] = useState("Home");
  const navigate = useNavigate();

  useEffect(() => {
    setActivePage(page);
  }, [page]);

  const goPage = (page) => {
    setActivePage(page);
    // navigate(page);
  };

  return (
    <div className="appbar-container">
      <AppBar
        position="static"
        className="appbar"
        elevation={0}
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0)",
          position: "fixed",
          top: "0",
        }}
      >
        <Container>
          <Toolbar disableGutters className="toolbar">
            <Box
              className="box"
              sx={{
                flexGrow: 1,
                display: {
                  xs: "flex",
                  s: "flex",
                  md: "flex",
                },
                justifyContent: {
                  xs: "center",
                },
              }}
            >
              {pages.map((page, index) => (
                <a href={`#${page}`}>
                  <Button
                    key={index}
                    // id={page}
                    className={`navbar-btn ${
                      activePage === page ? "active" : ""
                    } `}
                    onClick={() => {
                      goPage(page);
                    }}
                  >
                    {page}
                  </Button>
                </a>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
export default Navbar;

// import React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";

// import Container from "@mui/material/Container";

// import Button from "@mui/material/Button";

// import "./Navbar.css";

// import { useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { useRef } from "react";

// const pages = ["Home", "About", "CV", "Contact"];

// function Navbar(props) {
//   const { page } = props;

//   const [activePage, setActivePage] = useState("Home");
//   const navigate = useNavigate();

//   useEffect(() => {
//     setActivePage(page);
//   }, [page]);

//   const goPage = (page) => {
//     setActivePage(page);
//     // navigate(page);
//   };

//   return (
//     <div className="appbar-container">
//       <AppBar
//         position="static"
//         className="appbar"
//         elevation={0}
//         sx={{
//           backgroundColor: "rgba(255, 255, 255, 0)",
//           position: "fixed",
//           top: "0",
//         }}
//       >
//         <Container>
//           <Toolbar disableGutters className="toolbar">
//             <Box
//               className="box"
//               sx={{
//                 flexGrow: 1,
//                 display: {
//                   xs: "flex",
//                   s: "flex",
//                   md: "flex",
//                 },
//                 justifyContent: {
//                   xs: "center",
//                 },
//               }}
//             >
//               {pages.map((page, index) => (
//                 <a href={`#${page}`}>
//                   <Button
//                     key={index}
//                     id={page}
//                     className={`navbar-btn ${
//                       activePage === page ? "active" : ""
//                     } `}
//                     onClick={() => {
//                       goPage(page);
//                     }}
//                   >
//                     {page}
//                   </Button>
//                 </a>
//               ))}
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>
//     </div>
//   );
// }
// export default Navbar;
