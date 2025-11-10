import Card from "@/components/Card";
import outDoorExploration from "@/assets/outdoor-exploration.webp";
import botanicalExpertise from "@/assets/botanical-expertise.webp";
import culinaryDelights from "@/assets/culinary-delight.webp";
import { BasicWrapper } from "@/wrappers";

const JoysOfMushroomForaging = () => (
  <section>
    <BasicWrapper>
      <h2>The joys of mushroom foraging</h2>
      <p>
        Foraging for mushrooms can be a rewarding experience for many reasons.
        People may venture off into the woods to forage for mushrooms because it
        allows them to connect with nature, enjoy the thrill of the hunt, and
        savor the satisfaction of finding a hidden culinary treasure.{" "}
      </p>

      <div>
        <Card
          imageUrl={outDoorExploration}
          imageAlt="Tightly grouped brown mushrooms growing up a mossy tree trunk"
        >
          <h3>Outdoor Exploration</h3>
          <p>
            Mushroom foraging takes you off the beaten path and into the heart
            of nature. Learn to read the landscape, identifying prime mushroom
            habitats from lush forest floors to sun-dappled meadows. Every
            expedition is a new adventure, with the potential for exciting
            discoveries around every tree and under every log.
          </p>
        </Card>

        <Card
          imageUrl={botanicalExpertise}
          imageAlt="Wild mushrooms on the table"
        >
          <h3>Botanical Expertise</h3>
          <p>
            Dive into the intricate world of fungal biology. Discover the unique
            structures of mushrooms, from caps to gills to spores. Learn to use
            field guides and identification keys to distinguish between species.
            With practice, you'll start to see the forest in a whole new light,
            recognizing the vital role fungi play in ecosystem health.
          </p>
        </Card>

        <Card
          imageUrl={culinaryDelights}
          imageAlt="A plate of food with mushrooms on top"
        >
          <h3>Culinary Delights</h3>
          <p>
            Transform your foraged finds into delectable dishes. Many edible
            mushrooms offer unique flavors and textures that can elevate your
            cooking. From the earthy porcini to the delicate chanterelle, each
            variety brings its own character to the table. Explore recipes,
            preservation techniques, and the joy of cooking with nature's
            bounty.
          </p>
        </Card>
      </div>
    </BasicWrapper>
  </section>
);

export default JoysOfMushroomForaging;
