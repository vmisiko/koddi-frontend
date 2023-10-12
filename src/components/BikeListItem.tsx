import { Link } from "react-router-dom";
import { Bike } from "../providers/models";
import useTimeZone from "../core/utility";


const BikeListItem = ({ bike }: { bike: Bike }) => {

    const {formaDateTimeYearMonthDay } = useTimeZone();

    return (
        <div className="flex border border-black px-2 py-1.5 space-x-4 rounded-sm">
            <div className="">
                <img className="h-14 w-14 rounded-sm" src={bike.thumb} alt={bike.title} />
            </div>
            <div className=" ">
                <Link className="underline text-sm cursor-pointer " to={`/${bike.id}`}>
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