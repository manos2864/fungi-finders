import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import variables from "@/styles/_exports.module.scss";

const Footer = () => (
  <Container className="site-footer text-center bg-dark">
    <p className="site-footer__title fs-md">Happy Foraging!</p>
    <Link to="mailto:contact@fungifinders.com">contact@fungifinders.com</Link>
  </Container>
);

export default Footer;

const Container = styled.footer`
  display: grid;
  gap: ${variables.size32};
  padding-block: ${variables.size32};

  a {
    color: ${variables["text-main"]};
  }

  a:hover,
  a:focus-visible {
    color: ${variables["text-brand-light"]};
  }

  .site-footer {
    &__title {
      font-family: ${variables.ffHeading};
      font-weight: 700;
    }
  }
`;
