"use client";
import { formatDistanceToNow } from "date-fns";
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

    const formatWipeDate = (unformattedWipeDate: string) => {
        const date = new Date(unformattedWipeDate);
        return formatDistanceToNow(date, { addSuffix: true });
    };

    return (
        <motion.div
            {...animationProps}
            ref={ref}
            className="bg-[#1f1f1f] px-8 py-4 text-stone-200 cursor-pointer flex flex-col justify-around h-64 border-neutral-800"
        >
            <h1 className="font-bebas font-bold text-5xl ">
                {data.attributes.players} / {data.attributes.maxPlayers}
            </h1>

            <div>
                <h2 className="font-open_semi">{data.attributes.name}</h2>

                <div className="flex items-center gap-2 mt-3 bg-orange-800 w-fit px-3 rounded-full">
                    <img src="/images/icons/refresh-cw.svg" className="w-4" />
                    <p className="font-bebas text-lg">{formatWipeDate(data.attributes.details.rust_last_wipe)}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default ServerCard;
