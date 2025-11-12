import { NarrowWrapper, SectionWrapper } from "@/wrappers";
import { SECTION_SIZE_VARIANTS } from "@/wrappers/SectionWrapper";

const StartYourForagingAdventure = () => (
  <SectionWrapper
    className="bg-accent-dark text-center"
    sizeVariant={SECTION_SIZE_VARIANTS.COMPACT}
  >
    <NarrowWrapper className="flow fs-lg text-high-contrast">
      <h2 className="fs-h-regular">
        Start your <span className="text-brand">Foraging Adventure!</span>
      </h2>

      <p>
        Whether you're seeking a deeper connection with nature, a new outdoor
        hobby, or simply love the idea of finding your own food, mushroom
        foraging offers a uniquely rewarding experience.
      </p>
    </NarrowWrapper>
  </SectionWrapper>
);

export default StartYourForagingAdventure;
