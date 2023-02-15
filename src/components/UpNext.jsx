import UpNextCard from "./UpNextCard";

function UpNext() {
    return ( <>
    <div className="up-next ml-10 mt-2 ">
        <h1 className="text-xl text-yellow-500">Up Next</h1>
        <UpNextCard/>
        <UpNextCard/>
        <UpNextCard/>
        
    </div>
    </> );
}

export default UpNext;