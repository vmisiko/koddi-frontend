import { useEffect, useState } from "react";
import { useBike} from "./providers/BikeAPiProvider";
import { Bike } from "./providers/models";
import BikeListItem from "./components/BikeListItem";

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
            <div className="space-y-10">
                {stolenBikes.length && stolenBikes.map((bike) => (
                    <BikeListItem bike={bike} key={bike.id}/>
                ))}         
            </div>
        </>
    )

}

export default StolenBikesList;