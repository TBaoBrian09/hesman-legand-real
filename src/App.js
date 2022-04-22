import React from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import Video from "./components/layout/Video";
import Plot from "./components/layout/Plot";
import Slogan from "./components/layout/Slogan";
import Member from "./components/layout/Member";
import Ecosystem from "./components/layout/Ecosystem";
import Future from "./components/layout/Future";
import Plan from "./components/layout/Plan";
import Journeys from "./components/layout/Journeys";


const ContainerApp = styled.section`
  width: 100%;
  margin-bottom: 50px;
`;

function App() {
  return (
    <ContainerApp>
      <Header></Header>
      <Hero />
      <Video />
      <Plot />
      <Slogan />
      <Member />
      <Ecosystem />
      <Future />
      <Plan />
      <Journeys />
    </ContainerApp>
  );
}

export default App;
