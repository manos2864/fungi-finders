import { useRef } from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

import { WideWrapper } from "@/wrappers";
import variables from "@/styles/_exports.module.scss";
import logo from "@/assets/fungi-finders.svg";
import hamburger from "@/assets/hamburger.svg";
import { routes } from "./helpers";

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
          {routes.map((route) => (
            <li key={route.title}>
              <NavLink className="text-brown-light-gray-dark" to={route.path}>
                {route.title}
              </NavLink>
            </li>
          ))}
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
    opacity: 1;
    translate: 0 0;

    @starting-style {
      opacity: 0;
      translate: 100% 0;
    }

    li {
      translate: 0 0;
      opacity: 1;

      @starting-style {
        opacity: 0;
        translate: 50% 0;
      }
    }
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
      opacity: 0;
      transition: opacity 1s, display 1s, translate 1s;
      transition-behavior: allow-discrete;
      translate: 100% 0;

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

      li {
        --li-delay-transition: 0.5s;
        translate: 50%;
        transition: translate 1s var(--li-delay-transition),
          opacity 1s var(--li-delay-transition);

        &:nth-child(2) {
          --li-delay-transition: 0.8s;
        }

        &:nth-child(3) {
          --li-delay-transition: 1s;
        }
      }

      li + li {
        margin-block-start: ${variables.size24};
        padding-block-start: ${variables.size24};
        border-top: 2px solid ${variables["bg-accent-light"]};
      }
    }
  }
`;
