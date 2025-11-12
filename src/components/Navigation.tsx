import { useRef } from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

import paths from "@/routing/paths";
import { WideWrapper } from "@/wrappers";
import variables from "@/styles/_exports.module.scss";
import logo from "@/assets/fungi-finders.svg";
import hamburger from "@/assets/hamburger.svg";

const Navigation = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleNav = () => {
    const button = buttonRef.current;

    if (!button) return;

    const isExpanded = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", (!isExpanded).toString());
  };

  return (
    <Container>
      <img src={logo} alt="Fungi Finders" />

      <button
        ref={buttonRef}
        onClick={toggleNav}
        aria-controls="primary-nav"
        aria-expanded="false"
      >
        <span className="sr-only">Menu</span>
        <img src={hamburger} alt="" />
      </button>

      <nav id="primary-nav" className="primary-navigation">
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
};

export default Navigation;

const Container = styled(WideWrapper)`
  display: flex;
  flex-wrap: wrap;
  gap: ${variables.size8} ${variables.size16};
  justify-content: space-between;

  a {
    text-decoration: none;
  }

  [aria-controls="primary-nav"] {
    display: none;
    z-index: 9999;
    background: transparent;
    border: 0;
    cursor: pointer;

    @media (width < ${variables.md}) {
      display: block;
    }
  }

  [aria-expanded="true"] ~ .primary-navigation {
    display: block;
  }

  .primary-navigation {
    ul {
      display: flex;
      flex-wrap: wrap;
      gap: ${variables.size8} ${variables.size16};
    }

    @media (width < ${variables.md}) {
      display: none;
      position: absolute;
      z-index: 1;
      top: 0;
      right: 0;
      font-size: ${variables.size20};
      font-weight: 700;
      font-family: ${variables.ffHeading};
      background-color: ${variables["bg-accent-main"]};
      padding: ${variables.size32};
      border-radius: 0 0 0 ${variables.size12};

      ul {
        gap: 0;
        flex-direction: column;
      }

      li + li {
        margin-block-start: ${variables.size24};
        padding-block-start: ${variables.size24};
        border-top: 2px solid ${variables["bg-accent-light"]};
      }
    }
  }
`;
