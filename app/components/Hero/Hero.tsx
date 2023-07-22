"use client";
import { useRef } from "react";
import ActionButtons from "./ActionButtons";
import { motion, useInView, MotionProps } from "framer-motion";

const Hero = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const animationProps: MotionProps = {
        initial: { opacity: 0, x: -100 },
        animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 },
        transition: { duration: 0.8 },
    };

    return (
        <div className="subway-bg py-56 text-center min-w-[350px]">
            <motion.div ref={ref} {...animationProps}>
                <h1 className="font-bebas text-7xl md:text-9xl text-stone-100">
                    Your rust <br />
                    server awaits
                </h1>
                <p className="font-open_regular text-stone-200 max-w-2xl text-lg mx-auto">
                    Find the perfect server that fits with your unique playstyle. Your ultimate Rust experience is only
                    a click away.
                </p>
            </motion.div>
            <ActionButtons />
        </div>
    );
};

export default Hero;
