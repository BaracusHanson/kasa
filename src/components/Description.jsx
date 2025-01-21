import arrow from "../assets/arrow_up.png";

const Description = () => {
  return (
    <button className="logement__description">
      <span>Description</span>
      <img src={arrow} alt="" className="arrows" />
    </button>
  );
};

export default Description;
