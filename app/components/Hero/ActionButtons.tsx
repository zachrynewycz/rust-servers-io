"use client";
import { motion, useInView, MotionProps } from "framer-motion";
import { useRef } from "react";

const ActionButtons = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const animationProps: MotionProps = {
        initial: { opacity: 0, x: -50 },
        animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 },
        transition: { duration: 0.8, delay: 0.5 },
    };

    return (
        <motion.div ref={ref} {...animationProps} className="flex justify-center gap-10 mt-8">
            <button className="font-bebas bg-orange-700 text-white px-5 text-2xl py-3 hover:scale-105">
                By Group Size
            </button>
            <button className="font-bebas bg-neutral-800 text-white px-5 text-2xl py-3 border-4 border-neutral-700 hover:scale-105 ease-in">
                Explore 🠆
            </button>
        </motion.div>
    );
};

export default ActionButtons;
