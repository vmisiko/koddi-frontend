
const Filters = () => {
    return (
        <div className="flex space-x-4">
            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="text" placeholder="Search case descriptions" />
            <input className="w-50 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="date" placeholder="from"/>
            <input className="w-50 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="date" placeholder="to"/>
            <button className="rounded border border-gray-30 shadow-md px-4 w-full hover:bg-gray-100"> Find Cases</button> 
        </div>
    );
}


export default Filters;