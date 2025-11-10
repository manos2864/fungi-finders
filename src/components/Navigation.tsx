import { NavLink } from "react-router-dom";
import paths from "@/routing/paths";
import logo from "@/assets/fungi-finders.svg";
import { BasicWrapper } from "@/wrappers";

const Navigation = () => (
  <BasicWrapper>
    <img src={logo} alt="Fungi Finders" />

    <nav className="primary-navigation">
      <ul role="list">
        <li>
          <NavLink to={paths.landing}>Discover</NavLink>
        </li>

        <li>
          <NavLink to={paths.mushroom_guide}>Mushroom Guide</NavLink>
        </li>

        <li>
          <NavLink to={paths.faq}>FAQ</NavLink>
        </li>
      </ul>
    </nav>
  </BasicWrapper>
);
export default Navigation;
