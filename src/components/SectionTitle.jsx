const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="text-center w-4/12 mx-auto">
      <p className="text-yellow-400 italic">---{subTitle}---</p>
      <h2 className="border-y-2 my-4 py-2 text-3xl font-semibold uppercase">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
