import Banner from "../banner/Banner";
import BistroBoss from "../bistroBoss/BistroBoss";
import CategorySwiper from "../CategorySwiper/CategorySwiper";
import FromOurMenu from "../FromOurMenu/FromOurMenu";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <CategorySwiper />
      <BistroBoss />
      <FromOurMenu />
    </div>
  );
};

export default Home;
