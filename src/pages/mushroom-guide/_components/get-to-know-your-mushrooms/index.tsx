import styled from "@emotion/styled";

import { BasicWrapper, SectionWrapper } from "@/wrappers";
import variables from "@/styles/_exports.module.scss";
import List from "./List";
import Filters from "./Filters";

const GetToKnowYourMushrooms = () => (
  <Container>
    <BasicWrapper className="flow">
      <h2 className="fs-h-regular">Get to know your mushrooms</h2>

      <Filters />

      <List />
    </BasicWrapper>
  </Container>
);

export default GetToKnowYourMushrooms;

const Container = styled(SectionWrapper)`
  --card-title-font-size: ${variables.size20};
  --card-title-color: ${variables["text-hight-contrast"]};
  --card-gap: ${variables.size12};
`;
