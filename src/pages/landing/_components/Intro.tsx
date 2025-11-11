import { BasicWrapper, NarrowWrapper, SectionWrapper } from "@/wrappers";
import { SECTION_SIZE_VARIANTS } from "@/wrappers/SectionWrapper";

const Intro = () => (
  <SectionWrapper className="hero" sizeVariant={SECTION_SIZE_VARIANTS.COMPACT}>
    <BasicWrapper>
      <h1>Discover the World of Mushroom Foraging</h1>
    </BasicWrapper>

    <NarrowWrapper>
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
  </SectionWrapper>
);

export default Intro;
