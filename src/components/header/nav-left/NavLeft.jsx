import { useNavigate } from "react-router-dom";
import ROUTER from "../../../router/router";
import "./NavLeft.scss";

const NavLeft = ({ img }) => {
  const navigate = useNavigate();
  const changePath = (path) => navigate(path);

  return (
    <div className="header-logo">
      <div
        className="header-logo-container"
        onClick={() => changePath(ROUTER.HOME_PAGE_ROUTE)}
      >
        <img className="header-img" src={img.src} alt={img.alt} />
      </div>
    </div>
  );
};

export default NavLeft;
