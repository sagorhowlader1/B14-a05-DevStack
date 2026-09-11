import { use } from "react";
import type { IDevStack } from "../../Type/type";
import TechnologyCard from "./TechnologyCard";

interface TechnologyProps {
    technologyPromise: Promise<IDevStack[]>
}

const Technology = ({technologyPromise}:TechnologyProps) =>{
    const technology = use(technologyPromise);
    // console.log(technology)
    return (<div className="container mx-auto">
        <div className="mt-[72px]">
            <h2 className="font-extrabold text-4xl">Explore the <span className="bg-gradient-to-r from-[#EC4899]  to-[#7C3AED] bg-clip-text text-transparent ">Technologies</span></h2>
            <p className="text-[#64748B] pb-7 pt-3">Pick one technology per category to build your ideal stack.</p>
        </div>
            <TechnologyCard technology={technology} />
    </div>)
}

export default Technology; 