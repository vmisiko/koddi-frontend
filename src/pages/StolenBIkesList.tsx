import { useEffect, useState } from "react";
import { useBike} from "../providers/BikeAPiProvider";
import { Bike } from "../providers/models";
import BikeListItem from "../components/BikeListItem";
import Filters from "../components/Filters";
import PaginationComponent from "../components/PaginationComponent";

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
            <div className="my-4">
                <Filters />
            </div>
            <div className="space-y-10">
                {stolenBikes.length && stolenBikes.map((bike) => (
                    <BikeListItem bike={bike} key={bike.id}/>
                ))}         
            </div>

            <div className="my-4">
                <PaginationComponent page={1} setPage={() => {}} totalPage={20} ></PaginationComponent>
            </div>
        </>
    )

}

export default StolenBikesList;