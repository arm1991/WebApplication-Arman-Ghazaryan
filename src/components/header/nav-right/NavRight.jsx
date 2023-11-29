import { useState } from "react";
import "./NavRight.scss";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import ROUTER from "../../../router/router";

const NavRight = ({ img }) => {
  const [isInputVisible, setInputVisible] = useState(false);

  return (
    <>
      <div className="header-search">
        <button
          className="header-search-container"
          onClick={() => setInputVisible((prev) => !prev)}
        >
          <img
            className={
              !isInputVisible
                ? "icon-for-button header-img"
                : "icon-for-input header-img"
            }
            src={img.src}
            alt={img.alt}
          />
        </button>
        {isInputVisible && (
          <input
            className="header-search-input"
            type="text"
            placeholder="Find"
          />
        )}
        <div className="sign-in-link">
          <Link className="sign-in-link-button" to={ROUTER.SIGN_IN_PAGE_ROUTE}>
            <FaUser />
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavRight;
