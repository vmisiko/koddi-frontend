import { Pagination } from "../providers/models";


const PaginationComponent = ({ pagination, setPage }: {
    pagination: Pagination;
    setPage: (page: number) => void;
}) => {
    console.log(pagination);
    return (
        <div className="flex w-full space-x-4">
            <button
            className="border border-gray-300 shadow-md px-4 hover:bg-gray-100 rounded"
                onClick={() => setPage(1)}
            >
                « First
            </button>
            <button
                className="border border-gray-300 shadow-md px-4 hover:bg-gray-100 rounded"
                onClick={() => setPage(pagination.page - 1)}
                disabled={!pagination.hasPreviousPage}
            >
                Previous
            </button>
               {/* for loop for the next 3 pages after the current page */}
                {
                pagination.hasNextPage && pagination.page < pagination.lastPage - 3 && (
                [...Array(3).keys()].map(i => (
                    <button
                    key={pagination.page + i + 1}  // Provide a unique key for each button
                    className="border border-gray-300 shadow-md px-4 hover:bg-gray-100 rounded"
                    onClick={() => setPage(pagination.page + i + 1)}  // Update the page number
                    >
                    {pagination.page + i + 1}  {/* Display the page number */}
                    </button>
                ))
                )}

                  
            <button
                className="border border-gray-300 shadow-md px-4 hover:bg-gray-100 rounded"
                onClick={() => setPage(pagination.page + 1)}
                disabled={pagination.hasNextPage}
            >
                Next
            </button>  

            <button
                className="border border-gray-300 shadow-md px-4 hover:bg-gray-100 rounded"
                onClick={() => setPage(pagination.lastPage)}
                disabled={pagination.hasNextPage}
            >
                Last &raquo;
            </button>      
        </div>
    );
}

export default PaginationComponent;