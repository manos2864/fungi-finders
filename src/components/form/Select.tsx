import type { ChangeEvent, FC } from "react";

interface SelectProps {
  options: { name: string; value: string }[];
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const Select: FC<SelectProps> = ({ options, value, onChange }) => (
  <select value={value} onChange={onChange}>
    {options.map((option) => (
      <option value={option.value}>{option.name}</option>
    ))}
  </select>
);

export default Select;
