import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Carousel() {
  const container = useRef();

  useGSAP(
    () => {
      // gsap code here...
    },
    { scope: container }
  );

  return (
    <>
      <div ref={container} className="app">
        {/* <div className="box">Hello</div> */}

        <div className="carousel absolute w-full h-[100dvh] overflow-hidden">
          <ul className="cards absolute w-56 h-72 top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
            <li className="absolute top-0 left-0 bg-periWinkle list-none w-56 h-72 text-center leading-[18rem] text-3xl rounded-xl">
              0
            </li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            ...
          </ul>
          <div className="actions absolute bottom-6 left-[50%] transform -translate-x-1/2">
            <button className="prev">Prev</button>
            <button className="next">Next</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
