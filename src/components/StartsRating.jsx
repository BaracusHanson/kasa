import stars from "/assets/starBase.png";
import starFull from "/assets/star-active.png";
import PropTypes from "prop-types";
const StartsRating = ({ rating, host }) => {
  return (
    <div>
      <div className="user__infos">
        <div className="logement__rating">
          {[...Array(5)].map((_, index) => (
            <img
              src={stars}
              alt="star"
              key={index}
              className="logement__star"
            />
          ))}

          <div className="logement__rate">
            {[...Array(parseInt(rating))].map((_, index) => {
              return (
                <img
                  src={starFull}
                  alt={rating}
                  key={index}
                  className="logement__star"
                />
              );
            })}
          </div>
        </div>
        <section className="userInfos__container">
          <h1 className="host__name">{host.name} </h1>
          <img src={host.picture} alt={host.name} className="host__picture" />
        </section>
      </div>
    </div>
  );
};
StartsRating.propTypes = {
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  host: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
};

export default StartsRating;
