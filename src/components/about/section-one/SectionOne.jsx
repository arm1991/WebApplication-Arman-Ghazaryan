import { useNavigate } from "react-router-dom";
import ROUTER from "../../../router/router";
import "./SectionOne.scss";

const SectionOne = ({ background, logo }) => {
  const navigate = useNavigate();
  const changePath = (path) => navigate(path);
  return (
    <section
      className="about-section-one"
      style={{ backgroundImage: `url(${background})` }}
    >
      <img
        className="about-section-one-logo"
        src={logo.src}
        alt={logo.alt}
        onClick={() => changePath(ROUTER.HOME_PAGE_ROUTE)}
      />
    </section>
  );
};

export default SectionOne;
