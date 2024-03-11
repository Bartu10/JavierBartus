import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.scss";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        // Realiza las tres solicitudes simultáneamente
        const [res1, res2, res3] = await Promise.all([
          axios.get("https://backendnodetfg.onrender.com/products/"),
          axios.post('https://paypalmailnode.onrender.com/sendMail', {
            name: "Javi",
            email: "jbg10102002@gmail.com",
            mensaje: "Nueva Visualizacion al Porfolio",
          }),
          axios.get("https://f1guideapi2.onrender.com/equipos/api/teams"),
        ]);

        console.log("BackendNodeTFG Cargado", res1.data);
        console.log("PayPalMailNode Cargado", res2.data);
        console.log("F1GuideAPI2 Cargado", res3.data);
      } catch (error) {
        console.error('Error en alguna de las solicitudes:', error.message);
      }
    }

    // Llama a la función para realizar las solicitudes al montar el componente
    fetchData();
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
