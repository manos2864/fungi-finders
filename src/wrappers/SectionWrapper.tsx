import styled from "@emotion/styled";
import { type ReactNode, forwardRef } from "react";
import variables from "@/styles/_exports.module.scss";

export const SECTION_SIZE_VARIANTS = {
  COMPACT: "compact",
} as const;

type SIZE_VARIANT_ENUMS =
  (typeof SECTION_SIZE_VARIANTS)[keyof typeof SECTION_SIZE_VARIANTS];

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  sizeVariant?: SIZE_VARIANT_ENUMS;
}

const SectionWrapper = forwardRef<HTMLElement, SectionWrapperProps>(
  ({ children, id, sizeVariant, className }, ref) => (
    <Section
      id={id}
      ref={ref}
      data-padding={sizeVariant}
      className={className || ""}
    >
      {children}
    </Section>
  )
);

export default SectionWrapper;

const Section = styled.section`
  padding-block: var(--padding, ${variables.size60});

  @media (width > ${variables.md}) {
    --padding: ${variables.size128};

    &[data-padding="${SECTION_SIZE_VARIANTS.COMPACT}"] {
      --padding: ${variables.size72};
    }
  }
`;
