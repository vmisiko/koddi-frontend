
const Filter = () => {
    return (
        <div className="flex">
            <input type="text" placeholder="Search case descriptions" />
            <input type="date" placeholder="from"/>
            <input type="date" placeholder="to"/>
            <button className="rounded border"> Find Cases</button> 
        </div>
    );
}


export default Filter;