import Banner from "../banner/Banner";
import BistroBoss from "../bistroBoss/BistroBoss";
import CategorySwiper from "../CategorySwiper/CategorySwiper";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import ClientsSays from "../ClientsSay/ClientsSays";
import FeaturedItem from "../FeaturedItem/FeaturedItem";
import FromOurMenu from "../FromOurMenu/FromOurMenu";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <CategorySwiper />
      <BistroBoss />
      <FromOurMenu />
      <ChefRecommends />
      <FeaturedItem />
      <ClientsSays />
    </div>
  );
};

export default Home;
