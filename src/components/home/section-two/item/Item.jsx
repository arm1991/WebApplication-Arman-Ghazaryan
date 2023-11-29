import { useNavigate } from "react-router-dom";
import "./Item.scss";
import ROUTER from "../../../../router/router";

const Item = ({ Component, title, description }) => {
  const navigate = useNavigate();
  const changePath = (path) => navigate(path);

  return (
    <div
      className="home-section-two-content-item"
      onClick={() => changePath(ROUTER.SIGN_IN_PAGE_ROUTE)}
    >
      <Component className="home-section-two-content-item-icon" />
      <h3 className="home-section-two-content-item-title">{title}</h3>
      <h6 className="home-section-two-content-item-description">
        {description}
      </h6>
    </div>
  );
};

export default Item;
