import { use } from "react";
import type { IDevStackType } from "../../Type/type";
import TechnologyCard from "./TechnologyCard";
import Sidebar from "./Sidebar";

interface TechnologiesProps {
    technologiesPromise: Promise<IDevStackType[]>
}

const Technology = ({technologiesPromise}:TechnologiesProps) =>{
    const technologies = use(technologiesPromise);
    // console.log(technology)
    return (<div className="container mx-auto">
        <div className="mt-[72px]">
            <h2 className="font-extrabold text-4xl">Explore the <span className="bg-gradient-to-r from-[#EC4899]  to-[#7C3AED] bg-clip-text text-transparent ">Technologies</span></h2>
            <p className="text-[#64748B] pb-7 pt-3">Pick one technology per category to build your ideal stack.</p>
        </div>

            <div className="flex">
            <TechnologyCard technologies={technologies} />
                <Sidebar />
            </div>
    </div>)
}

export default Technology; 