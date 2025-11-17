import type { FC } from "react";
import Tag from "@/components/common/Tag";
import styled from "@emotion/styled";
import {
  SEASON_CONSTANTS,
  SEASONS_ENUMS,
  TYPE_CONSTANTS,
  TYPE_ENUMS,
} from "../../helpers";
import variables from "@/styles/_exports.module.scss";

interface TagListProps {
  tags: { season: SEASONS_ENUMS; type: TYPE_ENUMS };
}

const TagList: FC<TagListProps> = ({ tags }) => (
  <ContainerList
    className="tag-list"
    role="list"
    aria-label="Mushroom Characteristics"
  >
    <li data-edible={tags.type}>
      <Tag>
        <span className="sr-only">This mushroom is </span>
        {tags.type}
      </Tag>
    </li>

    <li data-season={tags.season}>
      <Tag>
        <span className="sr-only">
          Best season to harvest this mushroom is{" "}
        </span>
        {tags.season}
      </Tag>
    </li>
  </ContainerList>
);

export default TagList;

const ContainerList = styled.ul`
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
`;
