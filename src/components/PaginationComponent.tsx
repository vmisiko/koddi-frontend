

const PaginationComponent = ({ page, setPage, totalPage }: {
    page: number;
    setPage: (page: number) => void;
    totalPage: number;
}) => {
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
                onClick={() => setPage(page - 1)}
                disabled={page === totalPage}
            >
                Previous
            </button>
            <button
                className="border border-gray-300 shadow-md px-4 hover:bg-gray-100 rounded"
                onClick={() => setPage(1)}
                disabled={page === totalPage}
            >
                1
            </button>  
            <button
                className="border border-gray-300 shadow-md px-4 hover:bg-gray-100 rounded"
                onClick={() => setPage(2)}
                disabled={page === totalPage}
            >
                2
            </button>  

            <button
                className="border border-gray-300 shadow-md px-4 hover:bg-gray-100 rounded"
                onClick={() => setPage(3)}
                disabled={page === totalPage}
            >
                3
            </button>  
            <button
                className="border border-gray-300 shadow-md px-4 hover:bg-gray-100 rounded"
                onClick={() => setPage(1)}
                disabled={page === totalPage}
            >
                Next
            </button>    
            <button
                className="border border-gray-300 shadow-md px-4 hover:bg-gray-100 rounded"
                onClick={() => setPage(1)}
                disabled={page === totalPage}
            >
                Last &raquo;
            </button>      
        </div>
    );
}

export default PaginationComponent;