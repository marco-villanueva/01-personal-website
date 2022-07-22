import { useContext } from 'react';
import { AboutMe } from './components/AboutMe';
import { Experience } from './components/Experience';
import { GetInTouch } from './components/GetInTouch';
import { Hero } from './components/Hero';
import navContext from './contexts/navContext';
import Layout from './layouts/Layout';
import './scss/main.scss';

function App() {

  const { sections } = useContext(navContext);
  const { homeSection, aboutSection, experienceSection, contactSection } = sections;

  return (
    <Layout>
      <Hero reference={homeSection} />
      <AboutMe reference={aboutSection} />
      <Experience reference={experienceSection} />
      <GetInTouch ref={contactSection} />
    </Layout>
  );
}

export default App;
