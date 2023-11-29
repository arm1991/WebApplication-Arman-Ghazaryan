import ROUTER from "../../../router/router";
import "./SectionOne.scss";
import { SocialIcon } from "react-social-icons";
import { Link, useNavigate } from "react-router-dom";

const SectionOne = ({ img }) => {
  const navigate = useNavigate();
  const changePath = (path) => navigate(path);

  const scoialMedia = [
    "facebook",
    "instagram",
    "snapchat",
    "pinterest",
    "twitter",
    "linkedin",
  ];
  return (
    <section
      className="home-section-one"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="home-section-one-content">
        <h1 className="home-section-one-content-title">
          Start something that matters
        </h1>
        <h3 className="home-section-one-content-description">
          Stop wasting valuable time with projects that just isn't you.
        </h3>
        <button
          className="home-section-one-content-button"
          onClick={() => {
            changePath(ROUTER.ABOUT_PAGE_ROUTE);
          }}
        >
          Learn more and start today
        </button>
      </div>
      <div className="home-section-one-footer">
        {scoialMedia.map((el, idx) => (
          <Link rel="stylesheet" to={`https://${el}.com`}>
            <SocialIcon
              key={idx}
              className="social-media-icon"
              url={`https://${el}.com`}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SectionOne;
