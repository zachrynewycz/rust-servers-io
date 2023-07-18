"use client";
import Multiselect from "multiselect-react-dropdown";
import { countries } from "../assets/countryData";
import { multiSelectStyle } from "../styles/multiselect";
import { serverTypes } from "../assets/serverTypeData";

const Filters = () => {
    return (
        <div className="mx-auto bg-neutral-800 max-w-5xl pt-4 pb-20 px-8 my-10 text-stone-200 font-gilroy_bold flex items-center gap-10 relative flex-wrap">
            <div>
                <label htmlFor="searchQuery">Search</label>
                <input className="bg-neutral-600 py-1 px-5" name="searchQuery" />
            </div>

            <div>
                <label htmlFor="minValue">Players</label>
                <input
                    className="w-16 py-1 bg-neutral-600 text-center"
                    type="number"
                    min={0}
                    name="minValue"
                    placeholder="Min"
                />
                <span className="mx-2">to</span>
                <input className="w-16 p-1 bg-neutral-600 text-center" type="number" placeholder="Max" />
            </div>

            <div>
                <label htmlFor="minValue">Country</label>
                <Multiselect
                    options={countries}
                    displayValue="name"
                    showArrow
                    showCheckbox
                    hideSelectedList
                    selectionLimit={5}
                    avoidHighlightFirstOption={true}
                    placeholder=""
                    style={multiSelectStyle}
                />
            </div>

            <div>
                <label htmlFor="minValue">Type</label>
                <Multiselect
                    options={serverTypes}
                    displayValue="name"
                    showArrow
                    avoidHighlightFirstOption={true}
                    hideSelectedList
                    showCheckbox
                    placeholder=""
                    style={multiSelectStyle}
                />
            </div>

            <button className="font-bebas text-xl bg-orange-800 px-4 py-1 absolute bottom-6 tracking-wide hover:bg-orange-900">
                search
            </button>
        </div>
    );
};

export default Filters;
