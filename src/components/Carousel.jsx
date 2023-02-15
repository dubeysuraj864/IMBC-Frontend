import { useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
function Carousel() {
    const[count, setCount] =  useState(0);
  const images = [
    "https://s.yimg.com/ny/api/res/1.2/OZCoUOBPtyfqQsIAfjbkHQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://media.zenfs.com/en/deadline.com/b0c9d2fd6947e0c8574381c5eeef1f30",
    "https://s.yimg.com/ny/api/res/1.2/dQHA78seOZl.DDtHMATu1A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTYzODtjZj13ZWJw/https://media.zenfs.com/en/deadline.com/8a02cd6bb281741a6990302aa288b2a3",
    "https://s.yimg.com/ny/api/res/1.2/o5FSN_QOiT_OsX.wHYAsHg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTYzNjtjZj13ZWJw/https://media.zenfs.com/en/deadline.com/2fff9f76313a9110b2d96bc2b8b67a39",
    "https://s.yimg.com/ny/api/res/1.2/nC.MIwopzrXqP6jOtlUFPQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0NTtjZj13ZWJw/https://media.zenfs.com/en/deadline.com/68016bad071da974bc326801fd77bb89",
  ];
  return (
    <div className="relative">
      <button onClick={()=> {(count=== 0 ) ? setCount(count )  :setCount(count-1 ) }} className="left absolute -left-4 z-10 top-[45%] text-4xl text-yellow-500">
        <FaChevronCircleLeft />
      </button>
      <button onClick={()=> {(count === images.length-1 ) ? setCount( count) : setCount(count+1)}} className="right absolute -right-4 z-10 top-[45%] text-4xl text-yellow-500">
        <FaChevronCircleRight />
      </button>
      <div className="carousel flex flex-col items-center my-4">
        <div>
          <img
            src={images[count]}
            className="w-[660px] h-[450px] transition-all"
            alt=""
          />
        </div>
    
      </div>
    </div>
  );
}

export default Carousel;
