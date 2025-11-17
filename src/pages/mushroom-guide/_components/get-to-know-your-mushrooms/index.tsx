import styled from "@emotion/styled";

import { BasicWrapper, SectionWrapper } from "@/wrappers";
import variables from "@/styles/_exports.module.scss";
import List from "./_components/list";
import Filters from "./_components/Filters";
import { forwardRef, useState } from "react";
import { SEASONS_ENUMS, TYPE_ENUMS } from "./helpers";

const DEFAULT_FILTERS = {
  season: "all" as SEASONS_ENUMS,
  type: "all" as TYPE_ENUMS,
};

const GetToKnowYourMushrooms = forwardRef<HTMLDivElement>((_, ref) => {
  const [filters, setFilters] = useState(DEFAULT_FILTERS);

  return (
    <Container id="get-to-know-your-mushrooms" ref={ref}>
      <BasicWrapper className="flow">
        <h2 className="fs-h-regular">Get to know your mushrooms</h2>

        <Filters setFilters={setFilters} filters={filters} />

        <List filters={filters} />
      </BasicWrapper>
    </Container>
  );
});

export default GetToKnowYourMushrooms;

const Container = styled(SectionWrapper)`
  --card-title-font-size: ${variables.size20};
  --card-title-color: ${variables["text-hight-contrast"]};
  --card-gap: ${variables.size12};
`;
