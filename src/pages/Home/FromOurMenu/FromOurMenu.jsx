import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../hooks/useMenu";

const FromOurMenu = () => {
  const [menu] = useMenu();
  const popularData = menu.filter((item) => item.category === "popular");

  return (
    <section className="mb-8">
      <SectionTitle subTitle="Check it out" title=" our popular menu" />
      <div className="space-y-8 md:space-y-0 md:grid grid-cols-2 gap-8 my-10">
        {popularData.map((menu) => (
          <div key={menu._id} className="flex justify-between gap-2">
            <div>
              <img
                className="w-32 h-28 border"
                style={{ borderRadius: "0 200px 200px" }}
                src={menu?.image}
                alt=""
              />
            </div>
            <div className="flex-1 opacity-80">
              <p>{menu?.name}----------------</p>
              <p className="text-sm tracking-wider mt-2">{menu?.recipe}</p>
            </div>
            <p className="text-yellow-400">${menu?.price}</p>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-outline border-0 border-b-4 uppercase">
          View full menu
        </button>
      </div>
      <div className="h-36 bg-black my-8 flex justify-center items-center">
        <p className="text-white text-2xl font-Cinzel cursor-pointer">
          Call us: +88 1234568789
        </p>
      </div>
    </section>
  );
};

export default FromOurMenu;
