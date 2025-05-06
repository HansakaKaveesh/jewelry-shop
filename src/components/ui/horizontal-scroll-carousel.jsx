"use client";

import * as React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";

const HorizontalScrollCarousel = ({ images }) => {
  const targetRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] w-full">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {images.map((src, index) => (
            <Card src={src} key={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ src }) => {
  return (
    <div className="group relative h-[450px] w-[450px] overflow-hidden rounded-lg">
      <Image
        src={src}
        fill
        style={{ objectFit: "cover" }}
        alt="carousel image"
      />
    </div>
  );
};

export default HorizontalScrollCarousel;
