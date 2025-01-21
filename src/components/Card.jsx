import PropTypes from "prop-types";


const Card = ({ imageSrc, title, id }) => {
  return (
    <a href={`/logement/${id}`}>
      <article className="card">
        <img src={imageSrc} alt={title} className="card__image" />
        <h2 className="card__title">{title}</h2>
      </article>
    </a>
  );
};

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default Card;
