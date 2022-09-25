import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import Context from "./Context";

export default function App() {

  const [foto, setFoto] = useState([])
  const estados = {foto, setFoto}


  const endpoint = "/fotos.json";
  const consultarFotos = async () => {
    const response = await fetch(endpoint)
    const data = await response.json()
    let dataHome = data.photos.map((e)=> ({ id: e.id, src: e.src.tiny, desc: e.alt, liked: false}))
  setFoto(dataHome)
  }

  useEffect (() => {
    consultarFotos();
  },[]);
  

  return (
    <div className="App">
     
      <Context.Provider value={estados}>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </BrowserRouter>
      </Context.Provider>
    </div>
  );
}
