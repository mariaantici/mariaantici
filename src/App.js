import './App.css';
import Header from './components/Header';
import Homepage from './components/Homepage';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import SideNavbar from './components/SideNavbar';
import Socials from './components/Socials';

function App() {
  return (
    <>
      <Header />
      <main>
        <Homepage />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
      <Socials />
      <SideNavbar />
    </>
  );
}

export default App;
