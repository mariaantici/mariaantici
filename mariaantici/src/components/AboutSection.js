import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool, faScaleBalanced, faBolt, faHeartPulse } from '@fortawesome/free-solid-svg-icons'

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
        <section className="py-20 px-4 sm:py-32 lg:pt-40" id='about-section'>
            <div className="mx-auto max-w-7xl px-6 sides:px-24">
                <div className="sm:text-center">
                    <p className="mt-2 text-3xl font-bold tracking-widest text-brown-black sm:text-4xl">About me</p>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-brown-black tracking-wide italic">
                        Hi, I am Maria, child of the internet. As a Gen Z I have been eating, sleeping and breathing technology kind of my whole life. Don't care about pronouns.
                    </p>
                </div>

                <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
                    <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ring-brown-black/10 bg-milky-white text-brown-black sm:shrink-0">
                                    <FontAwesomeIcon icon={feature.icon} size="lg" />
                                </div>
                                <div className="sm:min-w-0 sm:flex-1">
                                    <p className="text-lg font-semibold leading-8 text-brown-black tracking-widest">{feature.name}</p>
                                    <p className="mt-2 text-md leading-7 text-brown-black tracking-wider">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}