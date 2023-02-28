export const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
};

export const NAV_ITEMS = [
    { name: 'About', href: '#about', current: true },
    { name: 'Projects', href: '#projects', current: false },
    { name: 'Experience', href: '#experience', current: false },
    { name: 'Contact', href: '#contact', current: false },
];