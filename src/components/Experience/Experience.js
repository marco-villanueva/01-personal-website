import { ExperienceTimeline } from '../Timeline';

export const Experience = ({reference}) => {
  return (
    <div ref={reference} className="c-experience">
      <div className="c-experience__title">
        Experience
      </div>
      <ExperienceTimeline />
    </div>
  )
}
