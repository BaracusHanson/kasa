import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="help">
      <p className="error">404</p>
      <p className="pError">
        {"Oups! La page que vous demandez n'existe pas."}
      </p>
      <Link to={"/"} className="retourBoutton">
        <p>{"Retourner sur la page d’accueil"}</p>
      </Link>
    </div>
  );
};

export default NotFound;
