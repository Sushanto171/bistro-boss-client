import Banner from "../banner/Banner";
import BistroBoss from "../bistroBoss/BistroBoss";
import CategorySwiper from "../CategorySwiper/CategorySwiper";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import FromOurMenu from "../FromOurMenu/FromOurMenu";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <CategorySwiper />
      <BistroBoss />
      <FromOurMenu />
      <ChefRecommends />
    </div>
  );
};

export default Home;
