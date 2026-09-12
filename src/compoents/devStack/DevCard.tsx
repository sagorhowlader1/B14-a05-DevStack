import { FaStar } from "react-icons/fa";
import type { IDevStackType } from "../../Type/type";
import { GrCheckmark } from "react-icons/gr";
import { Bounce, toast } from "react-toastify";

interface DevCardProps {
  technology: IDevStackType;
  isSelected: boolean;
  handleAddToStack: (technology: IDevStackType) => void;
}

const DevCard = ({
  technology,
  isSelected,
  handleAddToStack,
}: DevCardProps) => {
  
  const handleClick = () => {
    if (isSelected) {
      return;
    }

    handleAddToStack(technology);

    toast.success(`${technology.name} is Added Successfully`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div className="card bg-base-600 rounded-2xl my-2 mx-3 shadow-sm pb-6">
      <div className="flex gap-4 justify-between px-5 py-5">
        <img
          className="w-8 h-8"
          src={technology.icon}
          alt="icon"
        />

        <div
          style={{
            color: technology.badgeTextColor,
            backgroundColor: technology.badgeBgColor,
          }}
          className="rounded-4xl px-4 py-2"
        >
          <p className="text-xl">{technology.badge}</p>
        </div>
      </div>

      <div className="px-6">
        <h2 className="text-3xl text-black font-medium">
          {technology.name}
        </h2>

        <p className="py-2.5 text-[#64748B]">
          {technology.description}
        </p>
      </div>

      <div className="flex justify-between px-6 py-3 my-3">
        <p className="text-[#64748B] bg-[#F1F5F9] py-1 px-2 rounded">
          {technology.category}
        </p>

        <p className="text-[#64748B]">
          {technology.difficulty}
        </p>

        <div className="flex justify-center items-center gap-1">
          <div className="text-amber-300">
            <FaStar />
          </div>

          <p>{technology.rating}</p>
        </div>
      </div>

      <div className="card-actions justify-center items-center">
        <button
          onClick={handleClick}
          disabled={isSelected}
          className="btn px-23 mx-40 py-2 cursor-pointer bg-black text-white font-medium disabled:cursor-not-allowed"
        >
          {isSelected ? (
            <>
              <GrCheckmark />
              Added to Stack
            </>
          ) : (
            "Add to Stack"
          )}
        </button>
      </div>
    </div>
  );
};

export default DevCard;