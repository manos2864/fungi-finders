import { FC, ReactNode } from "react";
import styled from "@emotion/styled";
import BasicWrapper, { type BasicWrapperProps } from "./BasicWrapper";

interface NarrowWrapper extends BasicWrapperProps {}

const NarrowWrapper: FC<NarrowWrapper> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default NarrowWrapper;

const Wrapper = styled(BasicWrapper)`
  max-width: 720px;
`;
