const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="text-center w-8/12 md:w-4/12 mx-auto">
      <p className="text-sm md:text-base text-yellow-400 italic">
        ---{subTitle}---
      </p>
      <h2 className="border-y-2 my-4 py-2 text-2xl md:text-3xl font-semibold uppercase">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
