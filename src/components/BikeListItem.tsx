import { Link } from "react-router-dom";
import { Bike } from "../providers/models";
import useTimeZone from "../core/utility";


const BikeListItem = ({ bike }: { bike: Bike }) => {

    const {formaDateTimeYearMonthDay } = useTimeZone();

    return (
        <div className="grid grid-cols-3 md:grid-cols-12 border border-black px-2 py-1.5 space-x-4 rounded-sm w-full">
            <div className="flex items-center">
                <img className="h-34 md:w-34  border border-black rounded-md aspect-square object-scale-down  " src={bike.thumb} alt={bike.title} />
            </div>
            <div className="col-span-2 md:col-span-11">
                <Link className="underline text-sm cursor-pointer text-blue-600 " to={`/${bike.id}`}>
                {bike.title}
                </Link>
                <p>{bike.description || "--"}</p>
                <span className="mt-3 text-sm">
                    {formaDateTimeYearMonthDay(bike.date_stolen)} - {bike.stolen_location}
                </span>
            </div>
        </div>
    );
    }

    export default BikeListItem;