import { useContext } from "react";
import navContext from "../../contexts/navContext";
import { Button } from "../Button"

export const Hero = ({reference}) => {

  const { scrollDown, sections } = useContext(navContext);
  const { contactSection } = sections;

  return (
    <div ref={reference} className="c-hero">
      <div className="c-hero__info-container">
        <div className="c-hero__titles-container">
          <div className="c-hero__title-line-1">
            Hi,
          </div>
          <div className="c-hero__title-line-2">
            I am <span>Marco Villanueva</span>
          </div>
        </div>
        <div className="c-hero__description">
          Front end developer - React JS - Javascript. Specialize in reactive interfaces and integration backend-frontend with React.
        </div>
        <div className="c-hero__buttons">
          <Button description="Get in touch" theme="primary" action="contact" onClick={() => scrollDown(contactSection)} />
          <Button description="Download CV" theme="light" action="download" />
        </div>
      </div>
    </div>
  )
}
