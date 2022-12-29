import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
    faGithub,
    faInstagram,
    faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const socials = [
    {
        name: "Email me!",
        icon: faEnvelope,
        url: "mailto: maria.antici99@mail.com",
    },
    {
        name: "Github",
        icon: faGithub,
        url: "https://github.com/mariaantici",
    },
    {
        name: "LinkedIn",
        icon: faLinkedinIn,
        url: "https://www.linkedin.com/in/maria-antici",
    },
    {
        name: "Instagram",
        icon: faInstagram,
        url: "https://www.instagram.com/maria_antici",
    },
];

export default function Socials() {
    return (
        <div className="fixed bottom-0 left-0 hidden sides:block">
            <div className="px-10 space-y-4">
                <div className="flex flex-col space-y-4">
                    {socials.map((social) => (
                        <><a href={social.url} className='icon transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 socialIcon'><FontAwesomeIcon icon={social.icon} size="2x" /></a><span className="socialName">{social.name}</span></>
                    ))}
                </div>
                <div className="flex flex-row justify-center">
                    <div class="h-[125px] bg-brown-black w-[3px] rounded-t-sm	"></div>
                </div>
            </div>
        </div>
    );
}