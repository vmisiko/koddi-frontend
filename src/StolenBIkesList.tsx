import { useEffect, useState } from "react";
import { useBike} from "./providers/BikeAPiProvider";
import { Bike } from "./providers/models";
import { Link } from "react-router-dom";



const StolenBikesList = () => {
const [stolenBikes, setStolenBikes] = useState<Bike[]>([]); 

const { getBikesList } = useBike();

    useEffect(() => {
       getBikesList().then((res) => {
            setStolenBikes(res) ;
        });
    }, []);
    
    return (    
        <>
         <ul>
            {stolenBikes.length && stolenBikes.map((bikes) => (
            <li key={bikes.id}>
                <Link to={`/${bikes.id}`}>
                    {bikes.title}  
                </Link>
            </li>))}         
            </ul>
        </>
    )

}

export default StolenBikesList;