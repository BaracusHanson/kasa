import { useEffect, useState } from "react";
import arrow from "/assets/arrow_up.png";
import PropTypes from "prop-types";
const Dropdown = ({ title, descriptions }) => {
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

      {Array.isArray(descriptions) ? (
        <ul
          className="description"
          style={{
            transform: open ? "translateY(0)" : "translateY(-100%)",
          }}
        >
          {descriptions.map((equip, index) => (
            <li key={index}>{equip} </li>
          ))}
        </ul>
      ) : (
        <p
          className="description"
          style={{
            transform: open ? "translateY(0)" : "translateY(-100%)",
          }}
        >
          {descriptions}
        </p>
      )}
    </div>
  );
};
Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  descriptions: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
};

export default Dropdown;
