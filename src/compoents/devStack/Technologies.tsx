import { use, useState } from "react";
import type { IDevStackType } from "../../Type/type";
import TechnologyCard from "./TechnologyCard";
import Sidebar from "./Sidebar";

interface TechnologiesProps {
    technologiesPromise: Promise<IDevStackType[]>
}

const Technologies = ({technologiesPromise}:TechnologiesProps) =>{
    const technologies = use(technologiesPromise);
    // console.log(technologies)
   
    const [addToStackType, setAddToStackType] = useState("addToStack") // addToStack or addedToStack
    console.log(addToStackType, "add to stack");

    return (<div className="container mx-auto">
        <div className="mt-18">
            <h2 className="font-extrabold text-4xl">Explore the <span className="bg-gradient-to-r from-[#EC4899]  to-[#7C3AED] bg-clip-text text-transparent ">Technologies</span></h2>
            <p className="text-[#64748B] pb-7 pt-3">Pick one technology per category to build your ideal stack.</p>
        </div>

            <div className="flex">
            <TechnologyCard technologies={technologies} />
                <Sidebar technologies={technologies}/>
            </div>
    </div>)
}

export default Technologies; 