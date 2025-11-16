import Select from "@/components/form/Select";
import { BasicWrapper, SectionWrapper } from "@/wrappers";
import { mushrooms, SEASON_CONSTANTS, TYPE_CONSTANTS } from "./helpers";
import Card from "@/components/common/Card";
import styled from "@emotion/styled";
import variables from "@/styles/_exports.module.scss";
import Tag from "@/components/common/Tag";

const GetToKnowYourMushrooms = () => (
  <Container>
    <BasicWrapper>
      <h2 className="fs-h-regular">Get to know your mushrooms</h2>

      <Select
        value="all"
        onChange={(e) => null}
        options={[
          { name: "Season: all", value: "all" },
          { name: "Spring", value: "spring" },
          { name: "Summer", value: "summer" },
          { name: "Fall", value: "fall" },
        ]}
      />

      <Select
        value="all"
        onChange={(e) => null}
        options={[
          { name: "Type: all", value: "all" },
          { name: "Edible", value: "edible" },
          { name: "Toxic", value: "toxic" },
        ]}
      />

      <CardContainer>
        {mushrooms.map((mushroom) => (
          <Card bgColor="light" key={mushroom.title} title={mushroom.title}>
            <ul
              className="tag-list"
              role="list"
              aria-label="Mushroom Characteristics"
            >
              <li data-edible={mushroom.tags[0]}>
                <Tag>
                  <span className="sr-only">This mushroom is </span>
                  {mushroom.tags[0]}
                </Tag>
              </li>

              <li data-season={mushroom.tags[1]}>
                <Tag>
                  <span className="sr-only">
                    Best season to harvest this mushroom is{" "}
                  </span>
                  {mushroom.tags[1]}
                </Tag>
              </li>
            </ul>

            <p>{mushroom.content}</p>

            <div className="card__note border-radius-2">
              <p>
                <strong>Important notes:</strong> {mushroom.notes}
              </p>
            </div>
          </Card>
        ))}
      </CardContainer>
    </BasicWrapper>
  </Container>
);

export default GetToKnowYourMushrooms;

const Container = styled(SectionWrapper)`
  --card-title-font-size: ${variables.size20};
  --card-title-color: ${variables["text-hight-contrast"]};
  --card-gap: ${variables.size12};
`;

const CardContainer = styled.div`
  --min-col-size: 250px;
  display: grid;
  gap: ${variables.size16};
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(var(--min-col-size), 100%), 1fr)
  );

  .card {
    &__note {
      margin-block-start: auto;
      background-color: ${variables["bg-extra-light"]};
      padding: ${variables.size8};
    }
  }

  .tag-list {
    display: flex;
    gap: ${variables.size8};
    flex-wrap: wrap;

    [data-edible="${TYPE_CONSTANTS.EDIBLE}"] {
      --tag-bg: ${variables["bg-accent-main"]};
    }

    [data-edible="${TYPE_CONSTANTS.TOXIC}"] {
      --tag-bg: ${variables["bg-red"]};
    }

    [data-season="${SEASON_CONSTANTS.SUMMER}"] {
      --tag-bg: ${variables["bg-accent-main"]};
    }

    [data-season="${SEASON_CONSTANTS.SPRING}"] {
      --tag-bg: ${variables["bg-teal"]};
    }

    [data-season="${SEASON_CONSTANTS.FALL}"] {
      --tag-bg: ${variables["bg-orange"]};
    }
  }
`;
