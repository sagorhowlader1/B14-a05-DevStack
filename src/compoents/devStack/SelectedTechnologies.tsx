import { AiOutlineClose } from "react-icons/ai";
import type { IDevStackType } from "../../Type/type";



interface SelectedTechnologiesProps {
    selectedTechnologies: IDevStackType[];
    handleRemoveFromStack: (id: string) => void;
    handleRemoveAll: () => void;
}



const SelectedTechnologies = ({
    selectedTechnologies,
    handleRemoveFromStack,
    handleRemoveAll,
}: SelectedTechnologiesProps) => {
    if(selectedTechnologies.length === 0) {
        return (
            <div className="mt-5 border border-dashed border-[#CBD5E1] rounded-xl
               py-10 text-center ">
                <p className="text-[#94A3B8]">Your stack is empty.</p>
            </div>
        );
    }

    
    return (
        <div className="mt-5 space-y-3">
            {selectedTechnologies.map((technology) => (
                <div
                key={technology.id}
                className="border border-[#E2E8F0] rounded-xl p-4">
                    <div className="flex items-center gap-2">
                        <div className="w-11 h-11 rounded-lg bg-[#F8FAFC] flex items-center justify-center">
                            <img src={technology.icon} alt={technology.name}
                            className="w-7 h-7 object-contain " 
                            />
                        </div>

                        <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-[#0F172A] truncate">
                                {technology.name}
                            </h3>

                            <p className="text-sm text-[#94A3B8]">
                                {technology.category}
                            </p>
                        </div>

                        <div className="flex items-center gap-1 text-sm">
                            <button
                            onClick={() => handleRemoveFromStack(technology.id)}
                            className="cursor-pointer"
                            >
                                <AiOutlineClose className="text-[#94A3B8] text-2xl hover:text-red-100 transition" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}


            <button
                onClick={handleRemoveAll}
                className="w-full mt-4 py-3 rounded-lg font-bold bg-[#ffffff41]
                border border-[#ED8C85] text-[#D82C20] hover:bg-[#FEE2E2] transition cursor-pointer"
            >
                Remove All
            </button>

        </div>
    );
};

export default SelectedTechnologies;