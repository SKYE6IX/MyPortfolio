import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../../context/theme.context';
import {
  AboutContainer,
  InnerWrapper,
  AboutTitle,
  AboutText,
  AboutSkillsColumn,
  AboutSkillsWrapper,
} from './style';

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

const About = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <AboutContainer
      variants={container}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, y: -200 }}
      transition={{ delay: 1 }}
    >
      <InnerWrapper>
        <AboutTitle
          variants={item}
          className={`About-title ${isDarkMode && 'darkTitle'}`}
        >
          Hi there, I'm Azeez
        </AboutTitle>

        <AboutText variants={item}>
          I'm a front-end developer who love to build user-friendly website and
          web applications. I started as a computer hardware engineer but when i
          created my first static landing page I learned something unexpected
          about myself and decided to change career to become a web developer.{' '}
        </AboutText>
        <AboutText variants={item}>
          I want to work in web development environments because of the joy of
          creating something that is being use by thousands of user and also
          want to be part of the modern world development. I have completed
          1000+ hours of bootcamps structure, learning{' '}
          <b>HTML,CSS,JavaScript,NodeJS</b> include framework like{' '}
          <b>Express</b> and templating like <b>EJS</b> and database{' '}
          <b>MongoDB with mongoose</b>. Also study the famous JavaScript library{' '}
          <b>REACT</b> along with it's associates.
        </AboutText>
        <AboutText variants={item}>
          With the new skill i have acquired along with lot of hands on
          practice, i get excited whenever i have the opportunity to build up a
          new web application because of the feeling that i am about to make
          someone's life easier. I embrace the challenges that comes with
          coding, this drives me to want to work harder and solve problem. I am
          always ready to learn more and acquire new knowledge.
        </AboutText>
      </InnerWrapper>

      <AboutSkillsWrapper
        // className={`About-skills ${isDarkMode && 'darkH2'}`}
        variants={item}
      >
        <h2>Main Skills</h2>
        <AboutSkillsColumn>
          <ul>
            <li>
              Web design and web application, hardworking, critical thinking
            </li>
            <li>Front-end Developer, Some knowledge of back-end </li>
            <li>
              JavaScripts, REACT, NodeJS, Express, MongoDB, WordPress ,
              BootStrap, CSS
            </li>
          </ul>
        </AboutSkillsColumn>

        <h2>Educations</h2>
        <AboutSkillsColumn>
          <ul>
            <li>
              Ikoloba High School Ibadan,Nigeria.{' '}
              <b>High School Diploma. 2010</b>
            </li>
            <li>
              New Way global IT technical school.{' '}
              <b>Computer Hardware Apprenticeship. 2012</b>
            </li>
            <li>
              Udemy Online Course.{' '}
              <b>Complete Web Developer BootCamp. 2021-2022</b>
            </li>
            <li>
              Udemy Online Course. <b>Complete React BootCamp. 2022</b>
            </li>
          </ul>
        </AboutSkillsColumn>

        <h2>Expriences</h2>
        <AboutSkillsColumn>
          <ul>
            <li>Currently working as a freelancer</li>
            <li>
              I have been working with React, i have created multiple web apps
              with it include my portfolio website
            </li>
          </ul>
        </AboutSkillsColumn>

        <h2>Languages</h2>
        <AboutSkillsColumn>
          <ul>
            <li>
              English. <b>Native</b>
            </li>
            <li>
              Russia. <b>Basic</b>
            </li>
          </ul>
        </AboutSkillsColumn>
        <h2>In my free time</h2>
        <AboutSkillsColumn>
          <ul>
            <li>Learning new things</li>
            <li>Listen to music</li>
            <li>Skating</li>
          </ul>
        </AboutSkillsColumn>
      </AboutSkillsWrapper>
    </AboutContainer>
  );
};
export default About;
