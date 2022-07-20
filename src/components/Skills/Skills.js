import { skills } from "../../helpers/skills"

export const Skills = () => {
  return (
    <div className='c-skills'>
      <div className="c-skills__title">
        Skills
      </div>
      <div className="c-skills__icons-container">
        {skills.map((item, index) => (
          <div key={index} className='c-skills__item'>
            <div className={`c-skills__icon ${item.class}`}>
              {item.icon}
            </div>
            <div className='c-skills__label'>
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
