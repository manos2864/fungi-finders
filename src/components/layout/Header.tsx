import styled from "@emotion/styled";
import Navigation from "@/components/layout/navigation";
import variables from "@/styles/_exports.module.scss";

const Header = () => (
  <Container>
    <Navigation />
  </Container>
);

export default Header;

const Container = styled.header`
  padding-block: ${variables.size16};
`;
