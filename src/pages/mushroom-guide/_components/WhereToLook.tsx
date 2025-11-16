import { BasicWrapper, SectionWrapper } from "@/wrappers";
import whereToLook from "@/assets/where-to-look.webp";

const WhereToLook = () => (
  <SectionWrapper className="bg-accent-dark">
    <BasicWrapper>
      <div className="equal-columns" data-gap="large" data-alignment="centered">
        <div>
          <img
            src={whereToLook}
            alt="A white mushroom with a large cap growing on the forest ground"
          />
        </div>

        <div className="flow fs-lg text-high-contrast">
          <h2 className="fs-h-regular">Where to Look</h2>

          <p>Different species grow in different types of environments.</p>

          <p>
            Forests are always a good starting place, though, with a wide range
            of species that grow in them.
          </p>

          <p>
            If you’re after something specific, you can use our reference guide
            below to help you out.
          </p>
        </div>
      </div>
    </BasicWrapper>
  </SectionWrapper>
);

export default WhereToLook;
