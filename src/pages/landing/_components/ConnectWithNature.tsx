import NavButton from "@/components/NavButton";
import connectWithNature from "@/assets/nature.webp";
import { WideWrapper, SectionWrapper } from "@/wrappers";

const ConnectWithNature = () => (
  <SectionWrapper>
    <WideWrapper>
      <div>
        <div>
          <h2 className="fs-h-regular">Connect with Nature</h2>

          <p>
            Experience the beauty of the great outdoors while foraging for
            mushrooms with fellow enthusiasts.
          </p>

          <NavButton to="">
            Learn More
            <span className="sr-only">
              {" "}
              about the different types of mushrooms using our handy mushroom
              guide
            </span>
          </NavButton>
        </div>

        <div>
          <img
            src={connectWithNature}
            alt="A small white mushroom growing on a mossy forest floor"
          />
        </div>
      </div>
    </WideWrapper>
  </SectionWrapper>
);

export default ConnectWithNature;
