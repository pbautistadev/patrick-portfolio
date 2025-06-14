import Abilities from "../Abilities/Abilities";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Formation from "../Formation/Formation";
import Projects from "../Projects/Projects";

const Hero = () => {
  return (
    <div>
      <About />
      <Projects />
      <Abilities />
      <Experience />
      <Formation />
    </div>
  );
};

export default Hero;
