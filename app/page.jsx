import React from "react";
import Initializer from "../components/Initializer";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Projects from "../components/Projects";
import Portfolio from "../components/Portfolio";
import WorkFlow from "../components/WorkFlow";
import 'animate.css';

const page = () => {

  return (
    <section className="space-y-8">
      <Initializer/>
      <Hero />
      <Feature/>
      <Projects/>
      <Portfolio/>
      <WorkFlow/>
    </section>
  );
};

export default page;
