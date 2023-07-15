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
        <motion.div {...animationProps} ref={ref} className="bg-[#1f1f1f] px-5 py-10 text-white cursor-pointer">
            <h1 className="font-bebas font-bold text-5xl text-white mb-5">
                {data.attributes.players} / {data.attributes.maxPlayers}
            </h1>

            <h1 className="font-open_semi">{data.attributes.name}</h1>
            <h3 className="font-open_semi text-neutral-400 text-sm">
                Wiped {formatWipeDate(data.attributes.details.rust_last_wipe)}
            </h3>
        </motion.div>
    );
};

export default ServerCard;
