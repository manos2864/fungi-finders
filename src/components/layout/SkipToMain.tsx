import styled from "@emotion/styled";
import variables from "@/styles/_exports.module.scss";

const SkipToMain = () => (
  <Container className="bg-accent-main border-radius-2" href="#main">
    Skip to main content
  </Container>
);

export default SkipToMain;

const Container = styled.a`
    position: absolute;
    padding: ${variables.size16}
    overflow: hidden;
  
    top: ${variables.size18};
    left: ${variables.size18};


  &:not(:focus) {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    white-space: nowrap;
    width: 1px;
  }
`;
