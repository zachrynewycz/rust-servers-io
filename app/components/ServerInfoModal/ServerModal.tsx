"use client";
import { toggleIsServerModalOpen } from "@/app/redux/slices/modal";
import { RootState } from "@/app/redux/store";
import { useDispatch, useSelector } from "react-redux";
import InfoTable from "./InfoTable";
import RustMapDetails from "./RustMapDetails";

const ServerModal = () => {
    const dispatch = useDispatch();
    const isModalOpen = useSelector((state: RootState) => state.modal.isServerInfoModalOpen);
    const server = useSelector((state: RootState) => state.servers.selectedServer);

    return (
        <>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black opacity-40" />

                    <div className="relative bg-neutral-800 px-10 py-5 rounded-lg text-stone-200">
                        <h1 className="font-gilroy_bold text-3xl max-w-xl">{server.name}</h1>

                        <hr className=" border-neutral-500 my-5" />
                        <InfoTable data={server} />
                        <hr className=" border-neutral-500 my-5" />
                        <RustMapDetails data={server} />

                        <button
                            className="text-center w-full mt-5 font-bebas text-neutral-400 text-2xl tracking-wide"
                            onClick={() => dispatch(toggleIsServerModalOpen())}
                        >
                            CLOSE
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ServerModal;
