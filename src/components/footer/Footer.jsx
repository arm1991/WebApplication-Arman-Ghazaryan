import { SocialIcon } from "react-social-icons";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scoialMedia = [
    "facebook",
    "instagram",
    "snapchat",
    "pinterest",
    "twitter",
    "linkedin",
  ];
  return (
    <footer>
      <button className="footer-button" onClick={scrollToTop}>
        <span>To the top</span>
      </button>
      <div className="footer-icons">
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
      <p>
        Powered by{" "}
        <a href="https://www.w3schools.com/w3css/default.asp">w3school</a>
      </p>
    </footer>
  );
};

export default Footer;
