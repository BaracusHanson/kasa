import { ctx } from "/public/utils/constant.js";
import { useContext, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Tag from "../components/Tag";
import GalerieImage from "../components/GalerieImage";
import StartsRating from "../components/StartsRating";
import Dropdown from "../components/Dropdown";
const Logement = () => {
  const data = useContext(ctx);
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const appart = data.find((el) => el.id === id);
  if (!appart) {
    return <Navigate to="/notFound" replace />;
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
  const totalImg = pictures.length;

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
      <GalerieImage
        handleLeft={handleLeft}
        handleRight={handleRight}
        totalImg={totalImg}
        currentImageIndex={currentImageIndex}
        appart={appart}
      />
      <div className="logement__infos">
        <div>
          <p className="logement__title">{title}</p>
          <p className="logement__location">{location}</p>
          <Tag tags={tags} />
        </div>
        <StartsRating rating={rating} host={host} />
      </div>
      <div className="logement_descriptionContainer">
        <Dropdown title={"Description"} descriptions={description} />
        <Dropdown title={"Equipement"} descriptions={equipments} />
      </div>
    </section>
  );
};

export default Logement;
