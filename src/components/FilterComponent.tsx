import { useState } from "react";
import { Filters } from "../providers/models";

const FilterComponent = ({filters, onSubmit}: {
    filters: Filters;
    onSubmit: (filters: Filters) => void;
}) => {

    const [searchQuery, setSearchQUery ] = useState<Filters>({
        page: filters.page,
        per_page: filters.per_page,
        query: filters.query
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(searchQuery);
    }

    return (
        <form onSubmit={ (e)=> handleSubmit(e)}>
            <div className="flex space-x-4">
                <input value={searchQuery.query}  onChange={(val) => setSearchQUery(
                    {...filters, query: val.target.value}
                )} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="text" placeholder="Search case descriptions" />
                <input className="w-50 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="date" placeholder="from"/>
                <input className="w-50 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="date" placeholder="to"/>
                <button type='submit' className="rounded border border-gray-30 shadow-md px-4 w-full hover:bg-gray-100"> Find Cases</button> 
            </div>
        </form>
    );
}


export default FilterComponent;