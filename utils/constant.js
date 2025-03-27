import { createContext } from "react";
import hero1Image from "/assets/hero1.png";
import hero2Image from "/assets/hero2.png";
import axios from "axios";
export const ctx = createContext();
export const titleHome = "Chez vous, partout et ailleurs";
export const titleAbout = "";
export const img1 = hero1Image;
export const img2 = hero2Image;

export const url = "../public/utils/data.json";
export const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const infosServices = [
  {
    title: "Fiabilite",
    description:
      "Les annonces sur Kasa garantissent une fiabilité totale. Les Photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées pas nos équipes",
  },
  {
    title: "Respect",
    description:
      "La bienveillance fait partie des valeurs fondatrices de Kase. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme",
  },
  {
    title: "Fiabilite",
    description:
      "La qualité de service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec hôtes ou nos locataires, soit empreinte de respect et de bienveillance.",
  },
  {
    title: "Securité",
    description:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];
