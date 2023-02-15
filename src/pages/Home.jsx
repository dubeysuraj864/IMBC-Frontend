import Carousel from "../components/Carousel";
import FeaturesToday from "../components/FeaturesToday";
import UpNext from "../components/UpNext";

function Home() {
    return ( <>
    <div className="home">
       <div className="flex justify-center">
       <Carousel/>
       <UpNext/>
       </div>
       <div>
        <FeaturesToday/>
       </div>
    </div>
    </> );
}

export default Home;