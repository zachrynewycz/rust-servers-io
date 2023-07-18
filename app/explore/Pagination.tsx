"use client";
import { useDispatch } from "react-redux";
import { decrementPage, incrementPage } from "../redux/slices/filters";

const Pagination = () => {
    const dispatch = useDispatch();

    return (
        <div className="text-center">
            <button onClick={() => dispatch(decrementPage())}>Prev</button>
            <button onClick={() => dispatch(incrementPage())}>Next</button>
        </div>
    );
};

export default Pagination;
