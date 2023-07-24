import skyecampImg from './images/skyecamp.jpeg';
import colorImg from './images/react_color.png';
import fastCarSale from './images/fast_car_sale.png';

interface ProjectDataType {
  project_name: string;
  project_image: any;
  project_stacks: {
    stack_name: string;
    icon: string;
  }[];
  project_text: string;
  project_links: {
    git_hub_link: string;
    live_link?: string;
  };
}

export const projectData: ProjectDataType[] = [
  {
    project_name: 'skye camp',
    project_image: skyecampImg,
    project_stacks: [
      {
        stack_name: 'javascript',
        icon: 'fa-brands fa-js',
      },
      {
        stack_name: 'bootstrap',
        icon: 'fa-brands fa-bootstrap',
      },
      {
        stack_name: 'ejs',
        icon: '',
      },
    ],
    project_text:
      'This is a camp web application where users can find available camps or create a new camp for other users to see. I built this app with NodeJS, used ExpressJS for the server-side and implemented API usage using RestfulAPI. In addition, I made use of the no-relational database MongoDB for data storage. The app has the ability to protect itself from unknown HTTP requests and unknown queries to the database. Using EJS template to render the frontend with bootstrap and additional custom CSS.',
    project_links: {
      git_hub_link: 'https://github.com/SKYE6IX/skyeCamp',
    },
  },
  {
    project_name: 'fastcarsale',
    project_image: fastCarSale,
    project_stacks: [
      {
        stack_name: 'React',
        icon: 'fa-brands fa-react',
      },
      {
        stack_name: 'styled-component',
        icon: '',
      },
    ],
    project_text:
      ' A landing page for a car sale company that help user easily get in touch with the company a single click.It was built with react and styled component Added a sever using Express and node mailer, which allow,Company to receive request call mails from users.',
    project_links: {
      git_hub_link: 'https://github.com/SKYE6IX/FCS-Landing-Page',
      live_link: 'https://fastcarsale.ru',
    },
  },
  {
    project_name: 'react color app',
    project_image: colorImg,
    project_stacks: [
      {
        stack_name: 'React',
        icon: 'fa-brands fa-react',
      },
      {
        stack_name: 'mui',
        icon: 'fa-brands fa-react',
      },
    ],
    project_text:
      'Developed a web application using react and styled-component additionally with MUI component base.It helps user be able to make use of the provided color palette or create their own.',
    project_links: {
      git_hub_link: 'https://github.com/SKYE6IX/ColorPicker',
    },
  },
];
