import { IconContext } from 'react-icons';
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { BiLogoCss3, BiLogoJavascript, BiLogoReact } from 'react-icons/bi';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMui } from 'react-icons/si';
import { SiStyledcomponents } from 'react-icons/si';
import { StacksContainer, StacksItems } from './style';

const Stacks = () => {
  return (
    <StacksContainer>
      <StacksItems>
        <IconContext.Provider value={{ className: 'react-icon' }}>
          <AiFillHtml5 />
        </IconContext.Provider>
        <span>html5</span>
      </StacksItems>

      <StacksItems>
        <IconContext.Provider value={{ className: 'react-icon' }}>
          <BiLogoCss3 />
        </IconContext.Provider>
        <span>css3</span>
      </StacksItems>

      <StacksItems>
        <IconContext.Provider value={{ className: 'react-icon' }}>
          <BiLogoJavascript />
        </IconContext.Provider>
        <span>javascript</span>
      </StacksItems>

      <StacksItems>
        <IconContext.Provider value={{ className: 'react-icon' }}>
          <TbBrandNextjs />
        </IconContext.Provider>
        <span>nextjs</span>
      </StacksItems>

      <StacksItems>
        <IconContext.Provider value={{ className: 'react-icon' }}>
          <BiLogoReact />
        </IconContext.Provider>
        <span>react</span>
      </StacksItems>

      <StacksItems>
        <IconContext.Provider value={{ className: 'react-icon' }}>
          <SiStyledcomponents />
        </IconContext.Provider>
        <span>styled-component</span>
      </StacksItems>

      <StacksItems>
        <IconContext.Provider value={{ className: 'react-icon' }}>
          <SiMui />
        </IconContext.Provider>
        <span> material-ui</span>
      </StacksItems>

      <StacksItems>
        <IconContext.Provider value={{ className: 'react-icon' }}>
          <AiFillGithub />
        </IconContext.Provider>
        <span>git</span>
      </StacksItems>
    </StacksContainer>
  );
};

export default Stacks;
