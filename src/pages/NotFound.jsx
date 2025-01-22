import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound">
      <h1 className="notFound_title">404</h1>
      <p className="notFound_text">
        {"Oups! La page que vous demandez n'existe pas."}
      </p>
      <li className="notFound_link">
        <Link to={"/"}>Retourner sur la page d’accueil</Link>
      </li>
    </div>
  );
};

export default NotFound;
