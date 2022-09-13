import React, {useContext} from 'react'
import { ThemeContext } from '../context/theme.context';
import '../styles/Footer.css'
function Foooter() {
  const {isDarkMode} = useContext(ThemeContext)
  return (
    <footer className={`Footer ${isDarkMode && 'darkFooter'}`}>
        <h5>Made with <i class="fa-solid fa-heart"></i> by <b>skye</b></h5>
        <span>&copy; 2022</span>
    </footer>
  )
}
export default Foooter;