import PropTypes from "prop-types";
import arrow from "../assets/arrow_up.png";
import { useEffect, useState } from "react";

const Equipement = ({ title, equipments }) => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1240);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1240);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOpen = () => {
    setOpen(!open);
  };
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
      <ul
        className="description"
        style={{
          transform: open ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        {equipments.map((equip, index) => (
          <li key={index}>{equip} </li>
        ))}
      </ul>
    </div>
  );
};

Equipement.propTypes = {
  title: PropTypes.string.isRequired,
  equipments: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Equipement;
