import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import IconButton from "@mui/material/IconButton";
import { ThemeContext } from "./context/theme.context";
import img from "./images/IMG_1655.JPG";
import "./styles/Homepage.css";


//variant for framer motion

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
};

function Homepage() {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <motion.section
      className="Homepage-container"
      variants={container}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, y: -200 }}
      transition={{ delay: "1s" }}
    >
      <motion.div className="Homepage-text-area" variants={item}>
        <h1 className={isDarkMode && "darkModeH1"}>Hey I'm Azeez!</h1>
        <p>
          React web developer living in Moscow, Russia. I create website to help
          business do better online. Turning idea to real life product is what i
          enjoy doing the most.
        </p>
        <IconButton LinkComponent={Link} to="/project">
          <Button variant="contained" color="success" className="Homepage-btn">
            My Project
          </Button>
        </IconButton>

        <div className="Homepage-links">
          <ul>
            <li>
              <IconButton LinkComponent="a" href="https://github.com/SKYE6IX">
                <GitHubIcon
                  className={`icon ${isDarkMode && "darkModeIcon"}`}
                />
              </IconButton>
            </li>
            <li>
              <IconButton LinkComponent="a" href="https://twitter.com/skye_6ix">
                <TwitterIcon
                  className={`icon ${isDarkMode && "darkModeIcon"}`}
                />
              </IconButton>
            </li>
            <li>
              <IconButton
                LinkComponent="a"
                href="https://www.linkedin.com/in/azeezabiola/"
              >
                <LinkedInIcon
                  className={`icon ${isDarkMode && "darkModeIcon"}`}
                />
              </IconButton>
            </li>
            <li>
              <IconButton LinkComponent="a" href="https://t.me/Skye6ix">
                <TelegramIcon
                  className={`icon ${isDarkMode && "darkModeIcon"}`}
                />
              </IconButton>
            </li>
          </ul>
        </div>
      </motion.div>

      <motion.div className="Homepage-img-area" variants={item}>
        <img src={img} className="self-img" alt="azeez" />
      </motion.div>
    </motion.section>
  );
}

export default Homepage;
