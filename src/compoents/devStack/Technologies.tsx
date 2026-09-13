import { use, useState } from "react";
import type { IDevStackType } from "../../Type/type";
import TechnologyCard from "./TechnologyCard";
import Sidebar from "./Sidebar";
import { Bounce, toast } from "react-toastify";


interface TechnologiesProps {
    technologiesPromise: Promise<IDevStackType[]>
}

const Technologies = ({technologiesPromise}: TechnologiesProps) =>{
    const technologies = use(technologiesPromise);
   
    const [selectedTechnologies, setSelectedTechnologies] = useState<IDevStackType[]>([]);

    const handleAddToStack = (technology: IDevStackType) => {
        setSelectedTechnologies((previous) => {
            const alreadySeletcted = previous.some(
                (item:IDevStackType) => item.id === technology.id
            );

            if(alreadySeletcted) {
                return previous;
            }

            return [...previous, technology]
        });
    };

    const handleRemoveFromStack = (id: string) => {
        setSelectedTechnologies((previous) =>
            previous.filter((technology) => technology.id !== id)
        );

        toast.info('Technology Removed !', {
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


    const handleRemoveAll = () => {
        setSelectedTechnologies([]);


        toast.info('All Technology Removed!', {
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
    
    return (<div className="container mx-auto">
        <div className="mt-18">
            <h2 className="font-extrabold text-4xl">Explore the <span className="bg-gradient-to-r from-[#EC4899]  to-[#7C3AED] bg-clip-text text-transparent ">Technologies</span></h2>
            <p className="text-[#64748B] pb-7 pt-3">
                Pick one technology per category to build your ideal stack.
            </p>
        </div>

            <div className="flex flex-col lg:flex-row">
            <TechnologyCard 
                technologies={technologies}
                selectedTechnologies={selectedTechnologies}
                handleAddToStack={handleAddToStack}
             />


            <Sidebar 
                selectedTechnologies={selectedTechnologies}
                handleRemoveFromStack={handleRemoveFromStack}
                handleRemoveAll={handleRemoveAll}
            />
            </div>
    </div>
    );
};

export default Technologies; 