import { useState, useEffect } from 'react'


export const Menu = () => {

  const [isDesktop, setDesktop] = useState(window.innerWidth > 900);

  const updateViewPort = () => {
    setDesktop(window.innerWidth > 900);
  };

  useEffect(() => {
    window.addEventListener("resize", updateViewPort);
    return () => window.removeEventListener("resize", updateViewPort);
  });

  const desktopMenu = (
    <div className='c-desktop-menu'>
      <button className='c-desktop-menu__item'>home</button>
      <button className='c-desktop-menu__item'>about</button>
      <button className='c-desktop-menu__item'>experience</button>
      <button className='c-desktop-menu__item'>blog</button>
      <button className='c-desktop-menu__item'>hire me</button>
    </div>
  );

  const mobileMenu = (
    <div className='c-mobile-menu'>
      <button>Home</button>
      <button>about</button>
      <button>experience</button>
      <button>blog</button>
      <button>hire me</button>
    </div>
  );

  return (
    <>
      {isDesktop ? desktopMenu : mobileMenu}
    </>
  )
}
