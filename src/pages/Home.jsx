import Hero from "../components/Section1/HeroSection/Hero-imgs-vides";
import Heading from "../components/Section2/Section2-Hading/Section2-Heading";
import Carousel from "../components/Section2/Section2-Carousal/Carousel";
import Carousel2 from "../components/Section3/Section3-Carosul/Section3-Carousel";
import Section3 from "../components/Section4/Section4-Heading/Section4-Heading";
import Section4 from "../components/Section5/Section5-Img/Section5-img";
import Carousel3 from "../components/Section6/Section6-Carousel/Section6";
import Section5 from "../components/Section7/Section7Img/Section7Img";
import Section6 from "../components/Section8/Section8";
import Section7 from "../components/Section9/Section9";
import Section8 from "../components/Section10/Section10";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
 const location = useLocation()

 useEffect(()=>{
    if(location.hash){
      const id = location.hash.replace("#", "")
      const section = document.getElementById(id)
      if(section){
        setTimeout(()=>{
          section.scrollIntoView({
            behavior:"smooth"
          })
        }, 100)
      }
    }
 }, [location])
  return (
    <>
      <Hero />
      <Heading />
      <Carousel />
      <Carousel2 />
      <Section3 />
      <Section4 />
      <Carousel3 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
    </>
  );
};

export default Home;