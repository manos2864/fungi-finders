import Faq from "./_components/faq";
import GetToKnowYourMushrooms from "./_components/get-to-know-your-mushrooms";
import QuickReference from "./_components/QuickReference";
import WhereToLook from "./_components/WhereToLook";

const MushroomGuide = () => {
  return (
    <>
      <QuickReference />
      <WhereToLook />
      <GetToKnowYourMushrooms />
      <Faq />
    </>
  );
};

export default MushroomGuide;
