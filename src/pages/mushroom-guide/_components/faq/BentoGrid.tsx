import styled from "@emotion/styled";

import { entries } from "./helpers";
import Card from "@/components/common/Card";
import variables from "@/styles/_exports.module.scss";

const BentoGrid = () => (
  <Container>
    {entries.map((entry, i) => (
      <GridAreaCard
        gridArea={`card-${i}`}
        bgColor="light"
        imageUrl={entry.imageUrl}
        imageAlt={entry.imageAlt}
        title={entry.title}
      >
        <p>{entry.content}</p>
      </GridAreaCard>
    ))}
  </Container>
);

export default BentoGrid;

const GridAreaCard = styled(Card)<{ gridArea: string }>`
  // grid-area: ${({ gridArea }) => gridArea};
`;

const Container = styled.div`
  display: grid;
  --card-title-color: ${variables["text-high-contrast"]};
  --card-title-font-size: ${variables.size32};

  gap: ${variables.size16};
  grid-template-areas:
    "card-0"
    "card-1"
    "card-2"
    "card-3";

  @media (width > ${variables["sm-md"]}) {
    grid-template-areas: "card-0 card-1" "card-2 card-3";
  }

  @media (width > ${variables.lg}) {
    grid-template-areas:
      "card-0 card-1 card-3"
      "card-2 card-2 card-3";
  }

  .card:nth-child(1) {
    grid-area: card-0;
  }

  .card:nth-child(2) {
    grid-area: card-1;

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
    grid-area: card-2;

    @media (width > ${variables.lg}) {
      --card-flex-direction: row;
    }
  }

  .card:nth-child(4) {
    grid-area: card-3;

    .card {
      &__image {
        flex: 2;
      }
    }
  }
`;
