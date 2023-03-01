import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNode, faAngular, faWordpressSimple } from '@fortawesome/free-brands-svg-icons';
import { faGraduationCap, faBookOpen } from '@fortawesome/free-solid-svg-icons';

const timeline = [
    { icon: faBookOpen, date: 'October 2022 - Present', title: 'Meta Front-End Developer Certification', subtitle: 'Coursera - Remote', desc: 'I gained experience developing responsive websites using React to structure content, CSS and either Bootstrap or Chakra UI for visually appealing designs. To enhance the interactivity of the websites, I utilized JavaScript and implemented Formik for seamless form creation and Yup for thorough form validation. Finally, I leveraged the power of GitHub for version control to manage and streamline the development process.', tech: ['HTML', 'CSS', 'Bootstrap', 'Chakra UI', 'React', 'JavaScript', 'Formik', 'Yup'] },
    { icon: faReact, date: 'July 2021 - August 2021', title: 'Web development intern', subtitle: 'BK Hosting - Brasov, Romania', desc: 'As part of a team working on a toy project designed for interns, I had the opportunity to contribute to the development of a search functionality using Algolia. Throughout the project, I was dedicated to ensuring its success and collaborated effectively with my peers to overcome any obstacles we encountered.', tech: ['React', 'Tailwind CSS', 'JavaScript', 'NodeJS', 'Docker', 'MongoDB', 'Algolia'] },
    { icon: faNode, date: 'July  2020 - August 2020', title: 'Web development intern', subtitle: 'Mero - Craiova, Romania', desc: 'As part of my role in production work, I was responsible for designing and implementing new functionality, including the integration of Facebook login with the guidance of my tutor.', tech: ['NodeJS', 'MongoDB', 'Tailwind CSS', 'React', 'TypeScript'] },
    { icon: faWordpressSimple, date: 'November 2019 - May 2022', title: 'Wordpress website developer', subtitle: 'Freelancing - Romania', desc: "I developed custom WordPress websites for various businesses. Alongside this, I also managed social media accounts for businesses and micro influencers, creating and executing strategies to improve engagement and reach.", tech: ['Wordpress'] },
    { icon: faAngular, date: 'October  2019 - November 2019', title: 'Web development intern', subtitle: 'CS Nine Gmbh - Vienna, Austria', desc: 'During my initial foray into web technologies, I gained hands-on experience through tasks like implementing buttons, forms, and developing simple functionalities. This allowed me to familiarize myself with the below mentioned technologies, which formed the foundation of my subsequent work in the field.', tech: ['Angular', 'JavaScript', 'HTML', 'SASS', 'SQL Server', 'Ionic'] },
    { icon: faGraduationCap, date: 'October  2018 - July 2023', title: 'Bachelor in Computer Engineering', subtitle: 'University of Craiova', desc: 'I have completed a degree program in Computers and Information Technology, taught entirely in English, that included a wide range of subjects such as software and hardware development, mathematics, electronics, microcontrollers, computer architecture, data structures and algorithms, databases, mobile development, web development, AI, ML, and many more. It was a comprehensive program that provided exposure to many different areas of the field.', tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'OOP', 'C++', 'C#', 'ASP .NET'] }
];

export default function ExperienceSection() {
    return (
        <section className="py-20 px-10 sm:py-32 lg:py-20 sides:px-24 space-y-10 mt-20 verticalTimeline" id='experience-section'>
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
        </section>
    );
}