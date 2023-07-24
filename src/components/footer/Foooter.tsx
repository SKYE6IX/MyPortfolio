import { useContext } from 'react';
import { ThemeContext } from '../../context/theme.context';
import { FooterContainer } from './style';

const Foooter = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <FooterContainer $isDarkMode={isDarkMode}>
      <h5>
        Made with <i className="fa-solid fa-heart"></i> by <b>skye</b>
      </h5>
      <span>&copy; 2022</span>
    </FooterContainer>
  );
};
export default Foooter;
