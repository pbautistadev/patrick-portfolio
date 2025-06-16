import Abilities from "../Abilities/Abilities";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Formation from "../Formation/Formation";
import Projects from "../Projects/Projects";

const Hero = () => {
  return (
    <div>
      <section id="about" className="scroll-mt-26 mt-26">
        <About />
      </section>
      <section id="projects" className="scroll-mt-26">
        <Projects />
      </section>
      <section id="abilities" className="scroll-mt-26">
        <Abilities />
      </section>
      <section id="experience" className="scroll-mt-26">
        <Experience />
      </section>
      <section id="formation" className="scroll-mt-26">
        <Formation />
      </section>
    </div>
  );
};

export default Hero;
