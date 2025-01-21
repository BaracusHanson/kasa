import { ctx } from "../utils/constant";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import Tag from "../components/Tag";
import Description from "../components/Description";
import stars from "../assets/starBase.png";
import starFull from "../assets/star-active.png";

const Logement = () => {
  const data = useContext(ctx);
  const id = useParams();

  const appart = data.filter((el) => {
    return el.id === id.id;
  });
  console.log(typeof parseInt(appart[0].rating));

  return (
    <section className="logement">
      <div className="logement__container">
        {appart[0].pictures.map((img, index) => (
          <img
            src={img}
            alt="appartement"
            key={index}
            className="logement__image"
          />
        ))}
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
        <Description />
        <Description />
      </div>
    </section>
  );
};

export default Logement;
