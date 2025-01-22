import Hero from "../components/Hero";
import { titleAbout, img2 } from "../utils/constant";
const About = () => {
  return (
    <div >
      <Hero title={titleAbout} img={img2} />
    </div>
  );
};

export default About;
