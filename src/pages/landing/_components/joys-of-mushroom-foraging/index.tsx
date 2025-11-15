import Card from "@/components/common/Card";
import { cardsInfo } from "./helpers";

import { BasicWrapper, SectionWrapper } from "@/wrappers";

const JoysOfMushroomForaging = () => (
  <SectionWrapper>
    <BasicWrapper className="flow">
      <h2 className="fs-h-regular">The joys of mushroom foraging</h2>
      <p>
        Foraging for mushrooms can be a rewarding experience for many reasons.
        People may venture off into the woods to forage for mushrooms because it
        allows them to connect with nature, enjoy the thrill of the hunt, and
        savor the satisfaction of finding a hidden culinary treasure.{" "}
      </p>

      <div className="equal-columns">
        {cardsInfo.map((card) => (
          <Card
            key={card.title}
            bgColor="light"
            title={card.title}
            imageUrl={card.imgUrl}
            imageAlt={card.imageAlt}
          >
            <p>{card.description}</p>
          </Card>
        ))}
      </div>
    </BasicWrapper>
  </SectionWrapper>
);

export default JoysOfMushroomForaging;
