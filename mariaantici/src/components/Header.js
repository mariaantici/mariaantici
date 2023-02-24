import { Menu, Transition } from '@headlessui/react'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const navigation = [
    { name: 'About', href: '#about', current: true },
    { name: 'Projects', href: '#projects', current: false },
    { name: 'Experience', href: '#experience', current: false },
    { name: 'Contact', href: '#contact', current: false },
]

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
        <navigation>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 sm:py-6 lg:px-30 lg:py-10" id="homepage-section">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="fixed top-10 left-10 sm:hidden z-[99999]">
                        <Menu>
                            {({ open }) => (
                                <div className=''>
                                    <Menu.Button className='icon'>
                                        {open ? (
                                            <FontAwesomeIcon icon={faX} size='2x' />
                                        ) : (
                                            <FontAwesomeIcon icon={faBars} size='2x' />
                                        )}
                                    </Menu.Button>
                                    <Transition
                                        enter="transition duration-100 ease-out"
                                        enterFrom="transform scale-95 opacity-0"
                                        enterTo="transform scale-100 opacity-100"
                                        leave="transition duration-75 ease-out"
                                        leaveFrom="transform scale-100 opacity-100"
                                        leaveTo="transform scale-95 opacity-0"
                                    >
                                        <Menu.Items className='absolute left-0 mt-2 px-2 origin-top-right divide-y divide-brown-black/10 rounded-xl bg-milky-white shadow-lg ring-1 ring-brown-black ring-opacity-5'>
                                            {navigation.map((item) => (
                                                <Menu.Item
                                                    as="a"
                                                    key={item.href}
                                                    href={item.href}
                                                    onClick={handleClick(item.name.toLowerCase())}
                                                    className="group flex w-full items-center px-2 py-2 text-lg px-1 py-1"
                                                >
                                                    {item.name}
                                                </Menu.Item>
                                            ))}
                                        </Menu.Items>
                                    </Transition>
                                </div>
                            )}
                        </Menu>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <a href='#homepage' onClick={handleClick('homepage')}><img
                                className="hidden h-20 w-auto md:block"
                                src="/images/logo.svg"
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
                                    onClick={handleClick(item.name.toLowerCase())}
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
        </navigation>
    )
}