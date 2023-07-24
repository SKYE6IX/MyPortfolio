import { useContext } from 'react';
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import { projectData } from './projectData';
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
      {projectData.map((project, i) => (
        <ProjectWrapper key={i} variants={item}>
          <ProjectTitle $isDarkMode={isDarkMode}>
            {project.project_name}
          </ProjectTitle>
          <img src={project.project_image} alt={project.project_name} />
          <ProjectLanguageWrapper>
            <ul>
              {project.project_stacks.map((stack, i) => (
                <li key={i}>
                  <i className={stack?.icon} />
                  {stack.stack_name}
                </li>
              ))}
            </ul>
          </ProjectLanguageWrapper>
          <ProjectText $isDarkMode={isDarkMode}>
            <Typography gutterBottom>{project.project_text}</Typography>
          </ProjectText>
          <ProjectLinks $isDarkMode={isDarkMode}>
            {project.project_links.live_link && (
              <IconButton
                LinkComponent="a"
                href={project.project_links.live_link}
                target="__target"
              >
                <LaunchIcon />
              </IconButton>
            )}
            <IconButton
              LinkComponent="a"
              href={project.project_links.git_hub_link}
            >
              <GitHubIcon />
            </IconButton>
          </ProjectLinks>
        </ProjectWrapper>
      ))}
    </ProjectContainer>
  );
};

export default Project;
