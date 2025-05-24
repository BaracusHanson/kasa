import left from "/assets/left.png";
import right from "/assets/right.png";
import PropTypes from "prop-types";
const GalerieImage = ({
  handleLeft,
  handleRight,
  totalImg,
  currentImageIndex,
  appart,
}) => {
  return (
    <>
      <div className="logement__container">
        <img
          src={appart.pictures[currentImageIndex]}
          alt="appartement"
          className="logement__image"
        />
        <div
          className="slide_container"
          style={{ display: totalImg == 1 ? "none" : "flex" }}
        >
          <img
            src={left}
            alt="previous"
            className="arrow"
            onClick={handleLeft}
          />
          <img
            src={right}
            alt="next"
            style={{ display: totalImg === 1 ? "none" : "flex" }}
            className="arrow"
            onClick={handleRight}
          />
        </div>
        <div
          className="slide_pagination"
          style={{ display: totalImg === 1 ? "none" : "flex" }}
        >
          {currentImageIndex + 1}/{totalImg}
        </div>
      </div>
    </>
  );
};
GalerieImage.propTypes = {
  handleLeft: PropTypes.func.isRequired,
  handleRight: PropTypes.func.isRequired,
  totalImg: PropTypes.number.isRequired,
  currentImageIndex: PropTypes.number.isRequired,
  appart: PropTypes.shape({
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default GalerieImage;
