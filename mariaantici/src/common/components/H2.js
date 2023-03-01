import PropTypes from "prop-types";

const H2 = ({ children, className, id }) => {
    return <h2 className={`text-3xl font-bold tracking-widest sm:text-4xl sm:text-center ${className}`}>{children}</h2>;
};

H2.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default H2;
