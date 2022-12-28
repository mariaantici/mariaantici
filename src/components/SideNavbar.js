import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from '@fortawesome/free-regular-svg-icons';

export default function SideNavbar() {
    return (
        <div className="fixed bottom-0 right-0 hidden sides:block">
            <div className="px-10 space-y-4">
                <div className="flex flex-col space-y-4">
                    <a href='#about' className='icon transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 SideNavbarIcon'><FontAwesomeIcon icon={faCircle} size="2x" /></a>
                    <span className="pageName">About</span>
                    <a href='#projects' className='icon transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 SideNavbarIcon'><FontAwesomeIcon icon={faCircle} size="2x" /></a>
                    <span className="pageName">Projects</span>
                    <a href='#experience' className='icon transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 SideNavbarIcon'><FontAwesomeIcon icon={faCircle} size="2x" /></a>
                    <span className="pageName">Experience</span>
                    <a href='#contact' className='icon transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 SideNavbarIcon'><FontAwesomeIcon icon={faCircle} size="2x" /></a>
                    <span className="pageName">Contact</span>
                </div>
                <div className="flex flex-row justify-center">
                    <div class="h-[125px] bg-brown-black w-[3px] rounded-t-sm	"></div>
                </div>
            </div>
        </div>
    );
}