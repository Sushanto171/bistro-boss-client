import bannerImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../../components/Cover";
import TabSection from "../tabSection/TabSection";
const OurShop = () => {
  return (
    <>
      <Cover
        img={bannerImg}
        title={"Our shop"}
        subtitle={"Would you like to try a dish?"}
      />
      <TabSection />
    </>
  );
};

export default OurShop;
