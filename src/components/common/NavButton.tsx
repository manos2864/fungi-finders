import styled from "@emotion/styled";
import { FC, ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import variables from "@/styles/_exports.module.scss";

interface ButtonProps extends LinkProps {
  children: ReactNode;
}

const NavButton: FC<ButtonProps> = ({ children, ...rest }) => (
  <Container
    role="button"
    className="border-radius-2 bg-accent-main fs-md"
    {...rest}
  >
    {children}
  </Container>
);

export default NavButton;

const Container = styled(Link)`
  display: inline-flex;
  padding: ${variables.size8} ${variables.size16};
  font-family: ${variables.ffHeading};
  font-weight: 700;
  text-decoration: none;

  &:hover,
  &:focus-visible {
    color: ${variables["text-high-contrast"]};
    background-color: ${variables["bg-accent-light"]};
  }
`;
