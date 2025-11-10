import { FC, ReactNode } from "react";
import styled from "@emotion/styled";
import BasicWrapper, { type BasicWrapperProps } from "./BasicWrapper";

interface WideWrapperProps extends BasicWrapperProps {}

const WideWrapper: FC<WideWrapperProps> = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

export default WideWrapper;

const Wrapper = styled(BasicWrapper)`
  max-width: 1330px;
`;
