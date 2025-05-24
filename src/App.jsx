import { useEffect, useState } from "react";
import { ctx, url } from "../public/utils/constant";
import { Route, Routes, HashRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import "./styles/App.scss";
import "./styles/index.scss";
import Navbar from "./components/Navbar";
import { fetchData } from "../public/utils/constant";
import Logement from "./pages/Logement";
import Footer from "./components/Footer";
function App() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    const fetchAppart = async () => {
      // const storedData = localStorage.getItem("apparts");
      // if (storedData) {
      //   setDatas(JSON.parse(storedData));
      //   return;
      // }
      try {
        const apparts = await fetchData(url);
        localStorage.setItem("apparts", JSON.stringify(apparts));
        setDatas(apparts);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };
    fetchAppart();
  }, []);

  return (
    <>
      <ctx.Provider value={datas}>
        <HashRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apropos" element={<About />} />
            <Route path="/notFound" element={<NotFound />} />
            <Route path="/logement/:id" element={<Logement />} />
          </Routes>
          <Footer />
        </HashRouter>
      </ctx.Provider>
    </>
  );
}

export default App;
