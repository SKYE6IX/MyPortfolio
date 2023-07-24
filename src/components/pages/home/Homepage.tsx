import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { ThemeContext } from '../../../context/theme.context';
import Stacks from './stacks/Stacks';
import {
  HomeContainer,
  HomeTextArea,
  HomeIconsWrapper,
  HomeStacksWrapper,
  homeContainer,
  homeItem,
} from './style';

const Homepage = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <HomeContainer
      variants={homeContainer}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, y: -200 }}
      transition={{ delay: 1 }}
    >
      <HomeTextArea variants={homeItem} $isDarkMode={isDarkMode}>
        <h1>Hello! I'm Azeez.</h1>
        <p>
          React web developer living in Moscow, Russia. I create web application
          to help business do better online. Turning idea to real life product
          is what i enjoy doing the most.
        </p>
        <NavLink to="/project">
          <Button variant="contained" color="success">
            My Project
          </Button>
        </NavLink>

        <HomeIconsWrapper $isDarkMode={isDarkMode}>
          <ul>
            <li>
              <IconButton LinkComponent="a" href="https://github.com/SKYE6IX">
                <GitHubIcon />
              </IconButton>
            </li>
            <li>
              <IconButton LinkComponent="a" href="https://twitter.com/skye_6ix">
                <TwitterIcon />
              </IconButton>
            </li>
            <li>
              <IconButton
                LinkComponent="a"
                href="https://www.linkedin.com/in/azeezabiola/"
              >
                <LinkedInIcon />
              </IconButton>
            </li>
            <li>
              <IconButton LinkComponent="a" href="https://t.me/Skye6ix">
                <TelegramIcon />
              </IconButton>
            </li>
          </ul>
        </HomeIconsWrapper>
      </HomeTextArea>

      <HomeStacksWrapper variants={homeItem} $isDarkMode={isDarkMode}>
        <h3>My stacks...</h3>
        <Stacks />
      </HomeStacksWrapper>
    </HomeContainer>
  );
};
export default Homepage;
