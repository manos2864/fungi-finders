import styled from "@emotion/styled";

import { entries } from "./helpers";
import Card from "@/components/common/Card";
import variables from "@/styles/_exports.module.scss";

const BentoGrid = () => (
  <Container>
    {entries.map((entry, i) => (
      <Card
        bgColor="light"
        imageUrl={entry.imageUrl}
        imageAlt={entry.imageAlt}
        title={entry.title}
      >
        <p>{entry.content}</p>
      </Card>
    ))}
  </Container>
);

export default BentoGrid;

const Container = styled.div`
  display: grid;
  --card-title-color: ${variables["text-high-contrast"]};

  --card-title-font-size: ${variables.size32};

  gap: ${variables.size16};
  grid-template-areas:
    "card-one"
    "card-two"
    "card-three"
    "card-four";

  @media (prefers-color-scheme: light) {
    --card-title-color: ${variables["text-dark-contrast"]};
  }

  @media (width > ${variables["sm-md"]}) {
    grid-template-areas: "card-one card-two" "card-three card-four";
  }

  @media (width > ${variables.lg}) {
    grid-template-areas:
      "card-one card-two card-four"
      "card-three card-three card-four";
  }

  .card {
    animation: fade-in both;
    animation-timeline: view();
  }

  .card:nth-child(1) {
    grid-area: card-one;
  }

  .card:nth-child(2) {
    grid-area: card-two;

    @media (width > ${variables.lg}) {
      --card-flex-direction: column-reverse;

      .card {
        &__description {
          flex: 1;
        }
      }
    }
  }

  .card:nth-child(3) {
    grid-area: card-three;

    @media (width > ${variables.lg}) {
      --card-flex-direction: row;
    }
  }

  .card:nth-child(4) {
    grid-area: card-four;

    .card {
      &__image {
        flex: 2;
      }
    }
  }
`;
