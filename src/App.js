import { AboutMe } from './components/AboutMe';
import { Hero } from './components/Hero';
import Layout from './layouts/Layout';
import './scss/main.scss';

function App() {
  return (
    <Layout>
      <Hero />
      <AboutMe />
    </Layout>
  );
}

export default App;
