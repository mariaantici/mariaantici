import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNode, faAngular, faWordpressSimple } from '@fortawesome/free-brands-svg-icons';
import { faGraduationCap, faBookOpen } from '@fortawesome/free-solid-svg-icons';

const timeline = [
    { icon: faBookOpen, date: 'October 2022 - Present', title: 'Meta Front-End Developer Certification', subtitle: 'Coursera - Remote', desc: 'Developed several responsive websites using React to structure content, CSS, Bootstrap or Chakra UI to handle visual style, JavaScript to develop interactive experiences, Formik for form creation, Yup for form validation and GitHub for version control.', tech: ['HTML', 'CSS', 'Bootstrap', 'Chakra UI', 'React', 'JavaScript', 'Formik', 'Yup'] },
    { icon: faReact, date: 'July 2021 - August 2021', title: 'Web development intern', subtitle: 'BK Hosting - Brasov, Romania', desc: 'Working on a toy project designed for interns with the task of developing a search functionality using Algolia.', tech: ['React', 'Tailwind CSS', 'JavaScript', 'NodeJS', 'Docker', 'MongoDB', 'Algolia'] },
    { icon: faNode, date: 'July  2020 - August 2020', title: 'Web development intern', subtitle: 'Mero - Craiova, Romania', desc: 'In production work (under tutoring)  designing and implementing a new functionality: Facebook login.', tech: ['NodeJS', 'MongoDB', 'Tailwind CSS', 'React', 'TypeScript'] },
    { icon: faWordpressSimple, date: 'November 2019 - May 2022', title: 'Wordpress website developer', subtitle: 'Freelancing - Romania', desc: "Developing wordpress websites from scratch for various businesses according to the customer's requirements", tech: ['Wordpress'] },
    { icon: faAngular, date: 'October  2019 - November 2019', title: 'Web development intern', subtitle: 'CS Nine Gmbh - Vienna, Austria', desc: 'First hands on experience  with the web technologies through small tasks like implementing buttons or forms and  developing simple functionalities.', tech: ['Angular', 'JavaScript', 'HTML', 'SASS', 'SQL Server', 'Ionic'] },
    { icon: faGraduationCap, date: 'October  2018 - July 20223', title: 'Bachelor in Computer Engineering', subtitle: 'University of Craiova', desc: 'The subjects approached both software and hardware development: Mathematics, Microcontrollers, Computer’s Architecture, Computer Networks, Data Structures and Algorithms, Databases, Mobile Development, Web Development and many more. Worked on several individual projects and a few group ones.', tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'OOP', 'C++', 'C#', 'ASP .NET'] }
];

export default function ExperienceSection() {
    return (
        <div className="py-20 px-10 sm:py-32 lg:py-20 sides:px-24 space-y-10 mt-20" id='experience-section'>
            <p className="sm:text-center mt-2 text-3xl font-bold tracking-widest text-brown-black sm:text-4xl">Experience</p>
            <VerticalTimeline className='vertical-timeline-custom-line'>
                {timeline.map((t, i) => {
                    return <VerticalTimelineElement
                        key={i}
                        className="vertical-timeline-element--work tracking-wider text-md leading-7"
                        contentStyle={{ background: 'rgba(40, 33, 32, 0.05)', color: '#282120' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgba(40, 33, 32, 0.05)' }}
                        date={t.date}
                        iconClassName={'bg-milky-white .icon'}
                        iconStyle={{ fontSize: '5px' }}
                        icon={<FontAwesomeIcon icon={t.icon} />}
                    >
                        {t.title ? <React.Fragment>
                            <h3 className="text-lg font-semibold leading-8 tracking-widest">{t.title}</h3>
                            {t.subtitle && <h4 className="text-brown-black/30">{t.subtitle}</h4>}
                            {t.desc && <p className="mt-2">{t.desc}</p>}
                            <div className='inline-flex flex-wrap justify-start gap-x-1 sm:gap-x-3'>
                                {t.tech && t.tech.map((item) => <p className="rounded-3xl px-2 py-1 ring-1 ring-brown-black/10">{item}</p>)}
                            </div>
                        </React.Fragment> : undefined}
                    </VerticalTimelineElement>
                })}
            </VerticalTimeline>
        </div>
    );
}