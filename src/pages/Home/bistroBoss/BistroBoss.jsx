import bannerImg from "../../../assets/home/chef-service.jpg";
const BistroBoss = () => {
  return (
    <div
      className=" py-10 my-10 bg-cover bg-no-repeat flex justify-center items-center"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="w-8/12  mx-auto bg-white/90  text-center flex items-center justify-center">
        <div className="w-10/12 mx-auto py-8">
          <h3 className="font-Cinzel text-2xl mb-4">Bistro Boss</h3>
          <p className="text-sm text-wrap tracking-wide leading-relaxed opacity-80">
            Quickly supply ethical interfaces vis-a-vis leading-edge expertise.
            Seamlessly reinvent market positioning sources without
            functionalized intellectual capital. Compellingly productize
            intuitive paradigms without corporate methodologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BistroBoss;
