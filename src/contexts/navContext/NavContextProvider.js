import React, { useRef } from "react";
import navContext from ".";

const NavContextProvider = ({ children }) => {

  const homeSection = useRef(null);
  const aboutSection = useRef(null);
  const experienceSection = useRef(null);
  const contactSection = useRef(null);

  const sections = {
    homeSection,
    aboutSection,
    experienceSection,
    contactSection
  }

  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };


  return (
    <navContext.Provider value={{scrollDown, sections}}>
      {children}
    </navContext.Provider>
  );
};

export default NavContextProvider;
