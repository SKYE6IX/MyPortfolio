import { useContext } from 'react';
import { ThemeContext } from '../../../context/theme.context';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import IconButton from '@mui/material/IconButton';
import {
  ContactContainer,
  ContactText,
  ContactMail,
  ContactIconsWrapper,
} from './style';

const Contact = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <ContactContainer
      initial={{ opacity: 0, y: 300 }}
      animate={{
        opacity: 1,
        y: 1,
        transition: {
          ease: [0.6, 0.01, -0.05, 0.95],
          duration: 1.6,
        },
      }}
      exit={{ opacity: 0, y: -200 }}
      transition={{ delay: 1 }}
    >
      <ContactText className={`Contact-msg ${isDarkMode && 'msgDarkMode'}`}>
        <Typography variant="subtitle1" gutterBottom className="msg">
          My approach is simple, make something great and make it personal. Join
          me and let build modern web applications together
        </Typography>
        <ContactMail
          href="mailto: skye6ix@gmail.com"
          // className={`mail ${isDarkMode && 'mailDarkMode'}`}
        >
          skye6ix@gmail.com
        </ContactMail>
      </ContactText>

      <ContactIconsWrapper>
        <ul>
          <li>
            <IconButton LinkComponent="a" href="https://github.com/SKYE6IX">
              <GitHubIcon className={`icon ${isDarkMode && 'darkModeIcon'}`} />
            </IconButton>
          </li>
          <li>
            <IconButton LinkComponent="a" href="https://twitter.com/skye_6ix">
              <TwitterIcon className={`icon ${isDarkMode && 'darkModeIcon'}`} />
            </IconButton>
          </li>
          <li>
            <IconButton
              LinkComponent="a"
              href="https://www.linkedin.com/in/azeezabiola/"
            >
              <LinkedInIcon
              // className={`icon ${isDarkMode && 'darkModeIcon'}`}
              />
            </IconButton>
          </li>
          <li>
            <IconButton LinkComponent="a" href="https://t.me/Skye6ix">
              <TelegramIcon
              // className={`icon ${isDarkMode && 'darkModeIcon'}`}
              />
            </IconButton>
          </li>
        </ul>
      </ContactIconsWrapper>
    </ContactContainer>
  );
};

export default Contact;
