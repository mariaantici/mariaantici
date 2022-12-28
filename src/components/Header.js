import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../logo.svg'
import '../App.css';

const navigation = [
    { name: 'About', href: '#about', current: true },
    { name: 'Projects', href: '#projects', current: false },
    { name: 'Experience', href: '#experience', current: false },
    { name: 'Contact', href: '#contact', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    const handleClick = (anchor) => () => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <Disclosure as="nav">
            {({ open }) => (
                <div className="mx-auto max-w-7xl px-2 sm:px-6 sm:py-6 lg:px-30 lg:py-10" id="homepage-section">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* Mobile menu button*/}
                            <Disclosure.Button className="inline-flex items-center justify-center rounded-3xl p-4 text-brown-black hover:bg-brown-black/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span className="sr-only">Open main menu</span>
                                {open ? (
                                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <Bars3Icon className="block h-10 w-10" aria-hidden="true" />
                                )}
                            </Disclosure.Button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <a href='#homepage' onClick={handleClick('homepage')}><img
                                    className="hidden h-20 w-auto md:block App-logo"
                                    src={logo}
                                    alt="M with flowers logo"
                                /></a>
                            </div>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-12">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={handleClick(item.name.toLowerCase)}
                                        className='text-brown-black hover:ring-1 hover:ring-brown-black/20 px-4 py-2 rounded-3xl text-lg font-medium'
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Disclosure>
    )
}