import { useEffect, useState } from "react";
import { useBike} from "./providers/BikeAPiProvider";
import { Bike } from "./providers/models";
import { useParams } from "react-router-dom";


const StolenBikesList = () => {
const [stolenBike, setStolenBike] = useState<Bike>({} as Bike); 

const routeParams = useParams<{id: string}>();

const { getBike } = useBike();

    useEffect(() => {
       getBike(routeParams.id as string).then((res) => {
            setStolenBike(res) ;
        });
    }, [routeParams]);
    
    return (    
        <>
         <div>
            { stolenBike.title }
         </div>
        </>
    )

}

export default StolenBikesList;