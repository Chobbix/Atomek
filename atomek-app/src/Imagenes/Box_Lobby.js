import React from "react";
import Header_loggeate from "../components/Header_loggeate";
import Carrousel from "../components/CarrouselImag";
import TestimoniosUser from "../components/TestimoniosUser";
import './Estilos/Scroll_style.css'
export default function Lobby() {
  return (
    <body id="fonditobonito" className="fonditobonito">
      <React.Fragment>
        <Header_loggeate />
        <Carrousel />
        <TestimoniosUser />
      </React.Fragment>
    </body>
  );
}
