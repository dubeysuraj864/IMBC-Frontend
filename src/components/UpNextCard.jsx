import {BsPlayCircle} from "react-icons/bs";

function UpNextCard() {
    return ( <>
    <div className="up-next-card my-2 flex items-center ">
        <div className="left">
            <img src="https://m.media-amazon.com/images/M/MV5BMDA3MmM4MDEtM2YwYS00NzliLWFlNzctYTBmZGE1NjFiM2U1XkEyXkFqcGdeQXVyODQ4Mjc2NDM@._V1_QL75_UX280_CR0,0,280,414_.jpg" className="w-20 h-30 object-content" alt="" />
        </div>
        <div className="right flex flex-col ml-4">
            <span className="text-2xl m-1 flex items-center"><button><BsPlayCircle/></button> <span className="ml-4">2:00</span></span>
            <span className="m-1 font-bold">Black Fashion in Film History</span>
            <span className="m-1 font-light text-sm">Watch Our Fashion Awesome Episodes</span>
        </div>
    </div>
    </> );
}

export default UpNextCard;