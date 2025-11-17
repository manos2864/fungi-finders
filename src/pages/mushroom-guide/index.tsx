import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Faq from "./_components/faq";
import GetToKnowYourMushrooms from "./_components/get-to-know-your-mushrooms";
import QuickReference from "./_components/QuickReference";
import WhereToLook from "./_components/WhereToLook";

const MushroomGuide = () => {
  const { hash } = useLocation();
  const faqRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (hash === "#faq" && faqRef.current) {
      faqRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return (
    <>
      <QuickReference />
      <WhereToLook />
      <GetToKnowYourMushrooms />
      <Faq ref={faqRef} />
    </>
  );
};

export default MushroomGuide;
