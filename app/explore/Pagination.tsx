"use client";
import { useDispatch } from "react-redux";
import { decrementPage, incrementPage } from "../redux/slices/filters";

const Pagination = () => {
    const dispatch = useDispatch();

    return (
        <div className="text-center my-10 text-stone-200 font-bebas text-2xl">
            <button onClick={() => dispatch(decrementPage())}>back</button>
            <button className="ml-14" onClick={() => dispatch(incrementPage())}>
                Next
            </button>
        </div>
    );
};

export default Pagination;
