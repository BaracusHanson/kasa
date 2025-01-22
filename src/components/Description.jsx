import PropTypes from "prop-types";
import arrow from "../assets/arrow_up.png";
import { useState } from "react";

const Description = ({ title, description }) => {
  const [open, setOpen] = useState(false);
  console.log(description);
  const handleOpen = () => {
    setOpen(!open);
    console.log(open);
  };
  return (
    <div
      className="more"
      style={{ height: !open ? "100%" : "0px" }}
    >
      <button className="logement__description" onClick={handleOpen}>
        <span>{title} </span>
        <img
          src={arrow}
          alt="arrow"
          className="arrows"
          style={{
            transform: !open ? "rotate(180deg)" : "rotate(0deg)",
            // transition: "transform 0.3s",
          }}
        />
      </button>
      <p
        className="description"
        style={{
          visibility: !open ? "visible" : "hidden",
          // transition: "visibility 0.3s",
        }}
      >
        {description}
      </p>
    </div>
  );
};

Description.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Description;
