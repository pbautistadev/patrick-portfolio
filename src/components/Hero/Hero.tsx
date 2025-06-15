import Abilities from "../Abilities/Abilities";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Formation from "../Formation/Formation";
import Projects from "../Projects/Projects";

const Hero = () => {
  return (
    <nav>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="abilities">
        <Abilities />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="formation">
        <Formation />
      </section>
    </nav>
  );
};

export default Hero;
