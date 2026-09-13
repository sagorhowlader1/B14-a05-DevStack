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

    <div className={`bg-white rounded-2xl my-2 shadow-sm pb-6 overflow-hidden transition ${
      isSelected
      ? "border-2 border-[#DC2626]"
      : "border-[#E2E8F0]"
    }`}
    >
      <div className="flex justify-center">

      </div>

      <div className="px-6">
        <button
          onClick={handleClick}
          disabled={isSelected}
          className={`w-full py-3 rounded-lg font-medium flex justify-center items-center
            gap-2 transition ${
              isSelected
              ? "bg-[#FEF2F2] text-[#DC2626] cursor-not-allowed"
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