import React from "react";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import IconButton from "@mui/material/IconButton";
import "./styles/Contact.css";
function Contact() {
  return (
    <div className="Contact">
      <section className="Contact-msg">
        <Typography variant="subtitle1" gutterBottom className="msg">
          My approach is simple, make something great and make it personal. Join
          me and let build modern web applications together
        </Typography>
        <address>skye6ix@gmail.com</address>
      </section>
      <div className="Contact-links">
        <ul>
          <li>
            <IconButton LinkComponent='a' href='https://github.com/SKYE6IX' >
              <GitHubIcon className="icon" />
            </IconButton>
          </li>
          <li>
            <IconButton LinkComponent='a' href='https://twitter.com/skye_6ix'>
              <TwitterIcon className="icon" />
            </IconButton>
          </li>
          <li>
            <IconButton LinkComponent='a' href='http://linkedin.com/in/busari-azeez-70b743104'>
              <LinkedInIcon className="icon" />
            </IconButton>
          </li>
          <li>
            <IconButton LinkComponent='a' href='https://t.me/Skye6ix'>
              <TelegramIcon className="icon" />
            </IconButton>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
