import { FaStar } from "react-icons/fa";
import type { IDevStackType } from "../../Type/type";

const TechnologyCard = ({ technologies }) => {
  //   console.log(technology);
  return (
    <div className="grid grid-cols-3">
      {technologies.map((technology: IDevStackType) => {
        return (
          <div className="card bg-base-600 rounded-2xl mx-3 my-2 shadow-sm py-3 pb-6">
            <div className="flex flex-2 gap-4 justify-between px-5 py-5">
              <img className="w-8 h-8" src={technology.icon} alt="icon" />
              <div style={{color: technology.badgeTextColor,
                backgroundColor: technology.badgeBgColor
              }}
              className="rounded-4xl  px-4 py-2">
                <p className="text-xl">
                {technology.badge}
              </p>
              </div>
            </div>
            <div className="px-6">
              <h2 className="text-3xl text-black font-medium ">
                {technology.name}
              </h2>
              <p className="py-2.5 text-[#64748B]">{technology.description}</p>
            </div>
            <div className="flex flex-3 justify-between px-6 py-3 my-3">
              <p className="text-[#64748B] bg-[#F1F5F9] py-1 px-2 rounded">
                {technology.category}
              </p>
              <p className="text-[#64748B]">{technology.difficulty}</p>
              <div className="flex justify-center items-center gap-1">
                <div className=" text-amber-300">
                  <FaStar />
                </div>
                <p>{technology.rating}</p>
              </div>
            </div>
            <div className="card-actions justify-center">
              <button className="btn bg-black text-[#FFFFFF] font-medium px-25">
                Add to Stack
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TechnologyCard;
