import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import pc1 from '../assets/Image/images/device/pc1.png';
import pc2 from '../assets/Image/images/device/pc2.png';
import pc3 from '../assets/Image/images/device/pc3.png';
import pc4 from '../assets/Image/images/device/pc4.png';
import pc5 from '../assets/Image/images/device/pc5.png';
import pc6 from '../assets/Image/images/device/pc6.png';
import img3 from '../assets/Image/images/device/img3.jpg';
import img4 from '../assets/Image/images/device/img4.jpg';
import img5 from '../assets/Image/images/device/img5.jpg';
import img6 from '../assets/Image/images/device/img6.jpg';
import img7 from '../assets/Image/images/device/img7.jpg';
import img8 from '../assets/Image/images/device/img8.jpg';
import img9 from '../assets/Image/images/device/img9.jpg';


export function ParallaxScroll({ className }) {
  const images = [pc1, pc2, pc3, pc4, pc5, pc6,img3,img4,img5,img6,img7,img8,img9]; // Use the imported images here
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: gridRef, // remove this if your container is not fixed height
    offset: ["start start", "end start"], // remove this if your container is not fixed height
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={`h-[40rem] items-start  bg-gradient-to-r from-black via-blue-500 to-green-500 overflow-y-auto w-full ${className}`}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10"
      >
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }}
              key={"grid-1" + idx}
            >
              <img
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <img
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <img
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
