import styled from "@emotion/styled";
import { FC, ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";

interface ButtonProps extends LinkProps {
  children: ReactNode;
}

const NavButton: FC<ButtonProps> = ({ children, ...rest }) => (
  <Container {...rest}>{children} </Container>
);

export default NavButton;

const Container = styled(Link)``;
