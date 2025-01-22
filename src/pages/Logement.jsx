import { ctx } from "../utils/constant";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Tag from "../components/Tag";
import Description from "../components/Description";
import stars from "../assets/starBase.png";
import starFull from "../assets/star-active.png";
import left from "../assets/left.png";
import right from "../assets/right.png";
const Logement = () => {
  const data = useContext(ctx);
  const id = useParams();
  const appart = data.filter((el) => {
    return el.id === id.id;
  });
  // console.log(appart[0].equipments);
  // const equipments = appart[0].equipments;
  const description = appart[0].description;
  const totalImg = appart[0].pictures.length;
  // const Equipements = "Équipements";
  const Descriptions = "Description";

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  console.log(currentImageIndex);
  const handleLeft = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? appart[0].pictures.length - 1 : prevIndex - 1
    );
    console.log(currentImageIndex);
  };

  const handleRight = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === appart[0].pictures.length - 1 ? 0 : prevIndex + 1
    );
    console.log(currentImageIndex);
  };

  return (
    <section className="logement">
      <div className="logement__container">
        <img
          src={appart[0].pictures[currentImageIndex]}
          alt="appartement"
          className="logement__image"
        />
        <div
          className="slide_container"
          style={{ display: totalImg == 1 ? "none" : "flex" }}
        >
          <img src={left} alt="" className="arrow" onClick={handleLeft} />
          <img
            src={right}
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
          <p className="logement__title">{appart[0].title}</p>
          <p className="logement__location">{appart[0].location}</p>
          <p className="logement__tags">
            {appart[0].tags.map((tag, index) => (
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
              {[...Array(parseInt(appart[0].rating))].map((_, index) => {
                return (
                  <img
                    src={starFull}
                    alt={appart[0].rating}
                    key={index}
                    className="logement__star"
                  />
                );
              })}
            </div>
          </div>
          <section className="userInfos__container">
            <h1 className="host__name">{appart[0].host.name} </h1>
            <img
              src={appart[0].host.picture}
              alt={appart[0].host.name}
              className="host__picture"
            />
          </section>
        </div>
      </div>
      <div className="logement_descriptionContainer">
        <Description title={Descriptions} description={description} />
        {/* <Description title={Equipements} equipments={equipments} /> */}
      </div>
    </section>
  );
};

export default Logement;
