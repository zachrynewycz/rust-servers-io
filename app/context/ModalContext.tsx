"use client";
import { createContext, useState } from "react";

interface ModalContextProps {
    isModalOpen: boolean;
    toggleModal: () => void;
}

export const ModalContext = createContext<ModalContextProps>({
    isModalOpen: false,
    toggleModal: () => {},
});

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
    };

    return <ModalContext.Provider value={{ isModalOpen, toggleModal }}>{children}</ModalContext.Provider>;
};
