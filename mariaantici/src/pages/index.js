import Head from 'next/head'
import TopNavbar from '@/components/TopNavbar'
import Home from '@/components/Home'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectsSection'
import ExperienceSection from '@/components/ExperienceSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import SideNavbar from '@/components/SideNavbar'
import Socials from '@/components/Socials'
import { useEffect, Fragment } from 'react'

export default function Homepage() {
  useEffect(() => {
    function handleScroll() {
      const sections = document.querySelectorAll("section[id]");
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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Maria Antici</title>
      </Head>
      <TopNavbar />
      <main className='max-w-screen-2xl mx-auto'>
        <Home />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
      <Socials />
      <SideNavbar />
    </Fragment >
  )
}
