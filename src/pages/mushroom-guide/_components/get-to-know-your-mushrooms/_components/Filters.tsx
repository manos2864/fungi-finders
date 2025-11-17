import type { Dispatch, FC, SetStateAction } from "react";
import Select from "@/components/form/Select";
import type { SEASONS_ENUMS, TYPE_ENUMS } from "../helpers";
import { SEASON_CONSTANTS, TYPE_CONSTANTS } from "../helpers";

interface FiltersProps {
  filters: { season: SEASONS_ENUMS; type: TYPE_ENUMS };
  setFilters: Dispatch<
    SetStateAction<{
      season: SEASONS_ENUMS;
      type: TYPE_ENUMS;
    }>
  >;
}

const Filters: FC<FiltersProps> = ({ filters, setFilters }) => (
  <div className="flex-group">
    <Select
      value={filters.season}
      onChange={(e) =>
        setFilters((prev) => ({
          ...prev,
          season: e.target.value as SEASONS_ENUMS,
        }))
      }
      options={[
        { name: "Season: all", value: SEASON_CONSTANTS.ALL },
        { name: "Spring", value: SEASON_CONSTANTS.SPRING },
        { name: "Summer", value: SEASON_CONSTANTS.SUMMER },
        { name: "Fall", value: SEASON_CONSTANTS.FALL },
      ]}
    />

    <Select
      value={filters.type}
      onChange={(e) =>
        setFilters((prev) => ({
          ...prev,
          type: e.target.value as TYPE_ENUMS,
        }))
      }
      options={[
        { name: "Type: all", value: TYPE_CONSTANTS.ALL },
        { name: "Edible", value: TYPE_CONSTANTS.EDIBLE },
        { name: "Toxic", value: TYPE_CONSTANTS.TOXIC },
      ]}
    />
  </div>
);

export default Filters;
