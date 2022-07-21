import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot
} from '@mui/lab';

export const ExperienceTimeline = () => {
  return (
    <Timeline position='alternate' className='c-timeline'>
      <TimelineItem>
        <TimelineOppositeContent className='c-timeline__date-box'>
          <div className='c-timeline__date'>Oct 2021 - Present </div>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent >
          <div className='c-timeline__title'>Globant · Full-time</div>
          <div className='c-timeline__title'>React JS | Web UI Developer</div>
          <div className='c-timeline__description'>I worked on the development of an educational platform, using Strapi (a CMS headless), React JS, Javascript and Node JS.  </div>
          <div className='c-timeline__description'>I have developed reusable components in ReactJS + NodeJS, as well as the modification of native and non-native components of CMS, for example CKEditor, Math editors, Customs Media libraries, and others.  </div>
          <div className='c-timeline__description'>I work with agile methodologies, peer code review and continuous deployments in applications. Always looking to take care of good practices in development. </div>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent className='c-timeline__date-box'>
          <div className='c-timeline__date'>Apr 2021 - Oct 2021</div>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent >
          <div className='c-timeline__title'>Search Rebel LLC · Full-time</div>
          <div className='c-timeline__title'>React JS Developer | Vue JS Developer</div>
          <div className='c-timeline__description'>Search Rebel provide consulting services for software projects in any language, platform and vertical. With big emphasis on Big Data, Search Engines, Enterprise Systems and Databases. </div>
          <div className='c-timeline__description'>Migration of react components, from class components to functional components, implementing the use of hooks and Typescript.</div>
          <div className='c-timeline__description'>I worked on a project to migrate an e-commerce to a multi-site created with Vue JS + Nuxt, creating reusable components for client's platforms and working with different teams using agile methodologies.</div>
          <div className='c-timeline__description'>Tech-stack: React JS, Vue JS, Figma, Java, Postman, JSON, HTML, CSS, JavaScript, GitLab, Git & Git-hub.</div>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent className='c-timeline__date-box'>
          <div className='c-timeline__date'>Jan 2019 - Dec 2020</div>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent >
          <div className='c-timeline__title'>Freelancer</div>
          <div className='c-timeline__title'>WordPress | Web Developer</div>
          <div className='c-timeline__description'>I worked for different clients on a freelance basis, with independent solutions such as websites for the presentation of their companies, or the implementation of sites for the presentation of virtual congresses. Some of the clients I have worked with:</div>
<div className='c-timeline__description'>• Amistad Live - I worked on the creation of the christian community site, and on the educational platform for the delivery of free courses.</div>
<div className='c-timeline__description'>• Fiorillo Violins & Jorge Glez are educational and musical instruments sales sites. I worked on the website and consulting on digital solutions for their business.</div>
<div className='c-timeline__description'>• Maiz de mi tierra - I work giving support to the web site and giving maintenance to the SSL certificates and hosting service.</div>
<div className='c-timeline__description'>• Tech-stack: Wordpress, HTML, CSS, JavaScript, Inkscape, Hosting Providers.</div>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent className='c-timeline__date-box'>
          <div className='c-timeline__date'>Aug 2013 - Oct 2021</div>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent >
          <div className='c-timeline__title'>Universidad Autónoma del Estado de Morelos · Part-time</div>
          <div className='c-timeline__title'>Professor of Engineering Mathematics</div>
          <div className='c-timeline__description'>I have worked teaching engineering mathematics, using best teaching-learning practices, in subjects such as: Calculus (Integral, differential and differential equations). Inferential statistics applied to engineering. Numerical Methods applied to Engineering</div>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
        </TimelineSeparator>
        <TimelineContent >
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}
