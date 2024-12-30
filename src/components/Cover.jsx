import { Parallax } from "react-parallax";
const Cover = ({ img, title, subtitle, description }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className="h-[600px] bg-cover bg-no-repeat flex justify-center items-center">
        <div className="w-8/12  mx-auto bg-black/50 text-white text-center flex items-center justify-center">
          <div className="w-10/12 mx-auto py-16">
            {title && (
              <h3 className="font-Cinzel text-5xl mb-4 font-semibold">
                {title}
              </h3>
            )}
            {subtitle && <h4>{subtitle}</h4>}
            <p className="text-sm font-Cinzel text-wrap tracking-wide leading-relaxed opacity-80">
              {description}
            </p>
          </div>
        </div>
      </div>{" "}
    </Parallax>
  );
};

export default Cover;
