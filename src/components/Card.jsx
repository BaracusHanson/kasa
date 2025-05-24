import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ imageSrc, title, id }) => {
  return (
    <Link to={`/logement/${id}`}>
      <article className="card">
        <img src={imageSrc} alt={title} className="card__image" />
        <div className="card__gradient">
          <h2 className="card__title">{title}</h2>
        </div>
      </article>
    </Link>
  );
};

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;
