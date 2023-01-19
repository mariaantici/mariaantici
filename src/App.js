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
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", sideNavbarHighlighter);

  function sideNavbarHighlighter() {
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute("id");

      if (
        scrollY > sectionTop &&
        scrollY <= sectionTop + sectionHeight
      ) {
        document.querySelector(".sideNavbar a[href*=" + sectionId.split('-')[0] + "]").classList.add("active");
      } else {
        document.querySelector(".sideNavbar a[href*=" + sectionId.split('-')[0] + "]").classList.remove("active");
      }
    });
  }
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
