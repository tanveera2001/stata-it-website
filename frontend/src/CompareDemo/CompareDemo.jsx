import React from "react";
import { Compare } from "./Compare";
import Bannerpic3 from '../assets/Image/images/bg/Bannerpic3.jpg';
import after from '../assets/Image/images/bg/after.jpg'

export function CompareDemo() {
  return (
    <div className="w-[100] h-[90vh] px-1 md:px-8 flex items-center justify-center bg-slate-300">
      <div
        className="p-1 md:p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800 mx-auto w-3/4 h-1/2 md:h-3/4"
        style={{
          transform: "rotateX(15deg) translateZ(80px)",
        }}
      >
        <Compare
          firstImage= {Bannerpic3}
          secondImage={after}
          firstImageClassName="object-cover object-left-top w-full"
          secondImageClassname="object-cover object-left-top w-full"
          className="w-full h-full rounded-[22px] md:rounded-lg"
          slideMode="hover"
          autoplay={true}
          autoplaySpeed={7000} // Adjust speed as needed
        />
      </div>
    </div>
  );
}
