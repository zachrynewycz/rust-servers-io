"use client";
import { formatWipeDate } from "@/app/utils/formatWipeDate";
import { MotionProps, useInView, motion } from "framer-motion";
import { useRef } from "react";

interface IServerCardProps {
    data: any;
    index: number;
}

const ServerCard = ({ data, index }: IServerCardProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const animationProps: MotionProps = {
        initial: { opacity: 0, x: -50 },
        animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 },
        transition: { duration: 0.8, delay: index * 0.1 },
    };

    return (
        <motion.div
            {...animationProps}
            ref={ref}
            className="bg-[#1f1f1f] px-8 py-10 text-stone-200 cursor-pointer h-64 border-neutral-800 relative"
        >
            <h1 className="font-bebas font-bold text-5xl">
                {data.attributes.players} / {data.attributes.maxPlayers}
            </h1>

            <div className="absolute bottom-10">
                <h2 className="font-open_semi">{data.attributes.name}</h2>

                <div className="flex items-center gap-2 mt-3 bg-orange-800 w-fit px-3 py-0.5">
                    <img src="/images/icons/refresh-cw.svg" className="w-4" alt="refresh"/>
                    <p className="font-bebas text-lg">{formatWipeDate(data.attributes.details.rust_last_wipe)}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default ServerCard;
