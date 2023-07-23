"use client";
import { useEffect } from "react";

import Multiselect from "multiselect-react-dropdown";
import { multiSelectStyle } from "../styles/multiselect";
import { countryNames } from "../assets/countryData";

import { useDispatch } from "react-redux";
import {
    resetFilters,
    setCountries,
    setMaxPlayers,
    setMinPlayers,
    setSearchQuery,
    setServerTypes,
} from "../redux/slices/filters";
import { updateServerResults } from "../utils/updateServerResults";

const Filters = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        updateServerResults();
    }, []);

    return (
        <div className="mx-auto bg-[#1d1d1d] max-w-5xl pt-4 pb-20 px-8 my-10 text-stone-200 font-gilroy_bold flex items-center gap-10 relative flex-wrap">
            <div>
                <label htmlFor="searchQuery">Search</label>
                <input
                    className="bg-neutral-600 py-1 px-5"
                    name="searchQuery"
                    onChange={(e) => dispatch(setSearchQuery(e.target.value))}
                />
            </div>

            <div>
                <label htmlFor="minValue">Players</label>
                <input
                    className="w-16 py-1 bg-neutral-600 text-center"
                    type="number"
                    min={0}
                    name="minValue"
                    placeholder="Min"
                    onChange={(e) => dispatch(setMinPlayers(e.target.valueAsNumber))}
                />
                <span className="mx-2">to</span>
                <input
                    className="w-16 p-1 bg-neutral-600 text-center"
                    type="number"
                    placeholder="Max"
                    onChange={(e) => dispatch(setMaxPlayers(e.target.valueAsNumber))}
                />
            </div>

            <div>
                <label>Country</label>
                <Multiselect
                    options={countryNames}
                    isObject={false}
                    showArrow
                    showCheckbox
                    hideSelectedList
                    selectionLimit={5}
                    onSelect={(items) => dispatch(setCountries(items))}
                    onRemove={(items) => dispatch(setCountries(items))}
                    avoidHighlightFirstOption={true}
                    style={multiSelectStyle}
                />
            </div>

            <div>
                <label>Type</label>
                <Multiselect
                    options={["Offical", "Community", "Modded"]}
                    isObject={false}
                    showArrow
                    onSelect={(items) => dispatch(setServerTypes(items))}
                    onRemove={(items) => dispatch(setCountries(items))}
                    avoidHighlightFirstOption={true}
                    hideSelectedList
                    showCheckbox
                    style={multiSelectStyle}
                />
            </div>

            <button
                onClick={() => updateServerResults()}
                className="font-bebas text-xl bg-orange-800 px-4 py-1 absolute bottom-6 tracking-wide hover:bg-orange-900"
            >
                search
            </button>

            <button
                onClick={() => {
                    dispatch(resetFilters());
                    updateServerResults();
                }}
                className="font-bebas text-xl absolute bottom-6 left-36 tracking-wide py-1 text-neutral-500 hover:text-neutral-400"
            >
                clear
            </button>
        </div>
    );
};

export default Filters;
