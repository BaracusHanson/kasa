import { useContext} from "react";
import Card from "../components/Card";
import Hero from "../components/Hero";
import { titleHome, img1, ctx } from "../utils/constant";


export const Home = () => {
const data = useContext(ctx)
  return (
    <div>
      <Hero title={titleHome} img={img1} />
      <main className="main">
        {data.map((appart) => (
          <Card
            key={appart.id}
            imageSrc={appart.cover}
            title={appart.title}
            id={appart.id}
          />
        ))}
      </main>
    </div>
  );
};

