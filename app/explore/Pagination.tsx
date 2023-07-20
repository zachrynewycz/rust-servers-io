"use client";
import { useSelector } from "react-redux";
import { updateServerResults } from "../utils/updateServerResults";
import { RootState } from "../redux/store";
import { useState } from "react";

const Pagination = () => {
    const [page, setPage] = useState<number>(1);
    const { prevPageUrl, nextPageUrl } = useSelector((state: RootState) => state.filters);

    const handlePrev = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setPage((page) => Math.max(page - 1, 1));
        updateServerResults(prevPageUrl);
    };

    const handleNext = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setPage((page) => page + 1);
        updateServerResults(nextPageUrl);
    };

    return (
        <div className="text-center my-10 text-stone-200 font-bebas text-2xl">
            <button disabled={page === 1} onClick={handlePrev} className="disabled:text-neutral-500">
                back
            </button>
            <button className="ml-14" onClick={handleNext}>
                Next
            </button>
        </div>
    );
};

export default Pagination;
