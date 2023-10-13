import { useEffect, useState } from "react";
import { useBike} from "../providers/BikeAPiProvider";
import { Bike } from "../providers/models";
import { useParams } from "react-router-dom";
import useTimeZone from "../core/utility";
import GoogleMap from "../components/GoogleMap";


const StolenBikesList = () => {
const [stolenBike, setStolenBike] = useState<Bike>({} as Bike); 

const routeParams = useParams<{id: string}>();

const { getBike } = useBike();
    const {formaDateTimeYearMonthDay } = useTimeZone();

    useEffect(() => {
       getBike(routeParams.id as string).then((res) => {
            setStolenBike(res) ;
        });
    }, [routeParams]);
    
    return (    
        <>
            <div className="">
                <div className="text-2xl font-medium flex ">
                    <span>{stolenBike.title}</span>
                    {stolenBike.frame_colors?.length > 0 && (
                        <span>
                        (
                        {stolenBike.frame_colors.map((color, index) => (
                            <span key={index}>
                            {color}
                            {index < stolenBike.frame_colors.length - 1 && ', '}
                            </span>
                        ))}
                        )
                        </span>
                    )}
                </div>
                <div className="text-sm font-medium">
                    Stolen {  formaDateTimeYearMonthDay(stolenBike.date_stolen) } at { stolenBike.stolen_location }
                </div>
            </div>

            <div className="mt-5">
                <GoogleMap 
                    coordinates={{
                        lat: stolenBike?.stolen_record?.latitude || 0,
                        lng: stolenBike?.stolen_record?.longitude || 0
                    }}
                    title={stolenBike.stolen_location} />
            </div>

            <div className="mt-5">
                <div className="text-lg font-medium uppercase">Description OF INCIDENT</div>
                <div className="mt-2">
                    {stolenBike.description || "--"}
                </div>
            </div>

        </>
    )

}

export default StolenBikesList;