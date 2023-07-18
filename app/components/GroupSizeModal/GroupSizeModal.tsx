"use client";
import { toggleModal } from "@/app/redux/slices/modal";
import { RootState } from "@/app/redux/store";
import { useSelector, useDispatch } from "react-redux";

const GroupSizeModal = () => {
    const dispatch = useDispatch();
    const isModalOpen = useSelector((state: RootState) => state.modal.isModalOpen);

    const GROUP_SIZES: string[] = ["solo", "duo", "trio", "quad"];

    return (
        <>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black opacity-40"></div>

                    <div className="relative px-20 bg-white rounded-xl py-10">
                        <div className="grid grid-cols-2 text-center gap-3">
                            {GROUP_SIZES.map((size) => (
                                <p className="font-bebas font-bold text-4xl border-2 p-8 rounded-lg border-neutral-600">
                                    {size}
                                </p>
                            ))}
                        </div>

                        <div className="flex justify-evenly font-bebas text-3xl text-neutral-800 mt-5">
                            <button onClick={() => dispatch(toggleModal())} className="text-neutral-800">
                                Close
                            </button>
                            <button className="bg-orange-700 px-4 py-1 text-stone-200 tracking-wide">Search</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default GroupSizeModal;
