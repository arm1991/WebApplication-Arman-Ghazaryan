import "./About.scss";
import SectionOne from "./section-one/SectionOne";
import SectionTwo from "./section-two/SectionTwo";
import { aboutImg } from "../../config/config";

const About = () => {
  return (
    <>
      <SectionOne background={aboutImg.background.src} logo={aboutImg.logo} />
      <SectionTwo />
    </>
  );
};

export default About;
