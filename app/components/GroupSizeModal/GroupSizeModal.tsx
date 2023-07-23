"use client";
import { toggleModal } from "@/app/redux/slices/modal";
import { RootState } from "@/app/redux/store";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setSearchQuery } from "@/app/redux/slices/filters";
import { useRouter } from "next/navigation";

const GroupSizeModal = () => {
    const GROUP_SIZES: string[] = ["Solo", "Duo", "Trio", "Quad"];
    const [selectedGroupSize, setSelectedGroupSize] = useState<string>("");

    const { push } = useRouter();
    const dispatch = useDispatch();
    const isModalOpen = useSelector((state: RootState) => state.modal.isModalOpen);

    return (
        <>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black opacity-40" />

                    <div className="relative px-10 bg-white rounded-xl py-5">
                        <h1 className="font-gilroy_bold text-3xl text-neutral-800">Choose Group Size</h1>

                        {GROUP_SIZES.map((size) => (
                            <button
                                onClick={() => setSelectedGroupSize(size)}
                                style={{ backgroundColor: selectedGroupSize === size ? "#a3a3a3" : "" }}
                                key={size}
                                className="font-gilroy_bold text-xl text-neutral-700 bg-neutral-200 rounded-md py-1 hover:bg-neutral-300 block w-full my-2"
                            >
                                {size}
                            </button>
                        ))}

                        <div className="flex justify-evenly font-bebas text-2xl mt-5">
                            <button onClick={() => dispatch(toggleModal())} className="text-neutral-700">
                                Close
                            </button>

                            <button
                                disabled={!selectedGroupSize}
                                onClick={() => {
                                    dispatch(setSearchQuery(selectedGroupSize));
                                    dispatch(toggleModal());
                                    push("explore");
                                }}
                                className="bg-orange-700 px-4 py-1 text-stone-200 tracking-wide disabled:opacity-70"
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default GroupSizeModal;
