const Cover = ({ img, title, subtitle, description }) => {
  return (
    <div
      className="h-[700px] py-10 bg-cover bg-no-repeat flex justify-center items-center"
      style={{ backgroundImage: `url("${img}")` }}
    >
      <div className="w-8/12  mx-auto bg-black/50 text-white text-center flex items-center justify-center">
        <div className="w-10/12 mx-auto py-16">
          {title && (
            <h3 className="font-Cinzel text-5xl mb-4 font-semibold">{title}</h3>
          )}
          {subtitle && <h4>{subtitle}</h4>}
          <p className="text-sm font-Cinzel text-wrap tracking-wide leading-relaxed opacity-80">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
