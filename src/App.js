import { AboutMe } from './components/AboutMe';
import { Experience } from './components/Experience';
import { GetInTouch } from './components/GetInTouch';
import { Hero } from './components/Hero';
import Layout from './layouts/Layout';
import './scss/main.scss';

function App() {
  return (
    <Layout>
      <Hero />
      <AboutMe />
      <Experience />
      <GetInTouch />
    </Layout>
  );
}

export default App;
