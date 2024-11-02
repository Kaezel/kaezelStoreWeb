import React from "react";
import { Hero } from "./Hero";
import { About } from "../pages/About";
import { HowItWork } from "../pages/HowItWork";
import { Services } from "../pages/Services";
import { Testimonials } from "../pages/Testimonials";
import { Contact } from "../pages/Contact";

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <HowItWork />
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
};
