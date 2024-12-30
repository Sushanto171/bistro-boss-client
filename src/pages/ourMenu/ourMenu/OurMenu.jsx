import menuImage from "../../../assets/menu/banner3.jpg";
import Cover from "../../../components/Cover";
import useHelmet from "../../../hooks/useHelmet";
const OurMenu = () => {
  return (
    <div>
      {useHelmet("Our-Menu")}
      <Cover
        title="our menu"
        description="Would You like to try a dish"
        img={menuImage}
      />
    </div>
  );
};

export default OurMenu;
