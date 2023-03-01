import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool, faScaleBalanced, faBolt, faHeartPulse } from '@fortawesome/free-solid-svg-icons'
import Section from '../common/components/Section'
import H2 from '@/common/components/H2'

const features = [
    {
        name: 'Academics',
        description:
            "I was a math whiz for the first 10 years of school, but at 16, I found my calling in informatics. I managed to catch up on a year's worth of info in just 6 hours.",
        icon: faSchool,
    },
    {
        name: 'Motivation',
        description:
            "Programming? When I first heard about it, I was like, 'Hold up, I can make a computer do things for me? Sign me up!' And just like that, I was hooked.",
        icon: faBolt,
    },
    {
        name: 'Balance',
        description:
            "Always focused on school, but I did manage to squeeze in a little karate on the side. 13 years straight of being multiple-time European and World champion. No biggie.",
        icon: faScaleBalanced,
    },
    {
        name: 'Passions',
        description:
            'Painting. Reading. Cooking. Snowboarding. Skydiving. Karate. Overpriced coffee. Killing house plants as a sport.',
        icon: faHeartPulse,
    },
]

export default function AboutSection() {
    return (
        <Section className="lg:pt-40 xl:px-36" id='about-section'>
            <H2>About me</H2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 tracking-wide italic">
                Hi, I am Maria, child of the internet. As a Gen Z I have been eating, sleeping and breathing technology kind of my whole life. Don't care about pronouns.
            </p>
            <div className="mt-16">
                <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12">
                    {features.map((feature, index) => (
                        <div key={index} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ring-brown-black/10 bg-milky-white sm:shrink-0">
                                <FontAwesomeIcon icon={feature.icon} size="lg" />
                            </div>
                            <div className="sm:min-w-0 sm:flex-1">
                                <h3 className="text-lg font-semibold leading-8 tracking-widest">{feature.name}</h3>
                                <p className="mt-2 text-md leading-7 tracking-wider">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}