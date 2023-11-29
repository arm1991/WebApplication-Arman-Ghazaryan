import { Link } from "react-router-dom";
import ROUTER from "../../../router/router";
import "./Links.scss";

const Links = () => {
  return (
    <ul className="header-links">
      <Link
        to={ROUTER.HOME_PAGE_ROUTE}
        className={
          window.location.pathname === ROUTER.HOME_PAGE_ROUTE
            ? `active-link`
            : undefined
        }
      >
        Home
      </Link>
      <Link
        className={
          window.location.pathname === ROUTER.ABOUT_PAGE_ROUTE
            ? `active-link`
            : undefined
        }
        to={ROUTER.ABOUT_PAGE_ROUTE}
      >
        About
      </Link>
      <Link
        className={
          window.location.pathname === ROUTER.NEWS_PAGE_ROUTE
            ? `active-link`
            : undefined
        }
        to={ROUTER.NEWS_PAGE_ROUTE}
      >
        News
      </Link>
      <Link
        className={
          window.location.pathname === ROUTER.OUR_CLIENTS_PAGE_ROUTE
            ? `active-link`
            : undefined
        }
        to={ROUTER.OUR_CLIENTS_PAGE_ROUTE}
      >
        Our Clients
      </Link>
    </ul>
  );
};

export default Links;
