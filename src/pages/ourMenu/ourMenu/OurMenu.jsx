import menuImage from "../../../assets/menu/banner3.jpg";
import dessertImage from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImage from "../../../assets/menu/pizza-bg.jpg";
import saladImage from "../../../assets/menu/salad-bg.jpg";
import soupImage from "../../../assets/menu/soup-bg.jpg";
import Cover from "../../../components/Cover";
import MenuCard from "../../../components/MenuCard";
import SectionTitle from "../../../components/SectionTitle";
import useHelmet from "../../../hooks/useHelmet";
import useMenu from "../../../hooks/useMenu";
import CategorySection from "../../shared/categorySection/CategorySection";
const OurMenu = () => {
  const [menu] = useMenu();
  const offeredMenu = menu.filter((item) => item.category === "offered");
  const saladMenu = menu.filter((item) => item.category === "salad");
  const pizzaMenu = menu.filter((item) => item.category === "pizza");
  const soupMenu = menu.filter((item) => item.category === "soup");
  const dessertMenu = menu.filter((item) => item.category === "dessert");

  return (
    <div className="space-y-16">
      {useHelmet("Our-Menu")}
      {/* offer section */}
      <section className="space-y-8">
        <Cover
          title="our menu"
          description="Would You like to try a dish"
          img={menuImage}
        />
        <SectionTitle title="TOday's offer" subTitle="Don't miss" />
        <div className="space-y-8 md:space-y-0 md:grid grid-cols-2 gap-8 my-10">
          {offeredMenu.map((item) => (
            <MenuCard key={item._id} item={item} />
          ))}
        </div>
      </section>
      {/* dessert section */}
      <section>
        <CategorySection
          title="Desserts"
          description="Assertively disseminate parallel human capital and functional portals. Collaboratively seize pandemic users."
          category={dessertMenu}
          img={dessertImage}
        />
      </section>
      {/* pizza section */}
      <section>
        <CategorySection
          title="Pizza"
          description="Assertively disseminate parallel human capital and functional portals. Collaboratively seize pandemic users."
          category={pizzaMenu}
          img={pizzaImage}
        />
      </section>
      {/* salad section */}
      <section>
        <CategorySection
          title="Salad"
          description="Assertively disseminate parallel human capital and functional portals. Collaboratively seize pandemic users."
          category={saladMenu}
          img={saladImage}
        />
      </section>
      {/* soup section */}
      <section>
        <CategorySection
          title="Soup"
          description="Assertively disseminate parallel human capital and functional portals. Collaboratively seize pandemic users."
          category={soupMenu}
          img={soupImage}
        />
      </section>
    </div>
  );
};

export default OurMenu;
