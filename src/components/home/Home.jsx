import "./Home.scss";
import { homeImg } from "../../config/config";
import SectionOne from "./section-one/SectionOne";
import SectionTwo from "./section-two/SectionTwo";

const Home = () => {
  return (
    <>
      <SectionOne img={homeImg.background.src} />
      <SectionTwo />
    </>
  );
};

export default Home;
