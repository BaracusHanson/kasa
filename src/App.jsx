import { url } from "./utils/constant";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import "./styles/App.scss";
import "./styles/index.scss";
import Navbar from "./components/Navbar";
import Logement from "./pages/Logement";
import { fetchData } from "./utils/constant";
import { useEffect, useState } from "react";
import { ctx } from "./utils/constant";

function App() {
  const [datas, setDatas] = useState([]);


  useEffect(() => {
    const fetchAppart = async () => {
      const apparts = await fetchData(url);
      setDatas(apparts);
    };
    fetchAppart();
  }, []);
  return (
    <>
      <ctx.Provider value={datas}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apropos" element={<About />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/logement/:id" element={<Logement />} />
          </Routes>
        </BrowserRouter>
      </ctx.Provider>
    </>
  );
}

export default App;
