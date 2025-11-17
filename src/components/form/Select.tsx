import type { ChangeEvent, FC } from "react";
import styled from "@emotion/styled";
import variables from "@/styles/_exports.module.scss";

interface SelectProps {
  options: { name: string; value: string }[];
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const Select: FC<SelectProps> = ({ options, value, onChange }) => (
  <Container className="border-radius-2" value={value} onChange={onChange}>
    {options.map((option) => (
      <option value={option.value}>{option.name}</option>
    ))}
  </Container>
);

export default Select;

const Container = styled.select`
  padding: ${variables.size8} ${variables.size16};
  background-color: ${variables["bg-accent-main"]};
  border: 0;
  color: ${variables["text-high-contrast"]};
`;
