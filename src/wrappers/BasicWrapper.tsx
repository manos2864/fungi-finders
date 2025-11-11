import styled from "@emotion/styled";
import { FC, ReactNode } from "react";
import variables from "@/styles/_exports.module.scss";

export interface BasicWrapperProps {
  children: ReactNode;
  className?: string;
}

const BasicWrapper: FC<BasicWrapperProps> = ({ children, className }) => {
  return <Wrapper className={`${className || ""}`}>{children}</Wrapper>;
};

export default BasicWrapper;

const Wrapper = styled.div`
  max-width: 1130px;
  margin-inline: auto;
  padding-inline: ${variables.size16};
  box-sizing: content-box;
`;
