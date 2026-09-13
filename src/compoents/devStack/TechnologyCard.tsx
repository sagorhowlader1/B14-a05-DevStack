import type { IDevStackType } from "../../Type/type";
import DevCard from "./DevCard";

interface ITechnologyProps {
  technologies: IDevStackType[];
  selectedTechnologies: IDevStackType[];
  handleAddToStack: (technology: IDevStackType) => void;
}



const TechnologyCard = ({ 
  technologies,
  selectedTechnologies,
  handleAddToStack,
 }: ITechnologyProps) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 flex-1">
      {technologies.map((technology) => {
        const isSelected = selectedTechnologies.some(
          (selected) => selected.id === technology.id
        )
        return (
          <DevCard 
          key={technology.id} 
          technology={technology}
          isSelected={isSelected}
          handleAddToStack={handleAddToStack}
          />
        );
      })}
    </div>
  );
};

export default TechnologyCard;
