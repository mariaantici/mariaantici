import { BoltIcon, DevicePhoneMobileIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Academics',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: GlobeAltIcon,
    },
    {
        name: 'Passions',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: ScaleIcon,
    },
    {
        name: 'Interests',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: BoltIcon,
    },
    {
        name: 'Yearnings',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: DevicePhoneMobileIcon,
    },
]

export default function AboutSection() {
    return (
        <div className="py-0 px-4 sm:py-32 lg:py-40" id='about-section'>
            <div className="mx-auto max-w-7xl px-6 sides:px-24">
                <div className="sm:text-center">
                    <p className="mt-2 text-3xl font-bold tracking-widest text-brown-black sm:text-4xl">About me</p>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-brown-black tracking-wide italic">
                        Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
                        accusamus quisquam.
                    </p>
                </div>

                <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
                    <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ring-brown-black/10 bg-milky-white text-brown-black sm:shrink-0">
                                    <feature.icon className="h-8 w-8" aria-hidden="true" />
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
        </div>
    )
}