import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle as faRegularCircle } from '@fortawesome/free-regular-svg-icons';
import { faCircle as faSolidCircle } from '@fortawesome/free-solid-svg-icons';
import { handleClick, NAV_ITEMS } from '@/common/utils/utils';

export default function SideNavbar() {
    return (
        <div className="fixed bottom-0 right-0 hidden sides:block sideNavbar px-10 space-y-4">
            <div className="flex flex-col space-y-4">
                {NAV_ITEMS.map((item, index) => (
                    <><a
                        key={index}
                        href={item.href}
                        onClick={handleClick(item.name.toLowerCase())}
                        className='icon transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 SideNavbarIcon'
                        aria-current={item.current ? 'page' : undefined}><div className="fa-hover-hidden"><FontAwesomeIcon icon={faRegularCircle} size="2x" /></div><div className="fa-hover-show"><FontAwesomeIcon icon={faSolidCircle} size="2x" /></div></a>
                        <span className="pageName">{item.name}</span></>
                ))}
            </div>
            <div className="flex flex-row justify-center">
                <div className="h-[125px] bg-brown-black w-[3px] rounded-t-sm	"></div>
            </div>
        </div>
    );
}