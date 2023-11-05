import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSide = () => {
    const [catagories, setCatagories] = useState([]);


    useEffect(()=>{
        fetch('categories.json')
        .then( res => res.json())
        .then( data => setCatagories(data))
    }
        
        ,[])

    return (
        <div className="space-y-6">
            <h2 className="text-2xl">Left side {catagories.length}</h2>
            {
                catagories.map(category => <Link 
                    to={`/category/${category.id}`}
                    className="block ml-4 font-semibold px-4 " 
                key={category.id}>{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSide;