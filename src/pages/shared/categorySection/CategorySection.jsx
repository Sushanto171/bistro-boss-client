import Cover from "../../../components/Cover";
import MenuCard from "../../../components/MenuCard";

const CategorySection = ({ category, title, description, img }) => {
  return (
    <section className="my-8">
      <Cover title={title} description={description} img={img} />
      <div className="space-y-8 md:space-y-0 md:grid grid-cols-2 gap-8 my-10">
        {category.map((item) => (
          <MenuCard key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-outline border-0 border-b-4 uppercase">
          Order your favorite food
        </button>
      </div>
    </section>
  );
};

export default CategorySection;
