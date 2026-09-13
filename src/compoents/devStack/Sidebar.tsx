import type { IDevStackType } from "../../Type/type";
import SelectedTechnologies from "./SelectedTechnologies";

interface SidebarProps {
  selectedTechnologies: IDevStackType[];
  handleRemoveFromStack: (id: string) => void;
  handleRemoveAll: () => void;
}

const Sidebar = ({
  selectedTechnologies,
  handleRemoveFromStack,
  handleRemoveAll,
}: SidebarProps) => {
  return (
    <aside className="w-full lg:w-95 lg:ml-6">
      <div
        className="card bg-base-600 rounded-2xl sticky top-6
                 border-[#E2E8F0] my-2 lg:my-6  mx-4 px-2 shadow-sm py-6"
      >
        <div>
          <h2 className="text-2xl text-[#0F172A] font-bold">Your Stack</h2>

          <div className="">
            <span className="text-[14px] flex text-[#0F172A] py-1 rounded-xl font-normal">
              {selectedTechnologies.length}

              <p className="text-[#94A3B8] mx-1">
                {selectedTechnologies.length === 0
                  ? "No Technology Selected."
                  : "Technology Selected"}
              </p>
            </span>
          </div>
        </div>

        <SelectedTechnologies
          selectedTechnologies={selectedTechnologies}
          handleRemoveFromStack={handleRemoveFromStack}
          handleRemoveAll={handleRemoveAll}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
