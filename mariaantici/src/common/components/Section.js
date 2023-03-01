import PropTypes from "prop-types";

const Section = ({ children, className, id }) => {
    return <section className={`mx-auto px-10 pt-20 pb-20 xs:pt-24 sm:pt-40 md:pt-60 sides:px-28 lg:pt-32 ${className}`} id={id}>{children}</section>;
};

Section.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    id: PropTypes.string,
};

export default Section;
