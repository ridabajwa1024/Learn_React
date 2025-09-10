import React from "react";
import "./framerMotion.css";
import { anticipate, motion } from "motion/react";
import tanjiro from "./Demon_Slayer____anime__DemonSlayer__DemonSlayericons__animeicons__icons-removebg-preview.png";
const FramerMotion = () => {
  return (
    <>
      {/* <div>
      <motion.div className='box'
      animate ={{x : 600,
scale : 2,
rotate : 360,
y : 100,
      }}
      transition={  {
        delay: 1,
        duration: 3,
        repeat : Infinity,
        ease: anticipate
      }}
      ></motion.div>
    </div> */}
      {/* <div>
      <motion.div className='circle'
      animate ={{y : 1000}}></motion.div>
    </div> */}
      <motion.img
        //   drag
        //   whileDrag={{
        //     scale : 0.8
        //   }}
        //   dragConstraints={{
        //     left : 0,
        //     top : 0,
        //     right : 1000,
        //     bottom : 500,
        //   }}
        // dragDirectionLock = 'true'
        //     animate = {{
        // x : 1000,

        //     }}
        //     transition={{
        //         delay: 1,
        //         ease:anticipate,
        // duration : 3
        //     }}
        src={tanjiro}
        alt=""
      />
      <motion.h1
      initial ={{
        y : 0,
        x : 0
      }}
      >Hello This is Me</motion.h1>
      <motion.p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
        suscipit culpa repellendus error quis placeat maxime, voluptates nisi
        tenetur nostrum dolor impedit laborum. Consequatur rerum maiores quasi
        qui soluta et!
      </motion.p>
    </>
  );
};

export default FramerMotion;
