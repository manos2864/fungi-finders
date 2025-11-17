import Select from "@/components/form/Select";

const Filters = () => (
  <div className="flex-group">
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
  </div>
);

export default Filters;
