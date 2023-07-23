"use client";
import { toggleIsServerInfoModalOpen } from "@/app/redux/slices/modal";
import { RootState } from "@/app/redux/store";
import { useDispatch, useSelector } from "react-redux";
import InfoTable from "./InfoTable";
import MapStats from "./MapStats";

const ServerModal = () => {
    const dispatch = useDispatch();
    const isModalOpen = useSelector((state: RootState) => state.modal.isServerInfoModalOpen);
    const server = useSelector((state: RootState) => state.servers.selectedServer);
    console.log(server);
    return (
        <>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black opacity-40" />

                    <div className="relative bg-neutral-800 px-10 py-5 rounded-lg text-stone-200">
                        <h1 className="font-gilroy_bold text-3xl mb-2">{server.name}</h1>
                        <hr className=" border-neutral-500" />

                        <InfoTable data={server} />
                        <MapStats data={server} />

                        <button
                            className="mx-auto w-full mt-3 font-bebas text-neutral-400 text-2xl tracking-wide"
                            onClick={() => dispatch(toggleIsServerInfoModalOpen())}
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
