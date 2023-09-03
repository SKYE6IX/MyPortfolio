import React, { useContext } from 'react';
import { useScroll, useSpring } from 'framer-motion';
import { ThemeContext } from '../../../context/theme.context';
import {
  AboutContainer,
  TextWrapper,
  AboutTitle,
  AboutText,
  AboutSkillsColumn,
  AboutSkillsWrapper,
  containerVariant,
  itemVariant,
  ScrollBar,
} from './style';

const About = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <ScrollBar $isDarkMode={isDarkMode} style={{ scaleX }} />
      <AboutContainer
        variants={containerVariant}
        initial="hidden"
        animate="show"
        exit={{ opacity: 0, y: -200 }}
        transition={{ delay: 1 }}
      >
        <TextWrapper>
          <AboutTitle $isDarkMode={isDarkMode} variants={itemVariant}>
            Hi there, I'm Azeez
          </AboutTitle>

          <AboutText $isDarkMode={isDarkMode} variants={itemVariant}>
            I'm a front-end developer who love to build user-friendly website
            and web applications. I started as a computer hardware engineer but
            when I created my first static landing page I learned something
            unexpected about myself and decided to change career to become a web
            developer.{' '}
          </AboutText>
          <AboutText $isDarkMode={isDarkMode} variants={itemVariant}>
            As a web developer with experience in both front-end and back-end
            development, I am now looking to focus my career on front-end
            development roles. I have a strong understanding of <b>HTML</b>,
            <b> CSS,</b>
            <b> JavaScript</b>, and popular front-end library <b>React</b> and
            it's framework <b>NextJS</b>. I am able to create visually appealing
            and user-friendly websites that provide a great user experience. I
            am proficient in responsive design and web accessibility standards
            and always keep up with the latest web development trends and
            technologies to ensure that my work is always of the highest
            quality.
          </AboutText>
          <AboutText $isDarkMode={isDarkMode} variants={itemVariant}>
            I am a team player with experience collaborating with designers and
            developers, and I am passionate about creating beautiful and
            functional websites that provide a great user experience. I am
            excited about the opportunity to apply my skills and experience to a
            front-end developer role and look forward to the new challenges and
            opportunities it will bring. I am excited to continue my journey as
            a front-end developer, and I am eager to bring my skills and
            experience to an innovative and dynamic team where I can continue to
            learn and grow.
          </AboutText>
        </TextWrapper>

        <AboutSkillsWrapper $isDarkMode={isDarkMode} variants={itemVariant}>
          <h2>Main Skills</h2>
          <AboutSkillsColumn $isDarkMode={isDarkMode}>
            <ul>
              <li>
                Web design and web application, hardworking, critical thinking
              </li>
              <li>Front-end Developer, Some knowledge of back-end </li>
              <li>
                JavaScripts, React, NextJS, Styled-Component, NodeJS, Express,
                MongoDB
              </li>
            </ul>
          </AboutSkillsColumn>

          <h2>Qualifications</h2>
          <AboutSkillsColumn $isDarkMode={isDarkMode}>
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

          <h2>Accomplishments</h2>
          <AboutSkillsColumn $isDarkMode={isDarkMode}>
            <ul>
              <li>Created web applications using React and NextJs</li>
              <li>Built multiple dynamic landing page</li>
              <li>Used REST and GraphQL to design and create APIs</li>
              <li>Worked with MongoDB using mongoose</li>
            </ul>
          </AboutSkillsColumn>

          <h2>Languages</h2>
          <AboutSkillsColumn $isDarkMode={isDarkMode}>
            <ul>
              <li>
                English. <b>Native</b>
              </li>
              <li>
                Russian. <b>Elementry</b>
              </li>
            </ul>
          </AboutSkillsColumn>
          <h2>In my free time</h2>
          <AboutSkillsColumn $isDarkMode={isDarkMode}>
            <ul>
              <li>Learning new technologies</li>
              <li>Listening to music</li>
              <li>Skating</li>
            </ul>
          </AboutSkillsColumn>
        </AboutSkillsWrapper>
      </AboutContainer>
    </>
  );
};
export default About;
