import { Button } from "../Button"

export const Hero = () => {
  return (
    <div className="c-hero">
      <div className="c-hero__info-container">
        <div className="c-hero__titles-container">
          <div className="c-hero__title-line-1">
            Hi,
          </div>
          <div className="c-hero__title-line-2">
            I am <span>James Ross</span>
          </div>
        </div>
        <div className="c-hero__description">
          Front end developer - React JS - Javascript. Specialize in reactive interfaces and integration backend-frontend with React.
        </div>
        <div className="c-hero__buttons">
          <Button description="Get in touch" theme="primary" action="contact" />
          <Button description="Download CV" theme="light" action="download" />
        </div>
      </div>
    </div>
  )
}
