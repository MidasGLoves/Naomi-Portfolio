import Layout from './components/Layout';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import IdealRoles from './components/IdealRoles';
import PersonalInfo from './components/PersonalInfo';
import Contact from './components/Contact';

export default function App() {
  return (
    <Layout>
      <div className="space-y-32">
        <Hero />
        <Experience />
        <Skills />
        <IdealRoles />
        <PersonalInfo />
        <Contact />
      </div>
    </Layout>
  );
}
