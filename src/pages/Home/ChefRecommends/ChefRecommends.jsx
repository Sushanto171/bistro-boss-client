import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import RecommendCard from "./RecommendCard";

const ChefRecommends = () => {
  return (
    <section className="my-8">
      <SectionTitle title="Chef recommends" subTitle={"Should Try"} />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 mt-8 gap-8">
        <RecommendCard />
        <RecommendCard />
        <RecommendCard />
      </div>
    </section>
  );
};

export default ChefRecommends;
