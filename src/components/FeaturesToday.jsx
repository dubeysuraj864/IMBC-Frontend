import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
function FeaturesToday() {

    const scrollLeft = () => {
        document.getElementById("featuredToday").scrollLeft -= 300;
    }
    const scrollRight = () => {
        document.getElementById("featuredToday").scrollLeft += 300;
    }

  return (
    <>
      <div className="features-today relative lg:mx-20 md:px-6 my-10">
        <h1 className="text-yellow-500 text-xl">Features Today</h1>
        <button
          onClick={scrollLeft}
          className="left absolute -left-4 z-10 top-[45%] text-4xl text-yellow-500"
        >
          <FaChevronCircleLeft />
        </button>
        <button
          onClick={scrollRight}
          className="right absolute -right-4 z-10 top-[45%] text-4xl text-yellow-500"
        >
          <FaChevronCircleRight />
        </button>
        <div id="featuredToday" className="carouselImages  flex overflow-auto scroll-smooth transition-all duration-150">
          <img
            src="https://webneel.com/sites/default/files/images/blog/2020/different-types-of-movie-posters.jpg"
            className="w-[300px] h-[180px] object-cover m-2"
            alt=""
          />

          <img
            src="https://webneel.com/sites/default/files/images/blog/2020/different-types-of-movie-posters.jpg"
            className="w-[300px] h-[180px] object-cover m-2"
            alt=""
          />

          <img
            src="https://webneel.com/sites/default/files/images/blog/2020/different-types-of-movie-posters.jpg"
            className="w-[300px] h-[180px] object-cover m-2"
            alt=""
          />

          <img
            src="https://webneel.com/sites/default/files/images/blog/2020/different-types-of-movie-posters.jpg"
            className="w-[300px] h-[180px] object-cover m-2"
            alt=""
          />

          <img
            src="https://webneel.com/sites/default/files/images/blog/2020/different-types-of-movie-posters.jpg"
            className="w-[300px] h-[180px] object-cover m-2"
            alt=""
          />

          <img
            src="https://webneel.com/sites/default/files/images/blog/2020/different-types-of-movie-posters.jpg"
            className="w-[300px] h-[180px] object-cover m-2"
            alt=""
          />

          <img
            src="https://webneel.com/sites/default/files/images/blog/2020/different-types-of-movie-posters.jpg"
            className="w-[300px] h-[180px] object-cover m-2"
            alt=""
          />

          <img
            src="https://webneel.com/sites/default/files/images/blog/2020/different-types-of-movie-posters.jpg"
            className="w-[300px] h-[180px] object-cover m-2"
            alt=""
          />
          <img
            src="https://webneel.com/sites/default/files/images/blog/2020/different-types-of-movie-posters.jpg"
            className="w-[300px] h-[180px] object-cover m-2"
            alt=""
          />

          <img
            src="https://webneel.com/sites/default/files/images/blog/2020/different-types-of-movie-posters.jpg"
            className="w-[300px] h-[180px] object-cover m-2"
            alt=""
          />

          <img
            src="https://webneel.com/sites/default/files/images/blog/2020/different-types-of-movie-posters.jpg"
            className="w-[300px] h-[180px] object-cover m-2"
            alt=""
          />

          <img
            src="https://webneel.com/sites/default/files/images/blog/2020/different-types-of-movie-posters.jpg"
            className="w-[300px] h-[180px] object-cover m-2"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default FeaturesToday;
