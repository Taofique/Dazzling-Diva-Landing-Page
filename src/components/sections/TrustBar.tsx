import sectionDividerImage from "../../assets/images/trustBar/Section_Divider.png";

const TrustBar = () => {
  return (
    <section
      className="aspect-[1440/188] w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${sectionDividerImage})`,
      }}
    />
  );
};

export default TrustBar;
