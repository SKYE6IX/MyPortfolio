import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "./context/theme.context";

import Typography from "@mui/material/Typography";
import "./styles/About.css";
function About() {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <motion.div
      className="About-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: "1s" }}
    >
      <article className="About">
        <Typography
          variant="h2"
          gutterBottom
          className={`About-title ${isDarkMode && "darkTitle"}`}
        >
          Hi there, I'm Azeez
        </Typography>
        <Typography variant="body2" gutterBottom className="About-text">
          I'm a front-end developer who love to build user-friendly website and
          web applications. I started as a Computer Hardware engineer and
          decided to change career to become a Web Developer. I want to work in
          web dev environments because of the joy of creating something that is
          being use by thousands of user and also want to be part of the modern
          world development. I have study through 1000+ hours of bootcamp
          structure, learning <b>HTML,CSS,JavaScript,NodeJS</b> include
          framework like <b>Express</b> and templating like <b>EJS</b> and
          Database <b>MongoDB with mongoose</b>. Also Study the famous
          JavaScript library <b>REACT</b> along with it's associates. With the
          new skill i have acquired with lot of hands on practice, i get excited
          whenever i have the opportunity to build up a new web application
          because of the feeling that i am about to make someone's life easier.
          I embrace the challenges that comes with coding, this drives me to
          want to work harder and solve problem. I am always ready to learn more
          and acquire new knowledge.
        </Typography>
      </article>

      <div className={`About-skills ${isDarkMode && "darkH2"}`}>
        <h2>Main Skills</h2>
        <div className="columns skills">
          <ul>
            <li>
              Web design and web application, hardworking, critical thinking
            </li>
            <li>Front-end Developer, Some knowledge of Back-end </li>
            <li>
              JavaScrips, HTML, CSS, REACT, NextJs, NodeJS, Express, MongoDB,
              WordPress{" "}
            </li>
          </ul>
        </div>

        <h2>Educations</h2>
        <div className="columns education">
          <ul>
            <li>
              Ikoloba High School Ibadan,Nigeria.{" "}
              <b>High School Diploma. 2010</b>
            </li>
            <li>
              New Way global IT technical school.{" "}
              <b>Computer Hardware Apprenticeship. 2012</b>
            </li>
            <li>
              Udemy Online Course.{" "}
              <b>Complete Web Developer BootCamp. 2021-2022</b>
            </li>
            <li>
              Udemy Online Course. <b>Complete React BootCamp. 2022</b>
            </li>
          </ul>
        </div>

        <h2>Expriences</h2>
        <div className="columns exprience">
          <ul>
            <li>Currently Working as a freelances</li>
          </ul>
        </div>

        <h2>Languages</h2>
        <div className="columns skills">
          <ul>
            <li>
              English. <b>Native</b>
            </li>
            <li>
              Russia. <b>Basic</b>
            </li>
          </ul>
        </div>
        <h2>In my free time</h2>
        <div className="columns skills">
          <ul>
            <li>Learning new things</li>
            <li>Listen to music</li>
            <li>Skating</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
