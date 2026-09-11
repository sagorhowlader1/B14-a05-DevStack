import BannerLogo from "../../assets/banner-stack.png";

const Banner = () => {
  return (
   <div className="container mx-auto">
     <div className="flex justify-between items-center text-left">
      <div>
        <h2 className="font-extrabold text-black text-6xl mb-8">
          Build Your Ideal <br />
          <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent ">Development Stack</span>
        </h2>
        <p className="text-[#475569] font-medium mb-12">
          Explore frontend, backend, database, and tooling options, <br /> compare them
          side by side, and put together the stack that fits your <br /> next project.
        </p>

        <button className="btn rounded-xl mr-4 border-none text-white bg-[#D91B7E]">
          Explore Technologies
        </button>
        <button className="btn rounded-xl px-10 border-none">Learn More</button>
      </div>

       <div>
        <img src={BannerLogo} alt="" />
      </div>
    </div>
    <div>
    </div>
   </div>
  );
};

export default Banner;
