import { FC } from "react";
import styled from "@emotion/styled";
import BasicWrapper, { type BasicWrapperProps } from "./BasicWrapper";

interface NarrowWrapper extends BasicWrapperProps {}

const NarrowWrapper: FC<NarrowWrapper> = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

export default NarrowWrapper;

const Wrapper = styled(BasicWrapper)`
  max-width: 720px;
`;
