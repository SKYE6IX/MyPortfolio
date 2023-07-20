import { useContext } from 'react';
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
// import skyecampImg from '../images/skyecamp.jpeg';
// import colorImg from '../images/react_color.png';
// import todoAppImg from '../images/todo_app.png';
import { ThemeContext } from '../../../context/theme.context';
import {
  ProjectContainer,
  ProjectWrapper,
  ProjectTitle,
  ProjectLanguageWrapper,
  ProjectText,
  ProjectLinks,
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
    opacity: '0',
    y: 200,
  },
  show: {
    opacity: 1,
    y: '0',
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
};

const Project = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <ProjectContainer
      className="Project-container"
      variants={container}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, y: -200 }}
      transition={{ delay: 1 }}
    >
      <ProjectWrapper variants={item}>
        <ProjectTitle>skye camp</ProjectTitle>
        {/* <img src={skyecampImg} alt="skyecamp" className="Project-img" /> */}
        <ProjectLanguageWrapper>
          <ul>
            <li className={`${isDarkMode && 'darkListMode'}`}>
              <i className="fa-brands fa-js"></i> JavaScript
            </li>
            <li className={`${isDarkMode && 'darkListMode'}`}>
              <i className="fa-brands fa-bootstrap"></i> BootStrap
            </li>
            <li className={`${isDarkMode && 'darkListMode'}`}>EJS</li>
          </ul>
        </ProjectLanguageWrapper>
        <ProjectText>
          <Typography gutterBottom>
            SkyeCamp is a fullstack web application that is built with{' '}
            <b>NodeJS</b>. Made use of <b>Express</b> library as a server-side
            and a NoSQL database <b>MongoDB</b>
          </Typography>
        </ProjectText>
        <ProjectLinks>
          <IconButton
            LinkComponent="a"
            href="https://obscure-citadel-59933.herokuapp.com/"
          >
            <LaunchIcon className={`icon ${isDarkMode && 'iconDarkMode'}`} />
          </IconButton>
          <IconButton
            LinkComponent="a"
            href="https://github.com/SKYE6IX/skyeCamp"
          >
            <GitHubIcon className={`icon ${isDarkMode && 'iconDarkMode'}`} />
          </IconButton>
        </ProjectLinks>
      </ProjectWrapper>

      <ProjectWrapper variants={item}>
        <ProjectTitle>react color app</ProjectTitle>

        {/* <img src={colorImg} alt="color app" className="Project-img" /> */}

        <ProjectLanguageWrapper>
          <ul>
            <li className={`${isDarkMode && 'darkListMode'}`}>
              <i className="fa-brands fa-react"></i> React
            </li>
            <li className={`${isDarkMode && 'darkListMode'}`}>MUI</li>
          </ul>
        </ProjectLanguageWrapper>
        <ProjectText>
          <Typography gutterBottom>
            This color app palette was built while i was study <b>React</b>{' '}
            bootcamp course. It's an interactive app that let you create your
            own color palettes. It has the feature to copy the color in Hex,
            RGB, RGBA.
          </Typography>
        </ProjectText>
        <ProjectLinks>
          <IconButton>
            <LaunchIcon className={`icon ${isDarkMode && 'iconDarkMode'}`} />
          </IconButton>
          <IconButton
            LinkComponent="a"
            href="https://github.com/SKYE6IX/ColorPicker"
          >
            <GitHubIcon className={`icon ${isDarkMode && 'iconDarkMode'}`} />
          </IconButton>
        </ProjectLinks>
      </ProjectWrapper>

      <ProjectWrapper variants={item}>
        <ProjectTitle>skye todo app</ProjectTitle>

        {/* <img src={todoAppImg} alt="todo app" className="Project-img" /> */}

        <ProjectLanguageWrapper>
          <ul>
            <li className={`${isDarkMode && 'darkListMode'}`}>
              <i className="fa-brands fa-react"></i> React
            </li>
            <li className={`${isDarkMode && 'darkListMode'}`}>MUI</li>
          </ul>
        </ProjectLanguageWrapper>
        <ProjectText>
          <Typography gutterBottom>
            I have always have troubles dealing with how to plan my daily task.
            So i decided to use my skills to build a todo app. This app is build
            with react and will still add more features in future.
          </Typography>
        </ProjectText>
        <ProjectLinks>
          <IconButton>
            <LaunchIcon className={`icon ${isDarkMode && 'iconDarkMode'}`} />
          </IconButton>
          <IconButton
            LinkComponent="a"
            href="https://github.com/SKYE6IX/TodoApp"
          >
            <GitHubIcon className={`icon ${isDarkMode && 'iconDarkMode'}`} />
          </IconButton>
        </ProjectLinks>
      </ProjectWrapper>
    </ProjectContainer>
  );
};

export default Project;
