import { Skills } from "../Skills"
import { Stat } from "../Stat"

export const AboutMe = () => {
  return (
    <div className="c-about">
      <div className="c-about__title">
        About Me
      </div>
      <div className="c-about__description">
        Hi, I'm glad you're visiting my website. I'm Marco Villanueva, and I'm a front end developer with React JS 3+ years experience, I'm also a Coffee lover.
        I have experience interacting with Node JS as well as HTML, Strapi, CSS and SASS. I love learning and teaching (I was an engineering math professor for more than 10 years!).
        Do you want to contact me? Feel free to send me a message, I'd love to talk.
      </div>
      <div className="c-about__stats">
        <Stat bigText="3+" smallText="years' experience" />
        <Stat bigText="10+" smallText="teaching engineering maths" />
        <Stat bigText="1life" smallText="loving coffee" />
      </div>
      <Skills />
    </div>
  )
}
