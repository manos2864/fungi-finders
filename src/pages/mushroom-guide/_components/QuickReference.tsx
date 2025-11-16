import styled from "@emotion/styled";

import { BasicWrapper, NarrowWrapper, SectionWrapper } from "@/wrappers";
import { SECTION_SIZE_VARIANTS } from "@/wrappers/SectionWrapper";
import heroImg from "@/assets/hero.webp";

const QuickReference = () => (
  <Container
    className="hero flow fs-md text-high-contrast text-center"
    sizeVariant={SECTION_SIZE_VARIANTS.COMPACT}
  >
    <BasicWrapper>
      <h1 className="fs-h-lg">
        Quick reference{" "}
        <span className="text-brand fs-h-xl">Mushroom Guide</span>
      </h1>
    </BasicWrapper>

    <NarrowWrapper className="flow">
      <p>
        Discover a wide array of mushrooms from around the world, each with its
        own unique flavor profile and culinary uses.
      </p>

      <p>
        Whether you're looking for earthy porcinis, delicate chanterelles, or
        meaty shiitakes, our selection has something for every palate.
      </p>

      <p>
        Explore the diverse shapes, sizes, and colors of these fungi to elevate
        your dishes to new heights.
      </p>
    </NarrowWrapper>
  </Container>
);

export default QuickReference;

const Container = styled(SectionWrapper)`
  background-image: url(${heroImg});
  background-size: cover;
  background-position: center;
`;
