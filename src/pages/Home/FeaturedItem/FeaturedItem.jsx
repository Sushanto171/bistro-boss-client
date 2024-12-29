import React from "react";
import img from "../../../assets/home/featured.jpg";
import SectionTitle from "../../../components/SectionTitle";

const FeaturedItem = () => {
  return (
    <section
      className="bg-cover  bg-fixed bg-no-repeat "
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="w-full h-full bg-black/50 py-10">
        <SectionTitle
          title={"Our Featured menu"}
          featured={true}
          subTitle="Check it out"
        />
        <div className="w-8/12 mx-auto space-y-5 sm:grid sm:space-y-0 grid-cols-2 gap-8 mt-10 text-white">
          <img src={img} alt="" />
          <div>
            <p>March 20, 2025</p>
            <p className="uppercase">Where can I get some?</p>
            <p className="text-sm leading-relaxed mt-4 opacity-90">
              Competently disseminate worldwide communities through emerging
              architectures. Rapidiously leverage other's just in time content.
            </p>
            <div className="text-center mt-6">
              <button className="uppercase btn btn-outline border-b-4 border-white border-0 hover:bg-white hover:border-white text-white hover:text-black">
                read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItem;
