import H2 from "@/common/components/H2"
import Section from "../common/components/Section"

const projects = [{
    label: "Work in progress",
    title: "Coming soon",
    details: "Lorem ipsum dolor amet you probably haven't heard of them bitters selvage listicle heirloom. Locavore kombucha street art ennui 90's, organic food truck hell of seitan skateboard literally hexagon fixie next level. Lomo salvia yuccie hella roof party echo park vegan four dollar toast cred.",
    img: "https://cdn.vox-cdn.com/thumbor/w-IFN0FWpN4BGfhZaV9EYqs4nLo=/51x0:977x617/1200x800/filters:focal(51x0:977x617)/cdn.vox-cdn.com/uploads/chorus_image/image/50017015/Screen_Shot_2016-07-04_at_12.37.15_PM.0.0.png",
    tech: ['Shadow', 'Demon', 'Baby']
}]

export default function ProjectsSection() {
    return (
        <Section className="lg:pt-44" id='projects-section'>
            <H2 className="mb-10">Something I've built</H2>
            <div className="project-container space-y-28">
                {projects.map((project, index) => (
                    <div className="project" key={index}>
                        <div className="project-content">
                            <div className="project-label">{project.label}</div>
                            <h3 className="project-title">{project.title}</h3>
                            <div className="project-details">
                                <p>{project.details}</p>
                                <ul>
                                    {project.tech.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="project-img">
                            <img src={project.img} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    )
}