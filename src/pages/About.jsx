import Accordeon from "../components/Accordeon";
import Hero from "../components/Hero";
import { titleAbout, img2 } from "/public/utils/constant.js";
import PropTypes from "prop-types";
import { infosServices } from "/public/utils/constant.js";
const Corp = ({ children }) => {
  return <div className="aboutContainer">{children}</div>;
};
Corp.propTypes = {
  children: PropTypes.node.isRequired,
};

const About = () => {


  return (
    <div className="about__container">
      <Hero title={titleAbout} img={img2} />
      <Corp>
        {infosServices.map((info, index) => (
          <Accordeon infos={info} key={index} />
        ))}
      </Corp>
    </div>
  );
};

export default About;
