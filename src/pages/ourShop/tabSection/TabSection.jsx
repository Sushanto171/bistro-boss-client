import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "./../../../hooks/useMenu";
import TabCard from "./TabCard";
const TabSection = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const categories = ["salad", "pizza", "soups", "desserts", "drinks"];
  const [menu] = useMenu();
  const saladMenu = menu.filter((item) => item.category === "salad");
  const pizzaMenu = menu.filter((item) => item.category === "pizza");
  const soupMenu = menu.filter((item) => item.category === "soup");
  const drinksMenu = menu.filter((item) => item.category === "drinks");
  const dessertMenu = menu.filter((item) => item.category === "dessert");
  const categoriesMenu = [
    saladMenu,
    pizzaMenu,
    soupMenu,
    dessertMenu,
    drinksMenu,
  ];
  return (
    <div className="my-8">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <div className="max-w-fit mx-auto uppercase whitespace-nowrap overflow-x-auto md:overflow-hidden">
          <TabList>
            {categories.map((category, i) => (
              <Tab key={i}>
                <span
                  className={`${
                    tabIndex === i ? "text-yellow-600" : ""
                  } font-semibold`}
                >
                  {category}
                </span>
              </Tab>
            ))}
          </TabList>
        </div>

        {categoriesMenu.map((category, i) => (
          <TabPanel key={i}>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 my-16">
              {category.map((item) => (
                <TabCard key={item._id} item={item} />
              ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default TabSection;
