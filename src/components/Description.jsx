import PropTypes from "prop-types";
import arrow from "/assets/arrow_up.png";
import { useEffect, useState } from "react";

const Description = ({ title, descriptions }) => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1240);
  const handleOpen = () => {
    setOpen(!open);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1240);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="accordeon"
      style={{
        maxHeight: open ? "300px" : isMobile ? "30px" : "52px",
      }}
    >
      <button className="logement__description" onClick={handleOpen}>
        <span>{title} </span>
        <img
          src={arrow}
          alt="arrow"
          className="arrows"
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s",
          }}
        />
      </button>
      <p
        className="description"
        style={{
          transform: open ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        {descriptions}
      </p>
    </div>
  );
};

Description.propTypes = {
  title: PropTypes.string.isRequired,
  descriptions: PropTypes.string.isRequired,
};

export default Description;
