import { ctx } from "../utils/constant";
import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Tag from "../components/Tag";
import Description from "../components/Description";
import stars from "/assets/starBase.png";
import starFull from "/assets/star-active.png";
import left from "/assets/left.png";
import right from "/assets/right.png";
import Equipement from "../components/Equipement";
const Logement = () => {
  const data = useContext(ctx);
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const appart = data.find((el) => el.id === id);
  if (!appart) {
    return (
      <div className="help">
        <p>Logement introuvable !</p>
        <Link to={"/"}>
          <button className="retourBoutton">{"Revenir à l'accueil"}</button>
        </Link>
      </div>
    );
  }
  const {
    pictures,
    title,
    location,
    rating,
    host,
    tags,
    equipments,
    description,
  } = appart;
  const equipmentss = equipments;
  const descriptions = description;
  const totalImg = pictures.length;
  const Equipements = "Équipements";
  const Descriptions = "Description";

  const handleLeft = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? appart.pictures.length - 1 : prevIndex - 1
    );
  };

  const handleRight = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === appart.pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="logement">
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
      <div className="logement__infos">
        <div>
          <p className="logement__title">{title}</p>
          <p className="logement__location">{location}</p>
          <p className="logement__tags">
            {tags.map((tag, index) => (
              <Tag key={index} tags={tag} />
            ))}
          </p>
        </div>
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
      <div className="logement_descriptionContainer">
        <Description title={Descriptions} descriptions={descriptions} />
        <Equipement title={Equipements} equipmentts={equipmentss} />
      </div>
    </section>
  );
};

export default Logement;
