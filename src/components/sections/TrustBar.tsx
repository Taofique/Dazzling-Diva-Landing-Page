import sectionDividerImage from "../../assets/images/trustBar/Section_Divider.png";

const TrustBar = () => {
  return (
    <section
      className="h-24 w-full bg-cover bg-center bg-no-repeat sm:h-32 md:h-36 lg:h-[188px]"
      style={{
        backgroundImage: `url(${sectionDividerImage})`,
      }}
    />
  );
};

export default TrustBar;
