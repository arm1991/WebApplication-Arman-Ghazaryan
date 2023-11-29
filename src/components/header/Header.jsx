import { headerImg } from "../../config/config";
import "./Header.scss";
import NavLeft from "./nav-left/NavLeft";
import NavRight from "./nav-right/NavRight";
import Links from "./links/Links";

const Header = () => {
  return (
    <header>
      <nav>
        <NavLeft img={headerImg.logo} />
        <Links />
        <NavRight img={headerImg.search} />
      </nav>
    </header>
  );
};

export default Header;
