import styled from "@emotion/styled";

import { BasicWrapper, NarrowWrapper, SectionWrapper } from "@/wrappers";
import { SECTION_SIZE_VARIANTS } from "@/wrappers/SectionWrapper";
import heroImg from "@/assets/hero.webp";

const Intro = () => (
  <Container
    className="hero flow fs-md text-high-contrast text-center"
    sizeVariant={SECTION_SIZE_VARIANTS.COMPACT}
  >
    <BasicWrapper>
      <h1 className="fs-h-lg">
        Discover the World of{" "}
        <span className="text-brand fs-h-xl">Mushroom Foraging</span>
      </h1>
    </BasicWrapper>

    <NarrowWrapper className="flow">
      <p>
        Mushroom foraging is the art and science of identifying and collecting
        wild mushrooms.
      </p>

      <p>
        It's a practice that combines outdoor exploration, botanical knowledge,
        and culinary adventure. Foragers venture into forests, fields, and even
        urban green spaces to discover these hidden treasures.
      </p>

      <p>
        But beware – this hobby requires careful study and respect for nature,
        as some mushrooms can be dangerous if misidentified.
      </p>
    </NarrowWrapper>
  </Container>
);

export default Intro;

const Container = styled(SectionWrapper)`
  background-image: url(${heroImg});
  background-size: cover;
  background-position: center;
`;
