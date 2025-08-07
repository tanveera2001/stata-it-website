import React from "react";
import * as motion from "motion/react-client";
import pc1 from "../../assets/Image/images/device/pc1.png";
import pc2 from "../../assets/Image/images/device/pc2.png";
import pc3 from "../../assets/Image/images/device/pc3.png";
import pc4 from "../../assets/Image/images/device/pc4.png";
import pc5 from "../../assets/Image/images/device/pc5.png";
import pc6 from "../../assets/Image/images/device/pc6.png";
import pc7 from "../../assets/Image/images/device/pc7.png";

// Variants for motion animation
const cardVariants = {
    offscreen: {
        y: 300,
    },
    onscreen: {
        y: 50,
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
};

export default function ScrollTriggered() {
    return (
        <div style={contianer_main}>

<div style={container}>
            {images.map(([src, hueA, hueB], i) => (
                <Card i={i} src={src} hueA={hueA} hueB={hueB} key={src} />
            ))}
        </div>
        </div>
    );
}

function Card({ src, hueA, hueB, i }) {
    const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

    return (
        <motion.div
            className={`card-container-${i}`}
            style={cardContainer}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8 }}
        >
            <div style={{ ...splash, background }} />
            <motion.div style={card} variants={cardVariants} className="card">
                <img src={src} alt={`Image ${i}`} style={imageStyle} />
            </motion.div>
        </motion.div>
    );
}

const hue = (h) => `hsl(${h}, 100%, 50%)`;

/**
 * ==============   Styles   ================
 */
const contianer_main = {
    
    maxWidth: "100%",
    paddingBottom: 100,
    width: "100%",
    background: "linear-gradient(to bottom, black, green)", // Black to green gradient
    paddingTop: 50,
};
const container = {
    
    maxWidth: 700,
    margin: "100px auto",
};

const cardContainer = {
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingTop: 20,
    marginBottom: -120,
};

const splash = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    clipPath: "path('M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z')",
};

const card = {
    fontSize: 164,
    width: 330,
    height: 430,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    background: "#f5f5f5", // Card background unchanged
    boxShadow:
        "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
    transformOrigin: "10% 60%",
};

const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 20,
};

/**
 * ==============   Data   ================
 */

const images = [
    [pc1, 340, 10],
    [pc2, 20, 40],
    [pc3, 60, 90],
    [pc4, 80, 120],
    [pc5, 100, 140],
    [pc6, 205, 245],
    [pc7, 260, 290],
];
