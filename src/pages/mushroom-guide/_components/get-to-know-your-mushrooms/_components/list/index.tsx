import { type FC, useEffect, useState, useMemo } from "react";
import styled from "@emotion/styled";

import Card from "@/components/common/Card";
import type { Mushroom, SEASONS_ENUMS, TYPE_ENUMS } from "../../helpers";
import { mushrooms } from "../../helpers";
import variables from "@/styles/_exports.module.scss";
import TagList from "./TagList";
import Placeholder from "./Placeholder";

interface MushroomListProps {
  filters: { season: SEASONS_ENUMS; type: TYPE_ENUMS };
}

const MushroomsList: FC<MushroomListProps> = ({ filters }) => {
  const [visibleMushrooms, setVisibleMushrooms] = useState<
    (Mushroom & { isVisible: boolean })[]
  >([]);
  const isEmpty = visibleMushrooms.every((m) => !m.isVisible);

  const updatedMushrooms = useMemo(
    () =>
      mushrooms.map((mushroom) => {
        const matchesType =
          filters.type === "all" || mushroom.tags.type === filters.type;

        const matchesSeason =
          filters.season === "all" || mushroom.tags.season === filters.season;

        return { ...mushroom, isVisible: matchesType && matchesSeason };
      }),
    [filters]
  );

  useEffect(() => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        setVisibleMushrooms(updatedMushrooms);
      });
    } else {
      // fallback
      setVisibleMushrooms(updatedMushrooms);
    }
  }, [filters, updatedMushrooms]);

  return (
    <CardContainer>
      {isEmpty && <Placeholder />}

      {visibleMushrooms.map((mushroom) => (
        <StyledCard
          bgColor="light"
          key={mushroom.title}
          title={mushroom.title}
          style={{ viewTransitionName: `mushroom-card-${mushroom.title}` }}
          isVisible={mushroom.isVisible}
        >
          <TagList tags={mushroom.tags} />

          <p>{mushroom.content}</p>

          <div className="card__note border-radius-2">
            <p className="fs-sm">
              <strong>Important notes:</strong> {mushroom.notes}
            </p>
          </div>
        </StyledCard>
      ))}
    </CardContainer>
  );
};

export default MushroomsList;

const CardContainer = styled.div`
  --min-col-size: 250px;
  display: grid;
  gap: ${variables.size16};
  grid-template-columns: repeat(
    auto-fill,
    minmax(min(var(--min-col-size), 100%), 1fr)
  );

  .card {
    animation: fade-in both;
    animation-timeline: view();

    &__description {
      flex: 1;
    }

    &__note {
      margin-block-start: auto;
      background-color: ${variables["bg-extra-light"]};
      padding: ${variables.size8};
    }
  }
`;

const StyledCard = styled(Card)<{ isVisible: boolean }>`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  position: ${({ isVisible }) => (isVisible ? "relative" : "absolute")};
  pointer-events: ${({ isVisible }) => (isVisible ? "auto" : "none")};
`;
