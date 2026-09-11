

const selectedTechnologyCard = () =>{
    return(
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:col-end-2 lg:col-span-1 gap-6">
                <h2>Your Stack</h2>
                <p>No technologies selected yet.</p>
                <button className="btn btn-success">Success</button>
            </div>
        </div>
    )
}

export default selectedTechnologyCard;