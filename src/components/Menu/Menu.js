import { useState, useEffect, useContext } from 'react'
import navContext from '../../contexts/navContext';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


export const Menu = () => {

  const [isDesktop, setDesktop] = useState(window.innerWidth > 900);
  const [isMenuMobileActive, setIsMenuMobileActive] = useState(false)

  const { scrollDown, sections } = useContext(navContext);
  const { homeSection, aboutSection, experienceSection, contactSection } = sections;

  const updateViewPort = () => {
    setDesktop(window.innerWidth > 900);
  };

  useEffect(() => {
    window.addEventListener("resize", updateViewPort);
    return () => window.removeEventListener("resize", updateViewPort);
  });

  const handleBurgerClick = () => {
    setIsMenuMobileActive(true);
  }

  const handleMenuOptionClick = (section) => {
    setIsMenuMobileActive(false);
    scrollDown(section)
  }

  const handleCloseMenu = () => {
    setIsMenuMobileActive(false);
  }


  const desktopMenu = (
    <div className='c-desktop-menu'>
      <button className='c-desktop-menu__item' onClick={() => scrollDown(homeSection)}>home</button>
      <button className='c-desktop-menu__item' onClick={() => scrollDown(aboutSection)}>about</button>
      <button className='c-desktop-menu__item' onClick={() => scrollDown(experienceSection)}>experience</button>
      <button className='c-desktop-menu__item' onClick={() => scrollDown(contactSection)}>hire me</button>
      {/* <button className='c-desktop-menu__item'>blog</button> */}
    </div>
  );

  const mobileMenu = (
    <div className='c-mobile-menu'>
      <div onClick={handleBurgerClick}>
        <MenuIcon />
      </div>
      {isMenuMobileActive && <div className='c-mobile-menu__modal'>
        <CloseIcon className='c-mobile-menu__close' onClick={handleCloseMenu} />
        <button className='c-mobile-menu__item' onClick={() => handleMenuOptionClick(homeSection)}>Home</button>
        <button className='c-mobile-menu__item' onClick={() => handleMenuOptionClick(aboutSection)}>about</button>
        <button className='c-mobile-menu__item' onClick={() => handleMenuOptionClick(experienceSection)}>experience</button>
        <button className='c-mobile-menu__item' onClick={() => handleMenuOptionClick(contactSection)}>hire me</button>
        {/* <button className='c-mobile-menu__item'>blog</button> */}
      </div>}
    </div>
  );

  return (
    <>
      {isDesktop ? desktopMenu : mobileMenu}
    </>
  )
}
