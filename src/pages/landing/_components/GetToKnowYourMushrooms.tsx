import NavButton from "@/components/NavButton";
import getToKnowYourMushrooms from "@/assets/get-to-know.webp";

const GetToKnowYourMushrooms = () => (
  <section>
    <div>
      <div>
        <img
          src={getToKnowYourMushrooms}
          alt="A man on his hands and knees harvesting a wild mushroom in the forest"
        />
      </div>

      <div>
        <h2>Get to know your mushrooms</h2>

        <p>
          Successful and safe mushroom foraging begins with a deep understanding
          of the species you'll encounter in the wild - not just what the edible
          ones look like, but their toxic look-alikes, seasonal patterns, and
          preferred habitats.
        </p>

        <p>
          It can feel like a big task, but we’ve got a handy reference guide to
          help you out!
        </p>

        <NavButton to="">
          <span className="sr-only">
            Learn more about with mushrooms using our{" "}
          </span>
          Reference Guide
        </NavButton>
      </div>
    </div>
  </section>
);

export default GetToKnowYourMushrooms;
