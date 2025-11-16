import type { FC, ReactNode } from "react";
import styled from "@emotion/styled";
import variables from "@/styles/_exports.module.scss";

interface TagProps {
  children: ReactNode;
}

const Tag: FC<TagProps> = ({ children }) => (
  <Container className="tag text-high-contrast fs-small border-radius-1">
    {children}
  </Container>
);

export default Tag;

const Container = styled.div`
  padding: 0 ${variables.size4};
  background-color: var(--tag-bg, ${variables["bg-accent-light"]});
  font-family: ${variables.ffHeading};
`;
