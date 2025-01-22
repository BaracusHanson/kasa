import { useEffect, useState } from "react";
import { ctx, url } from "./utils/constant";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import "./styles/App.scss";
import "./styles/index.scss";
import Navbar from "./components/Navbar";
import { fetchData } from "./utils/constant";
import Logement from "./pages/Logement";
import Footer from "./components/Footer";
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
          <Footer />
        </BrowserRouter>
      </ctx.Provider>
    </>
  );
}

export default App;
