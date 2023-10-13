import { useState } from "react";
import { useBike} from "../providers/BikeAPiProvider";
import { BikeList, Filters } from "../providers/models";
import BikeListItem from "../components/BikeListItem";
import FilterComponent from "../components/FilterComponent";
import PaginationComponent from "../components/PaginationComponent";
import { useQuery } from "@tanstack/react-query";

const StolenBikesList = () => {

    const { getBikesList } = useBike();
    const [filters, setFilters] = useState<Filters>({
        page: 1,
        per_page: 10,
        query: ""
    });

    const { data: stolenBikes, error, isLoading}  = useQuery<BikeList>(['bikes', filters], () => getBikesList(filters));



    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error as string}</div>;
    }
    
    if (!stolenBikes?.bikes.length) {
        return <div>Not bikes Stolen reported yet.</div>;
    }
    console.log(stolenBikes.pagination);
    return (    
        <> 
            <div className="my-4">
                <FilterComponent filters={filters} onSubmit={() => setFilters(filters) }  />
            </div>
            <div className="flex justify-end mt-10 mb-5">
                    <span> Total: {stolenBikes.pagination.total}</span>
                </div>
            <div className="space-y-10">
                
                {stolenBikes.bikes.length && stolenBikes.bikes.map((bike) => (
                    <BikeListItem bike={bike} key={bike.id}/>
                ))}         
            </div>

            <div className="my-4">
                <PaginationComponent pagination={stolenBikes.pagination}  setPage={(value) => setFilters(
                    {...filters, page: value}

                )}></PaginationComponent>
            </div>
        </>
    )

}

export default StolenBikesList;