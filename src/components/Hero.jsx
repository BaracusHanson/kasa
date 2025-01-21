import PropTypes from "prop-types";

const Hero = ({ title, img }) => {
return (
    <header className="hero">
        <img src={img} alt="hero" className="hero__image" />
        <h1 className="hero__title">{title}</h1>
    </header>
);
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Hero;
