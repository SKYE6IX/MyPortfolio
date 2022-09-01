import React, { useContext } from "react";
import { ThemeContext } from "./context/theme.context";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import IconButton from "@mui/material/IconButton";
import img from "./images/IMG_1655.JPG";
import "./styles/Homepage.css";

function Homepage() {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <section className="Homepage-container">
      <div className="Homepage-text-area">
        <h1 className={isDarkMode && "darkModeH1"}>Hey I'm Azeez!</h1>
        <p>
          React web developer living in Moscow, Russia. I create website to help
          business do better online. Turning idea to real life product is what i
          enjoy doing the most.
        </p>
        <Button variant="contained" color="success" className="Homepage-btn">
          My Project
        </Button>

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
                href="http://linkedin.com/in/busari-azeez-70b743104"
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
      </div>

      <div className="Homepage-img-area">
        <img src={img} className="self-img" />
      </div>
    </section>
  );
}

export default Homepage;
