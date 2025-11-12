import styled from "@emotion/styled";
import { FC, ReactNode } from "react";
import variables from "@/styles/_exports.module.scss";

export const SECTION_SIZE_VARIANTS = {
  COMPACT: "compact",
} as const;

type SIZE_VARIANT_ENUMS =
  (typeof SECTION_SIZE_VARIANTS)[keyof typeof SECTION_SIZE_VARIANTS];

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  sizeVariant?: SIZE_VARIANT_ENUMS;
}

const SectionWrapper: FC<SectionWrapperProps> = ({
  children,
  sizeVariant,
  className,
}) => (
  <Section data-padding={sizeVariant} className={className || ""}>
    {children}
  </Section>
);

export default SectionWrapper;

const Section = styled.section`
  --padding: ${variables.size60};

  padding-block: var(--padding);

  @media (width > ${variables.md}) {
    --padding: ${variables.size128};

    &[data-padding="${SECTION_SIZE_VARIANTS.COMPACT}"] {
      --padding: ${variables.size72};
    }
  }
`;
