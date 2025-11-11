import { NavLink } from "react-router-dom";
import paths from "@/routing/paths";
import logo from "@/assets/fungi-finders.svg";
import { WideWrapper } from "@/wrappers";
import styled from "@emotion/styled";
import variables from "@/styles/_exports.module.scss";

const Navigation = () => (
  <Container>
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
  </Container>
);
export default Navigation;

const Container = styled(WideWrapper)`
  display: flex;
  flex-wrap: wrap;
  gap: ${variables.size8} ${variables.size16};
  justify-content: space-between;

  .primary-navigation {
    ul {
      display: flex;
      flex-wrap: wrap;
      gap: ${variables.size8} ${variables.size16};
    }
  }
`;
