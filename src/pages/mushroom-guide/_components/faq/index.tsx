import { forwardRef } from "react";
import { SectionWrapper, WideWrapper } from "@/wrappers";
import BentoGrid from "./BentoGrid";

const Faq = forwardRef<HTMLDivElement>((_, ref) => (
  <SectionWrapper ref={ref} id="faq" className="bg-extra-dark">
    <WideWrapper className="flow">
      <h2 className="fs-h-regular">Frequently Asked Questions</h2>

      <BentoGrid />
    </WideWrapper>
  </SectionWrapper>
));

export default Faq;
