import skyecampImg from './images/skyecamp.jpeg';
import colorImg from './images/react_color.png';
import fastCarSale from './images/fast_car_sale.png';
import alphaWallet from './images/alpha_wallet.png';
import cryptoPay from './images/crypto-pay.png';
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
    project_name: 'Aplha Wallet',
    project_image: alphaWallet,
    project_stacks: [
      {
        stack_name: 'nextjs',
        icon: '',
      },
      {
        stack_name: 'styled-component',
        icon: '',
      },
    ],
    project_text:
      'A dynamic landing page built using cutting-edge technologies of Next.js and styled-component. Seamless animation using framer motion and effortless language switches.',
    project_links: {
      git_hub_link: 'https://github.com/SKYE6IX/Alpha-Wallet',
      live_link: 'https://alpha-wallet.pages.dev/en',
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
    project_name: 'crypto pay',
    project_image: cryptoPay,
    project_stacks: [
      {
        stack_name: 'nextjs',
        icon: '',
      },
      {
        stack_name: 'sass',
        icon: '',
      },
    ],
    project_text:
      'Crypto Pay Landing page was built to help showcase what the company offers and make it easier for user to understand how the company application works. Used a cutting-edge technologie of Nextjs and Sass to bring a dynamic page that included smooth animations.',
    project_links: {
      git_hub_link: 'https://github.com/SKYE6IX/crypto-pay',
      live_link: 'https://crypto-pay.pages.dev',
    },
  },
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
      'Developed a web application using react and styled-component additionally with MUI component base.It helps users be able to make use of the provided color palette or create their own.',
    project_links: {
      git_hub_link: 'https://github.com/SKYE6IX/ColorPicker',
    },
  },
];
