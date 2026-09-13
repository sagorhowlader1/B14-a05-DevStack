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

    toast.success(`${technology.name} is Added Successfully.`, {
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
    <div
      className={`bg-white rounded-2xl my-2 shadow-sm pb-6 overflow-hidden transition ${
        isSelected ? "border-2 border-[#c9569d]" : "border-[#E2E8F0]"
      }`}
    >
      <div className="flex justify-between items-center px-5 py-5">
        <img
          className="w-8 h-8 object-contain"
          src={technology.icon}
          alt={technology.name}
        />
      
        <div
          style={{
            color: technology.badgeTextColor,
            background: technology.badgeBgColor,
          }}
          className="rounded-full px-4 py-2"
        >
          <p className="text-sm font-medium">{technology.badge}</p>
        </div>
      
      </div>

      <div className="px-6">
        <h2 className="text-2xl text-black font-bold">{technology.name}</h2>
        <p className="py-2.5  text-[#64748B]">{technology.description}</p>
      </div>

      <div className="flex justify-between items-center px-6 py-3 my-3">
        <p className="text-[#64748B]">{technology.category}</p>

        <div className="flex justify-between items-center gap-1">
          <div className="text-amber-300">
            <FaStar />
          </div>
          <p>{technology.rating}</p>
        </div>
      </div>
      <div className="px-6">
        <button
          onClick={handleClick}
          disabled={isSelected}
          className={`w-full py-3 rounded-lg font-medium flex justify-center items-center
            gap-2 transition ${
              isSelected
                ? "bg-[#FEF2F2] text-[#cf0c85] cursor-not-allowed"
                : "bg-black text-white cursor-pointer"
            }`}
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
