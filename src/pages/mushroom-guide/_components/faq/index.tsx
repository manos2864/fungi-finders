import Card from "@/components/common/Card";
import { SectionWrapper, WideWrapper } from "@/wrappers";
import { entries } from "./helpers";
import styled from "@emotion/styled";

const Faq = () => (
  <SectionWrapper className="bg-extra-dark">
    <WideWrapper>
      <h2 className="fs-h-regular">Frequently Asked Questions</h2>

      <Container>
        {entries.map((entry) => (
          <Card
            imageUrl={entry.imageUrl}
            imageAlt={entry.imageAlt}
            title={entry.title}
          >
            <p>{entry.content}</p>
          </Card>
        ))}
      </Container>
    </WideWrapper>
  </SectionWrapper>
);

export default Faq;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  div:nth-child(3) {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  div:nth-child(4) {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 3;
  }
`;
