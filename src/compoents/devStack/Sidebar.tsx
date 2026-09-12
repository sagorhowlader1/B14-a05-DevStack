
const Sidebar = ({technologies}) =>{
    console.log(technologies, 'technologies')
    return(
        <aside className="w-5xl">
            <div className="card bg-base-600 rounded-2xl my-6  mx-8 shadow-sm py-3 pb-6">
                <div className="px-6">
                        <h2 className="text-2xl text-[#0F172A] font-bold ">Your Stack</h2>
                    <p className="pb-3 pt-2 text-[#94A3B8]">No technologies selected yet.</p>
                </div>
                <div className="mx-8 font-normal border-[#E2E8F0] py-7 rounded-2xl border text-center border-dashed">
                    <p className="text-center text-[#94A3B8]">Your stack is empty.</p>
                </div>
             </div>
             
        </aside>
        
    )
}

export default Sidebar;