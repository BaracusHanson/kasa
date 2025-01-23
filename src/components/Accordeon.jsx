import PropTypes from "prop-types";
import arrow from "../assets/arrow_up.png";
import { useEffect, useState } from "react";

const Accordeon = ({ infos }) => {
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
      className="AboutAccordeon"
      style={{
        maxHeight: open ? "300px" : isMobile ? "36px" : "52px",
      }}
    >
      <button className="Aboutlogement__description" onClick={handleOpen}>
        <span className="About_title">{infos.title} </span>
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
        {infos.description}
      </p>
    </div>
  );
};

Accordeon.propTypes = {
    infos: PropTypes.object.isRequired,
};

export default Accordeon;
