import type { IDevStackType } from "../../Type/type";
import DevCard from "./DevCard";

interface ITechnologyProps {
  technologies: IDevStackType[];
}



const TechnologyCard = ({ technologies }: ITechnologyProps) => {
    // console.log(technologies);
  return (
    <div className="grid grid-cols-3">
      {technologies.map((technology: IDevStackType, index: number) => {
        return (
          <DevCard key={index} technology={technology}/>
        );
      })}
    </div>
  );
};

export default TechnologyCard;
