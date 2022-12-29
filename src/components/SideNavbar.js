import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from '@fortawesome/free-regular-svg-icons';

const sideNavbar = [
    { name: 'About', href: '#about', current: true },
    { name: 'Projects', href: '#projects', current: false },
    { name: 'Experience', href: '#experience', current: false },
    { name: 'Contact', href: '#contact', current: false },
]

export default function SideNavbar() {
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
        <div className="fixed bottom-0 right-0 hidden sides:block">
            <div className="px-10 space-y-4">
                <div className="flex flex-col space-y-4">
                    {sideNavbar.map((item) => (
                        <><a
                            key={item.name}
                            href={item.href}
                            onClick={handleClick(item.name.toLowerCase)}
                            className='icon transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 SideNavbarIcon'
                            aria-current={item.current ? 'page' : undefined}><FontAwesomeIcon icon={faCircle} size="2x" /></a>
                            <span className="pageName">{item.name}</span></>
                    ))}
                </div>
                <div className="flex flex-row justify-center">
                    <div class="h-[125px] bg-brown-black w-[3px] rounded-t-sm	"></div>
                </div>
            </div>
        </div>
    );
}